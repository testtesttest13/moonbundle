import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const PASSWORD = "moonjules";

const ALL_PAGES = ["home", "affiliate", "checklist", "native-ads", "prompts", "value-offer", "quiz-2026", "navbar", "cta", "footer"];

export async function GET(req: NextRequest) {
  const auth = req.nextUrl.searchParams.get("key");
  if (auth !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [
      totalClicks,
      totalViews,
      totalCopyCode,
      totalDownloadPdf,
      onboardRevenue,
      onboardMarket,
      onboardAds,
      onboardAov,
      onboardCompleted,
    ] = await Promise.all([
      kv.hgetall("clicks:total"),
      kv.hgetall("views:total"),
      kv.hgetall("events:copy-code:total"),
      kv.hgetall("events:download-pdf:total"),
      kv.hgetall("onboard:revenue:total"),
      kv.hgetall("onboard:market:total"),
      kv.hgetall("onboard:ads:total"),
      kv.hgetall("onboard:aov:total"),
      kv.get<number>("onboard:completed:total"),
    ]);

    // Ensure all pages present
    const clicks: Record<string, number> = {};
    const views: Record<string, number> = {};
    for (const page of ALL_PAGES) {
      clicks[page] = ((totalClicks as Record<string, number>)?.[page]) || 0;
      views[page] = ((totalViews as Record<string, number>)?.[page]) || 0;
    }

    const events = {
      copyCode: (totalCopyCode as Record<string, number>) || {},
      downloadPdf: (totalDownloadPdf as Record<string, number>) || {},
    };

    const onboarding = {
      completed: Number(onboardCompleted) || 0,
      revenue: (onboardRevenue as Record<string, number>) || {},
      market: (onboardMarket as Record<string, number>) || {},
      ads: (onboardAds as Record<string, number>) || {},
      aov: (onboardAov as Record<string, number>) || {},
    };

    // Last 14 days
    const days: Record<string, { clicks: Record<string, number>; views: Record<string, number> }> = {};
    for (let i = 0; i < 14; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const [dayClicks, dayViews] = await Promise.all([
        kv.hgetall(`clicks:${key}`),
        kv.hgetall(`views:${key}`),
      ]);
      days[key] = {
        clicks: (dayClicks as Record<string, number>) || {},
        views: (dayViews as Record<string, number>) || {},
      };
    }

    return NextResponse.json({ clicks, views, events, onboarding, days, pages: ALL_PAGES });
  } catch {
    return NextResponse.json(
      { error: "KV non configuré. Crée un store Upstash Redis dans Vercel → Storage." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const REVENUE_KEYS = ["starting", "0-5k", "5-50k", "50-500k", "500k+"];
const MARKET_KEYS = [
  "beauty",
  "fashion",
  "home",
  "health",
  "tech",
  "fitness",
  "food",
  "other",
];
const ADS_KEYS = ["meta", "tiktok", "google", "snap", "multiple", "none"];

function isKnown(value: unknown, whitelist: string[]): value is string {
  return typeof value === "string" && whitelist.includes(value);
}

export async function POST(req: NextRequest) {
  try {
    const { revenue, market, ads, page } = await req.json();

    if (
      !isKnown(revenue, REVENUE_KEYS) ||
      !isKnown(market, MARKET_KEYS) ||
      !isKnown(ads, ADS_KEYS)
    ) {
      return NextResponse.json({ ok: false, error: "bad payload" }, { status: 400 });
    }

    const pageKey = typeof page === "string" && page.length < 40 ? page : "value-offer";
    const today = new Date().toISOString().slice(0, 10);

    await Promise.all([
      kv.hincrby("onboard:revenue:total", revenue, 1),
      kv.hincrby("onboard:market:total", market, 1),
      kv.hincrby("onboard:ads:total", ads, 1),
      kv.hincrby(`onboard:revenue:${today}`, revenue, 1),
      kv.hincrby(`onboard:market:${today}`, market, 1),
      kv.hincrby(`onboard:ads:${today}`, ads, 1),
      kv.hincrby("onboard:completed:by-page", pageKey, 1),
      kv.incr("onboard:completed:total"),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

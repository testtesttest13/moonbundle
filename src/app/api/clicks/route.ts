import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const PASSWORD = "moonjules";

export async function GET(req: NextRequest) {
  const auth = req.nextUrl.searchParams.get("key");
  if (auth !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Get total clicks per page
    const total = (await kv.hgetall("clicks:total")) || {};

    // Get last 7 days
    const days: Record<string, Record<string, number>> = {};
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const data = (await kv.hgetall(`clicks:${key}`)) || {};
      days[key] = data as Record<string, number>;
    }

    return NextResponse.json({ total, days });
  } catch {
    return NextResponse.json(
      { error: "KV not configured. Add a KV store in Vercel dashboard → Storage → Create → KV" },
      { status: 500 }
    );
  }
}

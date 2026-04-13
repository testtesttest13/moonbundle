import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const SHOPIFY_URL = "https://apps.shopify.com/moonbundle";

export async function GET(req: NextRequest) {
  const from = req.nextUrl.searchParams.get("from") || "unknown";

  // Track click in KV (fire-and-forget, don't block the redirect)
  try {
    const today = new Date().toISOString().slice(0, 10); // 2026-04-13
    await Promise.all([
      kv.hincrby("clicks:total", from, 1),
      kv.hincrby(`clicks:${today}`, from, 1),
    ]);
  } catch {
    // KV not configured or error — silently continue
  }

  return NextResponse.redirect(SHOPIFY_URL, { status: 302 });
}

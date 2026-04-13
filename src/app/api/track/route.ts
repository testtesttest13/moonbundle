import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

// Generic event tracker
// POST { event: "copy-code", page: "checklist" }
// POST { event: "download-pdf", page: "native-ads", detail: "persona" }

export async function POST(req: NextRequest) {
  try {
    const { event, page, detail } = await req.json();
    if (!event || !page) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const key = detail ? `${event}:${detail}` : event;
    const today = new Date().toISOString().slice(0, 10);

    await Promise.all([
      kv.hincrby(`events:${event}:total`, page, 1),
      kv.hincrby(`events:${event}:${today}`, page, 1),
      // Also store with detail if present
      ...(detail
        ? [
            kv.hincrby(`events:${key}:total`, page, 1),
            kv.hincrby(`events:${key}:${today}`, page, 1),
          ]
        : []),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(req: NextRequest) {
  try {
    const { page } = await req.json();
    if (!page || typeof page !== "string") {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const today = new Date().toISOString().slice(0, 10);
    await Promise.all([
      kv.hincrby("views:total", page, 1),
      kv.hincrby(`views:${today}`, page, 1),
    ]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

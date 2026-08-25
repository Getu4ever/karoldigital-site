import { NextResponse } from "next/server";
import {
  scanWebsiteUrl,
  SnapshotScanError,
} from "@/lib/website-checker-scan";

export const maxDuration = 20;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 8;
const hits = new Map<string, number[]>();

function clientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function allowRequest(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    if (!allowRequest(ip)) {
      return NextResponse.json(
        {
          error:
            "Too many checks from this connection. Wait a few minutes, or use the 9-question scorecard.",
        },
        { status: 429 }
      );
    }

    const body = (await req.json()) as { url?: string };
    const result = await scanWebsiteUrl(body.url ?? "");
    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    if (error instanceof SnapshotScanError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.status }
      );
    }
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Website checker scan error:", message);
    return NextResponse.json(
      {
        error:
          "Could not complete this snapshot. Try another URL, or take the 9-question scorecard.",
      },
      { status: 502 }
    );
  }
}

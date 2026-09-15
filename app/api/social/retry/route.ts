import { NextResponse } from "next/server";
import { getSocialConfig } from "@/lib/social/config";
import { retryFailedSyndications } from "@/lib/social/syndicate";

export const runtime = "nodejs";
export const maxDuration = 60;

function isAuthorized(request: Request): boolean {
  if (request.headers.get("x-vercel-cron") === "1") return true;
  const config = getSocialConfig();
  const secret = config.apiSecret;
  if (!secret) return false;
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

/**
 * Retry failed / pending social syndications.
 * Scheduled via vercel.json cron + callable manually with SOCIAL_SYNDICATION_SECRET.
 */
export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const outcome = await retryFailedSyndications(20);
    return NextResponse.json({ ok: true, ...outcome });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Social retry failed";
    console.error("[social-syndication] retry error:", message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

export async function POST(request: Request) {
  return GET(request);
}

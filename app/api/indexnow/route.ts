import { NextResponse } from "next/server";
import { INDEXNOW_KEY } from "@/lib/geo";
import { submitIndexNow } from "@/lib/indexnow";
import { getPublicAbsoluteUrls } from "@/lib/site-urls";

function isAuthorized(request: Request): boolean {
  if (request.headers.get("x-vercel-cron") === "1") return true;

  const secret = process.env.CRON_SECRET;
  const auth = request.headers.get("authorization");
  if (secret && auth === `Bearer ${secret}`) return true;

  const url = new URL(request.url);
  return url.searchParams.get("key") === INDEXNOW_KEY;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const urls = await getPublicAbsoluteUrls();
    const result = await submitIndexNow(urls);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "IndexNow failed";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 502 });
  }
}

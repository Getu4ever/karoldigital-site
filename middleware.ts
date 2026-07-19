import { NextRequest, NextResponse } from "next/server";

/**
 * Legacy broken partner hrefs used Markdown link syntax as relative paths
 * (e.g. href="[sbc-marketing.co.uk](https://sbc-marketing.co.uk/)").
 * Google crawled those paths as 404s — send them to the real destinations.
 *
 * Next.js may also collapse "//" inside pathnames to "/", so matching is
 * based on the partner domain appearing anywhere in the path.
 */
const LEGACY_MARKDOWN_REDIRECTS: Array<{ match: RegExp; destination: string }> = [
  {
    match: /sbc-marketing\.co\.uk/i,
    destination: "https://sbc-marketing.co.uk/",
  },
  {
    match: /1stcalluk\.co\.uk/i,
    destination: "https://www.1stcalluk.co.uk/",
  },
];

export function middleware(request: NextRequest) {
  const rawPath = request.nextUrl.pathname;
  const rawUrl = request.nextUrl.href;

  for (const rule of LEGACY_MARKDOWN_REDIRECTS) {
    if (rule.match.test(rawPath) || rule.match.test(rawUrl)) {
      return NextResponse.redirect(rule.destination, 308);
    }
  }

  return NextResponse.next();
}

// No narrow matcher: legacy paths contain ".", "[", and ")" which break
// many path-to-regexp matcher patterns. The handler exits immediately
// for normal traffic.
export const config = {
  matcher: ["/:path*"],
};

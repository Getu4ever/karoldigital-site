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

const ADMIN_COOKIE_NAME = "kd_admin_session";

export function proxy(request: NextRequest) {
  const rawPath = request.nextUrl.pathname;
  const rawUrl = request.nextUrl.href;

  for (const rule of LEGACY_MARKDOWN_REDIRECTS) {
    if (rule.match.test(rawPath) || rule.match.test(rawUrl)) {
      return NextResponse.redirect(rule.destination, 308);
    }
  }

  // Protect /admin/* except the login route (shared-secret session cookie)
  if (rawPath.startsWith("/admin") && !rawPath.startsWith("/admin/login")) {
    const expected = process.env.ADMIN_DASHBOARD_TOKEN;
    const session = request.cookies.get(ADMIN_COOKIE_NAME)?.value;

    if (!expected || !session || session !== expected) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/admin/login";
      loginUrl.search = "";
      return NextResponse.redirect(loginUrl);
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

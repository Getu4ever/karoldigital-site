export type CheckStatus = "pass" | "warn" | "fail";
export type CheckGroup = "seo" | "geo";
export type SnapshotBand = "strong" | "mixed" | "needs_work";

export type SnapshotCheck = {
  id: string;
  group: CheckGroup;
  label: string;
  status: CheckStatus;
  detail: string;
};

export type SnapshotIssue = {
  id: string;
  title: string;
  detail: string;
};

export type PageSignals = {
  title: string | null;
  titleLength: number;
  metaDescription: string | null;
  metaDescriptionLength: number;
  canonical: string | null;
  h1s: string[];
  htmlLang: string | null;
  robotsMeta: string | null;
  ogImage: string | null;
  jsonLdTypes: string[];
  hasSearchAction: boolean;
  rawJsonLdCount: number;
};

export type OriginSignals = {
  robotsStatus: number | null;
  robotsLooksLikeHtml: boolean;
  robotsHasSitemap: boolean;
  llmsStatus: number | null;
  llmsLooksLikeHtml: boolean;
  llmsFullStatus: number | null;
  llmsFullLooksLikeHtml: boolean;
  indexable: boolean;
};

export type WebsiteSnapshotResult = {
  inputUrl: string;
  finalUrl: string;
  fetchedAt: string;
  percent: number;
  band: SnapshotBand;
  summary: string;
  issues: SnapshotIssue[];
  checks: SnapshotCheck[];
  disclaimer: string;
};

export const SNAPSHOT_DISCLAIMER =
  "This is a homepage snapshot of public HTML, robots.txt, and llms.txt. It is not a Google ranking, Core Web Vitals report, or a prediction of whether ChatGPT will cite you.";

const ORG_TYPES = new Set([
  "Organization",
  "LocalBusiness",
  "ProfessionalService",
  "Corporation",
  "NGO",
  "Store",
  "MedicalBusiness",
  "Attorney",
  "Dentist",
  "FinancialService",
  "LegalService",
]);

const STATUS_POINTS: Record<CheckStatus, number> = {
  pass: 2,
  warn: 1,
  fail: 0,
};

export function decodeEntities(value: string): string {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, num: string) =>
      String.fromCharCode(Number(num))
    )
    .replace(/\s+/g, " ")
    .trim();
}

function attrFromTag(tag: string, name: string): string | null {
  const quoted = tag.match(
    new RegExp(`${name}\\s*=\\s*["']([^"']*)["']`, "i")
  );
  if (quoted?.[1]) return decodeEntities(quoted[1]);
  const unquoted = tag.match(new RegExp(`${name}\\s*=\\s*([^\\s>]+)`, "i"));
  return unquoted?.[1] ? decodeEntities(unquoted[1]) : null;
}

function findMetaContent(html: string, key: string): string | null {
  const re = /<meta\b[^>]*>/gi;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html))) {
    const tag = match[0];
    const name =
      attrFromTag(tag, "name") ||
      attrFromTag(tag, "property") ||
      attrFromTag(tag, "http-equiv");
    if (name?.toLowerCase() === key.toLowerCase()) {
      return attrFromTag(tag, "content");
    }
  }
  return null;
}

function collectJsonLdTypes(node: unknown, types: Set<string>): boolean {
  let hasSearchAction = false;
  if (!node || typeof node !== "object") return false;

  if (Array.isArray(node)) {
    for (const item of node) {
      if (collectJsonLdTypes(item, types)) hasSearchAction = true;
    }
    return hasSearchAction;
  }

  const obj = node as Record<string, unknown>;
  const rawType = obj["@type"];
  if (typeof rawType === "string") types.add(rawType);
  if (Array.isArray(rawType)) {
    for (const item of rawType) {
      if (typeof item === "string") types.add(item);
    }
  }
  if (types.has("SearchAction")) hasSearchAction = true;

  const action = obj.potentialAction;
  if (action) {
    if (collectJsonLdTypes(action, types)) hasSearchAction = true;
  }
  if (obj["@graph"]) {
    if (collectJsonLdTypes(obj["@graph"], types)) hasSearchAction = true;
  }
  return hasSearchAction;
}

export function looksLikeHtml(body: string): boolean {
  const start = body.slice(0, 240).trim().toLowerCase();
  return (
    start.startsWith("<!doctype html") ||
    start.startsWith("<html") ||
    start.includes("<head") ||
    start.includes("<body")
  );
}

export function parsePageSignals(html: string): PageSignals {
  const titleMatch = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch
    ? decodeEntities(titleMatch[1].replace(/<[^>]+>/g, ""))
    : null;

  const metaDescription = findMetaContent(html, "description");
  const robotsMeta = findMetaContent(html, "robots");
  const ogImage =
    findMetaContent(html, "og:image") || findMetaContent(html, "og:image:url");

  const langMatch = html.match(/<html\b[^>]*>/i);
  const htmlLang = langMatch ? attrFromTag(langMatch[0], "lang") : null;

  let canonical: string | null = null;
  const linkRe = /<link\b[^>]*>/gi;
  let linkMatch: RegExpExecArray | null;
  while ((linkMatch = linkRe.exec(html))) {
    const rel = attrFromTag(linkMatch[0], "rel");
    if (rel?.toLowerCase().split(/\s+/).includes("canonical")) {
      canonical = attrFromTag(linkMatch[0], "href");
      break;
    }
  }

  const h1s: string[] = [];
  const h1Re = /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi;
  let h1Match: RegExpExecArray | null;
  while ((h1Match = h1Re.exec(html))) {
    const text = decodeEntities(h1Match[1].replace(/<[^>]+>/g, ""));
    if (text) h1s.push(text);
  }

  const jsonLdTypes = new Set<string>();
  let hasSearchAction = false;
  let rawJsonLdCount = 0;
  const jsonLdRe =
    /<script\b[^>]*type\s*=\s*["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let jsonMatch: RegExpExecArray | null;
  while ((jsonMatch = jsonLdRe.exec(html))) {
    rawJsonLdCount += 1;
    const raw = jsonMatch[1].trim();
    if (!raw) continue;
    try {
      const parsed: unknown = JSON.parse(raw);
      if (collectJsonLdTypes(parsed, jsonLdTypes)) hasSearchAction = true;
    } catch {
      // Invalid JSON-LD still counts as an attempt; types stay empty for that block.
    }
  }

  return {
    title,
    titleLength: title?.length ?? 0,
    metaDescription,
    metaDescriptionLength: metaDescription?.length ?? 0,
    canonical,
    h1s,
    htmlLang,
    robotsMeta,
    ogImage,
    jsonLdTypes: [...jsonLdTypes],
    hasSearchAction,
    rawJsonLdCount,
  };
}

export function parseRobotsTxt(body: string): { hasSitemap: boolean } {
  return { hasSitemap: /^sitemap:\s*\S+/im.test(body) };
}

function check(
  id: string,
  group: CheckGroup,
  label: string,
  status: CheckStatus,
  detail: string
): SnapshotCheck {
  return { id, group, label, status, detail };
}

export function buildSnapshotChecks(
  page: PageSignals,
  origin: OriginSignals
): SnapshotCheck[] {
  const titleStatus: CheckStatus = !page.title
    ? "fail"
    : page.titleLength < 15 || page.titleLength > 65
      ? "warn"
      : "pass";
  const titleDetail = !page.title
    ? "No title tag was found on the homepage."
    : page.titleLength < 15
      ? `Title is only ${page.titleLength} characters. Aim for about 15–60.`
      : page.titleLength > 65
        ? `Title is ${page.titleLength} characters. Many results trim after ~60.`
        : `Title is ${page.titleLength} characters.`;

  const descStatus: CheckStatus = !page.metaDescription
    ? "fail"
    : page.metaDescriptionLength < 50 || page.metaDescriptionLength > 160
      ? "warn"
      : "pass";
  const descDetail = !page.metaDescription
    ? "No meta description was found."
    : page.metaDescriptionLength < 50
      ? `Description is only ${page.metaDescriptionLength} characters.`
      : page.metaDescriptionLength > 160
        ? `Description is ${page.metaDescriptionLength} characters and may be truncated.`
        : `Description is ${page.metaDescriptionLength} characters.`;

  const h1Status: CheckStatus =
    page.h1s.length === 0 ? "fail" : page.h1s.length > 1 ? "warn" : "pass";
  const h1Detail =
    page.h1s.length === 0
      ? "No H1 heading was found in the HTML snapshot."
      : page.h1s.length > 1
        ? `${page.h1s.length} H1 headings were found. One clear H1 is usually better.`
        : "One H1 heading was found.";

  const canonicalStatus: CheckStatus = page.canonical ? "pass" : "warn";
  const canonicalDetail = page.canonical
    ? "A canonical URL is declared."
    : "No canonical link was found. Homepages should usually point to one preferred URL.";

  const robotsStatus: CheckStatus =
    origin.robotsStatus === 200 && !origin.robotsLooksLikeHtml
      ? origin.robotsHasSitemap
        ? "pass"
        : "warn"
      : "fail";
  const robotsDetail =
    origin.robotsStatus === 200 && !origin.robotsLooksLikeHtml
      ? origin.robotsHasSitemap
        ? "robots.txt is reachable and mentions a sitemap."
        : "robots.txt is reachable but does not mention a sitemap."
      : origin.robotsLooksLikeHtml
        ? "robots.txt returned a web page instead of a text file."
        : `robots.txt returned ${origin.robotsStatus ?? "no response"}.`;

  const indexStatus: CheckStatus = origin.indexable ? "pass" : "fail";
  const indexDetail = origin.indexable
    ? "The homepage does not send a noindex signal in this snapshot."
    : "The homepage looks noindexed (meta robots or X-Robots-Tag).";

  const ogStatus: CheckStatus = page.ogImage ? "pass" : "warn";
  const ogDetail = page.ogImage
    ? "An Open Graph image is present."
    : "No og:image was found. Social and some AI previews use this.";

  const langStatus: CheckStatus = page.htmlLang ? "pass" : "warn";
  const langDetail = page.htmlLang
    ? `html lang is set to “${page.htmlLang}”.`
    : "The <html> tag has no lang attribute.";

  const jsonLdStatus: CheckStatus =
    page.rawJsonLdCount > 0 && page.jsonLdTypes.length > 0
      ? "pass"
      : page.rawJsonLdCount > 0
        ? "warn"
        : "fail";
  const jsonLdDetail =
    page.jsonLdTypes.length > 0
      ? `JSON-LD types found: ${page.jsonLdTypes.slice(0, 6).join(", ")}.`
      : page.rawJsonLdCount > 0
        ? "JSON-LD script tags exist but could not be parsed into types."
        : "No JSON-LD structured data was found on the homepage.";

  const hasOrg = page.jsonLdTypes.some((type) => ORG_TYPES.has(type));
  const orgStatus: CheckStatus = hasOrg ? "pass" : "fail";
  const orgDetail = hasOrg
    ? "An organisation or local-business schema type is present."
    : "No Organization, LocalBusiness, or ProfessionalService schema was found.";

  const hasFaq = page.jsonLdTypes.includes("FAQPage");
  const faqStatus: CheckStatus = hasFaq ? "pass" : "warn";
  const faqDetail = hasFaq
    ? "FAQPage schema is present."
    : "No FAQPage schema. Visible FAQs with FAQ schema help AI answers.";

  const llmsOk =
    origin.llmsStatus === 200 && !origin.llmsLooksLikeHtml;
  const llmsStatus: CheckStatus = llmsOk ? "pass" : "fail";
  const llmsDetail = llmsOk
    ? "llms.txt is reachable as a text file."
    : origin.llmsLooksLikeHtml
      ? "llms.txt returned a web page instead of a machine-readable summary."
      : `llms.txt returned ${origin.llmsStatus ?? "no response"}.`;

  const llmsFullOk =
    origin.llmsFullStatus === 200 && !origin.llmsFullLooksLikeHtml;
  const llmsFullStatus: CheckStatus = llmsFullOk ? "pass" : "warn";
  const llmsFullDetail = llmsFullOk
    ? "llms-full.txt is reachable."
    : "No llms-full.txt. Optional, but useful for a longer AI-readable summary.";

  const searchStatus: CheckStatus = page.hasSearchAction ? "pass" : "warn";
  const searchDetail = page.hasSearchAction
    ? "WebSite schema includes a SearchAction."
    : "No SearchAction on WebSite schema. A site search URL helps some engines.";

  return [
    check("title", "seo", "Title tag", titleStatus, titleDetail),
    check("meta_description", "seo", "Meta description", descStatus, descDetail),
    check("h1", "seo", "H1 heading", h1Status, h1Detail),
    check("canonical", "seo", "Canonical URL", canonicalStatus, canonicalDetail),
    check("robots_txt", "seo", "robots.txt", robotsStatus, robotsDetail),
    check("indexable", "seo", "Indexable homepage", indexStatus, indexDetail),
    check("og_image", "seo", "Open Graph image", ogStatus, ogDetail),
    check("html_lang", "seo", "Language attribute", langStatus, langDetail),
    check("jsonld", "geo", "JSON-LD structured data", jsonLdStatus, jsonLdDetail),
    check("org_schema", "geo", "Organisation schema", orgStatus, orgDetail),
    check("faq_schema", "geo", "FAQ schema", faqStatus, faqDetail),
    check("llms_txt", "geo", "llms.txt", llmsStatus, llmsDetail),
    check("llms_full", "geo", "llms-full.txt", llmsFullStatus, llmsFullDetail),
    check("search_action", "geo", "Site SearchAction", searchStatus, searchDetail),
  ];
}

export function scoreSnapshot(
  checks: SnapshotCheck[]
): Pick<WebsiteSnapshotResult, "percent" | "band" | "summary" | "issues"> {
  const max = checks.length * 2;
  const total = checks.reduce(
    (sum, item) => sum + STATUS_POINTS[item.status],
    0
  );
  const percent = max === 0 ? 0 : Math.round((total / max) * 100);
  const band: SnapshotBand =
    percent >= 80 ? "strong" : percent >= 50 ? "mixed" : "needs_work";

  const summary =
    band === "strong"
      ? "This homepage snapshot looks solid. A full audit still covers speed, conversions, and whether answer engines actually cite you."
      : band === "mixed"
        ? "Some GEO and SEO foundations are in place, but a few gaps would stop crawlers or AI tools from trusting this page fully."
        : "This snapshot found missing basics. Fix titles, schema, crawl files, and answer-ready markup before spending on ads or content.";

  const issues = checks
    .filter((item) => item.status !== "pass")
    .sort((a, b) => STATUS_POINTS[a.status] - STATUS_POINTS[b.status])
    .slice(0, 5)
    .map((item) => ({
      id: item.id,
      title: item.label,
      detail: item.detail,
    }));

  return { percent, band, summary, issues };
}

export function assembleSnapshotResult(input: {
  inputUrl: string;
  finalUrl: string;
  page: PageSignals;
  origin: OriginSignals;
}): WebsiteSnapshotResult {
  const checks = buildSnapshotChecks(input.page, input.origin);
  const scored = scoreSnapshot(checks);
  return {
    inputUrl: input.inputUrl,
    finalUrl: input.finalUrl,
    fetchedAt: new Date().toISOString(),
    ...scored,
    checks,
    disclaimer: SNAPSHOT_DISCLAIMER,
  };
}

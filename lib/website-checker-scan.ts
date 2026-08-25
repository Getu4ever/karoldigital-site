import "server-only";
import { lookup } from "node:dns/promises";
import { isIP } from "node:net";
import {
  assembleSnapshotResult,
  looksLikeHtml,
  parsePageSignals,
  parseRobotsTxt,
  type OriginSignals,
  type WebsiteSnapshotResult,
} from "@/lib/website-checker";

const USER_AGENT =
  "KarolDigitalBot/1.0 (+https://www.karoldigital.co.uk/tools/website-checker)";
const FETCH_TIMEOUT_MS = 8000;
const MAX_BYTES = 750_000;
const MAX_REDIRECTS = 4;
const ALLOWED_PORTS = new Set(["", "80", "443"]);

export class SnapshotScanError extends Error {
  constructor(
    message: string,
    readonly status = 400
  ) {
    super(message);
    this.name = "SnapshotScanError";
  }
}

function ipv4ToInt(ip: string): number | null {
  const parts = ip.split(".");
  if (parts.length !== 4) return null;
  const nums = parts.map((part) => Number(part));
  if (nums.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) return null;
  return (
    ((nums[0] << 24) >>> 0) +
    (nums[1] << 16) +
    (nums[2] << 8) +
    nums[3]
  );
}

function inCidr(ip: string, base: string, bits: number): boolean {
  const ipInt = ipv4ToInt(ip);
  const baseInt = ipv4ToInt(base);
  if (ipInt === null || baseInt === null) return false;
  const mask = bits === 0 ? 0 : (~0 << (32 - bits)) >>> 0;
  return (ipInt & mask) === (baseInt & mask);
}

function isPrivateIp(ip: string): boolean {
  const v = ip.toLowerCase();
  if (v === "::1" || v === "::") return true;
  if (v.startsWith("fe80:") || v.startsWith("fc") || v.startsWith("fd")) {
    return true;
  }
  const mapped = v.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  const ipv4 = mapped?.[1] ?? (isIP(ip) === 4 ? ip : null);
  if (!ipv4) return isIP(ip) === 6 && (v.startsWith("fc") || v.startsWith("fd"));

  return (
    inCidr(ipv4, "0.0.0.0", 8) ||
    inCidr(ipv4, "10.0.0.0", 8) ||
    inCidr(ipv4, "127.0.0.0", 8) ||
    inCidr(ipv4, "169.254.0.0", 16) ||
    inCidr(ipv4, "172.16.0.0", 12) ||
    inCidr(ipv4, "192.168.0.0", 16)
  );
}

function blockedHostname(hostname: string): boolean {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  if (
    host === "localhost" ||
    host.endsWith(".localhost") ||
    host.endsWith(".local") ||
    host.endsWith(".internal") ||
    host === "metadata.google.internal"
  ) {
    return true;
  }
  return false;
}

export function normalizeTargetUrl(raw: string): URL {
  const trimmed = raw.trim();
  if (!trimmed) {
    throw new SnapshotScanError("Enter a website URL.");
  }
  const withProtocol = /^https?:\/\//i.test(trimmed)
    ? trimmed
    : `https://${trimmed}`;
  let url: URL;
  try {
    url = new URL(withProtocol);
  } catch {
    throw new SnapshotScanError("That does not look like a valid URL.");
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new SnapshotScanError("Only http and https URLs can be checked.");
  }
  if (url.username || url.password) {
    throw new SnapshotScanError("URLs with credentials are not allowed.");
  }
  if (!ALLOWED_PORTS.has(url.port)) {
    throw new SnapshotScanError("Only ports 80 and 443 can be checked.");
  }
  if (blockedHostname(url.hostname)) {
    throw new SnapshotScanError("That host cannot be checked.");
  }
  return url;
}

async function assertPublicUrl(url: URL): Promise<void> {
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new SnapshotScanError("Redirected to an unsupported protocol.");
  }
  if (!ALLOWED_PORTS.has(url.port)) {
    throw new SnapshotScanError("Redirected to a blocked port.");
  }
  if (blockedHostname(url.hostname)) {
    throw new SnapshotScanError("That host cannot be checked.");
  }

  const hostIsIp = isIP(url.hostname);
  if (hostIsIp) {
    if (isPrivateIp(url.hostname)) {
      throw new SnapshotScanError("That host cannot be checked.");
    }
    return;
  }

  let records: { address: string }[];
  try {
    records = await lookup(url.hostname, { all: true });
  } catch {
    throw new SnapshotScanError(
      "Could not resolve that domain. Check the URL and try again.",
      400
    );
  }
  if (records.length === 0 || records.some((record) => isPrivateIp(record.address))) {
    throw new SnapshotScanError("That host cannot be checked.");
  }
}

async function readLimited(res: Response, maxBytes: number): Promise<string> {
  const declared = Number(res.headers.get("content-length") || 0);
  if (declared > maxBytes) {
    throw new SnapshotScanError("That page is too large to snapshot.", 413);
  }
  if (!res.body) return "";

  const reader = res.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    if (!value) continue;
    received += value.byteLength;
    if (received > maxBytes) {
      await reader.cancel();
      throw new SnapshotScanError("That page is too large to snapshot.", 413);
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function fetchPublic(
  url: URL,
  accept: string
): Promise<{ url: string; status: number; headers: Headers; body: string }> {
  let current = url;

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    await assertPublicUrl(current);
    let res: Response;
    try {
      res = await fetch(current.href, {
        method: "GET",
        redirect: "manual",
        headers: {
          "User-Agent": USER_AGENT,
          Accept: accept,
        },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });
    } catch (error) {
      if (error instanceof SnapshotScanError) throw error;
      throw new SnapshotScanError(
        "The site did not respond in time. Try again, or use the 9-question scorecard instead.",
        502
      );
    }

    if ([301, 302, 303, 307, 308].includes(res.status)) {
      const location = res.headers.get("location");
      if (res.body) await res.body.cancel();
      if (!location) {
        throw new SnapshotScanError("The site redirected without a location.", 502);
      }
      current = new URL(location, current);
      continue;
    }

    const body = await readLimited(res, MAX_BYTES);
    return {
      url: current.href,
      status: res.status,
      headers: res.headers,
      body,
    };
  }

  throw new SnapshotScanError("Too many redirects from that URL.", 502);
}

function originOf(finalUrl: string): URL {
  const url = new URL(finalUrl);
  return new URL(`${url.protocol}//${url.host}`);
}

function isIndexable(robotsMeta: string | null, headers: Headers): boolean {
  const headerTag = headers.get("x-robots-tag") ?? "";
  const combined = `${robotsMeta ?? ""} ${headerTag}`.toLowerCase();
  return !/\bnoindex\b/.test(combined);
}

export async function scanWebsiteUrl(
  rawUrl: string
): Promise<WebsiteSnapshotResult> {
  const startUrl = normalizeTargetUrl(rawUrl);
  const pageRes = await fetchPublic(
    startUrl,
    "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8"
  );

  if (pageRes.status >= 400) {
    throw new SnapshotScanError(
      `The homepage returned HTTP ${pageRes.status}. The snapshot needs a reachable public page.`,
      502
    );
  }

  const origin = originOf(pageRes.url);
  const [robotsRes, llmsRes, llmsFullRes] = await Promise.all([
    fetchPublic(new URL("/robots.txt", origin), "text/plain,*/*;q=0.8").catch(
      () => null
    ),
    fetchPublic(new URL("/llms.txt", origin), "text/plain,*/*;q=0.8").catch(
      () => null
    ),
    fetchPublic(new URL("/llms-full.txt", origin), "text/plain,*/*;q=0.8").catch(
      () => null
    ),
  ]);

  const page = parsePageSignals(pageRes.body);
  const robotsBody = robotsRes?.status === 200 ? robotsRes.body : "";
  const originSignals: OriginSignals = {
    robotsStatus: robotsRes?.status ?? null,
    robotsLooksLikeHtml: Boolean(robotsBody && looksLikeHtml(robotsBody)),
    robotsHasSitemap: robotsBody ? parseRobotsTxt(robotsBody).hasSitemap : false,
    llmsStatus: llmsRes?.status ?? null,
    llmsLooksLikeHtml: Boolean(
      llmsRes?.status === 200 && looksLikeHtml(llmsRes.body)
    ),
    llmsFullStatus: llmsFullRes?.status ?? null,
    llmsFullLooksLikeHtml: Boolean(
      llmsFullRes?.status === 200 && looksLikeHtml(llmsFullRes.body)
    ),
    indexable: isIndexable(page.robotsMeta, pageRes.headers),
  };

  return assembleSnapshotResult({
    inputUrl: startUrl.href,
    finalUrl: pageRes.url,
    page,
    origin: originSignals,
  });
}

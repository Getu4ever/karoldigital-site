import { createHmac, timingSafeEqual } from "crypto";

/**
 * Verify Sanity webhook signatures.
 * Header format: `t=<unixSeconds>,v1=<hexHmac>`
 * Signed payload: `${t}.${rawBody}`
 *
 * @see https://www.sanity.io/docs/webhooks
 */
export function verifySanityWebhookSignature(
  rawBody: string,
  signatureHeader: string | null,
  secret: string,
  maxSkewSeconds = 300
): boolean {
  if (!signatureHeader || !secret) return false;

  const parts = Object.fromEntries(
    signatureHeader.split(",").map((pair) => {
      const [k, v] = pair.split("=");
      return [k?.trim(), v?.trim()];
    })
  );

  const timestamp = parts.t;
  const signature = parts.v1;
  if (!timestamp || !signature) return false;

  const ts = Number(timestamp);
  if (!Number.isFinite(ts)) return false;
  const skew = Math.abs(Math.floor(Date.now() / 1000) - ts);
  if (skew > maxSkewSeconds) return false;

  const expected = createHmac("sha256", secret)
    .update(`${timestamp}.${rawBody}`)
    .digest("hex");

  try {
    const a = Buffer.from(expected, "hex");
    const b = Buffer.from(signature, "hex");
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

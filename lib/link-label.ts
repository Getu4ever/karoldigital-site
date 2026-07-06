/** Keeps visible link anchor text within SEO-friendly length limits. */
export function truncateLinkLabel(text: string, maxLength = 45): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const cut = normalized.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = lastSpace > 15 ? cut.slice(0, lastSpace) : cut;

  return `${trimmed}…`;
}

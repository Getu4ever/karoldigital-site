/** Keeps visible link anchor text within SEO-friendly length limits. */
export function truncateLinkLabel(text: string, maxLength = 28): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;

  const cut = normalized.slice(0, maxLength - 1);
  const lastSpace = cut.lastIndexOf(" ");
  const trimmed = lastSpace > 12 ? cut.slice(0, lastSpace) : cut;

  return `${trimmed}…`;
}

/** Short, unique anchor text for blog cards and related posts. */
export function blogLinkLabel(title: string): string {
  const words = title.split(/\s+/).filter(Boolean);
  const short = words.slice(0, 3).join(" ");
  return truncateLinkLabel(short, 24);
}

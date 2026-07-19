/**
 * Short, unique <title> overrides for posts whose Sanity seoTitle/title
 * share a long prefix and collide after SERP-length truncation.
 */
const SEO_TITLE_OVERRIDES: Record<string, string> = {
  "why-every-small-business-needs-a-modern-website-in-2025":
    "Modern Websites for Small Businesses",
  "why-every-small-business-needs-a-conversion-optimised-website-2025-guide":
    "Conversion-Optimised Website Guide 2025",
  "interactive-catering-menu-vs-pdf-sales":
    "Interactive Catering Menus vs PDFs",
  "diy-vs-professional-website-design-which-is-right-for-your-business-in-2025":
    "DIY vs Professional Website Design",
  "enhancing-web-accessibility-for-better-user-experience":
    "Web Accessibility for Better UX",
  "construction-website-design-tips-uk-builders":
    "Construction Website Design Tips UK",
  "the-importance-of-website-speed-for-small-businesses-in-2025":
    "Website Speed for Small Businesses",
  "financial-services-website-design-trust-factor":
    "Financial Website Design & Trust",
};

/** Meta description overrides when Sanity copy exceeds SERP pixel limits. */
const SEO_DESCRIPTION_OVERRIDES: Record<string, string> = {
  "how-much-does-a-professional-website-cost-uk-small-business-2026":
    "UK small business website costs in 2026: DIY (£100–£2,000), freelancer (£500–£5,000), agency (£3,000–£10,000+). Clear pricing guide.",
};

export function getBlogSeoTitle(slug: string, fallbackTitle: string): string {
  return SEO_TITLE_OVERRIDES[slug] || fallbackTitle;
}

export function getBlogSeoDescription(
  slug: string,
  fallbackDescription: string
): string {
  return SEO_DESCRIPTION_OVERRIDES[slug] || fallbackDescription;
}

export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6LdsKYQsAAAAAPaYefX2OaGGADRDRJljpKAKNMk1";

export const BOOK_SERVICE_OPTIONS = [
  "High-Performance Website Development",
  "Conversion-Focused E-Commerce Platform",
  "Custom Mobile Application (iOS & Android)",
  "Website Performance & Growth Audit",
] as const;

export type BookServiceOption = (typeof BOOK_SERVICE_OPTIONS)[number];

const DEFAULT_BOOK_SERVICE: BookServiceOption =
  "High-Performance Website Development";

/** Map legacy CTA / query labels onto the current premium service list */
const BOOK_SERVICE_ALIASES: Record<string, BookServiceOption> = {
  "web design": "High-Performance Website Development",
  "custom web development": "High-Performance Website Development",
  "next.js development": "High-Performance Website Development",
  "nextjs development": "High-Performance Website Development",
  "professional custom build": "High-Performance Website Development",
  "core growth custom build": "High-Performance Website Development",
  starter: "High-Performance Website Development",
  "starter lite": "High-Performance Website Development",
  growth: "High-Performance Website Development",
  premium: "High-Performance Website Development",
  enterprise: "Conversion-Focused E-Commerce Platform",
  "digital marketing": "High-Performance Website Development",
  "ai logo design": "High-Performance Website Development",
  "ai search optimisation": "Website Performance & Growth Audit",
  "website audit": "Website Performance & Growth Audit",
  "conversion-focused e-commerce store":
    "Conversion-Focused E-Commerce Platform",
  "custom mobile applications":
    "Custom Mobile Application (iOS & Android)",
  "custom mobile application":
    "Custom Mobile Application (iOS & Android)",
};

export function normalizeBookService(value: string | null): BookServiceOption {
  if (!value) return DEFAULT_BOOK_SERVICE;

  const decoded = decodeURIComponent(value.replace(/\+/g, " ")).trim();
  const match = BOOK_SERVICE_OPTIONS.find(
    (option) => option.toLowerCase() === decoded.toLowerCase()
  );
  if (match) return match;

  return BOOK_SERVICE_ALIASES[decoded.toLowerCase()] ?? DEFAULT_BOOK_SERVICE;
}

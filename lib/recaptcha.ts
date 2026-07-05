export const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ??
  "6LdsKYQsAAAAAPaYefX2OaGGADRDRJljpKAKNMk1";

export const BOOK_SERVICE_OPTIONS = [
  "Web Design",
  "Custom Web Development",
  "Next.js Development",
  "Website Audit",
  "Digital Marketing",
  "AI Logo Design",
  "Starter Lite",
  "Starter",
  "Growth",
  "Premium",
  "Enterprise",
] as const;

export type BookServiceOption = (typeof BOOK_SERVICE_OPTIONS)[number];

export function normalizeBookService(value: string | null): BookServiceOption {
  if (!value) return "Web Design";

  const decoded = decodeURIComponent(value.replace(/\+/g, " "));
  const match = BOOK_SERVICE_OPTIONS.find(
    (option) => option.toLowerCase() === decoded.toLowerCase()
  );

  return match ?? "Web Design";
}

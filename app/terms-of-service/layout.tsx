// /app/terms-of-service/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Terms of Service – Karol Digital",
  description:
    "Review Karol Digital’s Terms of Service, including usage guidelines, payments, intellectual property, and liability information.",
  url: "https://www.karoldigital.co.uk/terms-of-service",
  image: "/hero-page-banner.jpg",
});

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

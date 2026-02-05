// /app/web-design-finance/layout.tsx
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Web Design for Financial Advisors & Mortgage Brokers | Karol Digital",
  description:
    "Professional, secure, and SEO-optimised web design for UK financial services. High-trust platforms for mortgage brokers and IFAs with lead capture and compliance focus.",
  url: "https://www.karoldigital.co.uk",
  image: "/finance-hero-bg.jpg",
});

const financeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Financial Services Web Design",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "description": "Professional web design for UK financial advisors and accountants. Includes secure lead generation and GDPR-compliant forms.",
};

export default function FinanceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financeServiceSchema) }}
      />
      {children}
    </>
  );
}

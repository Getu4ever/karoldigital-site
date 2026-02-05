// /app/web-design-builders/layout.tsx
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Web Design for Builders & Construction Companies UK | Karol Digital",
  description:
    "Professional websites for UK builders, plumbers, and electricians. Show off your portfolio and get more local leads with a mobile-friendly tradesman website.",
  url: "https://www.karoldigital.co.uk",
  image: "/builders-hero-bg.jpg",
});

const builderServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design for Construction & Trades",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "description": "Specialised web design for UK tradespeople. Includes project galleries, lead generation forms, and local SEO for building services.",
};

export default function BuildersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(builderServiceSchema) }}
      />
      {children}
    </>
  );
}

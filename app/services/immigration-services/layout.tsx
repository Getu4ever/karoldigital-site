// /app/web-design-immigration/layout.tsx
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Web Design for Immigration Consultants & Law Firms | Karol Digital",
  description:
    "Professional, OISC-compliant website design for UK immigration firms. We build high-trust websites with secure lead capture and appointment booking for legal consultants.",
  url: "https://www.karoldigital.co.uk",
  image: "/immigration-hero-bg.jpg",
});

const immigrationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design for Immigration Law Firms",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk"
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "description": "Specialised web design services for OISC and SRA regulated immigration consultants. Includes secure data forms, multi-language support, and SEO for visa services.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Immigration Web Design Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Immigration Firm Starter Site",
          "description": "Compliance-ready 3-page website with secure contact forms for UK visa enquiries."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Advanced Legal Practice Website",
          "description": "Full-service site with automated consultation booking and document upload integration."
        }
      }
    ]
  }
};

export default function ImmigrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(immigrationServiceSchema),
        }}
      />
      {children}
    </>
  );
}

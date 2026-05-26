import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    title: "Immigration Law Firm Web & OISC Systems | Karol Digital",
    description:
      "Specialist OISC & SRA-compliant website design for UK immigration firms. High-trust, secure websites with smart intake forms & targeted legal SEO. Get a quote.",
    url: "https://www.karoldigital.co.uk/services/immigration-services",
    image: "/1st-call-uk-immigration-services.jpg",
  }),
  // Pass natively to Next.js by adding it outside the helper wrapper
  alternates: {
    canonical: "https://www.karoldigital.co.uk/services/immigration-services",
  },
};

const immigrationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Immigration Law Firm Web Design & OISC Systems",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressCountry": "GB"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "United Kingdom"
  },
  "description": "Specialised high-trust web design services for OISC and SRA regulated immigration law firms, consultants, and corporate visa advisors. Features secure pre-screening intake systems.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Immigration Web Design Frameworks",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OISC & SRA Compliant Web Design",
          "description": "Compliance-ready web systems with strict layout placement for statutory verification badges and fee disclosures."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Sponsor Licence Landing Systems",
          "description": "B2B conversion funnels targeting global business mobility routes, skilled worker sponsorships, and audit readiness."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Immigration SEO & Case Acquisition",
          "description": "Bespoke semantic architecture designed to rank legal firms for high-volume phrases like 'Sponsor Licence lawyers London' and family paths."
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

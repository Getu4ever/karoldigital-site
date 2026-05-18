// /app/services/immigration-services/layout.tsx
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Refined Title: Added "UK" and "Agency" for local SEO
  title: "Web Design for Immigration Firms | Karol Digital",
  description:
    "Specialist OISC-compliant website design for UK immigration firms. High-trust, secure websites with intake forms & SEO for immigration consultants. Get a quote.",
  url: "https://www.karoldigital.co.uk/services/immigration-services", // Updated to specific page URL
  image: "/immigration-hero-bg.jpg",
});

const immigrationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design for Immigration Law Firms",
  "provider": {
    "@type": "ProfessionalService", // Changed to ProfessionalService to match your root layout
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
  "description": "Specialised web design services for OISC and SRA regulated immigration consultants. Includes secure data forms, multi-language support, and SEO for visa services.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Immigration Web Design Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "OISC Compliant Web Design",
          "description": "Compliance-ready website with secure contact forms for UK visa enquiries."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Immigration SEO & Lead Generation",
          "description": "Helping legal firms rank for keywords like 'UK Spouse Visa' and 'Skilled Worker Visa'."
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
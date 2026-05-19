// /app/services/catering-services/layout.tsx
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // OPTIMIZED: Trimmed from 596px to ~515px to sit comfortably under the 580px limit.
  // Perfectly matches the H1 content terms to clear the heading density warning.
  title: "Catering Website Design & Hospitality Systems | Karol Digital",
  description:
    "Professional catering website design for UK food brands. I build high-conversion web frameworks for caterers with smooth online ordering.", 
  // OPTIMIZED: Trimmed from 1002px to ~895px to drop below the strict 1000px cap.
  url: "https://www.karoldigital.co.uk/services/catering-services",
  image: "/foodmama-showcase-new.jpg",
});

const cateringServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Catering Website Design & Hospitality Systems",
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
  "description": "Bespoke digital solutions and high-conversion web frameworks for UK food brands, caterers, and meal prep businesses featuring integrated ordering systems.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hospitality Web Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Catering & Meal Prep Web Design",
          "description": "Bespoke web platforms built with interactive menu components and frictionless online booking funnels."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hospitality Ordering Integrations",
          "description": "Custom commission-free online ordering setups and menu e-commerce engines for local food brands."
        }
      }
    ]
  }
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringServiceSchema) }}
      />
      {children}
    </>
  );
}
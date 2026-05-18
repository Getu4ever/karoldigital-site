import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Refined for "Contractor" and "Trades" keywords
  title: "Web Design for Construction & Builders | Karol Digital",
  description:
    "High-performance websites for UK builders, contractors, and tradespeople. Get more local leads with professional project galleries and SEO for your trade business.",
  url: "https://www.karoldigital.co.uk/services/building-services",
  image: "/building-services-hero.jpg", // Using your industry-specific image
});

const builderServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design for Construction & Trades",
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
  "description": "Bespoke web design and local SEO for UK tradespeople, building firms, and construction contractors. Features include before/after galleries and lead capture.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Trade & Construction Web Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Builder Portfolio Websites",
          "description": "Websites featuring high-resolution project galleries and client testimonial integrations."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO for Tradespeople",
          "description": "Optimising your business to rank for 'builder near me' and specific local service areas."
        }
      }
    ]
  }
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
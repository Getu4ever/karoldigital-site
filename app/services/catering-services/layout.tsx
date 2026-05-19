import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Refined to perfectly match the updated page title keywords and H1 target
  title: "Catering Website Design & Hospitality Web Systems | Karol Digital",
  description:
    "Professional catering website design for UK food brands. We build high-conversion web frameworks for caterers & meal prep services with smooth online ordering.",
  url: "https://www.karoldigital.co.uk/services/catering-services",
  image: "/foodmama-showcase-new.jpg",
});

const cateringSchema = {
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
  "description": "Bespoke catering website design for the UK hospitality sector. Specialising in mobile-first websites with integrated ordering architectures and visual menus.",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Hospitality Web Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Meal Prep & Subscription Websites",
          "description": "E-commerce solutions for recurring meal deliveries and subscription-based food businesses."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Catering Event Booking Systems",
          "description": "Lead generation sites for event caterers featuring dynamic menu galleries and enquiry management."
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }}
      />
      {children}
    </>
  );
}
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Targeting high-growth sectors: Meal Prep and Dark Kitchens
  title: "Web Design for Caterers & Kitchens | Karol Digital",
  description:
    "Professional web design for UK food businesses. We build high-conversion websites for caterers & meal prep services with online ordering and digital menus.",
  url: "https://www.karoldigital.co.uk/services/catering-services",
  image: "/foodmama-showcase-new.jpg", // Using your successful case study image
});

const cateringSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design for Hospitality & Catering",
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
  "description": "Bespoke web design for the UK food and hospitality sector. Specialising in mobile-first websites with integrated ordering systems and visual menus.",
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
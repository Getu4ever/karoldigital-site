// app/services/layout.tsx
import { generateSEOMetadata } from "@/components/seo-server";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSEOMetadata({
    // Differentiated title optimized to lead with the main H1 theme of your overview page
    title: "Web Engineering & Digital Capabilities | Karol Digital",
    description:
      "Explore transparent pricing for web design, maintenance, and digital marketing. Affordable packages tailored for UK small businesses, from Starter to Premium.",
    url: "https://www.karoldigital.co.uk/services",
    image: "/hero-page-banner.jpg",
  }),
  // Explicitly binds canonical targets to prevent parents and children from bleeding search weights
  alternates: {
    canonical: "https://www.karoldigital.co.uk/services",
  },
};

// Combined Schema: Breadcrumbs + OfferCatalog matching your authentic service definitions
const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.karoldigital.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.karoldigital.co.uk/services"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Karol Digital Web Design Packages",
    "description": "Affordable web design packages including Starter, Growth, and Premium options for UK businesses.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter Package",
            "description": "5–7 Optimized Pages, mobile-responsive, perfect for new businesses."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "900.00",
            "priceCurrency": "GBP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Package",
            "description": "Up to 10 Pages, includes full on-page SEO, speed optimisation, and basic AI chatbot."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "1800.00",
            "priceCurrency": "GBP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Package",
            "description": "10-15+ Custom Pages, bespoke brand identity, custom coding, advanced SEO, and advanced AI chatbot."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "3500.00",
            "priceCurrency": "GBP"
          }
        }
      ]
    }
  }
];

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      {children}
    </>
  );
}

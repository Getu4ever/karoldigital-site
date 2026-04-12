import { generateSEOMetadata } from "@/components/seo-server";

// Using your server-side metadata generator for consistency
export const metadata = generateSEOMetadata({
  title: "Affordable Web Design Packages & Pricing UK | Karol Digital",
  description:
    "Explore transparent pricing for web design, maintenance, and digital marketing. Affordable packages tailored for UK small businesses, from Starter to Premium.",
  url: "https://www.karoldigital.co.uk/services",
  image: "/hero-page-banner.jpg",
});

// Combined Schema: Breadcrumbs + OfferCatalog
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
            "description": "Up to 3 pages, mobile-responsive, perfect for new businesses."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "150.00",
            "priceCurrency": "GBP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Growth Package",
            "description": "Up to 6 pages, includes SEO, speed optimisation, and basic AI chatbot."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "350.00",
            "priceCurrency": "GBP"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Premium Package",
            "description": "Up to 10 pages, custom coding, advanced SEO, and advanced AI chatbot."
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "price": "650.00",
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
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  // Targeting high-intent "WordPress" and "Custom" keywords
  title: "WordPress & Custom Web Design Packages UK | Karol Digital",
  description:
    "Mobile-friendly web design for UK businesses. From simple WordPress sites to custom-coded solutions with AI chatbots. Explore our packages.",
  url: "https://www.karoldigital.co.uk/services/web-design",
  image: "/hero-page-banner.jpg",
});

const webDesignSchema = [
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Web Design",
        "item": "https://www.karoldigital.co.uk/services/web-design"
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Karol Digital Web Design Services",
    "description": "Professional web design services for UK small businesses, offering WordPress, custom coding, and AI chatbot integrations.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Starter Web Design",
            "description": "Budget-friendly 3-page websites using WordPress or Google Sites."
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
            "name": "Growth Web Design",
            "description": "Feature-rich 6-page websites with SEO, speed optimization, and basic AI chatbots."
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
            "name": "Premium Web Design",
            "description": "High-end 10-page websites with custom coding, advanced SEO, and advanced AI chatbots."
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

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webDesignSchema),
        }}
      />
      {children}
    </>
  );
}
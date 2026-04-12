import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Web Design Pricing & Packages UK | Karol Digital",
  description:
    "Transparent pricing for UK small businesses. From affordable Starter sites to custom Enterprise applications. Explore our web design and maintenance packages.",
  alternates: {
    canonical: "https://www.karoldigital.co.uk/pricing",
  },
  openGraph: {
    images: "/hero-page-banner.jpg",
    title: "Web Design Packages & Pricing | Karol Digital",
    description: "Professional web design starting from £150. Compare our Starter, Growth, Premium, and Enterprise tiers.",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design & Digital Solutions",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Karol Digital",
    "image": "https://www.karoldigital.co.uk/hero-page-banner.jpg",
    "url": "https://www.karoldigital.co.uk"
  },
  "areaServed": "GB",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Tiers",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Starter Package",
          "description": "Up to 3 pages, mobile-responsive website for new businesses."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "150.00",
          "minPrice": "150.00",
          "maxPrice": "300.00",
          "priceCurrency": "GBP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Package",
          "description": "Up to 6 pages, on-page SEO, speed optimisation, and AI chatbot."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "350.00",
          "minPrice": "350.00",
          "maxPrice": "600.00",
          "priceCurrency": "GBP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Package",
          "description": "6-10+ pages, custom coding, advanced SEO, and advanced AI chatbot."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "650.00",
          "minPrice": "650.00",
          "maxPrice": "1200.00",
          "priceCurrency": "GBP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise Solution",
          "description": "Fully custom-coded applications, deep database integration, and advanced e-commerce."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": "1500.00",
          "minPrice": "1500.00",
          "maxPrice": "2000.00",
          "priceCurrency": "GBP"
        }
      }
    ]
  }
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema),
        }}
      />
      {children}
    </>
  );
}
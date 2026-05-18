import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Web Design Pricing & Packages UK | Karol Digital",
  description:
    "Transparent pricing for UK small businesses. From Starter websites to Premium digital systems and Enterprise eCommerce solutions.",
  alternates: {
    canonical: "https://www.karoldigital.co.uk/pricing",
  },
  openGraph: {
    images: "/hero-page-banner.jpg",
    title: "Web Design Packages & Pricing | Karol Digital",
    description:
      "Professional web design packages starting from £900. Compare Starter, Growth, Premium, and Enterprise eCommerce solutions.",
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
    "url": "https://www.karoldigital.co.uk",
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
          "description":
            "Professional 5–7 page website for startups and small businesses. Includes mobile responsive design, basic SEO setup, and contact form.",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 900,
          "minPrice": 900,
          "maxPrice": 1500,
          "priceCurrency": "GBP",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Package",
          "description":
            "Conversion-focused website with UX optimisation, SEO setup, performance improvements, analytics integration, and automation features.",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 1800,
          "minPrice": 1800,
          "maxPrice": 3000,
          "priceCurrency": "GBP",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Package",
          "description":
            "High-end digital system with full branding, 6–10+ custom pages, advanced development, sales copywriting, and automation systems.",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 3500,
          "minPrice": 3500,
          "maxPrice": 6000,
          "priceCurrency": "GBP",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise eCommerce Solution",
          "description":
            "Fully custom-built eCommerce platforms and business systems with product management, payment gateway integration, CRM/database systems, user roles, and advanced security architecture.",
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 6500,
          "minPrice": 6500,
          "priceCurrency": "GBP",
        },
      },
    ],
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
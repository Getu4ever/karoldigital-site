import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Affordable Web Design Pricing & Packages UK | Karol Digital",
  description:
    "Transparent pricing for UK small businesses. From Starter websites to Premium digital systems and Enterprise eCommerce solutions.",
  alternates: {
    canonical: "https://www.karoldigital.co.uk/pricing",
  },
  openGraph: {
    title: "Web Design Packages & Pricing | Karol Digital",
    description:
      "Professional web design packages starting from £900. Compare Starter, Growth, Premium, and Enterprise eCommerce solutions.",
    images: [
      {
        url: "https://www.karoldigital.co.uk/hero-page-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Karol Digital Web Design Pricing",
      },
    ],
  },
};

const pricingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design & Digital Solutions",
  "description":
    "Professional web design and digital solutions for UK businesses, including Starter, Growth, Premium, and Enterprise eCommerce packages.",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Karol Digital",
    "url": "https://www.karoldigital.co.uk",
    "image": "https://www.karoldigital.co.uk/hero-page-banner.jpg",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Design Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Starter Web Design Package",
          "description":
            "Professional 5–7 page website for startups and small businesses with responsive design, basic SEO setup, and contact form."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 900,
          "priceCurrency": "GBP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Growth Web Design Package",
          "description":
            "Conversion-focused website with UX optimisation, SEO setup, performance improvements, analytics, and automation."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 1800,
          "priceCurrency": "GBP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Premium Web Design Package",
          "description":
            "High-end digital system including branding, custom pages, advanced development, copywriting, and automation systems."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 3500,
          "priceCurrency": "GBP"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Enterprise eCommerce Solution",
          "description":
            "Fully custom eCommerce platforms with product management, payment gateways, CRM systems, advanced security, and scalability."
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": 6500,
          "priceCurrency": "GBP"
        }
      }
    ]
  }
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
          __html: JSON.stringify(pricingServiceSchema),
        }}
      />
      {children}
    </>
  );
}
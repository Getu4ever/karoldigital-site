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
  "@type": "Product",
  "name": "Web Design & Digital Solutions",
  "description":
    "Professional web design and digital solutions for UK businesses, including Starter, Growth, Premium, and Enterprise eCommerce packages.",
  "brand": {
    "@type": "Brand",
    "name": "Karol Digital"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "GBP",
    "lowPrice": "900",
    "highPrice": "6500",
    "offerCount": "4",
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Web Design Package",
        "price": "900",
        "priceCurrency": "GBP",
        "description": "Professional 5–7 page website for startups and small businesses with responsive design, basic SEO setup, and contact form."
      },
      {
        "@type": "Offer",
        "name": "Growth Web Design Package",
        "price": "1800",
        "priceCurrency": "GBP",
        "description": "Conversion-focused website with UX optimisation, SEO setup, performance improvements, analytics, and automation."
      },
      {
        "@type": "Offer",
        "name": "Premium Web Design Package",
        "price": "3500",
        "priceCurrency": "GBP",
        "description": "High-end digital system including branding, custom pages, advanced development, copywriting, and automation systems."
      },
      {
        "@type": "Offer",
        "name": "Enterprise eCommerce Solution",
        "price": "6500",
        "priceCurrency": "GBP",
        "description": "Fully custom eCommerce platforms with product management, payment gateways, CRM systems, advanced security, and scalability."
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
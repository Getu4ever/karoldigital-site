import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Website Pricing & Affordable Web Design Packages UK | Karol Digital",
  description:
    "Flexible website pricing for UK businesses. Start with a Website Growth Audit or Starter Lite package, then scale into Growth, Premium, or Enterprise solutions when you're ready.",
  alternates: {
    canonical: "[karoldigital.co.uk](https://www.karoldigital.co.uk/pricing)",
  },
  openGraph: {
    title: "Flexible Website Pricing & Packages | Karol Digital",
    description:
      "Affordable website pricing for UK businesses, including Starter Lite, Starter, Growth, Premium, Enterprise, and Website Growth Audits.",
    images: [
      {
        url: "[karoldigital.co.uk](https://www.karoldigital.co.uk/hero-page-banner.jpg)",
        width: 1200,
        height: 630,
        alt: "Karol Digital Website Pricing",
      },
    ],
  },
};

const pricingServiceSchema = {
  "@context": "[schema.org](https://schema.org)",
  "@type": "Product",
  name: "Website Design & Digital Growth Services",
  description:
    "Flexible web design and digital growth services for UK businesses, including Website Growth Audits, Starter Lite, Starter, Growth, Premium, and Enterprise solutions.",
  brand: {
    "@type": "Brand",
    name: "Karol Digital",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "95",
    highPrice: "6000",
    offerCount: "6",
    offers: [
      {
        "@type": "Offer",
        name: "Website Growth Audit",
        price: "95",
        priceCurrency: "GBP",
        description:
          "A practical review of your website covering messaging, structure, speed, SEO, and lead generation opportunities.",
        url: "[karoldigital.co.uk](https://www.karoldigital.co.uk/pricing)",
      },
      {
        "@type": "Offer",
        name: "Starter Lite Website Package",
        price: "450",
        priceCurrency: "GBP",
        description:
          "A lean 1-3 page professional website for new businesses or simple service offers, including mobile responsiveness, contact form, and basic SEO setup.",
        url: "[karoldigital.co.uk](https://www.karoldigital.co.uk/pricing)",
      },
      {
        "@type": "Offer",
        name: "Starter Website Package",
        price: "795",
        priceCurrency: "GBP",
        description:
          "A professional 5-7 page website for local businesses and growing service brands, including CMS setup, responsive design, and core SEO setup.",
        url: "[karoldigital.co.uk](https://www.karoldigital.co.uk/pricing)",
      },
      {
        "@type": "Offer",
        name: "Growth Website Package",
        price: "1400",
        priceCurrency: "GBP",
        description:
          "A conversion-focused website package for businesses that need more enquiries, including UX improvements, on-page SEO, performance tuning, and lead capture systems.",
        url: "[karoldigital.co.uk](https://www.karoldigital.co.uk/pricing)",
      },
      {
        "@type": "Offer",
        name: "Premium Website Package",
        price: "3200",
        priceCurrency: "GBP",
        description:
          "A complete digital growth system with branding, custom pages, advanced development, and conversion strategy for established brands ready to scale.",
        url: "[karoldigital.co.uk](https://www.karoldigital.co.uk/pricing)",
      },
      {
        "@type": "Offer",
        name: "Enterprise Website & Ecommerce Solution",
        price: "6000",
        priceCurrency: "GBP",
        description:
          "Custom enterprise websites and ecommerce systems with advanced integrations, CRM connectivity, payment systems, and high-level security.",
        url: "[karoldigital.co.uk](https://www.karoldigital.co.uk/pricing)",
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
          __html: JSON.stringify(pricingServiceSchema),
        }}
      />
      {children}
    </>
  );
}

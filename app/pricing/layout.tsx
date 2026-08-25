import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { pricingFaqs } from "@/lib/page-faqs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Website Design Pricing UK | Karol Digital",
  description:
    "Clear website package pricing for UK service businesses — from audits to custom builds and e-commerce. Honest quotes, no template bloat.",
  url: "https://www.karoldigital.co.uk/pricing",
  image: "/heroes/pricing.png",
  keywords:
    "website design pricing UK, web design packages London, custom website cost",
});

const pricingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Karol Digital Website Packages",
  description:
    "Custom website packages for UK service businesses — audits, professional builds, growth sites, and e-commerce.",
  brand: {
    "@type": "Brand",
    name: "Karol Digital",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "GBP",
    lowPrice: "95",
    highPrice: "6000",
    offerCount: "7",
    offers: [
      {
        "@type": "Offer",
        name: "Website Performance Audit",
        price: "95",
        priceCurrency: "GBP",
        description:
          "A practical review of your website covering speed, security signals, messaging, structure, and conversion opportunities.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Professional Custom Build",
        price: "1250",
        priceCurrency: "GBP",
        description:
          "A modern, high-performance custom website engineered from scratch with zero template bloat, secure content management, and strong search visibility.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Core Growth Custom Build",
        price: "1750",
        priceCurrency: "GBP",
        description:
          "A bespoke multi-page custom website with conversion-focused structure, performance tuning, and modern secure content management.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Growth Website Package",
        price: "2450",
        priceCurrency: "GBP",
        description:
          "Conversion-focused platforms with lightning-fast performance tuning, secure lead capture, and priority SEO for high-intent pages.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Premium Website & E-Commerce Package",
        price: "3200",
        priceCurrency: "GBP",
        description:
          "Conversion-focused modern e-commerce and growth systems with advanced custom features, branding, and secure data infrastructure.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Enterprise Website & Ecommerce Solution",
        price: "6000",
        priceCurrency: "GBP",
        description:
          "Custom enterprise websites and conversion-focused ecommerce systems with advanced integrations, CRM connectivity, payment systems, and rock-solid security.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Custom Mobile Applications",
        priceCurrency: "GBP",
        description:
          "Custom iOS and Android app engineering for growing small businesses — modern, fast, secure, and seamlessly integrated with website and store systems. Custom scoped packaging.",
        url: "https://www.karoldigital.co.uk/pricing",
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
      <GeoExtras faqs={pricingFaqs} title="Website pricing FAQ" />
    </>
  );
}

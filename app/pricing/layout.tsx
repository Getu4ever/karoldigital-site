import { Metadata } from "next";
import React from "react";
import { homeTestimonials } from "@/lib/home-content";

export const metadata: Metadata = {
  title:
    "High-Performance Web Development Pricing | Custom Mobile App Development Quotes | Karol Digital",
  description:
    "High-performance web development pricing, custom mobile app development quotes, and conversion-focused e-commerce costs. Bespoke small business web engineering UK — 100% custom-built.",
  keywords: [
    "High-Performance Web Development Pricing",
    "Custom Mobile App Development Quotes",
    "Conversion-Focused E-Commerce Costs",
    "Bespoke Small Business Web Engineering UK",
  ],
  alternates: {
    canonical: "https://www.karoldigital.co.uk/pricing",
  },
  openGraph: {
    title:
      "High-Performance Web Development Pricing | Custom Mobile App Quotes | Karol Digital",
    description:
      "Premium pricing for custom websites, conversion-focused e-commerce platforms, and bespoke mobile applications for ambitious small businesses.",
    images: [
      {
        url: "https://www.karoldigital.co.uk/hero-page-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Karol Digital High-Performance Web & App Pricing",
      },
    ],
  },
};

const pricingReviews = homeTestimonials.map(({ quote, author }) => ({
  "@type": "Review" as const,
  author: {
    "@type": "Organization" as const,
    name: author,
  },
  reviewBody: quote,
  reviewRating: {
    "@type": "Rating" as const,
    ratingValue: "5",
    bestRating: "5",
  },
}));

const pricingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "High-Performance Web & Application Development Packages",
  description:
    "Bespoke small business web engineering UK — high-performance custom websites, conversion-focused e-commerce platforms, and custom mobile applications.",
  brand: {
    "@type": "Brand",
    name: "Karol Digital",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    ratingCount: String(pricingReviews.length),
    reviewCount: String(pricingReviews.length),
  },
  review: pricingReviews,
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
    </>
  );
}

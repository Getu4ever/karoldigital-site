import { Metadata } from "next";
import React from "react";
import { homeTestimonials } from "@/lib/home-content";

export const metadata: Metadata = {
  title: "Website Pricing & Web Design Packages UK | Karol Digital",
  // Shortened to ensure it fits within the recommended pixel width
  description:
    "Flexible website pricing for UK businesses. Choose from Growth Audits, Starter, Growth, Premium, or Enterprise web design solutions tailored to your needs.",
  alternates: {
    // Corrected format: provide the full string only
    canonical: "https://www.karoldigital.co.uk/pricing",
  },
  openGraph: {
    title: "Flexible Website Pricing & Packages | Karol Digital",
    description:
      "Clear and affordable website pricing for UK businesses. Choose from Website Growth Audits, Starter, Growth, Premium, or Enterprise web design packages.",
    images: [
      {
        url: "https://www.karoldigital.co.uk/hero-page-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Karol Digital Website Pricing",
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
  name: "Website Design & Digital Growth Services",
  description:
    "Flexible web design and digital growth services for UK businesses, including Website Growth Audits, Starter, Growth, Premium, and Enterprise solutions.",
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
    offerCount: "6",
    offers: [
      {
        "@type": "Offer",
        name: "Website Growth Audit",
        price: "95",
        priceCurrency: "GBP",
        description:
          "A practical review of your website covering messaging, structure, speed, SEO, and lead generation opportunities.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Starter Lite Website Package",
        price: "450",
        priceCurrency: "GBP",
        description:
          "A lean 1-3 page professional website for new businesses or simple service offers, including mobile responsiveness, contact form, and basic SEO setup.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Starter Website Package",
        price: "795",
        priceCurrency: "GBP",
        description:
          "A professional 5-7 page website for local businesses and growing service brands, including CMS setup, responsive design, and core SEO setup.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Growth Website Package",
        price: "1750",
        priceCurrency: "GBP",
        description:
          "A conversion-focused website package for businesses that need more enquiries, including conversion UX on key pages, priority on-page SEO, performance tuning, and lead capture systems.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Premium Website Package",
        price: "3200",
        priceCurrency: "GBP",
        description:
          "A complete digital growth system with branding, custom pages, advanced development, and conversion strategy for established brands ready to scale.",
        url: "https://www.karoldigital.co.uk/pricing",
      },
      {
        "@type": "Offer",
        name: "Enterprise Website & Ecommerce Solution",
        price: "6000",
        priceCurrency: "GBP",
        description:
          "Custom enterprise websites and ecommerce systems with advanced integrations, CRM connectivity, payment systems, and high-level security.",
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
//website updated
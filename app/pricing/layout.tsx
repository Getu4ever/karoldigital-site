// /app/pricing/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Pricing & Packages – Karol Digital",
  description:
    "Transparent and affordable website pricing for UK small businesses. Explore Starter, Growth and Premium web design packages plus digital marketing services.",
  alternates: {
    canonical: "https://www.karoldigital.co.uk/pricing",
  },
  openGraph: {
    images: "/hero-page-banner.jpg",
  },
};

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Karol Digital Web Design Pricing",
  "url": "https://www.karoldigital.co.uk/pricing",
  "numberOfItems": 3,
  "itemListElement": [
    {
      "@type": "Product",
      "position": 1,
      "name": "Starter Web Design Package",
      "description": "Professional 3-page responsive website. Ideal for startups needing a high-impact digital presence with a fast turnaround.",
      "image": "https://www.karoldigital.co.uk/hero-page-banner.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Karol Digital"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "GBP",
        "lowPrice": "150",
        "highPrice": "300",
        "offerCount": "1",
        "availability": "https://schema.org/InStock",
        "url": "https://www.karoldigital.co.uk/pricing"
      }
    },
    {
      "@type": "Product",
      "position": 2,
      "name": "Growth Web Design Package",
      "description": "Comprehensive 6-page SEO-optimized website featuring speed enhancements, third-party integrations, and an AI chatbot.",
      "image": "https://www.karoldigital.co.uk/hero-page-banner.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Karol Digital"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "GBP",
        "lowPrice": "350",
        "highPrice": "600",
        "offerCount": "1",
        "availability": "https://schema.org/InStock",
        "url": "https://www.karoldigital.co.uk/pricing"
      }
    },
    {
      "@type": "Product",
      "position": 3,
      "name": "Premium Web Design Package",
      "description": "Bespoke high-performance website with custom animations, advanced SEO strategy, blog integration, and advanced AI automation.",
      "image": "https://www.karoldigital.co.uk/hero-page-banner.jpg",
      "brand": {
        "@type": "Brand",
        "name": "Karol Digital"
      },
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "GBP",
        "lowPrice": "650",
        "highPrice": "1200",
        "offerCount": "1",
        "availability": "https://schema.org/InStock",
        "url": "https://www.karoldigital.co.uk/pricing"
      }
    }
  ]
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
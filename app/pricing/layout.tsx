// /app/pricing/layout.tsx

// Remove this import line entirely:
// import { generateSEOMetadata } from "@/components/seo-server";

// Use the standard 'metadata' object supported by Next.js 14
export const metadata = {
  title: "Website Pricing & Packages – Karol Digital",
  description:
    "Transparent and affordable website pricing for UK small businesses. Explore Starter, Growth and Premium web design packages plus digital marketing services.",
  // Add the canonical URL and image URL directly:
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
  name: "Karol Digital Web Design Pricing",
  url: "https://www.karoldigital.co.uk/pricing",
  itemListElement: [
    {
      "@type": "Product",
      name: "Starter Web Design Package",
      description:
        "Up to 3 pages, mobile responsive, basic contact form, perfect for new businesses.",
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "150-300",
        url: "https://www.karoldigital.co.uk/pricing",
      },
    },
    {
      "@type": "Product",
      name: "Growth Web Design Package",
      description:
        "Up to 6 pages, SEO, speed optimisation, integrations and basic AI chatbot.",
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "350-600",
        url: "https://www.karoldigital.co.uk/pricing",
      },
    },
    {
      "@type": "Product",
      name: "Premium Web Design Package",
      description:
        "Custom functionality, advanced SEO, animations, blog integration and advanced chatbot.",
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: "650-1200",
        url: "https://www.karoldigital.co.uk/pricing",
      },
    },
  ],
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

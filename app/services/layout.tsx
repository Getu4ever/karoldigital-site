// /services/layout.tsx

export const metadata = {
  title: "Web Design & Digital Services Pricing – Karol Digital",
  description:
    "Explore affordable web design packages, maintenance plans, social media setup and digital marketing services. Transparent pricing for small businesses across the UK.",
  alternates: {
    canonical: "https://www.karoldigital.co.uk/services",
  },
};

// Breadcrumb Schema for SEO + sitelinks
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.karoldigital.co.uk",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.karoldigital.co.uk/services",
    },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {children}
    </>
  );
}

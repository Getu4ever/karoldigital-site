// /app/news/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Digital Marketing News – SEO, Social Media & Web Updates | Karol Digital",
  description:
    "Stay updated with the latest digital marketing insights, SEO trends, social media updates, and web industry news. Curated automatically by Karol Digital.",
  url: "https://www.karoldigital.co.uk/news",
  image: "/hero-page-banner.jpg",
});

// Breadcrumb Schema for News home
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
      name: "News",
      item: "https://www.karoldigital.co.uk/news",
    },
  ],
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
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

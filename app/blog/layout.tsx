// /app/blog/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Karol Digital Blog – Web Design & Lead Generation for UK Service Businesses",
  description:
    "Read practical guides on web design, SEO, conversion, and digital growth for UK service businesses. Updated regularly by Karol Digital.",
  url: "https://www.karoldigital.co.uk/blog",
  image: "/hero-page-banner.jpg",
});

// Breadcrumb Schema for Blog home
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
      name: "Blog",
      item: "https://www.karoldigital.co.uk/blog",
    },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
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

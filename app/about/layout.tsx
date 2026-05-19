// /about/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Karol Digital – Web Design for UK Small Businesses",
  description:
    "Affordable, SEO-ready websites and growth-focused digital marketing for UK small businesses. Meet our team and request a free project quote today.",
  alternates: {
    canonical: "https://www.karoldigital.co.uk/about",
  },
  openGraph: {
    title: "About Karol Digital",
    description:
      "Learn about Karol Digital’s mission to support small businesses with professional and affordable web design.",
    url: "https://www.karoldigital.co.uk/about",
    images: [
      {
        url: "/about-team.jpg",
        width: 1200,
        height: 630,
        alt: "Karol Digital Team",
      },
    ],
    type: "website",
  },
};

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
      name: "About",
      item: "https://www.karoldigital.co.uk/about",
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Breadcrumb schema for improved Google sitelinks */}
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
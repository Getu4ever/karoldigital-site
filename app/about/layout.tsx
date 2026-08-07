// /about/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Karol Digital | Premium Small Business App Developers & Custom Web Engineering UK",
  description:
    "About Karol Digital — premium small business app developers and high-performance e-commerce developers. Custom web engineering UK for ambitious businesses ready to move beyond slow templates.",
  keywords: [
    "About Karol Digital",
    "Premium Small Business App Developers",
    "Custom Web Engineering UK",
    "High-Performance E-Commerce Developers",
  ],
  alternates: {
    canonical: "https://www.karoldigital.co.uk/about",
  },
  openGraph: {
    title:
      "About Karol Digital | Premium Small Business App Developers & Custom Web Engineering UK",
    description:
      "Meet Karol Digital — a high-performance technical partner building custom websites, e-commerce platforms, and mobile apps for ambitious small businesses.",
    url: "https://www.karoldigital.co.uk/about",
    images: [
      {
        url: "/about-our-story.webp",
        width: 1200,
        height: 630,
        alt: "About Karol Digital — high-performance technical partner",
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

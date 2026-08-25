import type { Metadata } from "next";
import { formatSeoTitle } from "@/components/seo-server";

const title = formatSeoTitle("Digital Marketing & SEO News");
const description =
  "Curated digital marketing and SEO headlines. For original Karol Digital advice, visit the blog.";

export const metadata: Metadata = {
  title,
  description,
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.karoldigital.co.uk/news",
  },
  openGraph: {
    title,
    description,
    url: "https://www.karoldigital.co.uk/news",
    images: [{ url: "/heroes/news.png" }],
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
      name: "News",
      item: "https://www.karoldigital.co.uk/news",
    },
  ],
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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

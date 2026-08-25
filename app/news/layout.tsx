import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Digital Marketing & SEO News",
  description:
    "Curated digital marketing and SEO headlines. For original Karol Digital advice, visit the blog.",
  url: "https://www.karoldigital.co.uk/news",
  image: "/heroes/news.png",
  noIndex: true,
});

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

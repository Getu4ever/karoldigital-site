import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Book a Free Website Consultation | Karol Digital",
  description:
    "Book a free consultation with Karol Digital. Discuss web design, development, audits, or marketing for your UK service business.",
  url: "https://www.karoldigital.co.uk/book",
  image: "/hero-page-banner.jpg",
});

const bookBreadcrumbJsonLd = {
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
      name: "Book",
      item: "https://www.karoldigital.co.uk/book",
    },
  ],
};

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookBreadcrumbJsonLd),
        }}
      />
      {children}
    </>
  );
}

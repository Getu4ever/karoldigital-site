import { generateSEOMetadata } from "@/components/seo-server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = generateSEOMetadata({
  title: "Book Your Project Discovery | Karol Digital",
  description:
    "Start your growth blueprint. Book a consultation with Karol Digital to discuss your custom web development, design, or marketing needs.",
  url: "https://www.karoldigital.co.uk/book",
  image: "/hero-page-banner.jpg",
});

// Breadcrumb Schema for the Book page
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
      {/* Breadcrumb Schema for SEO & Sitelinks */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(bookBreadcrumbJsonLd),
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
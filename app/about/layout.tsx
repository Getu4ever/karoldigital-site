import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { aboutFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "About Karol Digital | UK Web Design Studio",
  description:
    "Meet Karol, web designer at Karol Digital — a London web design studio building high-performance websites for UK service businesses that need trust, clarity, and more enquiries.",
  url: "https://www.karoldigital.co.uk/about",
  image: "/about-our-story.webp",
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
      name: "About",
      item: "https://www.karoldigital.co.uk/about",
    },
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {children}
      <GeoExtras faqs={aboutFaqs} title="About Karol Digital FAQ" />
    </>
  );
}

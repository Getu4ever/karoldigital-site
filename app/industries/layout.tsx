import { getPageMetadata } from "@/components/seo-server";
import { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("industries");

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
      name: "Industries",
      item: "https://www.karoldigital.co.uk/industries",
    },
  ],
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

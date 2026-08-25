import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Contact Karol Digital | Book a Call",
  description:
    "Contact Karol Digital for a free website consultation. Call 07565 472445 or email info@karoldigital.co.uk — London-based, serving UK service businesses.",
  url: "https://www.karoldigital.co.uk/contact",
  image: "/heroes/contact.png",
  keywords:
    "contact Karol Digital, website consultation UK, book web design call London",
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
      name: "Contact",
      item: "https://www.karoldigital.co.uk/contact",
    },
  ],
};

export default function ContactLayout({
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

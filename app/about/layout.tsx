// /about/layout.tsx

export const metadata = {
  title: "About Karol Digital – Small Business Web Design Studio",
  description:
    "Discover the story behind Karol Digital and our mission to make professional web design and digital marketing accessible to small businesses across the UK.",
  alternates: {
    canonical: "https://www.karoldigital.co.uk/about",
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

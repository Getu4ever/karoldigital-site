// /about/layout.tsx

export const metadata = {
  title: "About Karol Digital – Web Design for UK Small Businesses",
  description:
    "Learn how Karol Digital helps UK small businesses with affordable, SEO‑ready websites and growth-focused digital marketing. Meet the team and request a free quote.",
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

import { generateSEOMetadata } from "@/components/seo-server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = generateSEOMetadata({
  title: "High-Performance Website Engineering | Karol Digital",
  description:
    "Custom high-performance website engineering for speed, security, and scalability. Premium builds that convert — without template bloat.",
  url: "https://www.karoldigital.co.uk/services/nextjs-development",
  image: "/services-high-performance-engineering.webp",
  keywords:
    "high-performance website engineering UK, fast secure custom websites, scalable web development for small business",
});

const nextjsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.karoldigital.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.karoldigital.co.uk/services" },
      { "@type": "ListItem", "position": 3, "name": "Next.js Development", "item": "https://www.karoldigital.co.uk/services/nextjs-development" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "High-Performance Website Engineering",
    "applicationCategory": "Web Development",
    "description": "Custom website engineering focused on speed, security, search visibility, and long-term scalability.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    },
    "areaServed": { "@type": "Country", "name": "United Kingdom" }
  }
];

export default function NextJSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(nextjsSchema),
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}

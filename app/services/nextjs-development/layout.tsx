import { generateSEOMetadata } from "@/components/seo-server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = generateSEOMetadata({
  title: "Next.js Development Services | High-Performance Web Apps | Karol Digital",
  description:
    "Expert Next.js development for fast, secure, and scalable web applications. Improve your SEO and user experience with our custom-coded solutions.",
  url: "https://www.karoldigital.co.uk/services/nextjs-development",
  image: "/service-nextjs.jpg",
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
    "name": "Next.js Development Service",
    "applicationCategory": "Web Development",
    "description": "High-performance web development using the Next.js framework for superior SEO, speed, and scalability.",
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
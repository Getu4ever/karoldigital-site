import { generateSEOMetadata } from "@/components/seo-server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = generateSEOMetadata({
  title: "Custom Web Development | Karol Digital",
  description:
    "Expert custom web development services. We build high-performance, secure, and scalable web applications tailored to your unique business workflows.",
  url: "https://www.karoldigital.co.uk/services/custom-web-development",
  image: "/service-custom-dev.jpg",
});

const customDevSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.karoldigital.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.karoldigital.co.uk/services" },
      { "@type": "ListItem", "position": 3, "name": "Custom Web Development", "item": "https://www.karoldigital.co.uk/services/custom-web-development" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development",
    "serviceType": "Bespoke Web Application Development",
    "description": "High-performance, secure, and custom-coded digital applications tailored to specific business goals.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    },
    "areaServed": { "@type": "Country", "name": "United Kingdom" }
  }
];

export default function CustomDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(customDevSchema),
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
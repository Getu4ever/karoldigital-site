import { generateSEOMetadata } from "@/components/seo-server";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 1. Update metadata for each specific service page
export const metadata = generateSEOMetadata({
  title: "Service Name | Karol Digital",
  description: "Brief, punchy description of this specific service for search engines.",
  url: "https://www.karoldigital.co.uk/services/your-slug",
  image: "/service-image.jpg",
});

// 2. Define schema specific to the service
const serviceSchema = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.karoldigital.co.uk" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.karoldigital.co.uk/services" },
      { "@type": "ListItem", "position": 3, "name": "Service Name", "item": "https://www.karoldigital.co.uk/services/your-slug" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Service Name",
    "description": "Descriptive text about what the service offers.",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Karol Digital",
      "url": "https://www.karoldigital.co.uk"
    }
  }
];

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
}
// /app/web-design-catering/layout.tsx
import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Web Design for Caterers & Food Businesses UK | Karol Digital",
  description:
    "Delicious, high-performance websites for UK caterers and meal prep services. Integrate online ordering, menu galleries, and booking systems for your food business.",
  url: "https://www.karoldigital.co.uk",
  image: "/catering-hero-bg.jpg",
});

const cateringSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Web Design for Hospitality & Catering",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Karol Digital"
  },
  "description": "Specialised web design for UK catering firms. Features include digital menus, online ordering integration, and SEO for food services.",
  "areaServed": "UK"
};

export default function CateringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cateringSchema) }}
      />
      {children}
    </>
  );
}

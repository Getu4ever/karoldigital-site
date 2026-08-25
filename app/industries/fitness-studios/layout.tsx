import { generateSEOMetadata } from "@/components/seo-server";
import GeoExtras from "@/components/GeoExtras";
import { fitnessFaqs } from "@/lib/page-faqs";

export const metadata = generateSEOMetadata({
  title: "Fitness & Wellness Studio Websites | Karol Digital",
  description:
    "High-performance websites and e-commerce for UK fitness and wellness studios. Custom web development with online class booking — featuring Wild Hearts Collective.",
  url: "https://www.karoldigital.co.uk/industries/fitness-studios",
  image: "/heroes/fitness-studios.png",
});

const fitnessServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fitness & Wellness Studio Website Development",
  serviceType: "High-Performance Website Development & E-commerce",
  description:
    "Custom web development and e-commerce for UK fitness, aerial, and wellness studios — including online class booking, clear class discovery, and conversion-focused design.",
  image: "https://www.karoldigital.co.uk/heroes/fitness-studios.png",
  provider: {
    "@type": "ProfessionalService",
    name: "Karol Digital",
    url: "https://www.karoldigital.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "GB",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
};

export default function FitnessStudiosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(fitnessServiceSchema),
        }}
      />
      {children}
      <GeoExtras faqs={fitnessFaqs} title="Fitness studio website FAQ" />
    </>
  );
}

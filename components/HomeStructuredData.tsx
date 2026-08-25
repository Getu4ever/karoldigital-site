import JsonLd from "@/components/JsonLd";
import { homeFaqs, homeTestimonials } from "@/lib/home-content";
import {
  ORG_ID,
  PREFERRED_CITATION,
  SITE_ORIGIN,
  WEBSITE_ID,
  faqPageJsonLd,
} from "@/lib/geo";

const homeWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_ORIGIN}/#webpage`,
  url: `${SITE_ORIGIN}/`,
  name: "Web Design for UK Service Businesses | Karol Digital",
  description: PREFERRED_CITATION,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".geo-citation"],
  },
};

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@graph": homeTestimonials.map((item) => ({
    "@type": "Review",
    author: {
      "@type": "Organization",
      name: item.author,
    },
    reviewBody: item.quote,
    itemReviewed: {
      "@type": "ProfessionalService",
      "@id": ORG_ID,
      name: "Karol Digital",
    },
  })),
};

export default function HomeStructuredData() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(homeFaqs)} />
      <JsonLd data={homeWebPageJsonLd} />
      <JsonLd data={reviewJsonLd} />
    </>
  );
}

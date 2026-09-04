import JsonLd from "@/components/JsonLd";
import { homeFaqs, homeTestimonials } from "@/lib/home-content";
import {
  ALL_DISCOVERABILITY_FAQS,
  discoverabilityItemListJsonLd,
} from "@/lib/discoverability";
import {
  CORE_OFFER_ANSWER,
  ORG_ID,
  SITE_ORIGIN,
  WEBSITE_ID,
  coreOfferServiceJsonLd,
  faqPageJsonLd,
} from "@/lib/geo";

const homeWebPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_ORIGIN}/#webpage`,
  url: `${SITE_ORIGIN}/`,
  name: "Web Design for Pole & Aerial Studios — Custom Studio Booking Systems UK",
  description: CORE_OFFER_ANSWER,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  mainEntity: { "@id": `${SITE_ORIGIN}/industries/fitness-studios#service` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      ".geo-citation",
      ".geo-offer",
      ".geo-keyword-answers",
      "h1",
    ],
  },
  keywords:
    "web design for pole and aerial studios, custom studio booking systems UK, custom timetables for dance studios, replacing Bookwhen TeamUp custom website, high-converting studio websites London, local business SEO agency London",
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
      <JsonLd data={faqPageJsonLd([...ALL_DISCOVERABILITY_FAQS, ...homeFaqs])} />
      <JsonLd data={homeWebPageJsonLd} />
      <JsonLd data={coreOfferServiceJsonLd()} />
      <JsonLd data={discoverabilityItemListJsonLd()} />
      <JsonLd data={reviewJsonLd} />
    </>
  );
}

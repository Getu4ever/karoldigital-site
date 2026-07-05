import { homeFaqs, homeTestimonials } from "@/lib/home-content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

const reviewsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Karol Digital",
  url: "https://www.karoldigital.co.uk",
  review: homeTestimonials.map(({ quote, author }) => ({
    "@type": "Review",
    author: {
      "@type": "Organization",
      name: author,
    },
    reviewBody: quote,
  })),
};

export default function HomeStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
    </>
  );
}

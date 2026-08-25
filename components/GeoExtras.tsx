import JsonLd from "@/components/JsonLd";
import PageFaqs from "@/components/PageFaqs";
import { faqPageJsonLd, type FaqItem } from "@/lib/geo";

export default function GeoExtras({
  faqs,
  title,
  showFaqs = true,
}: {
  faqs: readonly FaqItem[];
  title?: string;
  showFaqs?: boolean;
}) {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      {showFaqs ? <PageFaqs title={title} items={faqs} /> : null}
    </>
  );
}

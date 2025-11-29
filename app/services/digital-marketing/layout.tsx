// /app/services/digital-marketing/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Digital Marketing for Small Businesses – Karol Digital",
  description:
    "Practical digital marketing support for small businesses, including SEO guidance, email marketing setup, content ideas and growth strategies.",
  url: "https://www.karoldigital.co.uk/services/digital-marketing",
  image: "/hero-page-banner.jpg",
});

export default function DigitalMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

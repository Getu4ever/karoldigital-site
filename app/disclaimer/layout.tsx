// /app/disclaimer/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Disclaimer – Karol Digital",
  description:
    "Read Karol Digital’s Disclaimer outlining accuracy, liability limits, external links and the use of information on our website.",
  url: "https://www.karoldigital.co.uk/disclaimer",
  image: "/hero-page-banner.jpg",
});

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

// /app/contact/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Contact Karol Digital – Get in Touch Today",
  description:
    "Have questions about web design, digital services or pricing? Contact Karol Digital for friendly support and expert guidance.",
  url: "https://www.karoldigital.co.uk/contact",
  image: "/hero-page-banner.jpg",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

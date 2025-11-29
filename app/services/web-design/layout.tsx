// /app/services/web-design/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Web Design Services for Small Businesses – Karol Digital",
  description:
    "Affordable, mobile-friendly web design services for small businesses. Choose from Starter, Growth or Premium packages created to fit your goals and budget.",
  url: "https://www.karoldigital.co.uk/services/web-design",
  image: "/hero-page-banner.jpg",
});

export default function WebDesignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

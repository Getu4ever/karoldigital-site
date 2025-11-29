// /app/blog/layout.tsx

import { generateSEOMetadata } from "@/components/seo-server";

export const metadata = generateSEOMetadata({
  title: "Karol Digital Blog – Tips for Small Business Growth",
  description:
    "Read practical guides, insights, and digital marketing tips to help UK small businesses grow online. Updated regularly by Karol Digital.",
  url: "https://www.karoldigital.co.uk/blog",
  image: "/hero-page-banner.jpg",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

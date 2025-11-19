// components/seo-server.ts
import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article"; // 👈 for blog posts we’ll use "article"
}

export function generateSEOMetadata({
  title = "Karol Digital — Affordable Web Design & Digital Marketing",
  description = "Professional and affordable web design, social media setup and digital marketing.",
  keywords = "web design, digital marketing, small business websites, SEO, WordPress design",
  image = "/seo-cover.jpg",
  url = "https://www.karoldigital.co.uk/",
  type = "website",
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      type, // 👈 "website" by default, "article" for posts
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

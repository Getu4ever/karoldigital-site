"use client";

import Head from "next/head";
import type { Metadata } from "next";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

/* ============================================================
   1️⃣ — React Component (for <SEO /> inside pages)
   ============================================================ */
export default function SEO({
  title = "Karol Digital — Affordable Web Design & Digital Marketing",
  description = "Professional and affordable web design, social media setup and digital marketing for small businesses.",
  keywords = "web design, digital marketing, social media setup, small business websites, WordPress design, affordable websites",
  image = "/seo-cover.jpg",
  url = "https://www.karoldigital.co.uk/",
}: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </Head>
  );
}

/* ============================================================
   2️⃣ — Metadata Generator (for App Router)
   ============================================================ */
export function generateSEO({
  title = "Karol Digital — Affordable Web Design & Digital Marketing",
  description = "Professional and affordable web design, social media setup and digital marketing for small businesses.",
  keywords = "web design, digital marketing, social media setup, small business websites, WordPress design, affordable websites",
  image = "/seo-cover.jpg",
  url = "https://www.karoldigital.co.uk/",
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
      type: "website",
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

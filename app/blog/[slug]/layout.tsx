// /app/blog/[slug]/layout.tsx

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const slug = params.slug;
  const articleUrl = `https://www.karoldigital.co.uk/blog/${slug}`;

  // Fetch minimal metadata-required fields
  const post = await client.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{
      title,
      publishedAt,
      "imageUrl": mainImage.asset->url,
      author->{ name }
    }`,
    { slug }
  );

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.karoldigital.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.karoldigital.co.uk/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post?.title || slug,
        item: articleUrl,
      },
    ],
  };

  // BlogPosting Schema (pulls OG image + dates from Sanity)
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post?.title,
    image: post?.imageUrl ? [post.imageUrl] : [],
    datePublished: post?.publishedAt,
    dateModified: post?.publishedAt,
    author: {
      "@type": "Person",
      name: post?.author?.name || "Karol Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Karol Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.karoldigital.co.uk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    url: articleUrl,
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      {children}
    </>
  );
}

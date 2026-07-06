import type { Metadata } from "next";
import { formatSeoTitle, generateSEOMetadata } from "@/components/seo-server";
import { getBlogPostSeo } from "@/lib/sanity-blog";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostSeo(slug);

  if (!post) {
    return { title: formatSeoTitle("Blog Post") };
  }

  const title = post.seoTitle || post.title;
  const description =
    post.seoDescription ||
    post.subtitle ||
    "Practical web design and lead generation advice for UK service businesses.";
  const image = post.seoImageUrl || post.imageUrl || "/hero-page-banner.jpg";
  const url = `https://www.karoldigital.co.uk/blog/${slug}`;

  return generateSEOMetadata({
    title,
    description,
    url,
    image,
    type: "article",
    keywords: post.seoKeywords?.join(", "),
  });
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleUrl = `https://www.karoldigital.co.uk/blog/${slug}`;
  const post = await getBlogPostSeo(slug);

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

  const articleJsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.seoTitle || post.title,
        description: post.seoDescription || post.subtitle,
        image: post.seoImageUrl || post.imageUrl ? [post.seoImageUrl || post.imageUrl] : [],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          "@type": "Person",
          name: post.authorName || "Karol Digital",
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
        keywords: post.seoKeywords?.join(", "),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleJsonLd),
          }}
        />
      )}
      {children}
    </>
  );
}

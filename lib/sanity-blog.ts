import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { PortableTextBlock } from "@portabletext/types";

export interface BlogPostSeo {
  title: string;
  subtitle?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
  publishedAt?: string;
  updatedAt?: string;
  authorName?: string;
  imageUrl?: string;
  imageAlt?: string;
  seoImageUrl?: string;
}

export interface BlogPostListItem {
  title: string;
  subtitle?: string;
  publishedAt: string;
  slug: string;
  imageUrl?: string;
  imageAlt?: string;
  seoKeywords?: string[];
}

export interface BlogPostDetail extends BlogPostSeo {
  body: PortableTextBlock[];
  likes?: number;
  comments?: {
    name: string;
    comment: string;
    date: string;
  }[];
}

const postFields = groq`
  title,
  subtitle,
  seoTitle,
  seoDescription,
  seoKeywords,
  publishedAt,
  "updatedAt": _updatedAt,
  authorName,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  "seoImageUrl": seoImage.asset->url
`;

const listFields = groq`
  title,
  subtitle,
  publishedAt,
  "slug": slug.current,
  "imageUrl": mainImage.asset->url,
  "imageAlt": mainImage.alt,
  seoKeywords
`;

function scoreRelatedPost(
  keywords: string[] | null | undefined,
  candidate: BlogPostListItem
): number {
  if (!keywords?.length || !candidate.seoKeywords?.length) return 0;
  return candidate.seoKeywords.filter((keyword) => keywords.includes(keyword)).length;
}

export function pickRelatedPosts(
  slug: string,
  keywords: string[] | null | undefined,
  candidates: BlogPostListItem[]
): BlogPostListItem[] {
  const others = candidates.filter((item) => item.slug !== slug);

  const ranked = [...others].sort((a, b) => {
    const scoreDiff = scoreRelatedPost(keywords, b) - scoreRelatedPost(keywords, a);
    if (scoreDiff !== 0) return scoreDiff;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return ranked.slice(0, 3);
}

export async function getBlogPostSeo(slug: string): Promise<BlogPostSeo | null> {
  return client.fetch(
    groq`*[_type == "blogPost" && slug.current == $slug][0]{ ${postFields} }`,
    { slug }
  );
}

export async function getBlogPostsForSitemap(): Promise<
  { slug: string; publishedAt?: string; updatedAt?: string }[]
> {
  return client.fetch(
    groq`*[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current,
      publishedAt,
      "updatedAt": _updatedAt
    }`
  );
}

export async function getBlogIndexPosts(): Promise<BlogPostListItem[]> {
  return client.fetch(
    groq`*[_type == "blogPost"] | order(publishedAt desc){ ${listFields} }`
  );
}

export async function getBlogPostBySlug(slug: string): Promise<{
  post: BlogPostDetail | null;
  related: BlogPostListItem[];
}> {
  const data = await client.fetch(
    groq`{
      "post": *[_type == "blogPost" && slug.current == $slug][0]{
        ${postFields},
        body[]{
          ...,
          _type == "image" => {
            ...,
            asset->{ _id, url }
          }
        },
        likes,
        "comments": comments[approved == true]{
          name,
          comment,
          date
        }
      },
      "candidates": *[_type == "blogPost" && slug.current != $slug]
        | order(publishedAt desc){ ${listFields} }
    }`,
    { slug }
  );

  const related = pickRelatedPosts(slug, data.post?.seoKeywords, data.candidates || []);

  return { post: data.post, related };
}

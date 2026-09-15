import { createClient } from "@sanity/client";
import { SITE_ORIGIN } from "@/lib/geo";
import type { BlogSharePayload } from "@/lib/social/types";

const writeClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pols4r9z",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN || process.env.SANITY_API_READ_TOKEN,
});

type SanityBlogDoc = {
  _id?: string;
  _type?: string;
  title?: string;
  subtitle?: string;
  seoDescription?: string;
  publishedAt?: string;
  seoKeywords?: string[];
  slug?: { current?: string } | string;
  mainImage?: {
    alt?: string;
    asset?: { _ref?: string; url?: string };
  };
  "imageUrl"?: string;
  "imageAlt"?: string;
  "slugCurrent"?: string;
};

function slugFrom(doc: SanityBlogDoc): string | undefined {
  if (typeof doc.slug === "string") return doc.slug;
  if (doc.slugCurrent) return doc.slugCurrent;
  if (doc.slug && typeof doc.slug === "object") return doc.slug.current;
  return undefined;
}

function isPublished(doc: SanityBlogDoc): boolean {
  if (!doc.publishedAt) return false;
  const when = new Date(doc.publishedAt).getTime();
  if (Number.isNaN(when)) return false;
  return when <= Date.now() + 60_000; // allow slight clock skew
}

/**
 * Normalise a Sanity webhook body (projection or raw document) into share payload.
 * Falls back to a GROQ fetch when the webhook only sends an id.
 */
export async function resolveBlogSharePayload(
  body: unknown
): Promise<BlogSharePayload | null> {
  const raw = (body || {}) as SanityBlogDoc & {
    _id?: string;
    ids?: string[];
    documentId?: string;
  };

  let doc: SanityBlogDoc | null = raw;

  const id =
    raw._id ||
    raw.documentId ||
    (Array.isArray(raw.ids) ? raw.ids[0] : undefined);

  const needsFetch =
    Boolean(id) &&
    (!raw.title || !slugFrom(raw) || (!raw.imageUrl && !raw.mainImage));

  if (needsFetch && id) {
    doc = await writeClient.fetch(
      `*[_id == $id || _id == $draftId][0]{
        _id,
        _type,
        title,
        subtitle,
        seoDescription,
        publishedAt,
        seoKeywords,
        "slugCurrent": slug.current,
        "imageUrl": coalesce(mainImage.asset->url, seoImage.asset->url),
        "imageAlt": coalesce(mainImage.alt, seoImage.alt, title)
      }`,
      {
        id: id.replace(/^drafts\./, ""),
        draftId: id.startsWith("drafts.") ? id : `drafts.${id}`,
      }
    );
  }

  if (!doc || doc._type !== "blogPost") {
    // Webhook may omit _type when using a projection — still accept if slug/title exist
    if (!doc?.title || !slugFrom(doc || {})) return null;
  }

  const slug = slugFrom(doc!);
  const title = doc!.title?.trim();
  if (!slug || !title) return null;

  // Only syndicate published (non-draft) documents with a publishedAt in the past/now
  const isDraftId = Boolean(doc!._id?.startsWith("drafts."));
  if (isDraftId || !isPublished(doc!)) {
    return null;
  }

  const excerpt =
    doc!.subtitle?.trim() ||
    doc!.seoDescription?.trim() ||
    "New from the Karol Digital blog.";

  const imageUrl =
    doc!.imageUrl ||
    (typeof doc!.mainImage?.asset?.url === "string"
      ? doc!.mainImage.asset.url
      : undefined);

  return {
    sanityId: (doc!._id || id || slug).replace(/^drafts\./, ""),
    title,
    slug,
    excerpt,
    permalink: `${SITE_ORIGIN}/blog/${slug}`,
    imageUrl,
    imageAlt: doc!.imageAlt || doc!.mainImage?.alt || title,
    publishedAt: doc!.publishedAt,
    keywords: doc!.seoKeywords,
  };
}

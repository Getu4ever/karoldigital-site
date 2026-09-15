export type SocialPlatform = "facebook" | "linkedin" | "instagram";

export type BlogSharePayload = {
  sanityId: string;
  title: string;
  slug: string;
  excerpt: string;
  permalink: string;
  imageUrl?: string;
  imageAlt?: string;
  publishedAt?: string;
  keywords?: string[];
};

export type PlatformPublishResult = {
  platform: SocialPlatform;
  ok: boolean;
  skipped?: boolean;
  externalPostId?: string;
  postUrl?: string;
  error?: string;
};

export type SyndicateResult = {
  slug: string;
  results: PlatformPublishResult[];
};

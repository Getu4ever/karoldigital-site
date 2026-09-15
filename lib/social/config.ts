function required(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value || undefined;
}

export type SocialConfig = {
  enabled: boolean;
  webhookSecret?: string;
  /** Shared secret for manual syndicate / retry routes. */
  apiSecret?: string;
  facebook: {
    enabled: boolean;
    pageId?: string;
    accessToken?: string;
    graphVersion: string;
  };
  instagram: {
    enabled: boolean;
    igUserId?: string;
    accessToken?: string;
    graphVersion: string;
  };
  linkedin: {
    enabled: boolean;
    accessToken?: string;
    /** urn:li:person:{id} or plain person id */
    authorUrn?: string;
    apiVersion: string;
  };
};

export function getSocialConfig(): SocialConfig {
  const graphVersion =
    required("META_GRAPH_API_VERSION") || "v22.0";
  const linkedInVersion =
    required("LINKEDIN_API_VERSION") || "202503";

  const facebookPageId = required("FACEBOOK_PAGE_ID");
  const facebookToken = required("FACEBOOK_PAGE_ACCESS_TOKEN");
  const igUserId = required("INSTAGRAM_BUSINESS_ACCOUNT_ID");
  const igToken =
    required("INSTAGRAM_ACCESS_TOKEN") || facebookToken;
  const linkedInToken = required("LINKEDIN_ACCESS_TOKEN");
  const linkedInAuthor =
    required("LINKEDIN_AUTHOR_URN") || required("LINKEDIN_PERSON_ID");

  return {
    enabled: required("SOCIAL_SYNDICATION_ENABLED") !== "false",
    webhookSecret: required("SANITY_WEBHOOK_SECRET"),
    apiSecret:
      required("SOCIAL_SYNDICATION_SECRET") || required("CRON_SECRET"),
    facebook: {
      enabled:
        required("FACEBOOK_SYNDICATION_ENABLED") !== "false" &&
        Boolean(facebookPageId && facebookToken),
      pageId: facebookPageId,
      accessToken: facebookToken,
      graphVersion,
    },
    instagram: {
      enabled:
        required("INSTAGRAM_SYNDICATION_ENABLED") !== "false" &&
        Boolean(igUserId && igToken),
      igUserId,
      accessToken: igToken,
      graphVersion,
    },
    linkedin: {
      // Opt-in only — LinkedIn app review / ID verify can be done later.
      enabled:
        required("LINKEDIN_SYNDICATION_ENABLED") === "true" &&
        Boolean(linkedInToken && linkedInAuthor),
      accessToken: linkedInToken,
      authorUrn: linkedInAuthor
        ? linkedInAuthor.startsWith("urn:li:")
          ? linkedInAuthor
          : `urn:li:person:${linkedInAuthor}`
        : undefined,
      apiVersion: linkedInVersion,
    },
  };
}

export function assertWebhookConfigured(config: SocialConfig): void {
  if (!config.webhookSecret) {
    throw new Error(
      "SANITY_WEBHOOK_SECRET is not set — refusing unsigned Sanity webhooks"
    );
  }
}

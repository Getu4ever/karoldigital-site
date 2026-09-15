import type { BlogSharePayload } from "@/lib/social/types";
import { formatFacebookCaption } from "@/lib/social/format";
import type { SocialConfig } from "@/lib/social/config";
import type { PlatformPublishResult } from "@/lib/social/types";

type GraphError = {
  error?: { message?: string; code?: number; type?: string };
};

async function graphPost(
  path: string,
  token: string,
  version: string,
  body: Record<string, string>
): Promise<Record<string, unknown>> {
  const url = new URL(`https://graph.facebook.com/${version}/${path}`);
  url.searchParams.set("access_token", token);

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(body),
  });

  const json = (await response.json()) as Record<string, unknown> & GraphError;
  if (!response.ok || json.error) {
    throw new Error(
      json.error?.message ||
        `Facebook Graph error (${response.status}) on ${path}`
    );
  }
  return json;
}

/**
 * Publish to a Facebook Page feed with message + link.
 * Uses a long-lived Page access token.
 */
export async function publishFacebookPost(
  post: BlogSharePayload,
  config: SocialConfig["facebook"]
): Promise<PlatformPublishResult> {
  if (!config.enabled || !config.pageId || !config.accessToken) {
    return {
      platform: "facebook",
      ok: true,
      skipped: true,
      error: "Facebook syndication disabled or missing credentials",
    };
  }

  try {
    const result = await graphPost(
      `${config.pageId}/feed`,
      config.accessToken,
      config.graphVersion,
      {
        message: formatFacebookCaption(post),
        link: post.permalink,
      }
    );

    const id = typeof result.id === "string" ? result.id : undefined;
    return {
      platform: "facebook",
      ok: true,
      externalPostId: id,
      postUrl: id ? `https://www.facebook.com/${id}` : undefined,
    };
  } catch (error) {
    return {
      platform: "facebook",
      ok: false,
      error: error instanceof Error ? error.message : "Facebook publish failed",
    };
  }
}

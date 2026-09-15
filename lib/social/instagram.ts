import type { BlogSharePayload, PlatformPublishResult } from "@/lib/social/types";
import { formatInstagramCaption } from "@/lib/social/format";
import type { SocialConfig } from "@/lib/social/config";

type GraphError = {
  error?: { message?: string };
  status_code?: string;
  id?: string;
};

async function graphRequest(
  method: "GET" | "POST",
  path: string,
  token: string,
  version: string,
  params: Record<string, string> = {}
): Promise<Record<string, unknown> & GraphError> {
  const url = new URL(`https://graph.facebook.com/${version}/${path}`);
  url.searchParams.set("access_token", token);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }

  const response = await fetch(url, { method });
  const json = (await response.json()) as Record<string, unknown> & GraphError;
  if (!response.ok || json.error) {
    throw new Error(
      json.error?.message ||
        `Instagram Graph error (${response.status}) on ${path}`
    );
  }
  return json;
}

async function waitForContainerReady(
  creationId: string,
  token: string,
  version: string,
  attempts = 12
): Promise<void> {
  for (let i = 0; i < attempts; i += 1) {
    const status = await graphRequest(
      "GET",
      creationId,
      token,
      version,
      { fields: "status_code" }
    );
    const code = String(status.status_code || "");
    if (code === "FINISHED") return;
    if (code === "ERROR" || code === "EXPIRED") {
      throw new Error(`Instagram container failed with status ${code}`);
    }
    await new Promise((r) => setTimeout(r, 2000));
  }
  throw new Error("Instagram media container timed out before FINISHED");
}

/**
 * Instagram Content Publishing API (Business/Creator account linked to a Page).
 * Requires a publicly reachable image URL (Sanity CDN works).
 */
export async function publishInstagramPost(
  post: BlogSharePayload,
  config: SocialConfig["instagram"]
): Promise<PlatformPublishResult> {
  if (!config.enabled || !config.igUserId || !config.accessToken) {
    return {
      platform: "instagram",
      ok: true,
      skipped: true,
      error: "Instagram syndication disabled or missing credentials",
    };
  }

  if (!post.imageUrl) {
    return {
      platform: "instagram",
      ok: false,
      error: "Instagram requires a public featured image URL",
    };
  }

  try {
    const container = await graphRequest(
      "POST",
      `${config.igUserId}/media`,
      config.accessToken,
      config.graphVersion,
      {
        image_url: post.imageUrl,
        caption: formatInstagramCaption(post),
      }
    );

    const creationId = typeof container.id === "string" ? container.id : "";
    if (!creationId) {
      throw new Error("Instagram did not return a creation_id");
    }

    await waitForContainerReady(
      creationId,
      config.accessToken,
      config.graphVersion
    );

    const published = await graphRequest(
      "POST",
      `${config.igUserId}/media_publish`,
      config.accessToken,
      config.graphVersion,
      { creation_id: creationId }
    );

    const mediaId =
      typeof published.id === "string" ? published.id : undefined;

    return {
      platform: "instagram",
      ok: true,
      externalPostId: mediaId,
      postUrl: mediaId
        ? `https://www.instagram.com/karoldigital2025/`
        : undefined,
    };
  } catch (error) {
    return {
      platform: "instagram",
      ok: false,
      error:
        error instanceof Error ? error.message : "Instagram publish failed",
    };
  }
}

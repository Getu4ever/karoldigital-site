import { NextResponse } from "next/server";
import { getSocialConfig } from "@/lib/social/config";
import { resolveBlogSharePayload } from "@/lib/social/sanity-payload";
import { syndicateBlogPost } from "@/lib/social/syndicate";

export const runtime = "nodejs";
export const maxDuration = 60;

function isAuthorized(request: Request): boolean {
  const config = getSocialConfig();
  const secret = config.apiSecret;
  if (!secret) return false;
  const auth = request.headers.get("authorization");
  return auth === `Bearer ${secret}`;
}

/**
 * Manual / test syndication for a published Sanity blog post.
 *
 * POST /api/social/syndicate
 * Authorization: Bearer $SOCIAL_SYNDICATION_SECRET
 * Body: { "slug": "my-post-slug", "force": false }
 *    or { "id": "sanityDocumentId", "force": true }
 */
export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = (await request.json()) as {
      slug?: string;
      id?: string;
      force?: boolean;
    };

    if (!body.slug && !body.id) {
      return NextResponse.json(
        { error: "Provide slug or id" },
        { status: 400 }
      );
    }

    const lookup = body.id
      ? { _id: body.id }
      : await (async () => {
          const { createClient } = await import("@sanity/client");
          const client = createClient({
            projectId:
              process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "pols4r9z",
            dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
            apiVersion: "2024-01-01",
            useCdn: false,
            token:
              process.env.SANITY_WRITE_TOKEN ||
              process.env.SANITY_API_READ_TOKEN,
          });
          const id = await client.fetch(
            `*[_type == "blogPost" && slug.current == $slug][0]._id`,
            { slug: body.slug }
          );
          return { _id: id as string | null };
        })();

    if (!lookup._id) {
      return NextResponse.json(
        { error: "Blog post not found" },
        { status: 404 }
      );
    }

    const payload = await resolveBlogSharePayload(lookup);
    if (!payload) {
      return NextResponse.json(
        {
          error:
            "Post is not eligible for syndication (draft, unpublished, or missing fields)",
        },
        { status: 409 }
      );
    }

    const result = await syndicateBlogPost(payload, {
      force: Boolean(body.force),
    });

    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Manual syndicate failed";
    console.error("[social-syndication] manual error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

const SANITY_WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN;

if (!SANITY_WRITE_TOKEN) {
  console.warn("⚠️ Missing SANITY_WRITE_TOKEN in .env.local");
}

export async function POST(req: Request) {
  try {
    const { slug } = await req.json();

    if (!slug) {
      return NextResponse.json(
        { message: "Missing slug" },
        { status: 400 }
      );
    }

    // Increment likes by +1
    const response = await client
      .withConfig({ token: SANITY_WRITE_TOKEN })
      .patch({
        query: `*[_type == "blogPost" && slug.current == $slug][0]`,
        params: { slug },
      })
      .setIfMissing({ likes: 0 })
      .inc({ likes: 1 })
      .commit();

    return NextResponse.json(
      { message: "Like saved", likes: response.likes },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Like error:", err);
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

// Weak write token (must be added to .env.local)
const SANITY_WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN;

if (!SANITY_WRITE_TOKEN) {
  console.warn("⚠️ Missing SANITY_WRITE_TOKEN in .env.local");
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, comment, slug } = data;

    if (!name || !email || !comment || !slug) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Insert the comment into the correct blog post
    const response = await client.withConfig({
      token: SANITY_WRITE_TOKEN,
    }).patch({
      query: `*[_type == "blogPost" && slug.current == $slug][0]`,
      params: { slug },
    })
      .setIfMissing({ comments: [] })
      .append("comments", [
        {
          name,
          email,
          comment,
          date: new Date().toISOString(),
          approved: false, // moderation enabled
        },
      ])
      .commit();

    return NextResponse.json(
      { message: "Comment submitted and awaiting approval", response },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("Comment submission error:", err);
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}

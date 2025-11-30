import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableTextComponents } from "@/components/PortableTextComponents";
import LikeButton from "@/components/LikeButton";
import FadeIn from "@/components/FadeIn";
export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await client.fetch(
    groq`*[_type == "blogPost" && defined(slug.current)]{
      "slug": slug.current
    }`
  );
  return slugs.map((post: any) => ({ slug: post.slug }));
}

export default async function BlogPostPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;

  const { post, related } = await client.fetch(
    groq`{
      "post": *[_type == "blogPost" && slug.current == $slug][0]{
        title,
        subtitle,
        body,
        publishedAt,
        "imageUrl": mainImage.asset->url,
        likes,
        comments[approved == true]{
          name,
          comment,
          date
        }
      },

      "related": *[_type == "blogPost" && slug.current != $slug]
        | order(publishedAt desc)[0...3]{
          title,
          "slug": slug.current,
          "imageUrl": mainImage.asset->url
        }
    }`,
    { slug }
  );

  if (!post) notFound();

  const articleUrl = `https://www.karoldigital.co.uk/blog/${slug}`;

  return (
    <FadeIn>
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white pt-24">
        <Image
          src="/hero-page-banner.jpg"
          alt={post.title}
          fill
          priority
          className="object-cover brightness-[0.40]"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 px-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-3">
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              {post.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* CONTENT */}
      <section className="px-6 py-20 max-w-3xl mx-auto">

        {/* MAIN IMAGE */}
        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={1200}
            height={700}
            className="rounded-xl w-full h-auto mb-10"
          />
        )}

        {/* DATE */}
        {post.publishedAt && (
          <p className="text-sm text-gray-500 mb-8">
            {new Date(post.publishedAt).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        )}

        {/* BODY */}
        <article className="prose prose-lg max-w-none mb-16">
          <PortableText value={post.body} components={PortableTextComponents} />
        </article>

        {/* BACK TO BLOG */}
<div className="mt-12 mb-10 border-t pt-10">
  <a
    href="/blog"
    className="inline-flex items-center text-[#102f35] font-semibold hover:underline"
  >
    ← Back to Blog
  </a>
</div>

{/* LIKE BUTTON (FUNCTIONAL + MATCHES SCREENSHOT) */}
<div className="mb-10 flex items-center">
  <LikeButton slug={slug} initialLikes={post.likes ?? 0} />
</div>


{/* SHARE SECTION – MATCHES OTHER WEBSITE */}
<div className="mb-16">
  <h3 className="text-lg font-semibold text-gray-700 mb-4">Share</h3>

  <div className="flex items-center gap-4">

    {/* Facebook */}
    <a
      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1877F2] hover:opacity-90 transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M13.5 9H16V6h-2.5c-2.1 0-3.5 1.4-3.5 3.5V12H8v3h2v6h3v-6h2.5l.5-3H13v-1.5c0-.7.3-1.5 1.5-1.5z" />
      </svg>
    </a>

    {/* Twitter / X */}
    <a
      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(post.title)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1DA1F2] hover:opacity-90 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 0 1-2.825.775A4.958 4.958 0 0 0 23.337 3a9.996 9.996 0 0 1-3.127 1.184A4.92 4.92 0 0 0 16.616 2c-2.737 0-4.956 2.224-4.956 4.963 0 .39.045.765.127 1.124C7.728 7.94 4.1 5.97 1.671 2.88a4.93 4.93 0 0 0-.666 2.497 4.95 4.95 0 0 0 2.203 4.13A4.904 4.904 0 0 1 .96 9.1v.06a4.96 4.96 0 0 0 3.965 4.86 4.996 4.996 0 0 1-2.212.086 4.94 4.94 0 0 0 4.604 3.417A9.867 9.867 0 0 1 .94 19.61 13.94 13.94 0 0 0 7.548 22c9.142 0 14.307-7.72 13.995-14.646a9.935 9.935 0 0 0 2.41-2.784z"/>
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full flex items-center justify-center bg-[#0A66C2] hover:opacity-90 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
        <path d="M4.983 3.5C4.983 5 3.89 6.09 2.49 6.09h-.03C1.11 6.09.01 5 .01 3.5.01 2.01 1.13 1 2.5 1s2.48 1 2.48 2.5zM.24 8.98h4.5v14H.24zm7.98 0h4.31v1.9h.06c.6-1.14 2.07-2.34 4.26-2.34 4.55 0 5.39 3 5.39 6.9v7.54h-4.5v-6.68c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.54v6.8H8.22z"/>
      </svg>
    </a>

    {/* WhatsApp */}
    <a
      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + articleUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full flex items-center justify-center bg-[#25D366] hover:opacity-90 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.671.149-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.671-1.612-.919-2.207-.242-.579-.487-.5-.671-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.711.226 1.358.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a10.44 10.44 0 0 1-5.6-1.63l-.4-.238-4.155 1.088 1.113-4.051-.261-.416A10.43 10.43 0 0 1 1.58 6.89C3.147 3.213 6.77.778 10.897.778c2.779 0 5.362 1.077 7.314 3.03a10.42 10.42 0 0 1 3.036 7.32c-.003 5.803-4.73 10.527-10.532 10.527"/>
      </svg>
    </a>

    {/* Copy Link */}
    <button
      data-copy={articleUrl}
      className="copy-btn w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#555" viewBox="0 0 24 24">
        <path d="M3.9 12a5 5 0 0 1 5-5h3v2h-3a3 3 0 1 0 0 6h3v2h-3a5 5 0 0 1-5-5zm7-1h3a3 3 0 1 1 0 6h-3v2h3a5 5 0 0 0 0-10h-3v2z" />
      </svg>
    </button>
  </div>
</div>


        {/* ---------------------------- */}
        {/* 🔗 RELATED ARTICLES          */}
        {/* ---------------------------- */}
        <div className="border-t pt-12 mt-12">
          <h2 className="text-2xl font-bold text-[#102f35] mb-8">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {related.map((item: any, index: number) => (
              <a
                key={index}
                href={`/blog/${item.slug}`}
                className="block rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white border border-gray-100"
              >
                {item.imageUrl && (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-32 object-cover"
                  />
                )}

                <div className="p-4">
                  <p className="font-semibold text-[#102f35] text-sm">
                    {item.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </section>
    </main>
    </FadeIn>
  );
}
"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24 pb-12">
        <Image
          src="/hero-page-banner.jpg"
          alt="Website Health Audit"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            <span className="text-white">Website </span>
            <span className="text-yellow-400">Health Audit</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            Identify what is hurting trust, speed, visibility, and conversions — then fix it in
            the right order.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-12">
        <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#102f35]">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="hover:text-[#102f35]">
              Services
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#102f35] font-semibold">Website Health & Conversion Analysis</li>
        </ol>
      </nav>

      <FadeIn>
        <section className="py-10 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            Why perform a Website Health Audit?
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A website health audit is a structured review of your site&apos;s technical performance,
            user experience, SEO foundations, and conversion path. It shows why visitors are not
            enquiring and what to fix first.
          </p>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Most underperforming websites have fixable issues hidden beneath the surface — slow
            load times, unclear messaging, weak calls-to-action, or poor mobile usability. An audit
            turns those problems into a practical improvement plan.
          </p>

          <div className="grid gap-6">
            {[
              {
                title: "Technical Performance",
                desc: "Load speed, rendering stability, and core technical issues that affect user experience.",
              },
              {
                title: "User Experience (UX)",
                desc: "Friction points in the user journey that stop visitors from taking action.",
              },
              {
                title: "SEO Health",
                desc: "Indexing, structure, metadata, and visibility issues affecting organic reach.",
              },
              {
                title: "Conversion Strategy",
                desc: "Messaging, hierarchy, and CTA gaps that reduce enquiries and quote requests.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#102f35] transition"
              >
                <p className="font-bold text-xl text-[#102f35] mb-2">{item.title}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-6 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">What the audit covers</h2>

          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-10">
            <li>Technical performance and page speed analysis</li>
            <li>SEO structure, indexing, and crawlability review</li>
            <li>User experience and conversion path evaluation</li>
            <li>Mobile responsiveness and accessibility testing</li>
            <li>Analytics and behavioural data interpretation</li>
          </ul>

          <p className="text-lg text-gray-700 leading-relaxed">
            Businesses that act on audit recommendations typically see clearer enquiry paths,
            stronger trust signals, and measurable improvements in engagement and lead quality.
          </p>
        </section>

        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need a Website Health Audit?</h2>

          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Book a free consultation and we will review your site, highlight priority fixes, and
            recommend the most sensible next step.
          </p>

          <Link
            href="/book?service=Website+Audit"
            className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Book My Free Audit Call
          </Link>
        </section>
      </FadeIn>
    </main>
  );
}

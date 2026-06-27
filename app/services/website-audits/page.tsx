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
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Website Health Audit
            <span className="block text-yellow-400 mt-2 text-2xl md:text-3xl font-medium">
              Improve Conversions and Performance
            </span>
          </h1>

          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Identify issues affecting your website performance and conversions.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-12">
        <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500">
          <li><a href="/" className="hover:text-[#102f35]">Home</a></li>
          <li>/</li>
          <li><a href="/services" className="hover:text-[#102f35]">Services</a></li>
          <li>/</li>
          <li className="text-[#102f35] font-semibold">Website Health & Conversion Analysis</li>
        </ol>
      </nav>

      <FadeIn>

        {/* CONTENT */}
        <section className="py-10 px-6 md:px-12 max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            Why perform a Website Health Audit?
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A Website Health Audit is a structured evaluation designed to improve conversions and performance by identifying technical, UX, and SEO issues that affect your website performance. It provides clarity on why visitors are not converting and what is preventing growth.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In most websites, performance issues are hidden beneath the surface. A proper Website Health Audit uncovers these problems and translates them into actionable improvements that directly support conversion optimisation and overall performance gains.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Businesses that invest in a Website Health Audit gain a clearer understanding of user behaviour, allowing them to improve conversions through better structure, faster load times, and stronger user experience design.
          </p>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            By continuously analysing website performance, a Website Health Audit helps identify issues affecting your website performance and conversions before they reduce revenue or user engagement.
          </p>

          <div className="grid gap-6">
            {[
              {
                title: "Technical Performance",
                desc: "This audit identifies performance issues affecting load speed, rendering, and overall site stability."
              },
              {
                title: "User Experience (UX)",
                desc: "We analyse user journeys to identify friction points that impact conversions and performance."
              },
              {
                title: "SEO Health",
                desc: "This audit highlights SEO issues affecting visibility and organic performance."
              },
              {
                title: "Conversion Strategy",
                desc: "We identify barriers that prevent users from converting and provide actionable improvements."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#102f35] transition">
                <h3 className="font-bold text-xl text-[#102f35] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEO EXPANDED CONTENT */}
        <section className="py-6 pb-20 px-6 md:px-12 max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            What Is a Website Health Audit?
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A Website Health Audit is a structured process used to improve conversions and performance by analysing technical performance, user behaviour, and SEO structure. It helps identify issues affecting your website performance and conversions in a clear, actionable way.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Unlike basic reports, a Website Health Audit explains not only what is wrong, but also why it is happening and how it impacts your ability to improve conversions and performance.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Modern digital growth depends on understanding user behaviour. A Website Health Audit provides data-driven clarity that allows businesses to improve conversions through structured optimisation rather than guesswork.
          </p>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            A Website Health Audit is essential for scaling businesses because it ensures you can consistently identify issues affecting your website performance and conversions before they impact revenue or marketing efficiency.
          </p>

          <h3 className="text-2xl font-bold text-[#102f35] mb-4">
            What the Audit Covers
          </h3>

          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-10">
            <li>Technical performance and page speed analysis</li>
            <li>SEO structure, indexing, and crawlability review</li>
            <li>User experience and conversion path evaluation</li>
            <li>Mobile responsiveness and accessibility testing</li>
            <li>Analytics and behavioural data interpretation</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#102f35] mb-4">
            How It Improves Conversions & Performance
          </h3>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A Website Health Audit helps improve conversions and performance by identifying issues affecting your website performance and conversions such as slow loading speed, unclear messaging, weak calls-to-action, and poor user flow.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Businesses that implement recommendations from a Website Health Audit typically see measurable improvements in conversions, engagement, and overall performance.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">

          <h2 className="text-3xl font-bold mb-6">
            Need a Website Health Audit?
          </h2>

          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Get a full Website Health Audit to improve conversions and performance by identifying issues affecting your website performance and conversions.
          </p>

          <Link
            href="/contact"
            className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Book Your Audit Today
          </Link>

        </section>
      </FadeIn>

    </main>
  );
}
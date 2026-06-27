"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
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
            A Website Health Audit is designed to improve conversions and performance by identifying issues affecting your website performance and conversions. A proper Website Health Audit helps businesses understand how to Improve Conversions and Performance through structured analysis.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Many companies invest in marketing but fail to run a Website Health Audit, which results in lost opportunities to Improve Conversions and Performance. This audit highlights those gaps clearly.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            A Website Health Audit evaluates technical structure, UX, and SEO performance. Without a Website Health Audit, it becomes difficult to consistently Improve Conversions and Performance across the entire customer journey.
          </p>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            By running a Website Health Audit regularly, businesses can continuously Improve Conversions and Performance while identifying issues affecting their website performance and conversions before they become costly.
          </p>

          <div className="grid gap-6">
            {[
              {
                title: "Technical Performance",
                desc: "This Website Health Audit identifies performance issues affecting load speed, rendering, and stability."
              },
              {
                title: "User Experience (UX)",
                desc: "We analyse journeys to Improve Conversions and Performance through better UX structure."
              },
              {
                title: "SEO Health",
                desc: "This Website Health Audit improves visibility and helps Improve Conversions and Performance from organic traffic."
              },
              {
                title: "Conversion Strategy",
                desc: "We identify barriers that prevent users from converting and use the Website Health Audit to Improve Conversions and Performance."
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
            A Website Health Audit is a structured process used to Improve Conversions and Performance by analysing technical performance, UX, and SEO structure. It helps identify issues affecting your website performance and conversions.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The Website Health Audit is essential for businesses that want to Improve Conversions and Performance in a measurable and consistent way.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Without a Website Health Audit, it is difficult to sustain long-term improvements in conversion rates or overall performance.
          </p>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            A Website Health Audit ensures you can continuously Improve Conversions and Performance while fixing issues affecting your website performance and conversions.
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
            A Website Health Audit directly helps Improve Conversions and Performance by identifying issues affecting your website performance and conversions such as poor UX, slow speed, and unclear messaging.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Businesses that act on a Website Health Audit consistently Improve Conversions and Performance across all digital channels.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">

          <h2 className="text-3xl font-bold mb-6">
            Need a Website Health Audit?
          </h2>

          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Book a Website Health Audit to Improve Conversions and Performance and fix issues affecting your website performance and conversions.
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
"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO SECTION - H1: Expert Website Health Audit / Boost Conversions With Data Insights */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24 pb-12">
          <Image src="/hero-page-banner.jpg" alt="Website Health Audit" fill priority className="object-cover brightness-[0.4]" />
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Expert Website Health Audit
              <span className="block text-yellow-400 mt-2">Boost Conversions With Data Insights</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Our <strong>Expert Website Health Audit</strong> provides the <strong>Conversion Analysis</strong> and <strong>Data Insights</strong> your business needs to grow.
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
            <li className="text-[#102f35] font-semibold">Expert Website Health Audit & Conversion Analysis</li>
          </ol>
        </nav>

        {/* CONTENT */}
        <section className="py-10 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">Why perform an Expert Website Health Audit?</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            An Expert Website Health Audit is the most effective way to identify hidden performance bottlenecks. When you invest in professional <strong>Conversion Analysis</strong>, you gain <strong>Data Insights</strong> that form a clear roadmap to transform your digital presence. Many businesses lose potential revenue because they lack a comprehensive Analysis of their sales funnels—our Audit delivers the Data Insights required for long-term growth.
          </p>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            By auditing your site's performance, you ensure a fast, seamless journey. Our Conversion Analysis uses <strong>Data Insights</strong> to uncover why users leave, allowing you to Boost Conversions and improve overall site performance.
          </p>

          <div className="grid gap-6">
            {[
              { title: "Technical Performance", desc: "Our Expert Website Health Audit checks rendering bottlenecks to ensure peak site performance." },
              { title: "User Experience (UX)", desc: "Deep Conversion Analysis to optimize paths and Boost Conversions." },
              { title: "SEO Health", desc: "Technical audit providing Data Insights to boost SEO and search visibility." },
              { title: "Conversion Strategy", desc: "We provide Conversion Analysis to help you Boost Conversions through smarter strategy." },
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
    What Is an Expert Website Health Audit?
  </h2>

  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    An <strong>Expert Website Health Audit</strong> is a comprehensive evaluation of your website’s technical performance, user experience, SEO structure, and conversion effectiveness. This process combines advanced diagnostics with <strong>Data Insights</strong> to identify obstacles that prevent your site from converting visitors into customers.
  </p>

  <p className="text-lg text-gray-700 mb-10 leading-relaxed">
    Unlike automated reports, our Website Health Audit delivers actionable findings. Every recommendation is designed to <strong>Boost Conversions</strong>, improve engagement, and strengthen long-term digital growth through reliable Data Insights.
  </p>

  <h3 className="text-2xl font-bold text-[#102f35] mb-4">
    What Our Website Health Audit Covers
  </h3>

  <ul className="list-disc pl-6 text-lg text-gray-700 space-y-3 mb-10">
    <li>Full technical performance and page speed analysis</li>
    <li>SEO structure, indexing, and crawlability review</li>
    <li>User experience and conversion path evaluation</li>
    <li>Mobile responsiveness and accessibility testing</li>
    <li>Analytics review and Data Insights interpretation</li>
  </ul>

  <h3 className="text-2xl font-bold text-[#102f35] mb-4">
    How an Expert Website Health Audit Boosts Conversions
  </h3>

  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
    Conversion losses often occur silently. Our <strong>Conversion Analysis</strong> identifies friction points such as slow load times, unclear messaging, poor navigation, and ineffective calls-to-action. By applying Data Insights from real user behavior, we help you Boost Conversions without increasing ad spend.
  </p>

  <p className="text-lg text-gray-700 leading-relaxed">
    Businesses that act on Expert Website Health Audit findings consistently see improvements in lead quality, engagement time, and revenue performance.
  </p>
</section>

        {/* CTA */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need an Expert Website Health Audit & Conversion Analysis?</h2>
          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Book your comprehensive review to get the Data Insights you need to Boost Conversions today.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition">
            Book Your Audit Today
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
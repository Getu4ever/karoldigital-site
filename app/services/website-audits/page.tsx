"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24 pb-12">
          <Image src="/hero-page-banner.jpg" alt="Website Health Audit" fill priority className="object-cover brightness-[0.4]" />
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Expert Website Health Audit
              <span className="block text-yellow-400 mt-2">Boost Conversions With Data Insights</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Our <strong>Expert Website Health Audit</strong> provides the <strong>Conversion Analysis</strong> your business needs to grow. Stop guessing and start optimizing.
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
        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">Why perform an Expert Website Health Audit?</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            An <strong>Expert Website Health Audit</strong> is the most effective way to identify hidden <strong>performance</strong> bottlenecks. When you invest in professional <strong>Conversion Analysis</strong>, you gain a clear, data-driven roadmap to transform your digital presence. Many businesses lose potential revenue simply because they lack a comprehensive <strong>Conversion Analysis</strong> of their sales funnels, which is why our <strong>Expert Website Health Audit</strong> is essential for long-term growth.
          </p>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            By auditing your site's <strong>performance</strong>, you ensure that every visitor experiences a fast, seamless journey. Our <strong>Conversion Analysis</strong> uncovers why users leave, allowing you to implement changes that drastically improve your <strong>conversions</strong> and overall site <strong>performance</strong>.
          </p>

          <div className="grid gap-6">
            {[
              { title: "Technical Performance", desc: "Our Expert Website Health Audit checks rendering bottlenecks to ensure peak site performance." },
              { title: "User Experience (UX)", desc: "Deep Conversion Analysis to optimize paths for higher visitor conversion rates." },
              { title: "SEO Health", desc: "Technical audit to boost SEO, search visibility, and organic traffic." },
              { title: "Conversion Strategy", desc: "We provide Conversion Analysis of your funnels to drive more revenue." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#102f35] transition">
                <h3 className="font-bold text-xl text-[#102f35] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need an Expert Website Health Audit & Conversion Analysis?</h2>
          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Book your comprehensive review today and stop losing leads. Let us help you boost your conversions.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition">
            Book Your Audit Today
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
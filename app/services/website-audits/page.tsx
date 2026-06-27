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
              Our <strong>Expert Website Health Audit</strong> provides the detailed <strong>Conversion Analysis</strong> and <strong>Data Insights</strong> your business requires to scale. We help you stop guessing and start optimizing.
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

        {/* EXTENDED CONTENT */}
        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">Why perform an Expert Website Health Audit?</h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              In the competitive digital landscape, your website acts as the primary interface between your brand and your potential clients. An <strong>Expert Website Health Audit</strong> is the most effective way to identify hidden <strong>performance</strong> bottlenecks that are silently draining your marketing budget. When you invest in professional <strong>Conversion Analysis</strong>, you move beyond guesswork and gain a clear, <strong>Data Insights</strong>-driven roadmap to transform your digital presence.
            </p>
            <p>
              Many businesses lose significant revenue simply because they lack a comprehensive <strong>Conversion Analysis</strong> of their existing sales funnels. Our audit process is designed to uncover the 'silent leaks' where visitors lose interest or become confused. By conducting an <strong>Expert Website Health Audit</strong>, we deliver the specific <strong>Data Insights</strong> required to make informed decisions that drive long-term growth and stability.
            </p>
            <p>
              Beyond technical metrics, we prioritize the user journey. By auditing your site's <strong>performance</strong>, we ensure that every visitor experiences a fast, seamless path to conversion. Our <strong>Conversion Analysis</strong> uses advanced <strong>Data Insights</strong> to map out exactly why users abandon their carts or leave your contact forms unfinished. This level of detail allows you to <strong>Boost Conversions</strong> and drastically improve overall site <strong>performance</strong>, turning your website into a reliable revenue engine.
            </p>
            <p>
              We believe that an <strong>Expert Website Health Audit</strong> should be more than just a list of technical errors. It should be a blueprint for success. Our team combines technical rigor with marketing psychology to ensure your <strong>Conversion Analysis</strong> addresses both the 'what' (technical speed, crawlability) and the 'why' (customer friction, messaging clarity).
            </p>
          </div>

          <h3 className="text-2xl font-bold text-[#102f35] mt-12 mb-6">Core Components of Our Audit</h3>
          <div className="grid gap-6">
            {[
              { title: "Technical Performance", desc: "Our Expert Website Health Audit checks rendering bottlenecks, Core Web Vitals, and server responses to ensure peak site performance." },
              { title: "User Experience (UX)", desc: "Deep Conversion Analysis to optimize user paths, navigation menus, and mobile responsiveness to Boost Conversions." },
              { title: "SEO Health", desc: "A comprehensive technical audit providing Data Insights to boost organic search visibility and keyword authority." },
              { title: "Conversion Strategy", desc: "We provide detailed Conversion Analysis of your funnels, CTAs, and landing pages to help you Boost Conversions through smarter strategy." },
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
            Book your comprehensive review today to get the actionable Data Insights you need to Boost Conversions and maximize your site's true potential.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition">
            Book Your Audit Today
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO SECTION - Optimized H1 */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24 pb-12">
          <Image
            src="/hero-page-banner.jpg"
            alt="Professional Website Audit Services"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Expert Website Health Audit
              <span className="block text-yellow-400 mt-2">
                Boost Conversions Through Data-Driven Insights
              </span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Stop guessing why your traffic isn't converting. Our <strong>website health audit</strong> identifies the critical performance, usability, and SEO barriers holding your business back.
            </p>
          </div>
        </section>

        {/* BREADCRUMB SECTION */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-12">
          <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-[#102f35]">Home</a></li>
            <li>/</li>
            <li><a href="/services" className="hover:text-[#102f35]">Services</a></li>
            <li>/</li>
            <li className="text-[#102f35] font-semibold">Website Health Audit</li>
          </ol>
        </nav>

        {/* CONTENT - Keyword density optimized */}
        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            Why Every Business Needs a Website Health Audit
          </h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            Your website is your digital storefront. If it suffers from poor <strong>performance</strong>, slow load times, or confusing navigation, you are losing valuable <strong>conversions</strong>. Our comprehensive <strong>website audit</strong> provides a clear, actionable roadmap to optimize your site for both search engines and your customers.
          </p>

          <div className="grid gap-6">
            {[
              { title: "Technical Performance", desc: "We audit core vitals and rendering bottlenecks to ensure lightning-fast speeds that keep users engaged." },
              { title: "User Experience (UX)", desc: "We analyze navigation friction and mobile-responsive design to maximize your conversion rates." },
              { title: "SEO Health", desc: "Our audit covers technical metadata, crawl accessibility, and keyword alignment to boost your search visibility." },
              { title: "Conversion Strategy", desc: "We evaluate your sales funnels and CTAs to turn more of your visitors into paying clients." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#102f35] transition">
                <h3 className="font-bold text-xl text-[#102f35] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to stop losing leads?</h2>
          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Get a professional audit of your website and discover exactly what needs to change to start hitting your growth targets.
          </p>
          <Link href="/contact" className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition">
            Book Your Audit Today
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
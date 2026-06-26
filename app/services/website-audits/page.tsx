"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24 pb-12">
          <Image src="/hero-page-banner.jpg" alt="Website Health Audit" fill priority className="object-cover brightness-[0.4]" />
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Expert Website Health Audit
              <span className="block text-yellow-400 mt-2">Boost Conversions With Data Insights</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Our <strong>website health audit</strong> identifies the performance, SEO, and UX barriers stopping your conversions.
            </p>
          </div>
        </section>

        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-12">
          <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500">
            <li><a href="/" className="hover:text-[#102f35]">Home</a></li>
            <li>/</li>
            <li><a href="/services" className="hover:text-[#102f35]">Services</a></li>
            <li>/</li>
            <li className="text-[#102f35] font-semibold">Website Health Audit</li>
          </ol>
        </nav>

        <section className="py-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">Why perform a Website Health Audit?</h2>
          <p className="text-lg text-gray-700 mb-10">
            A <strong>website health audit</strong> is vital for identifying <strong>performance</strong> issues and <strong>conversion</strong> roadblocks. Without this audit, you risk missing opportunities to improve your <strong>conversions</strong> and overall site <strong>performance</strong>.
          </p>

          <div className="grid gap-6">
            {[
              { title: "Technical Performance", desc: "Audit rendering bottlenecks for better performance." },
              { title: "User Experience (UX)", desc: "Optimize UX to improve visitor conversion rates." },
              { title: "SEO Health", desc: "Technical audit to boost SEO and search visibility." },
              { title: "Conversion Strategy", desc: "Audit funnels to drive more conversions." },
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-bold text-xl text-[#102f35] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Need a Website Health Audit?</h2>
          <Link href="/contact" className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold">
            Book Your Audit Today
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
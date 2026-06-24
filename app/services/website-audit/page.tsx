"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO SECTION */}
<section className="relative min-h-[80vh] flex items-center justify-center text-center text-white pt-24 pb-12">          <Image
            src="/hero-page-banner.jpg"
            alt="Professional Website Audit"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Website Health Audit
              <span className="block text-yellow-400 mt-2">
                Data-Driven Insights to Increase Conversions
              </span>
            </h1>
            <p className="text-xl text-gray-100">
              Uncover the silent leaks in your sales funnel. We diagnose your site’s 
              performance, usability, and SEO to help you reclaim lost opportunities.
            </p>
          </div>
        </section>
        {/* === BREADCRUMB SECTION === */}
        <nav
          aria-label="Breadcrumb"
          className="bg-white border-b border-gray-100 py-4 px-6 md:px-12"
        >
          <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <a href="/" className="hover:text-[#102f35] transition">
                Home
              </a>
            </li>

            <li className="text-gray-400">/</li>

            <li>
              <a href="/services" className="hover:text-[#102f35] transition">
                Services
              </a>
            </li>

            <li className="text-gray-400">/</li>

            <li className="text-[#102f35] font-semibold">
              Website Audit
            </li>
          </ol>
        </nav>

        {/* CONTENT */}
        <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-8">What We Analyse</h2>
          <ul className="space-y-6 text-lg text-gray-700">
            <li className="flex gap-4"><strong>✓ Performance:</strong> Identifying slow assets and rendering bottlenecks.</li>
            <li className="flex gap-4"><strong>✓ User Experience:</strong> Analyzing navigation, friction points, and mobile responsiveness.</li>
            <li className="flex gap-4"><strong>✓ SEO Health:</strong> Checking technical metadata, crawl errors, and keyword alignment.</li>
            <li className="flex gap-4"><strong>✓ Conversion Strategy:</strong> Auditing your Calls-to-Action and landing page effectiveness.</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="bg-gray-100 py-20 px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Get a clear roadmap for improvement.</h2>
          <Link href="/contact" className="bg-[#102f35] text-white px-10 py-4 rounded-full font-bold">
            Book Your Website Audit
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
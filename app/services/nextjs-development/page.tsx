"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function NextJSDevelopmentPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO SECTION */}
<section className="relative min-h-[80vh] flex items-center justify-center text-center text-white pt-24 pb-12">          <Image
            src="/hero-page-banner.jpg"
            alt="High-performance website engineering for growing businesses"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              High-Performance Website Engineering{" "}
              <span className="text-brand-gold-muted">
                — Fast, Secure & Built to Scale
              </span>
            </h1>
            <p className="text-xl text-gray-100">
              Premium custom-built websites engineered for businesses that need
              lightning-fast speeds, rock-solid security, strong search visibility,
              and a conversion-focused experience.
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
              Next.js Development
            </li>
          </ol>
        </nav>

        {/* CONTENT */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-[#102f35] mb-8">Why High-Performance Engineering?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            We engineer websites that load instantly, stay secure under pressure,
            and scale as you grow. Pages are delivered for maximum speed — so visitors
            get a premium experience, conversions improve, and search engines favour
            your content over slower, template-heavy alternatives.
          </p>

          <div className="relative h-[320px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl mb-10">
            <Image
              src="/services-high-performance-engineering.webp"
              alt="High-performance website engineering — fast, secure systems built to scale"
              fill
              className="object-cover"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Search & Speed Advantage</h3>
              <p>Faster load times and clearer structure help search engines
              find and prioritise your content — giving you an edge over slow,
              bloated websites.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Built to Grow With You</h3>
              <p>Whether you need a modern secure content system or a complex
              custom application, we build the foundation so your site can expand
              without starting over.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready for a faster, stronger website?</h2>
          <Link href="/book" className="bg-white text-[#102f35] px-10 py-4 rounded-full font-bold">
            Discuss Your Development Needs
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}

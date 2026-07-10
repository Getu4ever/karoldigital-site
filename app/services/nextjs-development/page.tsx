"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NextJSDevelopmentPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO SECTION */}
<section className="relative min-h-[80vh] flex items-center justify-center text-center text-white pt-24 pb-12">          <Image
            src="/hero-page-banner.jpg"
            alt="High-Performance Next.js Development"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Next.js Development{" "}
              <span className="text-brand-gold-muted">
                — Blazing Fast, Secure & Scalable Web Apps
              </span>
            </h1>
            <p className="text-xl text-gray-100">
              High-performance Next.js development for businesses that need secure,
              scalable web apps, SEO excellence, and a premium user experience.
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
          <h2 className="text-4xl font-bold text-[#102f35] mb-8">Why Next.js?</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Next.js is the industry standard for building production-grade web applications. 
            By leveraging Server-Side Rendering (SSR) and Static Site Generation (SSG), we 
            ensure your pages load instantly, significantly improving conversion rates 
            and search engine rankings.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">SEO Advantage</h3>
              <p>Better crawlability and faster meaningful paint times mean Google 
              prioritises your content over slower, traditional alternatives.</p>
            </div>
            <div className="p-8 bg-gray-50 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Enterprise Scalability</h3>
              <p>Built for the future. Whether you need a headless CMS integration or 
              a complex custom application, Next.js provides the architecture to grow.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to upgrade your tech stack?</h2>
          <Link href="/book" className="bg-white text-[#102f35] px-10 py-4 rounded-full font-bold">
            Discuss Your Development Needs
          </Link>
        </section>
      </main>
    </FadeIn>
  );
}
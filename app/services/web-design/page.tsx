"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WebDesignPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        
        {/* === HERO SECTION === */}
        <section className="relative min-h-[50vh] flex items-center justify-center text-center text-white pt-8 md:pt-4">
          <Image
            src="/hero-page-banner.jpg"
            alt="Web Design Services"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6 max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-4">
              <span className="text-white">Web Design </span>
              <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-lg text-gray-100">
              Professional, mobile-friendly websites built to help your business grow.
            </p>
          </div>
        </section>

        {/* === DESCRIPTION SECTION === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[#102f35] mb-8">What’s Included</h2>
              <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                Whether you're a startup or an established brand, we build clean,
                modern websites that reflect your business professionally. Choose
                from flexible packages that match your goals, budget, and timeline.
              </p>
            </div>

            {/* === PRICING PACKAGES GRID === */}
            <div className="grid md:grid-cols-4 gap-8 lg:gap-10">

              {/* STARTER */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#411b3f] text-center mb-4">Starter</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Perfect for new businesses needing a clean online presence.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Up to 3 pages</li>
                  <li>✔ WordPress or Google Sites</li>
                  <li>✔ Mobile-responsive</li>
                  <li>✔ Basic contact form</li>
                  <li className="text-gray-400 line-through">✘ SEO</li>
                  <li className="text-gray-400 line-through">✘ AI Chatbot</li>
                </ul>
                <p className="text-xl font-bold text-center text-[#102f35] mb-6">£150 – £300</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Choose Starter
                </Link>
              </div>

              {/* GROWTH */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Growth</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Ideal for businesses wanting stronger visibility.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Up to 6 pages</li>
                  <li>✔ On-page SEO</li>
                  <li>✔ Speed optimisation</li>
                  <li>✔ Contact form + integrations</li>
                  <li>✔ AI Chatbot (Basic Version)</li>
                  <li>✔ Google Business optimization</li>
                </ul>
                <p className="text-xl font-bold text-center text-[#102f35] mb-6">£350 – £600</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Choose Growth
                </Link>
              </div>

              {/* PREMIUM - MOST POPULAR */}
              <div className="relative bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-yellow-400 scale-[1.05] z-10 flex flex-col h-full ring-2 ring-yellow-400/20">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Premium</h3>
                <p className="text-sm text-gray-600 text-center mb-6">High-end performance, SEO and custom functionality.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ 6–10+ pages</li>
                  <li>✔ Custom coding included</li>
                  <li>✔ Advanced SEO</li>
                  <li>✔ Blog integration</li>
                  <li>✔ Custom animations</li>
                  <li>✔ AI Chatbot (Advanced Version)</li>
                </ul>
                <p className="text-xl font-bold text-center text-[#102f35] mb-6">£650 – £1,200</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition shadow-lg"
                >
                  Choose Premium
                </Link>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Enterprise</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Custom-built solutions for complex operations.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Fully custom-coded apps</li>
                  <li>✔ User roles & infrastructure</li>
                  <li>✔ Deep database integration</li>
                  <li>✔ Advanced e-commerce</li>
                  <li>✔ Enhanced security</li>
                  <li>✔ Priority support</li>
                </ul>
                <p className="text-xl font-bold text-center text-[#411b3f] mb-6">£1,500 – £2,000</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Request Quote
                </Link>
              </div>

            </div>
          </section>
        </FadeIn>
      </main>
    </FadeIn>
  );
}
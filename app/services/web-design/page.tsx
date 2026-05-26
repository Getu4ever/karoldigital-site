// app/services/web-design/page.tsx
"use client";

import { generateSEOMetadata } from "@/components/seo-server";
import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = generateSEOMetadata({
  title: "WordPress & Custom Web Design Packages UK | Karol Digital",
  description:
    "Mobile-friendly web design for UK businesses. From simple WordPress sites to custom-coded solutions with AI chatbots. Explore our packages.",
  url: "https://www.karoldigital.co.uk/services/web-design",
  image: "/hero-page-banner.jpg",
});

const webDesignSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.karoldigital.co.uk" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.karoldigital.co.uk/services" },
    { "@type": "ListItem", "position": 3, "name": "Web Design", "item": "https://www.karoldigital.co.uk/services/web-design" }
  ]
};

export default function WebDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webDesignSchema) }}
      />
      <FadeIn>
        <main className="min-h-screen bg-white text-gray-900">
          {/* === HERO SECTION === */}
          <section className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4">
            <Image
              src="/hero-page-banner.jpg"
              alt="Web Design Services"
              fill
              priority
              className="object-cover brightness-[0.45]"
            />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 px-6 max-w-3xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-extrabold mb-4"
              >
                <span className="text-white">Web Design </span>
                <span className="text-yellow-400">Services</span>
              </motion.h1>
              <p className="text-lg md:text-xl text-gray-100">
                Professional, mobile-friendly websites and brand identities engineered to turn visitors into loyal customers.
              </p>
            </div>
          </section>

          {/* === DESCRIPTION SECTION === */}
          <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-[#102f35] mb-8">Strategic Design Meets Technical Excellence</h2>
              <p className="text-gray-700 leading-relaxed mb-10 text-lg">
                Whether you're a startup or an established brand, we build clean,
                modern websites that reflect your business professionally. Choose
                from flexible packages that match your goals, budget, and timeline.
              </p>
            </div>

            {/* === PRICING PACKAGES GRID === */}
            <div className="grid md:grid-cols-4 gap-8 lg:gap-10 mb-24">
              {/* STARTER */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#411b3f] text-center mb-4">Starter</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Foundation Web - Perfect for new businesses needing a clean online presence.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ 5–7 pages</li>
                  <li>✔ WordPress or Google Sites</li>
                  <li>✔ Mobile-responsive</li>
                  <li>✔ Basic SEO Setup</li>
                  <li>✔ Contact form</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#102f35] mb-6">£900 – £1,500</p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition">Choose Starter</Link>
              </div>

              {/* GROWTH */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Growth</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Strategic Growth Web - Ideal for established businesses wanting visibility.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Conversion-focused UX</li>
                  <li>✔ Full On-page SEO</li>
                  <li>✔ Speed optimisation</li>
                  <li>✔ AI Chatbot (Basic)</li>
                  <li>✔ Analytics & UX Strategy</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#102f35] mb-6">£1,800 – £3,000</p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition">Choose Growth</Link>
              </div>

              {/* PREMIUM */}
              <div className="relative bg-white shadow-2xl rounded-2xl p-8 border-t-4 border-yellow-400 scale-[1.05] z-10 flex flex-col h-full ring-2 ring-yellow-400/20">
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Best Value</div>
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Premium</h3>
                <p className="text-sm text-gray-600 text-center mb-6">High-end performance, custom branding, and marketing readiness.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li className="font-bold text-[#102f35]">✔ Full Brand Identity</li>
                  <li>✔ 6–10+ Custom Pages</li>
                  <li>✔ Advanced Custom Coding</li>
                  <li>✔ Copywriting & Sales Strategy</li>
                  <li>✔ Advanced AI Chatbot</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#102f35] mb-6">£3,500 – £6,000</p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition shadow-lg">Choose Premium</Link>
              </div>

              {/* ENTERPRISE */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition flex flex-col h-full">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Enterprise</h3>
                <p className="text-sm text-gray-600 text-center mb-6">Custom-built solutions for complex business operations.</p>
                <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
                  <li>✔ Full Branding & Strategy</li>
                  <li>✔ User Roles & Infrastructure</li>
                  <li>✔ Deep CRM Integration</li>
                  <li>✔ Advanced E-commerce Logic</li>
                  <li>✔ Enhanced Security Systems</li>
                </ul>
                <p className="text-xl font-extrabold text-center text-[#411b3f] mb-6">From £6,500</p>
                <Link href="/contact" className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition">Request Quote</Link>
              </div>
            </div>
          </section>
        </main>
      </FadeIn>
    </>
  );
}
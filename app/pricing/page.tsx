"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function PricingPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO SECTION === */}
       <motion.section
  className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Image
    src="/hero-page-banner.jpg"
    alt="Pricing – Karol Digital"
    fill
    priority
    className="object-cover brightness-[0.45]"
  />
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
      <span className="text-white">Website </span>
      <span className="text-yellow-400">Pricing</span>

      {/* SEO-only extension (not visible on screen) */}
      <span className="sr-only">
        Affordable website design pricing packages for small businesses in the UK
      </span>
    </h1>

    <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
      Transparent and affordable pricing for UK small businesses. Choose
      a package that fits your goals and budget — from design to ongoing support.
    </p>

  </div>
</motion.section>



        {/* === MAIN CONTENT === */}
        <div className="px-6 py-20 max-w-7xl mx-auto">

          {/* Web Design Packages */}
          <div className="grid md:grid-cols-3 gap-10 mb-24">
            {/* … Starter, Growth, Premium packages as before … */}
            {/* STARTER */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition">
              <h2 className="text-3xl font-bold text-[#411b3f] text-center mb-4">Starter</h2>
              <p className="text-gray-600 text-center mb-6">
                Perfect for new businesses needing a simple, clean online presence.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Up to 3 pages</li>
                <li>✔ WordPress or Google Sites</li>
                <li>✔ No coding required</li>
                <li>✔ Mobile-responsive design</li>
                <li>✔ Basic contact form</li>
                <li>✔ Fast turnaround</li>
                <li className="text-gray-400 line-through">✘ SEO</li>
                <li className="text-gray-400 line-through">✘ AI Chatbot</li>
              </ul>

              <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                £150 – £300
              </p>

              <Link
                href="/contact"
                className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
              >
                Choose Starter
              </Link>
            </div>

            {/* GROWTH */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition transform scale-105">
              <h2 className="text-3xl font-bold text-[#102f35] text-center mb-4">Growth</h2>
              <p className="text-gray-600 text-center mb-6">
                Ideal for growing businesses wanting a stronger online presence.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ Up to 6 pages</li>
                <li>✔ WordPress or Google Sites</li>
                <li>✔ On-page SEO</li>
                <li>✔ Speed optimisation</li>
                <li>✔ Mobile-responsive</li>
                <li>✔ Contact form + integrations</li>
                <li>✔ Google Business optimisation</li>
                <li className="text-gray-400 line-through">✘ Coding</li>
                <li>✔ AI Chatbot (Basic Version)</li>
              </ul>

              <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                £350 – £600
              </p>

              <Link
                href="/contact"
                className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
              >
                Choose Growth
              </Link>
            </div>

            {/* PREMIUM */}
            <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition">
              <h2 className="text-3xl font-bold text-[#411b3f] text-center mb-4">Premium</h2>
              <p className="text-gray-600 text-center mb-6">
                Best for businesses seeking advanced functionality & SEO.
              </p>

              <ul className="space-y-3 text-gray-700 mb-8">
                <li>✔ 6–10+ pages</li>
                <li>✔ Custom coding included</li>
                <li>✔ WordPress or fully custom</li>
                <li>✔ Advanced SEO</li>
                <li>✔ Speed optimisation</li>
                <li>✔ Blog integration</li>
                <li>✔ Custom animations</li>
                <li>✔ AI Chatbot (Advanced Version)</li>
              </ul>

              <p className="text-2xl font-extrabold text-[#102f35] text-center mb-6">
                £650 – £1,200
              </p>

              <Link
                href="/contact"
                className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
              >
                Choose Premium
              </Link>
            </div>
          </div>

          {/* Website Maintenance Packages */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] mb-4">
                Website Maintenance Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Keep your website secure, up-to-date and performing — even after launch.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* BASIC MAINTENANCE */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-[#411b3f] hover:-translate-y-2 transition">
                <h3 className="text-2xl font-bold text-[#411b3f] mb-4 text-center">
                  Basic Maintenance
                </h3>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>✔ Fixing bugs</li>
                  <li>✔ Minor text or image edits</li>
                  <li>✔ Updating plugins & dependencies</li>
                  <li>✔ Backup guidance</li>
                </ul>
                <p className="text-xl font-extrabold text-[#102f35] text-center mb-6">
                  £29 – £59 / mo
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
                >
                  Select Basic
                </Link>
              </div>

              {/* PREMIUM MAINTENANCE */}
              <div className="bg-white shadow-lg rounded-2xl p-8 border-l-4 border-[#102f35] hover:-translate-y-2 transition">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4 text-center">
                  Premium Maintenance
                </h3>
                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>✔ Everything in Basic</li>
                  <li>✔ Adding new features</li>
                  <li>✔ Deployment support</li>
                  <li>✔ Priority response time</li>
                  <li>✔ Advanced troubleshooting</li>
                </ul>
                <p className="text-xl font-extrabold text-[#102f35] text-center mb-6">
                  £79 – £129 / mo
                </p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-full transition"
                >
                  Select Premium
                </Link>
              </div>
            </div>
          </section>

          {/* Additional Digital Services (optional) */}
          <section className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#102f35] mb-6">Other Services</h2>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#411b3f] mb-2">
                  Social Media Setup
                </h3>
                <p className="text-gray-600 mb-3">
                  Platform branding & optimisation.
                </p>
                <p className="text-xl font-semibold text-[#102f35]">From £80</p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#102f35] mb-2">
                  Digital Marketing
                </h3>
                <p className="text-gray-600 mb-3">
                  SEO, email marketing & content planning.
                </p>
                <p className="text-xl font-semibold text-[#411b3f]">From £60</p>
              </div>

              <div className="p-8 bg-gray-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-[#102f35] mb-2">
                  Brand Identity
                </h3>
                <p className="text-gray-600 mb-3">
                  Logos, colours & typography.
                </p>
                <p className="text-xl font-semibold text-[#411b3f]">Custom Pricing</p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </FadeIn>
  );
}

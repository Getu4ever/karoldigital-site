"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO SECTION === */}
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Karol Digital Services"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">Our </span>
              <span className="text-yellow-400">Services & Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Professional and affordable digital solutions designed for small
              businesses that want to grow online.
            </p>
          </div>
        </motion.section>

        {/* === INTRO SECTION === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-[#102f35] mb-4">
                Affordable, Creative & Effective Digital Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
                From websites to social media setup and digital marketing, every
                service is designed to help your business attract more customers
                and grow online.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* === PRICING PACKAGES === */}
        <FadeIn>
          <section className="relative py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
                💼 Web Design Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Clear, affordable packages designed to help your business grow online.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

              {/* === STARTER === */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition">
                <h3 className="text-3xl font-bold text-[#411b3f] text-center mb-4">
                  Starter
                </h3>

                <p className="text-gray-600 text-center mb-6">
                  Perfect for new businesses needing a clean, simple online presence.
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

              {/* === GROWTH === */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] hover:-translate-y-2 transition transform scale-105">
                <h3 className="text-3xl font-bold text-[#102f35] text-center mb-4">
                  Growth
                </h3>

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

              {/* === PREMIUM === */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f] hover:-translate-y-2 transition">
                <h3 className="text-3xl font-bold text-[#411b3f] text-center mb-4">
                  Premium
                </h3>

                <p className="text-gray-600 text-center mb-6">
                  Best for businesses wanting custom, high-end functionality & SEO.
                </p>

                <ul className="space-y-3 text-gray-700 mb-8">
                  <li>✔ 6–10 pages</li>
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
          </section>
        </FadeIn>

        {/* === SOCIAL MEDIA & DIGITAL MARKETING === */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="py-24 px-6 md:px-12 bg-gradient-to-b from-gray-50 to-gray-100"
        >
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
              📱 Social Media & Digital Marketing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Boost your online visibility with professional branding & practical strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-[#411b3f] mb-3">Social Media Setup</h3>
              <p className="text-gray-600 mb-4">Optimised bios, branding, and content setup for key platforms.</p>
              <p className="font-bold text-[#102f35] mb-4">From £80</p>
              <Link href="/services/social-media" className="text-[#102f35] font-semibold underline">
                Learn More
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">SEO, email marketing, content planning & brand visibility.</p>
              <p className="font-bold text-[#411b3f] mb-4">From £60</p>
              <Link href="/services/digital-marketing" className="text-[#102f35] font-semibold underline">
                Learn More
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center border border-gray-200">
              <h3 className="text-xl font-bold text-[#102f35] mb-3">Brand Identity</h3>
              <p className="text-gray-600 mb-4">Logos, colour palettes, typography & social templates.</p>
              <p className="font-bold text-[#411b3f] mb-4">Custom pricing</p>
              <Link href="/contact" className="text-[#102f35] font-semibold underline">
                Request Quote
              </Link>
            </div>
          </div>
        </motion.section>

        {/* === COMPARISON TABLE === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                📊 Compare Our Web Design Packages
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See what’s included in each package so you can choose the perfect fit for your business.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-gray-700 shadow-lg rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#102f35] text-white">
                    <th className="p-4 font-semibold">Feature</th>
                    <th className="p-4 font-semibold text-center">Starter</th>
                    <th className="p-4 font-semibold text-center">Growth</th>
                    <th className="p-4 font-semibold text-center">Premium</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border">Pages Included</td>
                    <td className="p-4 border text-center">Up to 3</td>
                    <td className="p-4 border text-center">Up to 6</td>
                    <td className="p-4 border text-center">6–10</td>
                  </tr>
                  <tr>
                    <td className="p-4 border">SEO</td>
                    <td className="p-4 border text-center text-gray-400">✘</td>
                    <td className="p-4 border text-center">✔ On-page SEO</td>
                    <td className="p-4 border text-center">✔ Advanced SEO</td>
                  </tr>
                  <tr>
                    <td className="p-4 border">Speed Optimisation</td>
                    <td className="p-4 border text-center">✔ Basic</td>
                    <td className="p-4 border text-center">✔ Enhanced</td>
                    <td className="p-4 border text-center">✔ Premium</td>
                  </tr>
                  <tr>
                    <td className="p-4 border">Coding</td>
                    <td className="p-4 border text-center text-gray-400">✘</td>
                    <td className="p-4 border text-center text-gray-400">✘</td>
                    <td className="p-4 border text-center">✔ Included</td>
                  </tr>
                  <tr>
                    <td className="p-4 border">AI Chatbot</td>
                    <td className="p-4 border text-center text-gray-400">✘</td>
                    <td className="p-4 border text-center">✔ Basic Version</td>
                    <td className="p-4 border text-center">✔ Advanced Version</td>
                  </tr>
                  <tr>
                    <td className="p-4 border">Google Business Integration</td>
                    <td className="p-4 border text-center text-gray-400">✘</td>
                    <td className="p-4 border text-center">✔ Included</td>
                    <td className="p-4 border text-center">✔ Included</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </FadeIn>

        {/* === DELIVERABLES === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gray-50">
            <div className="max-w-5xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                🎁 What You Get With Every Website
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                No matter which package you choose, every website is built with quality, performance, and usability in mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              <div className="bg-white shadow-lg p-8 rounded-2xl border">
                <h3 className="text-xl font-bold text-[#102f35] mb-4">Core Deliverables</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ Modern, clean web design</li>
                  <li>✔ Mobile-responsive layout</li>
                  <li>✔ Contact form with email notifications</li>
                  <li>✔ Essential security setup</li>
                  <li>✔ Hosting & domain support</li>
                </ul>
              </div>

              <div className="bg-white shadow-lg p-8 rounded-2xl border">
                <h3 className="text-xl font-bold text-[#411b3f] mb-4">Performance & Support</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✔ Basic performance optimisation</li>
                  <li>✔ Image optimisation</li>
                  <li>✔ Launch support</li>
                  <li>✔ 7-day post-launch assistance</li>
                  <li>✔ Training on how to update your site</li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === ADD-ONS === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                ➕ Optional Add-Ons
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Customise your package with optional upgrades designed to enhance your website.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              
              <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm text-center">
                <h3 className="text-xl font-bold text-[#411b3f] mb-3">Blog Setup</h3>
                <p className="text-gray-600 mb-4">Full blog system + category setup.</p>
                <p className="font-bold text-[#102f35]">£50+</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm text-center">
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Email Marketing Integration</h3>
                <p className="text-gray-600 mb-4">Mailchimp, Brevo or custom provider.</p>
                <p className="font-bold text-[#411b3f]">£30+</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl border shadow-sm text-center">
                <h3 className="text-xl font-bold text-[#102f35] mb-3">Advanced Animations</h3>
                <p className="text-gray-600 mb-4">Smooth, modern UI interactions.</p>
                <p className="font-bold text-[#411b3f]">£40+</p>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* === HOW IT WORKS === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#eef2f6]">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                🛠 How It Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A simple, transparent process from start to finish.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
              {[
                { step: "1", title: "Discovery", desc: "We discuss your business, goals, and design preferences." },
                { step: "2", title: "Design", desc: "Layout, colours and structure drafted for your review." },
                { step: "3", title: "Build", desc: "Your website is built with clean structure & mobile optimisation." },
                { step: "4", title: "Launch", desc: "We publish your site & provide support and training." },
              ].map((item) => (
                <div key={item.step} className="bg-white p-8 rounded-2xl shadow border text-center">
                  <div className="text-4xl font-extrabold text-[#411b3f] mb-3">{item.step}</div>
                  <h3 className="text-xl font-bold text-[#102f35] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* === FAQ === */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                ❓ Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Answers to the most common questions clients ask before getting started.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">How long does a website take?</summary>
                <p className="mt-3 text-gray-600">Starter sites: 3–5 days. Growth: 5–10 days. Premium: 10–20 days depending on complexity.</p>
              </details>

              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">Do you provide hosting?</summary>
                <p className="mt-3 text-gray-600">
                  We don’t provide hosting directly, but we will guide you through the best, most affordable hosting options
                  and help you choose the right plan for your website.
                </p>
              </details>

              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">Can I update the website myself?</summary>
                <p className="mt-3 text-gray-600">Yes — you will receive full training after launch.</p>
              </details>

              <details className="border rounded-lg p-6 shadow-sm">
                <summary className="font-semibold cursor-pointer">What is the payment structure?</summary>
                <p className="mt-3 text-gray-600">Usually 50% upfront and 50% on completion. Instalments available if needed.</p>
              </details>
            </div>
          </section>
        </FadeIn>

      </main>
    </FadeIn>
  );
}

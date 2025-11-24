"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebDesignPage() {
  return (
    <FadeIn>

      <main className="min-h-screen bg-white text-gray-900">

        {/* HERO */}
        <section className="relative min-h-[50vh] flex items-center justify-center text-center text-white">
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

        {/* DESCRIPTION */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-[#102f35] mb-8">What’s Included</h2>

            <p className="text-gray-700 leading-relaxed mb-10">
              Whether you're a startup or an established brand, we build clean,
              modern websites that reflect your business professionally. Choose
              from flexible packages that match your goals, budget, and timeline.
            </p>

            {/* PACKAGES TABLE */}
            <div className="grid md:grid-cols-3 gap-10">

              {/* STARTER */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f]">
                <h3 className="text-2xl font-bold text-[#411b3f] text-center mb-4">Starter</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>✔ Up to 3 pages</li>
                  <li>✔ WordPress or Google Sites</li>
                  <li>✔ No coding required</li>
                  <li>✔ Mobile-responsive</li>
                  <li>✔ Basic contact form</li>
                  <li className="text-gray-400 line-through">✘ SEO</li>
                  <li className="text-gray-400 line-through">✘ AI Chatbot</li>
                </ul>
                <p className="text-xl font-bold text-center text-[#102f35] mb-4">£150 – £300</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Choose Starter
                </Link>
              </div>

              {/* GROWTH */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#102f35] scale-[1.04]">
                <h3 className="text-2xl font-bold text-[#102f35] text-center mb-4">Growth</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>✔ Up to 6 pages</li>
                  <li>✔ WordPress or Google Sites</li>
                  <li>✔ On-page SEO</li>
                  <li>✔ Mobile-responsive</li>
                  <li>✔ Speed optimisation</li>
                  <li>✔ Contact form + integrations</li>
                  <li>✔ Google Business optimisation</li>
                  <li>✔ AI Chatbot (Basic Version)</li>
                </ul>
                <p className="text-xl font-bold text-center text-[#102f35] mb-4">£350 – £600</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Choose Growth
                </Link>
              </div>

              {/* PREMIUM */}
              <div className="bg-white shadow-xl rounded-2xl p-8 border-t-4 border-[#411b3f]">
                <h3 className="text-2xl font-bold text-[#411b3f] text-center mb-4">Premium</h3>
                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>✔ 6–10 pages</li>
                  <li>✔ Custom coding included</li>
                  <li>✔ WordPress or fully custom</li>
                  <li>✔ Advanced SEO</li>
                  <li>✔ Blog integration</li>
                  <li>✔ Custom animations</li>
                  <li>✔ AI Chatbot (Advanced Version)</li>
                </ul>
                <p className="text-xl font-bold text-center text-[#102f35] mb-4">£650 – £1,200</p>
                <Link
                  href="/contact"
                  className="block text-center bg-[#102f35] hover:bg-[#411b3f] text-white py-3 rounded-full transition"
                >
                  Choose Premium
                </Link>
              </div>

            </div>
          </section>
        </FadeIn>

      </main>
    </FadeIn>
  );
}

"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";

export default function WebsiteAuditPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24 pb-12">
        <Image
          src="/hero-page-banner.jpg"
          alt="Website Performance Audit"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />

        <div className="relative z-10 px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Website Performance Audit for Better Conversions
            <span className="block text-yellow-400 mt-2 text-2xl md:text-3xl font-medium">
              Improve Conversions and Performance
            </span>
          </h1>

          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            A clear breakdown of what is slowing your site down and stopping users from converting.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <nav className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-12">
        <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500">
          <li><a href="/">Home</a></li>
          <li>/</li>
          <li><a href="/services">Services</a></li>
          <li>/</li>
          <li className="text-[#102f35] font-semibold">Website Performance Audit</li>
        </ol>
      </nav>

      <FadeIn>

        {/* INTRO */}
        <section className="py-14 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            Why your website may not be converting
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Many websites lose potential customers not because of traffic, but because of hidden performance and usability issues.
            A structured website performance audit helps uncover exactly what is holding your site back.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            The goal is simple: identify friction, improve user experience, and create a smoother path to conversion.
          </p>
        </section>

        {/* WHAT YOU GET */}
        <section className="py-10 px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-8 text-center">
            What the audit includes
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Performance & Speed",
                desc: "We analyse load times, rendering issues, and technical bottlenecks affecting user experience."
              },
              {
                title: "User Journey Review",
                desc: "We map how users interact with your site and identify where they drop off."
              },
              {
                title: "SEO Structure",
                desc: "We review indexing, metadata, and structure to improve search visibility."
              },
              {
                title: "Conversion Analysis",
                desc: "We examine calls-to-action, messaging, and layout to improve conversion flow."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-xl text-[#102f35] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-14 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            How the process works
          </h2>

          <ol className="space-y-4 text-lg text-gray-700">
            <li>1. We scan your website performance and structure</li>
            <li>2. We identify issues affecting conversions and usability</li>
            <li>3. We analyse user behaviour and engagement patterns</li>
            <li>4. We deliver clear recommendations to improve results</li>
          </ol>
        </section>

        {/* BENEFITS */}
        <section className="py-14 px-6 md:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#102f35] mb-6">
              What you will improve
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              A website performance audit is designed to improve conversions and performance by targeting real user experience issues.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Higher conversion rates</li>
              <li>Better user experience</li>
              <li>Improved page speed</li>
              <li>Stronger SEO visibility</li>
              <li>Clearer customer journey flow</li>
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-8">
            Frequently asked questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-[#102f35]">
                What is a website performance audit?
              </h3>
              <p className="text-gray-700">
                It is a structured review of your website to identify issues affecting performance, SEO, and conversions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#102f35]">
                How does it improve conversions?
              </h3>
              <p className="text-gray-700">
                By removing friction points in design, speed, and user experience that prevent users from taking action.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg text-[#102f35]">
                Who is this service for?
              </h3>
              <p className="text-gray-700">
                Businesses that want more leads, better performance, and improved website effectiveness.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to improve your website performance?
          </h2>

          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Get a detailed website performance audit and start improving conversions with clear actionable insights.
          </p>

          <Link
            href="/contact"
            className="bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold hover:bg-yellow-300 transition"
          >
            Book Your Audit Today
          </Link>
        </section>

      </FadeIn>
    </main>
  );
}
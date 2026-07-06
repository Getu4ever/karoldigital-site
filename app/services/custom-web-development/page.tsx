"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CustomDevelopmentPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* === HERO SECTION === */}
        <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24">
          <Image
            src="/hero-page-banner.jpg"
            alt="Custom Web Development Services"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-6 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              Custom Web Development{" "}
              <span className="text-yellow-400">
                — Bespoke Solutions for Unique Business Challenges
              </span>
            </motion.h1>

            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8">
              Move beyond the limitations of off-the-shelf templates. We build bespoke,
              high-performance, custom-coded digital applications tailored to your unique
              workflows and business goals.
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
              Custom Web Development
            </li>
          </ol>
        </nav>

        {/* === INTRODUCTION === */}
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-6">
                Engineered for Your Specific Needs
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Standard platforms often carry unnecessary "bloat" that slows down your site and 
                limits your functionality. At Karol Digital, we specialise in crafting 
                clean, efficient, and secure web applications from the ground up.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need a specialized client portal, a custom e-commerce engine, 
                or a complex data-driven web app, our development process focuses on 
                long-term maintainability, superior speed, and seamless user experiences.
              </p>
            </div>
            
            {/* Updated Image Section */}
            <div className="relative h-[400px] w-full rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/custom-architecture.webp"
                alt="Custom software architecture and development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
        

        {/* === CORE DEVELOPMENT PILLARS === */}
        <section className="bg-gray-50 py-20 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#102f35] text-center mb-16">Our Development Approach</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Modern Tech Stack", desc: "We build with cutting-edge tools like Next.js, Tailwind CSS, and headless architectures for maximum speed." },
                { title: "Secure & Reliable", desc: "Security is built-in, not bolted on. We implement robust authentication and data handling to protect your business." },
                { title: "Scalable Growth", desc: "Our modular codebases allow your platform to evolve alongside your business without requiring a full rebuild." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-[#411b3f] mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA SECTION === */}
        <section className="py-20 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#102f35] mb-6">Have a complex project in mind?</h2>
            <p className="text-lg text-gray-700 mb-8">
              Let's discuss your requirements. We provide expert guidance on the best 
              technologies to bring your vision to life.
            </p>
            <Link
              href="/book"
              className="inline-block bg-[#102f35] text-white font-bold px-10 py-4 rounded-full hover:bg-[#1a4a54] transition"
            >
              Start Your Custom Project
            </Link>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}
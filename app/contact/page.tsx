"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactPage() {
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
            alt="Contact Us"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              <span className="text-white">Contact </span>
              <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mt-3">
              We are here to help you grow your digital presence. Send us a message today.
            </p>
          </div>
        </motion.section>

        {/* === CONTACT SECTION === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
              {/* === CONTACT FORM === */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold text-[#102f35] mb-6">
                  Send Us a Message
                </h2>

                <form className="space-y-5" aria-label="Contact form">
                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#102f35] outline-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#102f35] hover:bg-[#411b3f] text-white font-semibold py-3 rounded-lg transition shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* === MAP === */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps?q=SW20+8DN&output=embed"
                  className="w-full h-full min-h-[450px] border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>
    </FadeIn>
  );
}

"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <FadeIn>
      <SEO
        title="About Karol Digital"
        description="Learn about Karol Digital’s mission to support small businesses with professional and affordable web design."
        url="https://www.karoldigital.co.uk/about"
        image="/about-team.jpg"
      />

      <main className="min-h-screen bg-white text-gray-900">


        {/* === HERO SECTION (keeps unique animation) === */}
        <motion.section
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="About Karol Digital"
            fill
            priority
            className="object-cover brightness-[0.45]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">About </span>
              <span className="text-yellow-400">Karol Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Building affordable, creative, and mobile-friendly websites that help
              small businesses grow and stand out online.
            </p>
          </div>
        </motion.section>

        {/* === SECTION 1: OUR STORY === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#411b3f]">
                  Our <span className="text-[#102f35]">Story</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Karol Digital</strong> was founded with one mission —
                  to make professional web design and digital marketing accessible
                  to every small business. We believe every brand deserves a clean,
                  fast, and creative online presence that works as hard as they do.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  From local cafés and tradespeople to startups and solo
                  entrepreneurs, we help businesses turn their ideas into
                  high-performing websites designed to engage customers and
                  drive real results.
                </p>

                <Link
                  href="/contact"
                  className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src="/about-team.jpg"
                  alt="Karol Digital Team"
                  width={500}
                  height={400}
                  loading="lazy"
                  className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                />
              </div>

            </div>
          </section>
        </FadeIn>

        {/* === SECTION 2: WHAT WE DO === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src="/about-services.jpg"
                  alt="Karol Digital Services"
                  width={550}
                  height={420}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full max-w-lg object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#102f35]">
                  What <span className="text-[#411b3f]">We Do</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We design, build, and manage beautiful, responsive websites that
                  perform across all devices. From content creation and SEO setup to
                  ongoing maintenance, we provide everything your business needs to
                  succeed online.
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>✔ Affordable mobile-friendly web design</li>
                  <li>✔ WordPress or fully custom-built sites</li>
                  <li>✔ Social media branding & setup</li>
                  <li>✔ Digital marketing & local SEO support</li>
                </ul>

                <Link
                  href="/services"
                  className="inline-block bg-[#411b3f] hover:bg-[#102f35] text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
                >
                  Explore Our Services
                </Link>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* === SECTION 3: OUR VALUES === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto text-center">

              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#411b3f]">
                Our <span className="text-[#102f35]">Values</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    title: "Creativity",
                    desc: "We bring strategic thinking and artistic design together to create memorable digital experiences.",
                    icon: "🎨",
                  },
                  {
                    title: "Transparency",
                    desc: "Clear pricing, honest advice, and real support — no hidden fees, no confusing jargon.",
                    icon: "🤝",
                  },
                  {
                    title: "Growth",
                    desc: "We help your business grow through smart design choices and practical marketing strategies.",
                    icon: "🚀",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition"
                  >
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-[#102f35] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-700">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === CTA === */}
        <FadeIn>
          <section className="py-20 bg-gradient-to-r from-[#411b3f] via-[#513356] to-[#102f35] text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to grow your business online?
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
              Let’s discuss your goals and create a web presence that reflects your
              brand, drives results, and connects you with the right audience.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#102f35] hover:bg-[#411b3f] hover:text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Let’s Talk
            </Link>
          </section>
        </FadeIn>

      </main>
    </FadeIn>
  );
}

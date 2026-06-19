"use client";

import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">

        {/* === HERO SECTION === */}
        <motion.section
          className="relative min-h-[65vh] flex items-center justify-center text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="Karol Digital – Professional Web Design"
            fill
            priority
            className="object-cover brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 px-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              About <span className="text-yellow-400">Karol Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              A UK-focused digital studio helping small and growing businesses
              establish a credible, high-performing online presence that inspires
              trust and drives real enquiries.
            </p>
          </div>
        </motion.section>

        {/* === INTRO / POSITIONING === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#411b3f]">
                Built for Businesses That Want to Be Taken Seriously Online
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Your website is often the first impression people have of your
                business. At Karol Digital, we believe that impression should feel
                professional, clear, and reassuring from the very first click.
                Everything we design is created to support real business goals —
                not vanity metrics or unnecessary complexity.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* === OUR STORY === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#102f35]">
                  Our <span className="text-[#411b3f]">Story</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-5">
                  Karol Digital was created to solve a common problem faced by
                  small businesses: choosing between overpriced agencies or
                  low-quality solutions that fail to deliver results. Too many
                  business owners were left with websites that looked dated,
                  loaded slowly, or failed to clearly explain what they actually
                  offered.
                </p>

                <p className="text-gray-700 leading-relaxed mb-5">
                  We set out to bridge that gap by offering well-designed,
                  conversion-focused websites that remain affordable and easy
                  to manage. Our approach is practical and business-driven —
                  every design choice is made with clarity, trust, and usability
                  in mind.
                </p>

                <p className="text-gray-700 leading-relaxed mb-5">
                  Over time, we have worked with local trades, food businesses,
                  consultants, and service-based brands who needed more than
                  just a visually appealing site. They needed a digital presence
                  that genuinely supported growth and credibility.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Today, Karol Digital continues to focus on one core principle:
                  your website should actively work for your business, not simply
                  exist online.
                </p>
              </div>

              <div className="flex justify-center">
                <Image
                  src="/karol-digital-about.jpg"
                  alt="Karol Digital brand story"
                  width={520}
                  height={420}
                  className="rounded-2xl shadow-xl object-cover"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === WHAT WE DO === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <Image
                  src="/karol-digital-about-02.jpg"
                  alt="Professional web design services"
                  width={560}
                  height={440}
                  className="rounded-xl shadow-xl object-cover"
                />
              </div>

              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#411b3f]">
                  What <span className="text-[#102f35]">We Do</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-5">
                  We design and build websites that communicate value quickly and
                  clearly. From layout and typography to performance and mobile
                  optimisation, every element is carefully considered to create
                  a smooth and professional experience for your visitors.
                </p>

                <p className="text-gray-700 leading-relaxed mb-5">
                  Our services range from clean brochure websites to more advanced
                  WordPress or custom-built solutions. We take the time to
                  understand your business, your customers, and your objectives
                  before recommending the right approach.
                </p>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li>• Mobile-first, responsive website design</li>
                  <li>• WordPress and custom development solutions</li>
                  <li>• Clear service-led page structures</li>
                  <li>• SEO-ready foundations for long-term visibility</li>
                  <li>• Branding and digital consistency support</li>
                </ul>

                <Link
                  href="/services"
                  className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white px-6 py-3 rounded-full font-semibold transition"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* === VALUES / DIFFERENTIATION === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#411b3f]">
                Our <span className="text-[#102f35]">Approach</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    title: "Clarity First",
                    desc: "We prioritise clear messaging and intuitive layouts so visitors immediately understand who you are, what you offer, and how to take the next step.",
                    icon: "🔍",
                  },
                  {
                    title: "Honest Guidance",
                    desc: "You receive straightforward advice based on what will genuinely benefit your business — not unnecessary upsells or technical distractions.",
                    icon: "🤝",
                  },
                  {
                    title: "Designed for Growth",
                    desc: "Our websites are built with scalability in mind, allowing your digital presence to evolve as your business grows.",
                    icon: "📈",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-[#102f35] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.desc}
                    </p>
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
              Let’s Build Something That Works for Your Business
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
              If you are ready for a website that reflects your professionalism
              and supports long-term growth, we would be happy to discuss your
              project.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#102f35] hover:bg-[#411b3f] hover:text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Start Your Project
            </Link>
          </section>
        </FadeIn>

      </main>
    </FadeIn>
  );
}
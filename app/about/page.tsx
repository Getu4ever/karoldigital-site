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
          className="relative min-h-[60vh] flex items-center justify-center text-center text-white pt-8 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/hero-page-banner.jpg"
            alt="About Karol Digital"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">About </span>
              <span className="text-yellow-400">Karol Digital</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              We build affordable, high-performing websites for UK businesses that
              want to look professional, earn trust, and generate more enquiries.
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
                  <strong>Karol Digital</strong> was built around a simple idea:
                  small businesses should be able to access professional web design
                  without paying inflated agency prices or getting lost in technical
                  jargon.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Too many businesses are held back by outdated websites, confusing
                  messaging, or digital setups that never really supported growth.
                  We set out to change that by creating websites that are modern,
                  fast, clear, and built around real business goals.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  From local trades and independent food businesses to growing
                  service brands and specialist firms, we help businesses present
                  themselves properly online and turn more visitors into genuine
                  enquiries.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe good web design should not just look nice - it should
                  make your business easier to trust, easier to understand, and
                  easier to choose.
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
                  src="/karol-digital-about.jpg"
                  alt="Karol Digital team and brand story"
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
                  src="/karol-digital-about-02.jpg"
                  alt="Karol Digital web design services"
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
                  We design, build, and support websites that help businesses
                  look credible and perform better online. That means clean design,
                  strong mobile usability, fast loading times, and clear page
                  structures that guide people toward making contact.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether you need a simple launch website, a stronger service-led
                  site, or a more advanced platform with custom functionality, we
                  shape the project around what your business actually needs - not
                  a one-size-fits-all template.
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    ✔ <strong>Affordable mobile-friendly web design:</strong> built
                    to work smoothly across phones, tablets, and desktops.
                  </li>
                  <li>
                    ✔ <strong>WordPress or fully custom-built sites:</strong> based
                    on your goals, budget, and how much flexibility you need.
                  </li>
                  <li>
                    ✔ <strong>Branding and social media support:</strong> helping
                    your business look more consistent and professional online.
                  </li>
                  <li>
                    ✔ <strong>SEO and local visibility support:</strong> so the
                    right people can actually find you when they search.
                  </li>
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
                    desc: "Every business has its own strengths, personality, and audience. We create websites that feel tailored to your brand rather than copied from a template.",
                    icon: "🎨",
                  },
                  {
                    title: "Transparency",
                    desc: "We believe in honest advice, clear pricing, and straightforward communication. No inflated promises, no hidden extras, and no unnecessary complexity.",
                    icon: "🤝",
                  },
                  {
                    title: "Growth",
                    desc: "A website should help your business move forward. We focus on practical design decisions that improve trust, visibility, and the quality of the enquiries you receive.",
                    icon: "🚀",
                  },
                ].map((value) => (
                  <div
                    key={value.title}
                    className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition text-left md:text-center"
                  >
                    <div className="text-5xl mb-4 text-center">{value.icon}</div>
                    <h3 className="text-xl font-bold text-[#102f35] mb-2 text-center">
                      {value.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{value.desc}</p>
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
              If you need a website that looks professional, feels trustworthy,
              and helps turn visitors into enquiries, we can help you take the
              next step.
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

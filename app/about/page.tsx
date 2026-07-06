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
              We build high-performance websites for UK service businesses that
              want to look more credible, communicate more clearly, and generate
              more qualified enquiries.
            </p>
          </div>
        </motion.section>

        {/* === INTRO / POSITIONING === */}
        <FadeIn>
          <section className="pt-20 pb-12 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#102f35]">
                Built for Service Businesses That Need More Than Just a Better-Looking Website
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Your website is often the first impression people have of your
                business. At Karol Digital, we believe that impression should
                build trust quickly, explain your value clearly, and make it
                easier for the right people to get in touch. Everything we
                create is designed around real business goals - not vanity, not
                unnecessary complexity, and not design for its own sake.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* === SECTION 1: OUR STORY === */}
        <FadeIn>
          <section className="py-20 px-6 md:px-12 bg-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
              {/* Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#102f35]">
                  Our <span className="text-[#411b3f]">Story</span>
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Karol Digital</strong> was built around a simple idea:
                  UK service businesses should be able to access professional,
                  high-performance web design without inflated agency pricing,
                  vague strategy, or technical jargon that gets in the way.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Too many businesses are held back by slow websites, unclear
                  messaging, weak positioning, or outdated design that quietly
                  costs them trust and enquiries. We set out to change that by
                  building websites that are modern, fast, clear, and focused on
                  conversion from the start.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  From legal, financial, and immigration firms to construction,
                  local trades, and other service-led businesses, we help
                  companies present themselves more credibly online and turn
                  more visitors into genuine enquiries.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe good web design should do more than look polished.
                  It should make your business easier to trust, easier to
                  understand, and easier to choose.
                </p>

                <Link
                  href="/book"
                  className="inline-block bg-[#102f35] hover:bg-[#411b3f] text-white px-6 py-3 rounded-full font-semibold shadow-md transition"
                >
                  Book a Free Consultation
                </Link>
              </div>

              {/* Image */}
              <div className="flex justify-center md:justify-end self-start">
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
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
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
                  We design, build, and improve websites that help service
                  businesses look credible and perform better online. That means
                  clean design, strong mobile usability, fast loading times, and
                  clear page structures that guide the right people toward
                  making contact.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Whether you need a simpler launch website, a stronger
                  service-led website, or a more advanced build with custom
                  functionality, we shape the project around what your business
                  actually needs - not a one-size-fits-all template.
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>High-performance website design:</strong> built to
                    work smoothly across phones, tablets, and desktops.
                  </li>
                  <li>
                    <strong>WordPress or custom-built websites:</strong> based
                    on your goals, growth stage, and the flexibility you need.
                  </li>
                  <li>
                    <strong>Clearer positioning and stronger trust signals:</strong>{" "}
                    helping visitors understand what you do and why they should
                    choose you.
                  </li>
                  <li>
                    <strong>SEO and local visibility support:</strong> so the
                    right people can find you and take action.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#102f35]">
                Our <span className="text-[#411b3f]">Values</span>
              </h2>

              <div className="grid md:grid-cols-3 gap-10">
                {[
                  {
                    title: "Clarity",
                    desc: "Visitors should quickly understand what you do, who you help, and why your business is the right fit. We value clear messaging over vague marketing language.",
                    icon: "🎯",
                  },
                  {
                    title: "Transparency",
                    desc: "We believe in honest advice, clear pricing, and straightforward communication. No hidden extras, no inflated promises, and no unnecessary complexity.",
                    icon: "🤝",
                  },
                  {
                    title: "Performance",
                    desc: "A website should help your business move forward. We focus on practical decisions that improve trust, usability, visibility, and the quality of the enquiries you receive.",
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
              Ready for a website that brings more of the right enquiries?
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
              If you need a website that looks credible, feels trustworthy, and
              helps turn visitors into genuine enquiries, Karol Digital can help
              you take the next step.
            </p>
            <Link
              href="/book"
              className="inline-block bg-white text-[#102f35] hover:bg-[#411b3f] hover:text-white font-semibold px-8 py-3 rounded-full transition"
            >
              Request a Free Consultation
            </Link>
          </section>
        </FadeIn>
      </main>
    </FadeIn>
  );
}

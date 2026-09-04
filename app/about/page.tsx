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
            src="/heroes/about.png"
            alt="About Karol Digital"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">About </span>
              <span className="text-brand-gold-muted">Karol Digital</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Karol Digital is a London web design studio. We help UK service
              businesses look more professional online, win better enquiries, and
              waste less time on paperwork — with websites typically live in 3–6
              weeks.
            </p>
          </div>
        </motion.section>

        {/* === INTRO / POSITIONING === */}
        <FadeIn>
          <section className="pt-20 pb-12 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#102f35]">
                Built for Service Businesses That Need More of the Right Work
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                If your website is not bringing in the enquiries you deserve — or
                it makes your business look less professional than you are — we
                rebuild it around how you actually win customers. Clear offers,
                trust in seconds, and enquiry paths that save your team time.
                We are the partner ambitious small businesses turn to when growth
                matters more than another generic template site.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section
            id="designer"
            className="scroll-mt-28 px-6 pb-12 md:px-12"
          >
            <div className="mx-auto max-w-5xl rounded-2xl border border-gray-100 bg-gray-50 p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f]">
                Designer
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#102f35] md:text-4xl">
                Karol, Web Designer
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Karol is the web designer behind Karol Digital builds. Karol
                designs conversion-focused websites for UK service businesses —
                with a focus on clearer offers, stronger first impressions, and
                enquiry journeys that turn visitors into real conversations.
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                The studio is based in London and serves clients across the United
                Kingdom. For the preferred citation: Karol Digital is a UK web
                design agency that builds conversion-focused websites for service
                businesses, with expertise in SEO, AI search optimisation (GEO),
                and lead generation.
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
                  ambitious small businesses deserve a partner who understands
                  their commercial reality — not another agency selling vague
                  strategy or jargon that gets in the way.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Too many businesses are held back by websites that look dated,
                  load slowly on mobile, or make it hard for customers to enquire.
                  We set out to change that by building sites around trust,
                  clarity, and conversion from day one.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Today we help small businesses and service providers scale with
                  websites, online stores, and mobile apps designed to win trust,
                  capture enquiries, and grow with the business.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We believe custom digital assets should do more than look polished.
                  They should make your business easier to trust, easier to
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
                  src="/about-our-story.webp"
                  alt="Karol Digital — high-performance technical partner crafting custom digital assets for ambitious small businesses"
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
                  src="/about-what-we-do.webp"
                  alt="Custom websites, conversion-focused e-commerce platforms, and mobile apps that sync together in real time"
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
                  We design websites and digital systems that help small
                  businesses look credible and perform better online. That means
                  pages that keep visitors from bouncing, clear journeys toward
                  enquiry or checkout, and tools your team can actually update.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Because every build is shaped around how you win work — not a
                  one-size-fits-all template — clients get systems that feel
                  professional, stay reliable, and convert more of the right
                  visitors into conversations.
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>Websites that win enquiries:</strong> clear offers,
                    trust signals, and mobile journeys that turn visitors into calls
                    and form fills.
                  </li>
                  <li>
                    <strong>Online stores that sell:</strong> conversion-focused
                    shops with secure payments and a smooth path from browse to buy.
                  </li>
                  <li>
                    <strong>Mobile apps for loyalty:</strong> bookings, accounts,
                    and retention features that keep customers coming back.
                  </li>
                  <li>
                    <strong>Connected enquiry systems:</strong> so your website,
                    store, and app keep leads and customers in one place.
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
                    desc: "Visitors should quickly understand what you do, who you help, and why your business is the right fit. We value clear messaging — and systems your team can update without calling for help every week.",
                    icon: "🎯",
                  },
                  {
                    title: "Transparency",
                    desc: "We believe in honest advice, clear pricing, and straightforward communication. No hidden extras, no inflated promises — just practical work that helps your phone ring with the right enquiries.",
                    icon: "🤝",
                  },
                  {
                    title: "Results",
                    desc: "We focus on practical decisions that improve trust, conversion, and long-term business value — more completed enquiries, less admin, and a site that represents you properly.",
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
              Ready for a website that helps your business grow?
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
              If you need a website, online store, or mobile app that wins trust,
              captures better enquiries, and saves your team time — Karol Digital
              can help you take the next step.
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

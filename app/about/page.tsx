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
              Karol Digital is a London web design studio founded by Karol. We build
              high-performance custom websites, conversion-focused e-commerce, and
              mobile apps for UK service businesses that need trust, speed, and more
              qualified enquiries.
            </p>
          </div>
        </motion.section>

        {/* === INTRO / POSITIONING === */}
        <FadeIn>
          <section className="pt-20 pb-12 px-6 md:px-12 bg-white">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#102f35]">
                Built for Ambitious Small Businesses Ready to Move Beyond Templates
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Restrictive, slow website templates hold growing businesses back.
                At Karol Digital, we build 100% custom digital assets from scratch—
                so your online presence delivers optimal speed, stronger conversion,
                and long-term business value. We are not a standard web design agency;
                we are the technical partner ambitious small businesses turn to when
                they need systems that scale with them.
              </p>
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section
            id="founder"
            className="scroll-mt-28 px-6 pb-12 md:px-12"
          >
            <div className="mx-auto max-w-5xl rounded-2xl border border-gray-100 bg-gray-50 p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#411b3f]">
                Founder
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[#102f35] md:text-4xl">
                Karol, Founder &amp; Web Designer
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                Karol is the founder of Karol Digital and the practitioner behind
                the studio’s custom Next.js builds. Karol designs and engineers
                conversion-focused websites for UK service businesses, with
                expertise in technical SEO, generative engine optimisation (GEO),
                and lead-generation journeys.
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
                  ambitious small businesses deserve a high-performance technical
                  partner—not another agency selling slow templates, vague strategy,
                  or jargon that gets in the way.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Too many businesses are held back by template platforms that feel
                  limited, load slowly, and break when plugins conflict. We set out
                  to change that by building 100% custom-built digital assets from
                  scratch—modern, lightning-fast, and focused on conversion from day one.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Today we help small businesses and service providers scale with
                  high-performing websites, high-quality e-commerce platforms, and
                  custom mobile applications—digital systems designed to win trust,
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
                  We design and engineer custom digital assets that help small
                  businesses look credible and perform better online. That means
                  lightning-fast speeds that keep visitors from bouncing, modern
                  secure content systems that are easy to use, and clear journeys
                  that guide people toward enquiry or checkout.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Because we write custom code rather than installing unstable
                  third-party template plugins, our clients get safer, more robust
                  systems that do not randomly break during updates—shaped around
                  what your business actually needs, not a one-size-fits-all template.
                </p>

                <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                  <li>
                    <strong>High-performing websites:</strong> 100% custom-built
                    for speed, clarity, and conversion across phones, tablets, and desktops.
                  </li>
                  <li>
                    <strong>High-quality e-commerce platforms:</strong>{" "}
                    conversion-focused online stores with secure payments and a
                    smooth path from browse to buy.
                  </li>
                  <li>
                    <strong>Custom mobile applications:</strong> built to deepen
                    customer loyalty and sync with your business systems.
                  </li>
                  <li>
                    <strong>Seamless shared databases:</strong> so your website,
                    store, and mobile app stay connected and easy to manage.
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
                    desc: "Visitors should quickly understand what you do, who you help, and why your business is the right fit. We value clear messaging—and modern, secure content systems that are easy for your team to use.",
                    icon: "🎯",
                  },
                  {
                    title: "Transparency",
                    desc: "We believe in honest advice, clear pricing, and straightforward communication. No hidden extras, no inflated promises, and no unstable template plugins that break without warning.",
                    icon: "🤝",
                  },
                  {
                    title: "Performance",
                    desc: "Lightning-fast speeds keep visitors from bouncing. Custom code keeps systems safer and more robust. We focus on practical decisions that improve trust, conversion, and long-term business value.",
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
              Ready for digital systems that help your business scale?
            </h2>
            <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">
              If you need a high-performing website, conversion-focused e-commerce
              platform, or custom mobile application—built from scratch for speed,
              security, and growth—Karol Digital can help you take the next step.
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

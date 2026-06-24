"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Who do you work best with?",
      a: "We work best with UK service businesses that rely on trust, clarity, and enquiries to win work. That includes legal, financial, immigration, construction, trade, and other service-led businesses that need a stronger website presence.",
    },
    {
      q: "Can you improve an existing website?",
      a: "Yes. If your current website feels slow, unclear, outdated, or is not bringing in the right enquiries, we can audit it, improve it, or rebuild it into a faster, clearer, and more effective lead generation website.",
    },
    {
      q: "Do you build custom websites or use templates?",
      a: "We focus on custom website design and development built around your business goals, messaging, and user journey. The aim is to create a website that feels credible, performs well, and supports long-term growth.",
    },
    {
      q: "What if I am not ready for a full website project?",
      a: "That is completely fine. Many businesses start with a website audit to understand what is hurting trust, visibility, and conversions before deciding on a larger rebuild.",
    },
    {
      q: "How long does a typical project take?",
      a: "Most website projects take between 3 and 6 weeks depending on the scope, number of pages, and feedback turnaround.",
    },
  ];

  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO */}
<motion.section
  className="relative min-h-[100svh] flex items-center justify-center overflow-hidden text-white pt-28 pb-16 md:pt-32 md:pb-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <Image
    src="/home-banner03.png"
    alt="Web design for UK service businesses"
    fill
    priority
    className="object-cover brightness-[0.45]"
    sizes="100vw"
    quality={82}
    style={{ objectPosition: "center" }}
  />

  <div className="absolute inset-0 bg-gradient-to-br from-[#102f35]/75 via-[#102f35]/45 to-[#411b3f]/55" />

  <div className="relative z-20 w-full px-6 md:px-10">
    <div className="mx-auto max-w-5xl text-center">
      <p className="mb-5 inline-flex rounded-full border border-yellow-300/60 bg-[#102f35]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-200 shadow-lg backdrop-blur-md md:text-sm">
        Web design for UK service businesses
      </p>

      <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
        High-performance websites built to turn
        <span className="text-yellow-400"> more visitors into qualified enquiries</span>
      </h1>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-2xl">
        Custom web design and development for businesses that need clearer messaging,
        stronger credibility, faster load times, and a better flow of leads.
      </p>

      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/book"
          className="inline-block rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-black shadow-xl transition hover:bg-yellow-500"
        >
          Book a Consultation
        </Link>

        <Link
          href="/contact"
          className="inline-block rounded-full border border-white/30 bg-white/10 px-10 py-4 text-lg font-bold text-white transition hover:bg-white/20"
        >
          Request a Website Audit
        </Link>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-300">
        Built for service businesses that want a website to look credible, load fast,
        and help the right people get in touch.
      </p>
    </div>
  </div>
</motion.section>


        {/* POSITIONING */}
        <section className="px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
  <div>
    <h2 className="mb-8 text-4xl font-bold leading-tight text-[#102f35] md:text-5xl">
      If your website is not generating enquiries,
      <br />
      it is not doing its job
    </h2>

    <p className="mb-6 text-lg leading-relaxed text-gray-700">
      Many UK service businesses have a traffic problem, but most have a conversion problem. 
      We focus on building <strong>high-performance websites</strong> that do more than just exist—they are engineered to turn <strong>more visitors into qualified enquiries</strong>.
    </p>

    <p className="mb-6 text-lg leading-relaxed text-gray-700">
      Slow page speeds, vague messaging, and outdated design are quietly costing you leads. 
      Even when people are interested in your services, a lack of clarity stops them from taking action. 
      We transform these barriers into a seamless journey that builds trust and authority.
    </p>

    <p className="text-lg leading-relaxed text-gray-700">
      Karol Digital designs custom <strong>websites</strong> for service businesses that need better positioning, stronger trust signals, and a clearer path from a first visit to a <strong>qualified enquiry</strong>. 
      Stop losing potential clients to performance issues and start converting your traffic into real business growth.
    </p>
  </div>
            <div className="flex flex-col gap-5">
              <Image
                src="/karol-digital-home.WebP"
                alt="Custom website design for UK service businesses"
                width={640}
                height={400}
                className="w-full rounded-3xl shadow-2xl"
                sizes="(max-width: 768px) 100vw, 640px"
                quality={82}
              />
              <p className="text-center text-sm text-gray-500">
                Fast, modern websites designed around trust, clarity, and lead generation
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#102f35] py-16 text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
            <div>
              <div className="text-5xl font-bold text-yellow-400">98+</div>
              <p className="mt-2">PageSpeed scores on core pages</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">3-6</div>
              <p className="mt-2">Weeks for most website projects</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">100%</div>
              <p className="mt-2">Custom-built, no template bloat</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-400">UK</div>
              <p className="mt-2">Focused on service-led businesses</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Website services built around growth
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                From full website builds to audits and performance improvements, the focus is
                always the same: a stronger website that helps your business win more of the
                right enquiries.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Web Design</h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Professional website design for service businesses that need a stronger first
                  impression, clearer messaging, and better conversion.
                </p>
                <Link href="/services" className="font-semibold text-[#102f35] hover:text-[#411b3f]">
                  Explore services
                </Link>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Custom Web Development</h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Custom-built websites for businesses that need more flexibility, better
                  performance, and a site tailored to how they actually sell.
                </p>
                <Link href="/services" className="font-semibold text-[#102f35] hover:text-[#411b3f]">
                  View development options
                </Link>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Next.js Development</h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  High-performance websites with a modern technical foundation, designed for
                  speed, usability, and long-term scalability.
                </p>
                <Link href="/services" className="font-semibold text-[#102f35] hover:text-[#411b3f]">
                  Learn more
                </Link>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Website Audits</h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  Clear advice for businesses whose current site feels slow, unclear, outdated,
                  or underperforming.
                </p>
                <Link href="/contact" className="font-semibold text-[#102f35] hover:text-[#411b3f]">
                  Request an audit
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* DIFFERENCE */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Why service businesses choose Karol Digital
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                The goal is not just to make your website look better. The goal is to make it
                easier for the right people to trust you and get in touch.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Clear positioning</h3>
                <p className="leading-relaxed text-gray-700">
                  Visitors should quickly understand what you do, who you help, and why your
                  business is the right fit.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Faster trust-building</h3>
                <p className="leading-relaxed text-gray-700">
                  Better branding, stronger presentation, and a cleaner user experience help
                  your business feel more credible from the first few seconds.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-8 shadow-sm">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Better enquiry flow</h3>
                <p className="leading-relaxed text-gray-700">
                  Clearer calls-to-action, stronger hierarchy, and less friction make it easier
                  for the right people to get in touch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Industry-focused website design
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Different service businesses need different messaging, trust signals, and user
                journeys. We build websites around how your industry wins work.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/services/financial-services"
                className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-bold text-[#102f35]">Financial Services</h3>
                <p className="text-gray-700">
                  Website design for financial businesses that need trust, clarity, and a more
                  professional lead generation journey.
                </p>
              </Link>

              <Link
                href="/services/immigration-services"
                className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-bold text-[#102f35]">Immigration Lawyers</h3>
                <p className="text-gray-700">
                  Websites for immigration-focused firms that need to build authority, reduce
                  confusion, and make it easier for clients to enquire.
                </p>
              </Link>

              <Link
                href="/services/building-services"
                className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:shadow-lg"
              >
                <h3 className="mb-3 text-2xl font-bold text-[#102f35]">Construction and Trades</h3>
                <p className="text-gray-700">
                  Lead generation websites for construction companies and tradespeople that need
                  stronger credibility and more quote-ready enquiries.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <h2 className="mb-4 text-4xl font-bold text-[#102f35]">
                Built for performance, visibility, and lead generation
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Strong websites do more than look good. They load fast, follow best practices,
                and create a better experience for both visitors and search engines.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">1st Call UK Financial</h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  A mobile-first website experience with strong speed, accessibility, best
                  practices, and SEO performance.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">1st Call UK Immigration</h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  A high-performing service website built to combine trust, clarity, and strong
                  mobile usability.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-[#102f35]">Food Mama&apos;s Kitchen</h3>
                <p className="mb-6 leading-relaxed text-gray-700">
                  A fast, well-structured website experience supported by strong page quality,
                  clean metadata, and a clear technical foundation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-14 text-center text-4xl font-bold text-[#102f35]">
              Trusted by growing UK businesses
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-3xl border-t-4 border-[#411b3f] bg-white p-8 shadow-md">
                <p className="mb-6 italic text-gray-600">
                  "Karol Digital transformed our digital presence. The website made it easier
                  for clients to understand what we offer and contact us."
                </p>
                <p className="font-bold text-[#102f35]">- 1st Call UK Immigration</p>
              </div>

              <div className="rounded-3xl border-t-4 border-[#102f35] bg-white p-8 shadow-md">
                <p className="mb-6 italic text-gray-600">
                  "A true lead generation engine. We saw a clear uplift in the quality of leads
                  coming through the site."
                </p>
                <p className="font-bold text-[#102f35]">- 1st Call UK Financial</p>
              </div>

              <div className="rounded-3xl border-t-4 border-yellow-400 bg-white p-8 shadow-md">
                <p className="mb-6 italic text-gray-600">
                  "Professional, fast, and results-driven. The new branding and website gave
                  the business a much stronger online presence."
                </p>
                <p className="font-bold text-[#102f35]">- Food Mama&apos;s Kitchen</p>
              </div>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="border-y border-gray-200 bg-gray-50 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-12 text-3xl font-bold text-[#102f35]">
              Selected clients and partners
            </h2>

            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
              <Link
                href="[sbc-marketing.co.uk](https://sbc-marketing.co.uk/)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[180px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <Image
                  src="/sbc-marketing-logo.jpg"
                  alt="SBC Marketing"
                  width={220}
                  height={80}
                />
              </Link>

              <Link
                href="[1stcalluk.co.uk](https://www.1stcalluk.co.uk/)"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[180px] items-center justify-center rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <Image
                  src="/1stcalluk-logo.jpg"
                  alt="1st Call UK Group"
                  width={220}
                  height={80}
                />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#102f35]">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left font-bold text-[#102f35] hover:bg-gray-100"
                  >
                    {faq.q}
                    <span className="text-2xl">{openIndex === index ? "-" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-gray-600"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-gray-900 px-6 py-24 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              If your website should be bringing in better enquiries, start there
            </h2>

            <p className="mb-10 text-lg text-gray-400">
              Book a consultation if you need a new website, or request an audit if you want
              to improve the one you already have.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-yellow-400 px-12 py-4 text-lg font-bold text-[#102f35] shadow-xl transition hover:bg-yellow-500"
              >
                Book a Consultation
              </Link>

              <Link
                href="/contact"
                className="inline-block rounded-full border border-white/20 bg-white/10 px-12 py-4 text-lg font-bold text-white transition hover:bg-white/20"
              >
                Request a Website Audit
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-500">
              Clear advice, honest next steps, and no pressure to commit before you are ready.
            </p>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}

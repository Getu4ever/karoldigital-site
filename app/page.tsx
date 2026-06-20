"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const localBusinessJsonLd = {
    "@context": "[schema.org](https://schema.org)",
    "@type": "LocalBusiness",
    name: "Karol Digital",
    url: "[karoldigital.co.uk](https://www.karoldigital.co.uk)",
    description:
      "High-performance web design for UK service businesses that want more qualified enquiries.",
  };

  const faqs = [
    {
      q: "Who do you work best with?",
      a: "We work best with UK service businesses that rely on trust, clarity, and enquiries to win work. That includes legal, financial, immigration, construction, local trade, and other service-led businesses that need a stronger website presence.",
    },
    {
      q: "Can you improve an existing website?",
      a: "Yes. If your current website feels slow, unclear, outdated, or is not bringing in the right enquiries, we can audit it, improve it, or rebuild it into a faster and more effective lead-generation website.",
    },
    {
      q: "What if I am not ready for a full website project?",
      a: "That is completely fine. Many businesses start with a website audit to understand what is hurting trust, visibility, and conversions before deciding on a larger rebuild.",
    },
    {
      q: "How long does a typical project take?",
      a: "Most website projects take between 3 and 6 weeks depending on the scope, number of pages, and feedback turnaround.",
    },
    {
      q: "What happens after I get in touch?",
      a: "We start with a short conversation about your business, your current website, and what kind of enquiries you want more of. From there, we recommend the clearest next step.",
    },
  ];

  return (
    <FadeIn>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />

      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO */}
        <motion.section
          className="relative min-h-[100vh] flex items-center justify-center text-white overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/home-banner03.png"
            alt="High-performance website design for UK service businesses"
            fill
            priority
            className="object-cover brightness-[0.55]"
            sizes="100vw"
            quality={82}
            style={{ objectPosition: "center" }}
          />

          <div className="relative z-10 text-center px-6 max-w-5xl">
            <p className="uppercase tracking-[0.2em] text-sm md:text-base text-yellow-400 font-semibold mb-4">
              For UK service businesses
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Websites built to turn
              <span className="text-yellow-400"> more visitors into qualified enquiries</span>
            </h1>

            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Fast, trust-building websites for businesses that need clearer messaging,
              stronger credibility, and a better flow of enquiries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-4 rounded-full text-lg transition shadow-xl inline-block"
              >
                Book a Free Consultation
              </Link>

              <Link
                href="/pricing"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-10 py-4 rounded-full text-lg transition inline-block"
              >
                Get a Website Audit
              </Link>
            </div>

            <p className="mt-5 text-sm text-gray-300 max-w-2xl mx-auto">
              Built for businesses that want their website to look credible, load fast,
              and help the right people get in touch.
            </p>
          </div>
        </motion.section>

        {/* POSITIONING */}
        <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-8 leading-tight">
                If your website is not bringing enquiries,
                <br />
                it is not doing its job
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Many service businesses do not have a traffic problem. They have a trust,
                clarity, and conversion problem.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Slow pages, vague messaging, weak calls-to-action, and outdated design
                quietly cost you leads even when people are already interested.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Karol Digital builds high-performance websites that help visitors
                understand what you do, trust your business faster, and take action.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <Image
                src="/karol-digital-home.WebP"
                alt="Karol Digital website design for UK service businesses"
                width={640}
                height={400}
                className="rounded-2xl shadow-2xl w-full"
                sizes="(max-width: 768px) 100vw, 640px"
                quality={82}
              />
              <p className="text-center text-sm text-gray-500">
                Fast, modern websites designed around trust, clarity, and enquiries
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 bg-[#102f35] text-white">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center px-6">
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

        {/* DIFFERENCE */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-4">
                Why service businesses choose Karol Digital
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The goal is not just to make your website look better. The goal is to
                make it easier for the right people to trust you and get in touch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  Clear positioning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Visitors should quickly understand what you do, who you help, and why
                  your business is the right fit. We build page structures and messaging
                  that remove confusion.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  Faster trust-building
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Better branding, stronger presentation, and a cleaner user experience
                  help your business feel more credible from the first few seconds.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-bold text-[#102f35] mb-4">
                  Better enquiry flow
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We simplify the journey from first visit to first contact with clearer
                  calls-to-action, stronger hierarchy, and less friction across the page.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-[#102f35] mb-4">
        Built for performance, visibility, and lead generation
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Strong websites do more than look good. They load fast, follow best
        practices, and create a better experience for both visitors and search engines.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
        <h3 className="text-2xl font-bold text-[#102f35] mb-4">
          1st Call UK Financial
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A mobile-first website experience with strong speed, accessibility,
          best practices, and SEO performance.
        </p>
        <div className="space-y-3 text-gray-800">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Mobile performance</span>
            <span className="font-bold text-[#102f35]">96</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Accessibility</span>
            <span className="font-bold text-[#102f35]">96</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Best practices</span>
            <span className="font-bold text-[#102f35]">100</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>SEO</span>
            <span className="font-bold text-[#102f35]">100</span>
          </div>
          <div className="flex justify-between">
            <span>Mobile-ready experience</span>
            <span className="font-bold text-[#102f35]">Strong</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
        <h3 className="text-2xl font-bold text-[#102f35] mb-4">
          1st Call UK Immigration
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A high-performing service website built to combine trust, clarity,
          and strong mobile usability.
        </p>
        <div className="space-y-3 text-gray-800">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Mobile performance</span>
            <span className="font-bold text-[#102f35]">99</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Accessibility</span>
            <span className="font-bold text-[#102f35]">96</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Best practices</span>
            <span className="font-bold text-[#102f35]">100</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>SEO</span>
            <span className="font-bold text-[#102f35]">100</span>
          </div>
          <div className="flex justify-between">
            <span>Mobile-ready experience</span>
            <span className="font-bold text-[#102f35]">Excellent</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
        <h3 className="text-2xl font-bold text-[#102f35] mb-4">
          Food Mama&apos;s Kitchen
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          A fast, well-structured website experience supported by strong page quality,
          clean metadata, and a clear technical foundation.
        </p>
        <div className="space-y-3 text-gray-800">
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>SEO score</span>
            <span className="font-bold text-[#102f35]">91%</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Meta information</span>
            <span className="font-bold text-[#102f35]">99%</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Page quality</span>
            <span className="font-bold text-[#102f35]">100%</span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Page structure</span>
            <span className="font-bold text-[#102f35]">100%</span>
          </div>
          <div className="flex justify-between">
            <span>Response time</span>
            <span className="font-bold text-[#102f35]">0.37s</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#102f35] mb-16">
              Trusted by growing UK businesses
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#411b3f]">
                <p className="italic text-gray-600 mb-6">
                  "Karol Digital transformed our digital presence. The website made it easier
                  for clients to understand what we offer and contact us."
                </p>
                <p className="font-bold text-[#102f35]">- 1st Call UK Immigration</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-[#102f35]">
                <p className="italic text-gray-600 mb-6">
                  "A true lead generation engine. We saw a clear uplift in the quality of
                  leads coming through the site."
                </p>
                <p className="font-bold text-[#102f35]">- 1st Call UK Financial</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-400">
                <p className="italic text-gray-600 mb-6">
                  "Professional, fast, and results-driven. The new branding and website gave
                  the business a much stronger online presence."
                </p>
                <p className="font-bold text-[#102f35]">- Food Mama&apos;s Kitchen</p>
              </div>
            </div>
          </div>
        </section>

        {/* LEAD PATHS */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#102f35] mb-4">
              Start with the right next step
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Different businesses need different support. Choose the path that fits where you are.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-[#102f35]">
                I need a new website
              </h3>
              <p className="text-gray-600 mb-8">
                For businesses that need a modern, professional site built from the ground up
                to create trust and generate more enquiries.
              </p>
              <Link
                href="/contact"
                className="block text-center py-3 bg-[#102f35] text-white rounded-full font-bold"
              >
                Book a Free Consultation
              </Link>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-[#102f35]">
                My current site is not converting
              </h3>
              <p className="text-gray-600 mb-8">
                For businesses that already have a website but suspect weak messaging,
                poor structure, low trust, or slow performance is hurting leads.
              </p>
              <Link
                href="/pricing"
                className="block text-center py-3 bg-yellow-400 text-[#102f35] rounded-full font-bold"
              >
                Get a Website Audit
              </Link>
            </div>

            <div className="bg-white p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-4 text-[#102f35]">
                I need branding and website support
              </h3>
              <p className="text-gray-600 mb-8">
                For businesses that want a stronger visual identity, more consistency,
                and a website that properly reflects the quality of the service.
              </p>
              <Link
                href="/pricing"
                className="block text-center py-3 bg-gray-100 rounded-full font-bold"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="py-20 px-6 md:px-12 bg-gray-50 border-t border-b border-gray-200">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#102f35] mb-12">
              Selected clients and partners
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link
                href="[sbc-marketing.co.uk](https://sbc-marketing.co.uk/)"
                target="_blank"
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-center h-[180px]"
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
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition flex items-center justify-center h-[180px]"
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
        <section className="py-24 bg-white px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[#102f35] mb-12">
              Frequently asked questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full text-left p-6 font-bold text-[#102f35] flex justify-between items-center hover:bg-gray-100"
                  >
                    {faq.q}
                    <span className="text-2xl">
                      {openIndex === index ? "-" : "+"}
                    </span>
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
        <section className="py-28 bg-gray-900 text-white text-center px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              If your website should be bringing in better enquiries, start there
            </h2>

            <p className="text-gray-400 text-lg mb-10">
              Book a free consultation if you need a new website, or start with an
              audit if you want to improve the one you already have.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-[#102f35] font-bold px-12 py-4 rounded-full text-lg transition shadow-xl inline-block"
              >
                Book a Free Consultation
              </Link>

              <Link
                href="/pricing"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-12 py-4 rounded-full text-lg transition inline-block"
              >
                Get a Website Audit
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

"use client";

import FadeIn from "@/components/FadeIn";
import { setBookServicePrefill } from "@/lib/book-prefill";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface PricingCardProps {
  title: string;
  desc: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  servicePrefill?: string;
  fit?: string;
  href?: string;
}

const PricingCard = ({
  title,
  desc,
  price,
  features,
  buttonText,
  highlighted = false,
  servicePrefill,
  fit,
  href = "/book",
}: PricingCardProps) => {
  return (
    <div
      className={`relative bg-white shadow-lg rounded-2xl p-8 border-t-4 ${
        highlighted
          ? "border-brand-gold scale-105 z-10 shadow-xl"
          : "border-[#102f35]"
      } flex flex-col hover:-translate-y-2 transition-all duration-300`}
    >
      {highlighted && (
        <div className="absolute top-0 right-8 -translate-y-1/2 border border-brand-gold/80 bg-white text-[#102f35] px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
          Best Value
        </div>
      )}

      <p className="text-3xl font-bold text-[#102f35] text-center mb-3">
        {title}
      </p>

      <p className="text-gray-600 text-center mb-3 min-h-[48px]">{desc}</p>

      {fit && (
        <p className="text-xs font-semibold uppercase tracking-wide text-[#411b3f] text-center mb-6">
          {fit}
        </p>
      )}

      <ul className="space-y-3 text-gray-700 mb-8 flex-grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-[#102f35]/70">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <p className="text-2xl font-bold text-[#102f35] text-center mb-2">
        {price}
      </p>

      <p className="text-xs text-gray-500 text-center mb-6">
        Clear fixed quote before any build starts
      </p>

      <Link
        href={href}
        onClick={() => {
          if (servicePrefill) setBookServicePrefill(servicePrefill);
        }}
        className={`block text-center py-3 rounded-full font-semibold transition ${
          highlighted
            ? "bg-brand-gold text-[#102f35] hover:bg-brand-gold-deep"
            : "bg-[#102f35] text-white hover:bg-[#411b3f]"
        }`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default function PricingPage() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        {/* HERO SECTION */}
        <motion.section
          className="relative min-h-[80vh] flex items-center justify-center text-center text-white pt-24 pb-12 md:pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/heroes/pricing.png"
            alt="Karol Digital Pricing"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">High-Performance Website &amp; </span>
              <span className="text-brand-gold-muted">Application Pricing</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Premium pricing for ambitious small businesses investing in modern,
              high-quality digital assets—websites, conversion-focused stores, and
              custom mobile applications built completely from scratch.
            </p>

            <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto mt-4">
              Every package is engineered without template bloat: fast, secure,
              conversion-focused systems designed to grow with your business.
            </p>
          </div>
        </motion.section>

        {/* TRUST SIGNALS */}
        <section className="py-12 bg-gray-50 border-b">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="font-bold text-[#102f35]">✓ No Hidden Fees</p>
            </div>
            <div>
              <p className="font-bold text-[#102f35]">✓ 100% Code Ownership</p>
            </div>
            <div>
              <p className="font-bold text-[#102f35]">✓ Clear Fixed Quotes</p>
            </div>
            <div>
              <p className="font-bold text-[#102f35]">✓ Built to Grow Later</p>
            </div>
          </div>
        </section>

        {/* INTRO VALUE PROPOSITION */}
        <FadeIn>
          <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <span className="text-sm font-bold uppercase tracking-widest text-[#411b3f]">
                  Premium Value, Clear Investment
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-[#102f35]">
                  High-Performance Website &amp; Application Pricing for Ambitious Small Businesses
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Ambitious small businesses deserve digital systems built to
                  perform—not slow templates that limit growth. We invest our
                  craft in modern, high-quality digital assets engineered
                  completely from scratch, without template bloat.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  These packages cover high-performance custom websites,
                  conversion-focused e-commerce platforms, and bespoke mobile
                  applications—each scoped for speed, security, and long-term
                  business value.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We keep the process transparent, recommend the best-fit option
                  honestly, and make sure every investment strengthens how your
                  business wins customers online.
                </p>
              </div>

              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/pricing-strategic-planning.webp"
                  alt="High-performance web and app pricing planning — custom websites and mobile applications for ambitious small businesses"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </FadeIn>

        {/* LOW-FRICTION ENTRY OFFER */}
        <section className="py-20 px-6 md:px-12 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto text-center bg-gray-50 rounded-3xl p-10 md:p-14 border border-gray-100 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-[#411b3f] mb-3">
              Clarity Before You Build
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#102f35] mb-4">
              Start With a Website Performance Audit
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              If your current site feels slow, unclear, or underperforming, we
              review speed, security signals, messaging, structure, and
              conversion flow—then give you prioritised actions toward a
              high-performance custom rebuild.
            </p>

            <div className="inline-block bg-white px-8 py-5 rounded-2xl shadow-md border border-gray-100 mb-8">
              <p className="text-3xl font-bold text-[#102f35]">£95 - £195</p>
              <p className="text-sm text-gray-500 mt-1">
                Ideal for businesses that want a clear roadmap before investing in a custom build
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/book"
                className="inline-block bg-[#102f35] text-white px-8 py-4 rounded-full font-bold hover:bg-[#411b3f] transition"
              >
                Ask About the Audit
              </Link>
              <Link
                href="/book"
                className="inline-block border border-[#102f35] text-[#102f35] px-8 py-4 rounded-full font-bold hover:bg-[#102f35] hover:text-white transition"
              >
                Get Evaluation
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING PACKAGES */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-4">
              Custom Website &amp; Application Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium packages for ambitious small businesses—100% custom-built,
              modern, fast, and engineered for conversion without template bloat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <PricingCard
              title="Professional Custom Build"
              desc="A modern, high-performance custom website engineered from scratch—fast, secure, and built for credibility from day one."
              price="From £1,250"
              fit="Best for ambitious small businesses ready for a premium custom foundation"
              features={[
                "100% custom code — zero template bloat",
                "Modern, secure content management",
                "Lightning-fast, mobile-ready performance",
                "Built for high search engine visibility and speed",
              ]}
              buttonText="Book Professional Build Consultation"
              servicePrefill="Professional Custom Build"
            />

            <PricingCard
              title="Core Growth Custom Build"
              desc="A stronger bespoke foundation with conversion-focused structure, polished UX, and room to scale as enquiries grow."
              price="From £1,750"
              fit="Best for growing service brands that need more qualified enquiries"
              features={[
                "Bespoke multi-page custom architecture",
                "Modern, secure content management",
                "Conversion-focused page structure & CTAs",
                "Performance tuning and core SEO foundation",
              ]}
              buttonText="Book Core Growth Consultation"
              servicePrefill="Core Growth Custom Build"
            />

            <PricingCard
              title="Growth"
              desc="Conversion-focused, modern platforms for businesses ready to turn more visitors into customers—with lightning-fast performance and secure data setups."
              price="From £2,450"
              fit="Best for businesses already attracting traffic and ready to convert"
              features={[
                "Conversion-focused UX across key journeys",
                "Lightning-fast performance tuning",
                "Secure lead capture and data handling",
                "Priority on-page SEO for high-intent pages",
              ]}
              buttonText="Book Growth Consultation"
              servicePrefill="Growth"
              highlighted
            />

            <PricingCard
              title="Premium"
              desc="A conversion-focused, modern e-commerce and growth system with advanced custom features, branding, and secure infrastructure."
              price="From £3,200"
              fit="Best for established brands scaling online sales and enquiries"
              features={[
                "Conversion-focused modern e-commerce capability",
                "Advanced custom features engineered from scratch",
                "Full brand identity and positioning system",
                "Secure data setups and performance architecture",
              ]}
              buttonText="Book Premium Consultation"
              servicePrefill="Premium"
            />

            <PricingCard
              title="Enterprise"
              desc="For complex conversion-focused e-commerce platforms, custom systems, and advanced integrations that need rock-solid security."
              price="Custom Quote"
              fit="Best for advanced businesses with complex digital requirements"
              features={[
                "Full conversion-focused e-commerce platform",
                "Secure payment and CRM integrations",
                "100% custom-coded systems — zero template bloat",
                "Rock-solid security and scalable architecture",
              ]}
              buttonText="Request Enterprise Quote"
              servicePrefill="Enterprise"
            />

            <PricingCard
              title="Custom Mobile Applications"
              desc="High-quality iOS and Android apps engineered to deepen loyalty, streamline bookings, and keep customers coming back."
              price="Custom Scoped"
              fit="Best for growing businesses looking to increase customer loyalty, handle mobile bookings, and streamline user retention"
              features={[
                "Custom iOS & Android App Engineering",
                "Modern, Incredibly Fast & Secure Performance",
                "Seamless Integration (Website, Store, and Mobile App sync together perfectly in real-time)",
                "Bespoke User Interface (UI) Design",
              ]}
              buttonText="Request Application Quote"
              servicePrefill="Custom Mobile Applications"
              href="/contact"
            />
          </div>
        </section>

        {/* NOT SURE WHICH PACKAGE */}
        <section className="py-10 px-6 md:px-12 bg-white">
          <div className="max-w-4xl mx-auto text-center bg-gray-50 rounded-3xl p-10 border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold text-[#102f35] mb-4">
              Not sure which package fits?
            </h3>

            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Tell us about your business goals and the digital systems you need—
              website, e-commerce, or mobile app—and we&apos;ll recommend the
              strongest custom-built package for your growth stage.
            </p>

            <Link
              href="/book"
              className="inline-block bg-[#102f35] text-white px-8 py-4 rounded-full font-bold hover:bg-[#411b3f] transition"
            >
              Get Expert Advice
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-6 bg-[#102f35] text-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">
                Trusted by Growing UK Businesses
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Businesses come to Karol Digital when they want modern,
                high-performance digital systems that feel fast, look premium,
                and convert more of the right customers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "SBC Marketing",
                  link: "https://sbc-marketing.co.uk/",
                  logo: "/logos/sbc.webp",
                  quote:
                    "A true partner in growth that understands aesthetics and high-converting marketing.",
                },
                {
                  name: "1st Call UK Immigration",
                  link: "https://www.1stcalluk.com/",
                  logo: "/logos/1st-calluk-immigration.webp",
                  quote:
                    "KD Transformed our online presence, making it easier than ever for clients to reach us.",
                },
                {
                  name: "1st Call UK Financial",
                  link: "https://www.1stcalluk.financial/",
                  logo: "/logos/1st-call-financial.webp",
                  quote:
                    "Professional, efficient, and results-driven. Our lead generation has never been better.",
                },
                {
                  name: "British Solar Direct",
                  link: "https://www.britishsolardirect.co.uk/",
                  logo: "/logos/british-solar-direct-logo.png",
                  quote:
                    "Professional, fast, and results-driven. The new branding and website gave the business a much stronger online presence.",
                },
              ].map((t, i) => (
                <a
                  key={i}
                  href={t.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="mb-8 h-24 w-full relative flex items-center justify-center bg-white rounded-xl overflow-hidden p-3">
                    <Image
                      src={t.logo}
                      alt={t.name}
                      width={200}
                      height={100}
                      className="object-contain max-h-full"
                      priority
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="text-brand-gold text-3xl mb-4 opacity-50">
                      "
                    </div>
                    <p className="italic text-gray-100 mb-6 leading-relaxed text-sm">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 mt-auto">
                    <p className="font-bold text-white text-sm">{t.name}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BANNER */}
        <section className="bg-[#102f35] py-8 text-center text-white">
          <p className="px-6 font-medium">
            All projects include 14-day post-launch support, modern content-system
            training, and performance-focused deployment.
          </p>
        </section>

        {/* MAINTENANCE PACKAGES */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] text-center mb-6">
            Website Maintenance
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Proactive support for custom-coded infrastructure—security,
            dependency optimisation, and ongoing feature development without
            hiring a full-time developer.
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] text-center">
              <p className="text-2xl font-bold mb-4">Basic</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>Proactive security monitoring</li>
                <li>Minor content and UI edits</li>
                <li>Dependency optimisation &amp; updates</li>
              </ul>
              <p className="font-bold text-xl mb-2">£150-£250/mo</p>
              <p className="text-sm text-gray-500 mb-6">
                Best for stable modern custom websites
              </p>
              <Link
                href="/book"
                className="block bg-[#102f35] text-white py-3 rounded-full"
              >
                Ask About Basic
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#411b3f] text-center">
              <p className="text-2xl font-bold mb-4">Premium</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>Everything in Basic</li>
                <li>Custom feature development</li>
                <li>Priority response for custom systems</li>
              </ul>
              <p className="font-bold text-xl mb-2">£250-£350/mo</p>
              <p className="text-sm text-gray-500 mb-6">
                Best for growing custom websites and apps that need regular enhancements
              </p>
              <Link
                href="/book"
                className="block bg-[#411b3f] text-white py-3 rounded-full"
              >
                Ask About Premium
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] text-center">
              <p className="text-2xl font-bold mb-4">Custom</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>Major redesigns of custom systems</li>
                <li>Feature development</li>
                <li>Advanced troubleshooting</li>
              </ul>
              <p className="font-bold text-xl mb-2">From £150/update</p>
              <p className="text-sm text-gray-500 mb-6">
                Small tasks billed in 1-hour minimum blocks — best for one-off
                work on custom-coded systems without a monthly plan
              </p>
              <Link
                href="/book"
                className="block bg-[#102f35] text-white py-3 rounded-full"
              >
                Request Work
              </Link>
            </div>
          </div>
        </section>

        {/* MARKETING RETAINERS */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#102f35] mb-4">
                Marketing &amp; Growth Retainers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Flexible ongoing growth support for businesses that want help
                generating traffic, leads, and stronger brand visibility.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Paid Advertising",
                  desc: "Google Ads and paid social campaigns designed to capture qualified traffic efficiently.",
                  price: "From £200/mo",
                  priceNote: "Management fee only — ad spend billed separately",
                },
                {
                  title: "SEO & Content",
                  desc: "Technical SEO, GEO for AI search, content briefs, and ongoing optimisation so you stay visible in Google and answer engines.",
                  price: "From £400/mo",
                },
                {
                  title: "Brand Identity",
                  desc: "Ongoing brand support including design updates, assets, and templates to keep your business looking consistent.",
                  price: "Custom Retainer",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <h3 className="font-bold text-[#102f35] text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-6 border-t border-gray-50">
                    <p className="text-[#102f35] font-bold">{item.price}</p>
                    {"priceNote" in item && item.priceNote && (
                      <p className="text-xs text-gray-500 mt-1">
                        {item.priceNote}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#102f35] text-center mb-12">
              What&apos;s Included in Every Project
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#102f35] shadow-md">
                <h3 className="font-bold text-[#102f35] text-xl mb-6">
                  Core Deliverables
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#102f35]" aria-hidden="true" />
                    <span>
                      <strong>Bespoke Design:</strong> Tailored to your brand,
                      audience, and business goals.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#102f35]" aria-hidden="true" />
                    <span>
                      <strong>Mobile-First:</strong> Fully responsive across all
                      key devices.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#102f35]" aria-hidden="true" />
                    <span>
                      <strong>Secure Deployment:</strong> Professional hosting
                      and deployment setup.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#411b3f] shadow-md">
                <h3 className="font-bold text-[#411b3f] text-xl mb-6">
                  Performance &amp; Support
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#411b3f]" aria-hidden="true" />
                    <span>
                      <strong>Speed Optimisation:</strong> Built for strong
                      loading performance and Core Web Vitals.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#411b3f]" aria-hidden="true" />
                    <span>
                      <strong>14-Day Post-Launch Support:</strong> Direct help
                      after launch for fixes and questions.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#411b3f]" aria-hidden="true" />
                    <span>
                      <strong>Modern Content Training:</strong> So you can update
                      your secure content system yourself with confidence.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS & NEXT STEPS */}
        <section className="py-24 px-6 md:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-4">
                How It Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A clear process designed to help you invest confidently in
                high-performance custom digital systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: "Discovery Call",
                  desc: "We discuss your business, current digital assets, and what success looks like for your growth goals.",
                },
                {
                  title: "Best-Fit Recommendation",
                  desc: "You get a clear recommendation based on the custom systems you need—website, store, or mobile app.",
                },
                {
                  title: "Build & Refine",
                  desc: "We engineer your project from scratch with clear checkpoints, feedback rounds, and transparent communication.",
                },
                {
                  title: "Launch & Improve",
                  desc: "Once live, we support the rollout and help you improve performance over time if needed.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="relative p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#102f35] transition-colors group"
                >
                  <div className="text-[#411b3f]/20 font-bold text-6xl mb-4 group-hover:text-[#411b3f]/10 transition-colors">
                    0{i + 1}
                  </div>

                  <h3 className="font-bold text-[#102f35] text-xl mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center bg-[#102f35] p-12 rounded-3xl text-white">
              <h3 className="text-2xl font-bold mb-4">
                Ready to take the next step?
              </h3>

              <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                Share a few details about your business and goals, and you&apos;ll
                get a practical recommendation with clear pricing and no
                pressure.
              </p>

              <Link
                href="/book"
                className="btn-primary px-10 py-4 text-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#102f35] text-center mb-12">
              FAQ
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Do I need to choose a package before contacting you?",
                  a: "No. Share your goals and the digital systems you need—custom website, e-commerce, or mobile app—and we’ll recommend the strongest fit.",
                },
                {
                  q: "Can I start with one package and expand later?",
                  a: "Yes. Many businesses begin with a Professional or Core Growth custom build, then add e-commerce capability or a mobile app as they scale.",
                },
                {
                  q: "How long does a project take?",
                  a: "Most custom website projects take between 3 and 6 weeks depending on scope and feedback speed. E-commerce and mobile app projects are scoped separately.",
                },
                {
                  q: "Can I update content myself?",
                  a: "Yes. We provide a modern, secure content system and training so you can manage updates without relying on a developer for everyday changes.",
                },
              ].map((item, i) => (
                <details key={i} className="border rounded-lg p-6 bg-white">
                  <summary className="font-semibold cursor-pointer">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-gray-600">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </FadeIn>
  );
}

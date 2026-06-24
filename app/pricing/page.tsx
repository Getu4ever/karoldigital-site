"use client";

import FadeIn from "@/components/FadeIn";
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
  link?: string;
  fit?: string;
}

const PricingCard = ({
  title,
  desc,
  price,
  features,
  buttonText,
  highlighted = false,
  link = "/contact",
  fit,
}: PricingCardProps) => {
  return (
    <div
      className={`relative bg-white shadow-xl rounded-2xl p-8 border-t-4 ${
        highlighted
          ? "border-yellow-400 scale-105 z-10 shadow-2xl"
          : "border-[#102f35]"
      } flex flex-col hover:-translate-y-2 transition-all duration-300`}
    >
      {highlighted && (
        <div className="absolute top-0 right-8 -translate-y-1/2 bg-yellow-400 text-[#102f35] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
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
            <span className="text-yellow-500">✔</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <p className="text-2xl font-extrabold text-[#102f35] text-center mb-2">
        {price}
      </p>

      <p className="text-xs text-gray-500 text-center mb-6">
        Clear fixed quote before any build starts
      </p>

      <Link
        href={link}
        className={`block text-center py-3 rounded-full font-semibold transition ${
          highlighted
            ? "bg-yellow-400 text-[#102f35] hover:bg-yellow-500"
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
            src="/hero-page-banner.jpg"
            alt="Karol Digital Pricing"
            fill
            priority
            className="object-cover brightness-[0.65]"
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">Flexible </span>
              <span className="text-yellow-400">Website Pricing</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Professional websites and digital growth support for UK service
              businesses that want stronger credibility, clearer messaging, and
              more enquiries without jumping straight into a huge upfront
              investment.
            </p>

            <p className="text-sm md:text-base text-gray-200 max-w-3xl mx-auto mt-4">
              Start smaller if you need to. Scale when the business is ready.
              Every package is designed to give you a clear next step, not lock
              you into more than you need.
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
                  Pricing That Makes Sense
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-[#102f35]">
                  Start With What You Need, Not What You Don&apos;t
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg">
                  Not every business needs a full-scale custom build on day one.
                  Some need a professional launch site. Others need a better
                  conversion path, stronger messaging, clearer positioning, or a
                  more reliable flow of enquiries.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  These packages are designed to give you a sensible starting
                  point. If you are budget-conscious but still want quality,
                  speed, and a site that helps your business grow, this page is
                  built for you.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We keep the process transparent, recommend the best-fit option
                  honestly, and make sure you only pay for what will genuinely
                  help your business move forward.
                </p>
              </div>

              <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                <Image
                  src="/strategic-web-development-visual.webp"
                  alt="Karol Digital pricing and project planning"
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
              Not Ready for a Full Website Yet?
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#102f35] mb-4">
              Start With a Website Growth Audit
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              If you already have a site but are not getting enough enquiries,
              this is the easiest place to start. We review your homepage,
              messaging, structure, speed, trust signals, and conversion flow,
              then give you practical, prioritised actions.
            </p>

            <div className="inline-block bg-white px-8 py-5 rounded-2xl shadow-md border border-gray-100 mb-8">
              <p className="text-3xl font-extrabold text-[#102f35]">£95 - £195</p>
              <p className="text-sm text-gray-500 mt-1">
                Ideal for businesses that want clarity before committing to a full build
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block bg-[#102f35] text-white px-8 py-4 rounded-full font-bold hover:bg-[#411b3f] transition"
              >
                Ask About the Audit
              </Link>
              <Link
                href="/contact"
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
              💼 Website Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for different stages of business growth, with lower-risk
              options for smaller budgets and scalable options when you are
              ready to invest more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6 max-w-7xl mx-auto">
            <PricingCard
              title="Starter Lite"
              desc="A lean professional site for businesses that need a credible online presence fast."
              price="£450-£750"
              fit="Best for new businesses or simple service offers"
              features={[
                "1-3 Pages",
                "Mobile Responsive",
                "Contact Form",
                "Basic SEO Setup",
              ]}
              buttonText="Ask About Starter Lite"
            />

            <PricingCard
              title="Starter"
              desc="A stronger foundation for businesses ready to present themselves properly online."
              price="From £795"
              fit="Best for local businesses and growing service brands"
              features={[
                "5-7 Pages",
                "CMS Setup",
                "Mobile Responsive",
                "Core SEO Setup",
              ]}
              buttonText="Ask About Starter"
            />

            <PricingCard
              title="Growth"
              desc="Built for businesses that need more enquiries and a stronger conversion journey."
              price="From £1,400"
              fit="Best for businesses already getting traffic"
              features={[
                "UX & Conversion Optimisation",
                "Full On-page SEO",
                "Performance Tuning",
                "Lead Capture System",
              ]}
              buttonText="See If Growth Fits"
              highlighted
            />

            <PricingCard
              title="Premium"
              desc="A full digital growth system with stronger branding, positioning, and custom functionality."
              price="From £3,200"
              fit="Best for established brands ready to scale"
              features={[
                "Full Brand Identity",
                "6-10+ Custom Pages",
                "Advanced Custom Development",
                "Conversion Strategy",
              ]}
              buttonText="Discuss Premium"
            />

            <PricingCard
              title="Enterprise"
              desc="For complex ecommerce, custom systems, and advanced integrations."
              price="Custom Quote"
              fit="Best for advanced businesses with technical requirements"
              features={[
                "Full Ecommerce / Shop",
                "Payment Integration",
                "CRM Integration",
                "High-Level Security",
              ]}
              buttonText="Ask for a Quote"
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
              Tell us about your business, budget, and goals, and we&apos;ll point
              you toward the most sensible option - even if that means starting
              smaller than you expected.
            </p>

            <Link
              href="/contact"
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
                Businesses come to Karol Digital when they want a site that
                looks professional, feels fast, and supports better enquiries.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "SBC Marketing",
                  link: "[sbc-marketing.co.uk](https://sbc-marketing.co.uk/)",
                  logo: "/logos/sbc.webp",
                  quote:
                    "A true partner in growth that understands aesthetics and high-converting marketing.",
                },
                {
                  name: "1st Call UK Immigration",
                  link: "[1stcalluk.com](https://www.1stcalluk.com/)",
                  logo: "/logos/1st-calluk-immigration.webp",
                  quote:
                    "KD Transformed our online presence, making it easier than ever for clients to reach us.",
                },
                {
                  name: "1st Call UK Financial",
                  link: "[1stcalluk.financial](https://www.1stcalluk.financial/)",
                  logo: "/logos/1st-call-financial.webp",
                  quote:
                    "Professional, efficient, and results-driven. Our lead generation has never been better.",
                },
                {
                  name: "Food Mama’s Kitchen",
                  link: "[foodmamakitchens.co.uk](https://www.foodmamakitchens.co.uk/)",
                  logo: "/logos/food-mama-kitchen.webp",
                  quote:
                    "The branding and website have truly elevated our business. Highly recommended.",
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
                    <div className="text-yellow-400 text-3xl mb-4 opacity-50">
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
            All projects include 14-day post-launch support, CMS training, and
            performance-focused deployment.
          </p>
        </section>

        {/* MAINTENANCE PACKAGES */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] text-center mb-6">
            Website Maintenance
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            Ongoing support options for businesses that want peace of mind
            without hiring a full-time developer.
          </p>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] text-center">
              <p className="text-2xl font-bold mb-4">Basic</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>Fixing bugs</li>
                <li>Minor edits</li>
                <li>Dependency updates</li>
              </ul>
              <p className="font-bold text-xl mb-2">£150-£250/mo</p>
              <p className="text-sm text-gray-500 mb-6">
                Best for stable brochure-style websites
              </p>
              <Link
                href="/contact"
                className="block bg-[#102f35] text-white py-3 rounded-full"
              >
                Ask About Basic
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#411b3f] text-center">
              <p className="text-2xl font-bold mb-4">Premium</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>Everything in Basic</li>
                <li>New Feature Development</li>
                <li>Priority Response</li>
              </ul>
              <p className="font-bold text-xl mb-2">£250-£350/mo</p>
              <p className="text-sm text-gray-500 mb-6">
                Best for growing websites that need regular updates
              </p>
              <Link
                href="/contact"
                className="block bg-[#411b3f] text-white py-3 rounded-full"
              >
                Ask About Premium
              </Link>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-[#102f35] text-center">
              <p className="text-2xl font-bold mb-4">Custom</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>Major redesigns</li>
                <li>Feature development</li>
                <li>Troubleshooting</li>
              </ul>
              <p className="font-bold text-xl mb-2">From £150/update</p>
              <p className="text-sm text-gray-500 mb-6">
                Best for one-off work without a monthly plan
              </p>
              <Link
                href="/contact"
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
              <h2 className="text-4xl font-extrabold text-[#102f35] mb-4">
                📱 Marketing &amp; Growth Retainers
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
                  desc: "Google Ads and paid social campaigns designed to capture qualified traffic without wasting budget.",
                  price: "From £200/mo",
                  icon: "🚀",
                },
                {
                  title: "SEO & Content",
                  desc: "Technical SEO, content planning, and ongoing optimisation to improve organic visibility over time.",
                  price: "From £400/mo",
                  icon: "📈",
                },
                {
                  title: "Brand Identity",
                  desc: "Ongoing brand support including design updates, assets, and templates to keep your business looking consistent.",
                  price: "Custom Retainer",
                  icon: "🎨",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 text-2xl">
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-[#102f35] text-xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-6 border-t border-gray-50">
                    <p className="text-[#102f35] font-bold">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-[#102f35] text-center mb-12">
              What&apos;s Included in Every Project
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-l-4 border-[#102f35] shadow-md">
                <h3 className="font-bold text-[#102f35] text-xl mb-6">
                  Core Deliverables
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    ✨
                    <span>
                      <strong>Bespoke Design:</strong> Tailored to your brand,
                      audience, and business goals.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    📱
                    <span>
                      <strong>Mobile-First:</strong> Fully responsive across all
                      key devices.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    🔒
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
                  <li className="flex items-center gap-3">
                    ⚡
                    <span>
                      <strong>Speed Optimisation:</strong> Built for strong
                      loading performance and Core Web Vitals.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    🛠
                    <span>
                      <strong>14-Day Post-Launch Support:</strong> Direct help
                      after launch for fixes and questions.
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    📚
                    <span>
                      <strong>CMS Training:</strong> So you can update content
                      yourself with confidence.
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
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#102f35] mb-4">
                🛠 How It Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A clear, low-friction process designed to help you move forward
                without confusion or pressure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  title: "Discovery Call",
                  desc: "We discuss your business, budget, current site, and what success looks like.",
                },
                {
                  title: "Best-Fit Recommendation",
                  desc: "You get a clear recommendation based on what you actually need, not the most expensive option.",
                },
                {
                  title: "Build & Refine",
                  desc: "We build the project with clear checkpoints, feedback rounds, and transparent communication.",
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
                  <div className="text-[#411b3f]/20 font-black text-6xl mb-4 group-hover:text-[#411b3f]/10 transition-colors">
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
                Share a few details about your business and budget, and you&apos;ll
                get a practical recommendation with clear pricing and no
                pressure.
              </p>

              <Link
                href="/contact"
                className="inline-block bg-yellow-400 text-[#102f35] px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition shadow-lg"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-6 md:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-[#102f35] text-center mb-12">
              ❓ FAQ
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "Do I need to choose a package before contacting you?",
                  a: "No. If you're unsure, just send your goals and approximate budget. We’ll recommend the most suitable option, even if that means starting smaller.",
                },
                {
                  q: "Can I start with a smaller package and upgrade later?",
                  a: "Yes. That’s exactly how many businesses begin. We can start with a leaner site or audit, then expand once you’re ready.",
                },
                {
                  q: "How long does a project take?",
                  a: "Most projects take between 5 and 25 days depending on scope, feedback speed, and whether extra integrations are needed.",
                },
                {
                  q: "Can I update content myself?",
                  a: "Yes. We provide a user-friendly CMS setup and training so you can manage content without relying on a developer.",
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

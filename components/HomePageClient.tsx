"use client";

import FadeIn from "@/components/FadeIn";
import { setBookServicePrefill } from "@/lib/book-prefill";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  homeCaseStudies,
  homeDifference,
  homeFaqs,
  homeIndustries,
  homeServices,
  homeTestimonials,
} from "@/lib/home-content";

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#411b3f]">
      {children}
    </p>
  );
}

function SectionImage({
  src,
  alt,
  size = "md",
}: {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeClass =
    size === "sm"
      ? "h-14 w-14"
      : size === "lg"
        ? "mb-5 aspect-[4/3] w-full"
        : "mb-5 aspect-square w-full max-w-[11rem]";

  return (
    <div
      className={`relative mx-auto overflow-hidden rounded-2xl ring-1 ring-black/5 ${sizeClass}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={
          size === "sm"
            ? "56px"
            : size === "lg"
              ? "(max-width: 768px) 100vw, 360px"
              : "(max-width: 768px) 50vw, 176px"
        }
      />
    </div>
  );
}

const serviceImages = [
  { src: "/home/sections/svc-websites.jpg", alt: "High-performance custom website design" },
  { src: "/home/sections/svc-web-dev.jpg", alt: "Custom web development and engineering" },
  { src: "/home/sections/svc-ecommerce.jpg", alt: "Conversion-focused e-commerce storefront" },
  { src: "/home/sections/svc-mobile.jpg", alt: "Custom mobile application development" },
  { src: "/home/sections/svc-audits.jpg", alt: "Website performance and growth audit" },
  { src: "/home/sections/svc-ai-search.jpg", alt: "AI search optimisation and visibility" },
] as const;

const differenceImages = [
  { src: "/home/sections/diff-speed.jpg", alt: "Lightning-fast website performance" },
  { src: "/home/sections/diff-security.jpg", alt: "Secure custom digital systems" },
  { src: "/home/sections/diff-unified.jpg", alt: "Unified website and app enquiry systems" },
] as const;

const industryImages = [
  { src: "/home/sections/ind-financial.jpg", alt: "Financial services website design" },
  { src: "/home/sections/ind-immigration.jpg", alt: "Immigration law firm website design" },
  { src: "/home/sections/ind-construction.jpg", alt: "Construction and trades website design" },
] as const;

const statItems = [
  {
    value: "98+",
    label: "PageSpeed scores on core pages",
    image: "/home/sections/stat-speed.jpg",
    alt: "Website performance speed",
  },
  {
    value: "3-6",
    label: "Weeks for most website projects",
    image: "/home/sections/stat-timeline.jpg",
    alt: "Project delivery timeline",
  },
  {
    value: "100%",
    label: "Custom-built, no template bloat",
    image: "/home/sections/stat-custom.jpg",
    alt: "Fully custom-built digital solutions",
  },
  {
    value: "UK",
    label: "Focused on service-led businesses",
    image: "/home/sections/stat-uk.jpg",
    alt: "UK service business focus",
  },
] as const;

export default function HomePageClient() {
  return (
    <FadeIn>
      <main className="min-h-screen bg-white text-gray-900">
        {/* HERO */}
        <motion.section
          className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 pb-16 text-white md:pt-32 md:pb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/heroes/home.png"
            alt="High-performance web and app development for growing small businesses"
            fill
            priority
            className="object-cover brightness-[0.55]"
            sizes="100vw"
            quality={82}
            style={{ objectPosition: "center" }}
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#102f35]/65 via-[#102f35]/35 to-[#411b3f]/45" />

          <div className="relative z-20 w-full px-6 md:px-10">
            <div className="mx-auto max-w-5xl text-center">
              <p className="mb-5 inline-flex rounded-full border border-brand-gold-muted/40 bg-[#102f35]/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold-muted shadow-md backdrop-blur-md md:text-sm">
                High-Performance Web &amp; App Development
              </p>

              <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
                High-performance websites and applications built to turn
                <span className="text-brand-gold-muted"> more visitors into qualified enquiries</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-200 md:text-2xl">
                Modern, fast, and high-quality websites, e-commerce stores, and custom mobile
                applications tailored for growing small businesses.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="btn-primary px-10 py-4 text-lg"
                >
                  Book a Free Consultation
                </Link>

                <Link
                  href="/book"
                  onClick={() => setBookServicePrefill("Website Audit")}
                  className="btn-secondary px-10 py-4 text-lg"
                >
                  Request a Website Audit
                </Link>
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-300">
                Built for small businesses and service providers that need digital solutions to
                look credible, load fast, and help the right people get in touch—or check out.
              </p>
            </div>
          </div>
        </motion.section>

        {/* POSITIONING */}
        <section className="px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
            <div>
              <SectionEyebrow>Why it matters</SectionEyebrow>
              <h2 className="mb-8 text-4xl font-bold leading-tight text-[#102f35] md:text-5xl">
                Custom-built beats template builders
                <br />
                when growth is the goal
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Template platforms and drag-and-drop builders are easy to start with—but they often leave small businesses with slow pages, weak security, and messy enquiry flows.
                We build <strong>high-performance websites and applications</strong> that turn <strong>more visitors into qualified enquiries and customers</strong>.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Custom code delivers lightning-fast speeds, rock-solid security, and a clearer path from first visit to contact or checkout.
                No template bloat. No plugin overload. Just modern digital systems built around how your business actually wins work.
              </p>

              <p className="mb-8 text-lg leading-relaxed text-gray-700">
                When you need both a website and a mobile app, we can connect them to the <strong>same modern database</strong>—so your customer data, enquiries, and operations stay unified instead of scattered across disconnected tools.
              </p>

              <Link
                href="/book"
                className="btn-teal"
              >
                Get a free website review
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <Image
                src="/home-why-it-matters.webp"
                alt="High-performance custom websites and mobile apps that sync together for growing small businesses"
                width={640}
                height={400}
                className="w-full rounded-3xl shadow-2xl ring-1 ring-gray-200/80"
                sizes="(max-width: 768px) 100vw, 640px"
                quality={82}
              />
              <p className="text-center text-sm text-gray-500">
                Fast, modern websites and apps designed around trust, speed, and conversion
              </p>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="bg-[#102f35] py-16 text-white">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {statItems.map(({ value, label, image, alt }) => (
              <div key={label} className="text-center">
                <div className="mx-auto mb-3">
                  <SectionImage src={image} alt={alt} size="sm" />
                </div>
                <div className="text-5xl font-bold text-white">{value}</div>
                <p className="mt-2 text-sm text-gray-300 md:text-base">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>What we offer</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Digital services built around growth
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                From high-performance websites and conversion-focused e-commerce stores to custom
                mobile applications and audits—the focus is always the same: modern digital
                solutions that help your business win more of the right customers.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {homeServices.map((service, index) => (
                <article
                  key={service.title}
                  className="group flex flex-col rounded-3xl border border-gray-100 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:shadow-lg"
                >
                  <SectionImage
                    src={serviceImages[index].src}
                    alt={serviceImages[index].alt}
                    size="lg"
                  />
                  <p className="mb-4 text-2xl font-bold text-[#102f35]">{service.title}</p>
                  <p className="mb-6 flex-grow leading-relaxed text-gray-700">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-1 font-semibold text-[#102f35] transition group-hover:text-[#411b3f]"
                  >
                    {service.cta}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[#102f35]/20 bg-white px-8 py-3 font-semibold text-[#102f35] shadow-sm transition hover:border-[#102f35] hover:shadow-md"
              >
                View all services
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* DIFFERENCE */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>Our approach</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Why growing small businesses choose Karol Digital
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                The goal is not just a prettier site. It is a faster, safer, and more connected
                digital system that makes it easier for the right people to trust you and take action.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeDifference.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm transition hover:border-[#102f35]/15 hover:shadow-md"
                >
                  <SectionImage
                    src={differenceImages[index].src}
                    alt={differenceImages[index].alt}
                  />
                  <p className="mb-4 text-2xl font-bold text-[#102f35]">{item.title}</p>
                  <p className="leading-relaxed text-gray-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>Sectors we know</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Industry-focused website design
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Different service businesses need different messaging, trust signals, and user
                journeys. We build websites around how your industry wins work.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {homeIndustries.map((industry, index) => (
                <article
                  key={industry.title}
                  className="flex flex-col rounded-3xl border border-gray-200 bg-white p-8 text-center transition duration-300 hover:-translate-y-1 hover:border-[#102f35]/20 hover:shadow-lg"
                >
                  <SectionImage
                    src={industryImages[index].src}
                    alt={industryImages[index].alt}
                    size="lg"
                  />
                  <p className="mb-3 text-2xl font-bold text-[#102f35]">{industry.title}</p>
                  <p className="mb-6 flex-grow text-gray-700">{industry.description}</p>
                  <Link
                    href={industry.href}
                    className="inline-flex items-center justify-center gap-1 text-sm font-semibold text-[#102f35] hover:text-[#411b3f]"
                  >
                    {industry.linkLabel}
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 font-semibold text-[#102f35] hover:text-[#411b3f]"
              >
                See all industries
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* PROOF */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <SectionEyebrow>Client work</SectionEyebrow>
              <h2 className="mb-4 text-4xl font-bold text-[#102f35] md:text-5xl">
                Built for performance, visibility, and lead generation
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Strong websites do more than look good. They load fast, follow best practices,
                and create a better experience for both visitors and search engines.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeCaseStudies.map((study) => (
                <article
                  key={study.title}
                  className="flex flex-col rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:border-[#102f35]/15 hover:shadow-md"
                >
                  <div className="mb-5 flex h-20 items-center justify-start rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100">
                    <Image
                      src={study.logo}
                      alt={study.logoAlt}
                      width={180}
                      height={56}
                      className="h-12 w-auto max-w-[180px] object-contain object-left"
                    />
                  </div>
                  <p className="mb-4 text-xl font-bold text-[#102f35] md:text-2xl">
                    {study.title}
                  </p>
                  <p className="mb-6 flex-grow leading-relaxed text-gray-700">
                    {study.description}
                  </p>
                  <Link
                    href={study.industryHref}
                    {...(study.industryHref.startsWith("http")
                      ? { target: "_blank" as const, rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center gap-1 font-semibold text-[#102f35] hover:text-[#411b3f]"
                  >
                    {study.industryLabel}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LEAD STRIP */}
        <section className="border-y border-gray-200 bg-gradient-to-r from-[#102f35] via-[#1a4a54] to-[#411b3f] px-6 py-14 text-white">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-2xl font-bold md:text-3xl">
                Ready to turn your website—or app—into a growth asset?
              </p>
              <p className="mt-2 text-gray-200">
                Free consultation. Clear advice. No pressure to commit.
              </p>
            </div>
            <Link
              href="/book"
              className="btn-primary shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold-muted"
            >
              Book a Free Call
            </Link>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <SectionEyebrow>Social proof</SectionEyebrow>
              <h2 className="text-4xl font-bold text-[#102f35] md:text-5xl">
                Trusted by growing UK businesses
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {homeTestimonials.map((testimonial, index) => (
                <blockquote
                  key={testimonial.author}
                  className={`rounded-3xl border-t-4 bg-white p-8 shadow-md ${
                    index === 0
                      ? "border-[#411b3f]"
                      : index === 1
                        ? "border-[#102f35]"
                        : "border-[#c9a84b]/70"
                  }`}
                >
                  <p className="mb-6 italic text-gray-600">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="font-bold text-[#102f35]">— {testimonial.author}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="border-y border-gray-200 bg-white px-6 py-20 md:px-10">
          <div className="mx-auto max-w-5xl text-center">
            <SectionEyebrow>Partners</SectionEyebrow>
            <p className="mb-12 text-3xl font-bold text-[#102f35] md:text-4xl">
              Selected clients and partners
            </p>

            <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
              <Link
                href="https://sbc-marketing.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[180px] items-center justify-center rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
              >
                <Image
                  src="/logos/sbc.webp"
                  alt="SBC Marketing"
                  width={220}
                  height={80}
                  className="h-auto max-h-20 w-auto object-contain"
                />
              </Link>

              <Link
                href="https://www.1stcalluk.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[180px] items-center justify-center rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
              >
                <Image
                  src="/1stcalluk-logo.jpg"
                  alt="1st Call UK Group"
                  width={220}
                  height={80}
                  className="h-auto max-h-20 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50 px-6 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <SectionEyebrow>Questions</SectionEyebrow>
              <h2 className="text-4xl font-bold text-[#102f35] md:text-5xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {homeFaqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-bold text-[#102f35] hover:bg-gray-50">
                    {faq.q}
                    <span className="text-2xl text-[#411b3f] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="px-6 pb-6 text-gray-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#102f35] px-6 py-24 text-center text-white">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              If your digital presence should be bringing in better enquiries, start there
            </h2>

            <p className="mb-10 text-lg text-gray-300">
              Book a consultation if you need a high-performance website, e-commerce store, or
              custom mobile app—or request an audit if you want to improve what you already have.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/book"
                className="btn-primary px-12 py-4 text-lg"
              >
                Start Your Project
              </Link>

              <Link
                href="/services/website-audits"
                className="btn-secondary px-12 py-4 text-lg"
              >
                Explore audit services
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

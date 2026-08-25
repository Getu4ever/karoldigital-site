"use client";

import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import Link from "next/link";
import { setBookServicePrefill } from "@/lib/book-prefill";
import { trackCtaClick } from "@/lib/analytics";
import {
  Bot,
  FileText,
  Magnet,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const pillars = [
  {
    id: "geo",
    icon: Bot,
    title: "Optimise for AI Search Engines (GEO)",
    summary:
      "Make your business easy for ChatGPT, Perplexity, Google AI Overviews, and similar engines to understand and cite.",
    points: [
      "JSON-LD schema for Organization, Service, FAQ, and Article",
      "llms.txt and AI-crawler-friendly robots rules",
      "Answer-ready page copy that engines can quote accurately",
      "Entity-clear service and industry pages",
    ],
  },
  {
    id: "content",
    icon: FileText,
    title: "Automate Content Production & SEO",
    summary:
      "Replace one-off blog posts with a repeatable system: briefs, outlines, keyword clusters, and publish cadence.",
    points: [
      "SEO content briefs generated from your services and audience",
      "Topic clusters tied to real service and industry pages",
      "On-page SEO structure: titles, FAQs, internal links",
      "Modern secure content systems so updates stay easy after launch",
    ],
  },
  {
    id: "leads",
    icon: Magnet,
    title: "Build AI-Powered Interactive Lead Magnets",
    summary:
      "Turn anonymous traffic into qualified conversations with quizzes, scorecards, and tools people actually finish.",
    points: [
      "Interactive AI Search Readiness Scorecard",
      "Content brief generator prospects can use in minutes",
      "Lead capture wired to email + CRM-ready follow-up",
      "CTAs that match intent instead of generic “contact us”",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Track Progress with AI Analytics",
    summary:
      "Measure what matters: tool completions, lead events, and CTA performance — not vanity traffic alone.",
    points: [
      "Lead and tool-completion events in Google Analytics",
      "Scorecard and brief funnel tracking",
      "Monthly review loop: what to publish, fix, or promote next",
      "Clear reporting language for non-technical owners",
    ],
  },
] as const;

export default function AiSearchOptimisationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="relative min-h-[70vh] flex items-center justify-center text-center text-white pt-24 pb-12">
        <Image
          src="/heroes/ai-search-optimisation.png"
          alt="AI search optimisation for UK service businesses"
          fill
          priority
          className="object-cover brightness-[0.7]"
        />
        <div className="relative z-10 px-6 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-gold-muted mb-4">
            Generative Engine Optimisation
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">AI Search </span>
            <span className="text-brand-gold-muted">Optimisation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
            GEO (generative engine optimisation) structures your website, schema,
            and content so ChatGPT, Perplexity, and Google AI Overviews can cite
            your business accurately — then we add content systems, lead magnets,
            and analytics so visibility turns into enquiries.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools/ai-search-scorecard"
              onClick={() =>
                trackCtaClick("scorecard", "ai-search-hero")
              }
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-gold px-6 py-3 font-semibold text-[#102f35] hover:bg-brand-gold-soft transition"
            >
              Free AI Search Scorecard
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/book"
              onClick={() => {
                setBookServicePrefill("AI Search Optimisation");
                trackCtaClick("book", "ai-search-hero");
              }}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>

      <nav
        aria-label="Breadcrumb"
        className="bg-gray-50 border-b border-gray-100 py-3 px-6 md:px-12"
      >
        <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#102f35]">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/services" className="hover:text-[#102f35]">
              Services
            </Link>
          </li>
          <li>/</li>
          <li className="text-[#102f35] font-semibold">
            AI Search Optimisation
          </li>
        </ol>
      </nav>

      <FadeIn>
        <section className="py-16 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6">
            Why AI search readiness matters now
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Buyers increasingly ask AI tools for recommendations before they
            click a blue link. If your business is unclear to those engines —
            weak schema, vague copy, no answer-ready pages — you get skipped.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Karol Digital combines classic SEO foundations with GEO (generative
            engine optimisation), content systems, interactive lead magnets, and
            analytics so UK service businesses stay findable and measurable.
          </p>

          <div className="relative h-[320px] md:h-[400px] w-full rounded-3xl overflow-hidden shadow-2xl mt-10">
            <Image
              src="/services-ai-search-optimisation.webp"
              alt="AI search optimisation and GEO systems for UK service businesses"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="pb-8 px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-10 text-center">
            Four pillars of AI-ready growth
          </h2>
          <div className="grid gap-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.id}
                  id={pillar.id}
                  className="p-8 bg-gray-50 rounded-xl border border-gray-100"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#102f35] text-brand-gold">
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold text-[#102f35]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-gray-700">{pillar.summary}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {pillar.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-[#102f35]"
                          size={18}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-16 px-6 md:px-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#102f35] mb-6 text-center">
            Try the tools free
          </h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-10">
            Experience the lead magnets before you commission a full build —
            then book a consultation to turn the results into a plan.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/tools/website-checker"
              onClick={() =>
                trackCtaClick("website_checker", "ai-search-tools")
              }
              className="group block p-8 rounded-xl border border-gray-200 hover:border-[#102f35] transition"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold mb-2">
                Live snapshot
              </p>
              <h3 className="text-xl font-bold text-[#102f35] mb-2 group-hover:underline">
                GEO & SEO Website Checker
              </h3>
              <p className="text-gray-600">
                Paste a URL for a homepage check of titles, schema, robots.txt,
                and llms.txt.
              </p>
            </Link>
            <Link
              href="/tools/ai-search-scorecard"
              onClick={() =>
                trackCtaClick("scorecard", "ai-search-tools")
              }
              className="group block p-8 rounded-xl border border-gray-200 hover:border-[#102f35] transition"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold mb-2">
                Lead magnet
              </p>
              <h3 className="text-xl font-bold text-[#102f35] mb-2 group-hover:underline">
                AI Search Readiness Scorecard
              </h3>
              <p className="text-gray-600">
                Answer nine questions, get a readiness score, and see your top
                three priorities.
              </p>
            </Link>
            <Link
              href="/tools/content-brief"
              onClick={() =>
                trackCtaClick("content_brief", "ai-search-tools")
              }
              className="group block p-8 rounded-xl border border-gray-200 hover:border-[#102f35] transition"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold mb-2">
                Content automation
              </p>
              <h3 className="text-xl font-bold text-[#102f35] mb-2 group-hover:underline">
                SEO Content Brief Generator
              </h3>
              <p className="text-gray-600">
                Generate title options, an outline, FAQs, and GEO tips for your
                next service article.
              </p>
            </Link>
          </div>
        </section>

        <section className="bg-[#102f35] py-20 px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to show up in AI search?
          </h2>
          <p className="mb-8 text-gray-300 max-w-lg mx-auto">
            Book a free consultation. We will review your current visibility,
            schema, content system, and lead capture — then recommend the
            highest-leverage next step.
          </p>
          <Link
            href="/book"
            onClick={() => {
              setBookServicePrefill("AI Search Optimisation");
              trackCtaClick("book", "ai-search-footer");
            }}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-8 py-3 font-semibold text-[#102f35] hover:bg-brand-gold-soft transition"
          >
            Book AI Search Consultation
            <ArrowRight size={18} />
          </Link>
        </section>
      </FadeIn>
    </main>
  );
}

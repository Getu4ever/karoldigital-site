"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import FadeIn from "@/components/FadeIn";
import type { ContentBrief, ContentBriefInput } from "@/lib/content-brief";
import { trackEvent, trackLead } from "@/lib/analytics";
import { setBookServicePrefill } from "@/lib/book-prefill";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

const GOALS: { value: ContentBriefInput["goal"]; label: string }[] = [
  { value: "enquiries", label: "More enquiries" },
  { value: "authority", label: "Authority / education" },
  { value: "local", label: "Local visibility" },
  { value: "ai_search", label: "AI search citations" },
];

export default function ContentBriefPage() {
  const [form, setForm] = useState<ContentBriefInput>({
    businessName: "",
    industry: "",
    service: "",
    location: "London",
    audience: "business owners",
    primaryKeyword: "",
    goal: "enquiries",
  });
  const [email, setEmail] = useState("");
  const [sendCopy, setSendCopy] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [brief, setBrief] = useState<ContentBrief | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  function update<K extends keyof ContentBriefInput>(
    key: K,
    value: ContentBriefInput[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/content-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          email: sendCopy ? email : undefined,
          sendCopy,
          captchaToken: sendCopy ? captchaToken : undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not generate brief.");

      setBrief(data.brief);
      trackEvent("content_brief_generated", {
        event_label: form.goal,
        industry: form.industry,
      });
      if (sendCopy && email) {
        trackLead("content_brief");
      }
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Generation failed.");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7fafb] to-white text-gray-900">
      <FadeIn>
        <section className="pt-28 pb-8 px-6 max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#102f35]/70 mb-3">
            Content production & SEO
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-4">
            SEO Content Brief Generator
          </h1>
          <p className="text-lg text-gray-600">
            Instant title options, outline, FAQs, and GEO tips — built for UK
            service businesses that need a repeatable content system.
          </p>
        </section>

        <section className="px-6 pb-20 max-w-3xl mx-auto grid gap-8">
          <form
            onSubmit={handleGenerate}
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                value={form.businessName}
                onChange={(e) => update("businessName", e.target.value)}
                placeholder="Business name"
                className="rounded-lg border border-gray-300 px-4 py-3"
              />
              <input
                required
                value={form.industry}
                onChange={(e) => update("industry", e.target.value)}
                placeholder="Industry (e.g. immigration law)"
                className="rounded-lg border border-gray-300 px-4 py-3"
              />
              <input
                required
                value={form.service}
                onChange={(e) => update("service", e.target.value)}
                placeholder="Service (e.g. website redesign)"
                className="rounded-lg border border-gray-300 px-4 py-3"
              />
              <input
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="Location"
                className="rounded-lg border border-gray-300 px-4 py-3"
              />
              <input
                value={form.audience}
                onChange={(e) => update("audience", e.target.value)}
                placeholder="Audience"
                className="rounded-lg border border-gray-300 px-4 py-3"
              />
              <input
                value={form.primaryKeyword}
                onChange={(e) => update("primaryKeyword", e.target.value)}
                placeholder="Primary keyword (optional)"
                className="rounded-lg border border-gray-300 px-4 py-3"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#102f35] mb-2">Goal</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {GOALS.map((goal) => (
                  <button
                    key={goal.value}
                    type="button"
                    onClick={() => update("goal", goal.value)}
                    className={`rounded-lg border px-4 py-2 text-left text-sm font-medium transition ${
                      form.goal === goal.value
                        ? "border-[#102f35] bg-[#102f35] text-white"
                        : "border-gray-200 hover:border-[#102f35]"
                    }`}
                  >
                    {goal.label}
                  </button>
                ))}
              </div>
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={sendCopy}
                onChange={(e) => setSendCopy(e.target.checked)}
                className="mt-1"
              />
              <span>
                Email this brief to Karol Digital so we can help refine the
                content plan (optional lead capture).
              </span>
            </label>

            {sendCopy && (
              <div className="space-y-3">
                <input
                  required={sendCopy}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                />
              </div>
            )}

            {status && <p className="text-sm text-red-600">{status}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#102f35] px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Generating…" : "Generate content brief"}
            </button>
          </form>

          {brief && (
            <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#102f35] mb-3">
                  Your brief
                </h2>
                <p className="text-sm text-gray-500 mb-1">Primary keyword</p>
                <p className="font-semibold text-gray-800">
                  {brief.primaryKeyword}
                </p>
                <p className="mt-3 text-gray-700">{brief.searchIntent}</p>
              </div>

              <div>
                <h3 className="font-bold text-[#102f35] mb-2">Title options</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {brief.titleOptions.map((title) => (
                    <li key={title}>{title}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#102f35] mb-2">Outline</h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                  {brief.outline.map((section) => (
                    <li key={section.heading}>
                      <p className="font-semibold">{section.heading}</p>
                      <p className="text-sm text-gray-600">{section.notes}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="font-bold text-[#102f35] mb-2">FAQ ideas</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {brief.faqSuggestions.map((faq) => (
                    <li key={faq}>{faq}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-[#102f35] mb-2">GEO tips</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {brief.geoTips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm font-semibold text-[#102f35] mb-1">
                  Suggested meta description
                </p>
                <p className="text-gray-700">{brief.metaDescription}</p>
              </div>

              <p className="text-gray-700">
                <span className="font-semibold">CTA:</span> {brief.cta}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/book"
                  onClick={() =>
                    setBookServicePrefill("AI Search Optimisation")
                  }
                  className="rounded-lg bg-[#102f35] px-6 py-3 text-center font-semibold text-white"
                >
                  Turn this into a content system
                </Link>
                <Link
                  href="/tools/ai-search-scorecard"
                  className="rounded-lg border border-gray-300 px-6 py-3 text-center font-semibold text-[#102f35]"
                >
                  Take the AI Search Scorecard
                </Link>
              </div>
            </article>
          )}
        </section>
      </FadeIn>
    </main>
  );
}

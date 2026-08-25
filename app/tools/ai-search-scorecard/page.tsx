"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import FadeIn from "@/components/FadeIn";
import {
  SCORECARD_QUESTIONS,
  scoreAnswers,
  type ScorecardAnswer,
} from "@/lib/ai-search-scorecard";
import { trackEvent, trackLead } from "@/lib/analytics";
import { setBookServicePrefill } from "@/lib/book-prefill";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

const ANSWER_OPTIONS: { value: ScorecardAnswer; label: string }[] = [
  { value: "yes", label: "Yes" },
  { value: "partial", label: "Partially" },
  { value: "no", label: "No" },
];

export default function AiSearchScorecardPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ScorecardAnswer>>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [submittedResult, setSubmittedResult] = useState<ReturnType<
    typeof scoreAnswers
  > | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const startedRef = useRef(false);

  const questionCount = SCORECARD_QUESTIONS.length;
  const isQuestions = step < questionCount;
  const isCapture = step === questionCount;
  const current = SCORECARD_QUESTIONS[step];

  const livePreview = useMemo(() => scoreAnswers(answers), [answers]);

  useEffect(() => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("scorecard_started", { event_label: "ai_search" });
    }
  }, []);

  function selectAnswer(value: ScorecardAnswer) {
    if (!current) return;
    setAnswers((prev) => ({ ...prev, [current.id]: value }));
    trackEvent("tool_step", {
      event_label: "scorecard",
      step: step + 1,
      answer: value,
    });
    setTimeout(() => setStep((s) => Math.min(s + 1, questionCount)), 180);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!captchaToken) {
      setStatus("Please complete the reCAPTCHA.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/scorecard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          website,
          answers,
          captchaToken,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");

      setSubmittedResult(data.result);
      trackLead("scorecard");
      trackEvent("scorecard_completed", {
        event_label: data.result.band,
        value: data.result.percent,
      });
      setStep(questionCount + 1);
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Submission failed.");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f7fafb] to-white text-gray-900">
      <FadeIn>
        <section className="pt-28 pb-8 px-6 max-w-2xl mx-auto text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#102f35]/70 mb-3">
            Free interactive lead magnet
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-[#102f35] mb-4">
            AI Search Readiness Scorecard
          </h1>
          <p className="text-lg text-gray-600">
            Nine questions. A clear score. Your top priorities for GEO, content,
            lead magnets, and analytics.
          </p>
        </section>

        <section className="px-6 pb-20 max-w-2xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
            {isQuestions && current && (
              <>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>
                      Question {step + 1} of {questionCount}
                    </span>
                    <span>{livePreview.percent}% so far</span>
                  </div>
                  <div className="h-2 rounded-full bg-gray-100 overflow-hidden">
                    <div
                      className="h-full bg-[#102f35] transition-all duration-300"
                      style={{
                        width: `${((step + 1) / questionCount) * 100}%`,
                      }}
                    />
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-gold mb-2">
                  {current.pillar}
                </p>
                <h2 className="text-2xl font-bold text-[#102f35] mb-3">
                  {current.question}
                </h2>
                <p className="text-gray-600 mb-8">{current.help}</p>
                <div className="grid gap-3">
                  {ANSWER_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => selectAnswer(opt.value)}
                      className={`rounded-xl border px-4 py-3 text-left font-semibold transition ${
                        answers[current.id] === opt.value
                          ? "border-[#102f35] bg-[#102f35] text-white"
                          : "border-gray-200 hover:border-[#102f35]"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-6 text-sm text-gray-500 hover:text-[#102f35]"
                  >
                    ← Previous
                  </button>
                )}
              </>
            )}

            {isCapture && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-2xl font-bold text-[#102f35] mb-2">
                  Get your score
                </h2>
                <p className="text-gray-600 mb-4">
                  Enter your details and we will email the team a copy so we can
                  follow up with practical recommendations.
                </p>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Work email"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
                <input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Website URL (optional)"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3"
                />
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={RECAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                />
                {status && <p className="text-sm text-red-600">{status}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-[#102f35] px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Calculating…" : "See my readiness score"}
                </button>
              </form>
            )}

            {submittedResult && step > questionCount && (
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold mb-2">
                  Your result
                </p>
                <p className="text-6xl font-bold text-[#102f35] mb-2">
                  {submittedResult.percent}%
                </p>
                <p className="text-xl font-semibold capitalize text-gray-800 mb-4">
                  {submittedResult.band} readiness
                </p>
                <p className="text-gray-700 mb-8">{submittedResult.summary}</p>
                {submittedResult.priorities.length > 0 && (
                  <div className="text-left mb-8 rounded-xl bg-gray-50 p-5">
                    <p className="font-bold text-[#102f35] mb-3">
                      Top priorities
                    </p>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      {submittedResult.priorities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    href="/book"
                    onClick={() =>
                      setBookServicePrefill("AI Search Optimisation")
                    }
                    className="rounded-lg bg-[#102f35] px-6 py-3 font-semibold text-white"
                  >
                    Book a consultation
                  </Link>
                  <Link
                    href="/services/ai-search-optimisation"
                    className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#102f35]"
                  >
                    See AI Search services
                  </Link>
                </div>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Want a live URL check instead?{" "}
            <Link
              href="/tools/website-checker"
              className="text-[#102f35] font-semibold underline"
            >
              Run the GEO & SEO website checker
            </Link>
            , or{" "}
            <Link
              href="/services/website-audits"
              className="text-[#102f35] font-semibold underline"
            >
              request a website audit
            </Link>
            .
          </p>
        </section>
      </FadeIn>
    </main>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import FadeIn from "@/components/FadeIn";
import type {
  CheckStatus,
  SnapshotCheck,
  WebsiteSnapshotResult,
} from "@/lib/website-checker";
import { trackEvent, trackLead } from "@/lib/analytics";
import { setBookServicePrefill } from "@/lib/book-prefill";
import { RECAPTCHA_SITE_KEY } from "@/lib/recaptcha";

const DEMO_URL = "https://www.karoldigital.co.uk";

const BAND_LABEL: Record<WebsiteSnapshotResult["band"], string> = {
  strong: "Strong snapshot",
  mixed: "Mixed snapshot",
  needs_work: "Needs work",
};

const STATUS_STYLE: Record<CheckStatus, string> = {
  pass: "bg-emerald-50 text-emerald-800 border-emerald-200",
  warn: "bg-amber-50 text-amber-900 border-amber-200",
  fail: "bg-rose-50 text-rose-800 border-rose-200",
};

const STATUS_LABEL: Record<CheckStatus, string> = {
  pass: "Pass",
  warn: "Review",
  fail: "Missing",
};

function CheckList({
  title,
  items,
}: {
  title: string;
  items: SnapshotCheck[];
}) {
  return (
    <div>
      <h3 className="font-bold text-[#102f35] mb-3">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className={`rounded-xl border px-3 py-2 text-left ${STATUS_STYLE[item.status]}`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold">{item.label}</p>
              <span className="text-xs font-bold uppercase tracking-wide">
                {STATUS_LABEL[item.status]}
              </span>
            </div>
            <p className="mt-1 text-sm opacity-90">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WebsiteCheckerPage() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [result, setResult] = useState<WebsiteSnapshotResult | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [leadStatus, setLeadStatus] = useState("");
  const [leadLoading, setLeadLoading] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const startedRef = useRef(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("website_checker_started", { event_label: "snapshot" });
    }
  }, []);

  async function runCheck(target: string) {
    setLoading(true);
    setStatus("");
    setLeadSent(false);
    setLeadStatus("");
    setResult(null);

    try {
      const res = await fetch("/api/website-checker", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: target }),
      });
      const data = (await res.json()) as {
        error?: string;
        result?: WebsiteSnapshotResult;
      };
      if (!res.ok || !data.result) {
        throw new Error(data.error || "Could not complete this snapshot.");
      }
      setResult(data.result);
      trackEvent("website_checker_completed", {
        event_label: data.result.band,
        value: data.result.percent,
      });
      window.setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } catch (err) {
      setStatus(
        err instanceof Error ? err.message : "Could not complete this snapshot."
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleScan(e: React.FormEvent) {
    e.preventDefault();
    await runCheck(url);
  }

  async function handleLead(e: React.FormEvent) {
    e.preventDefault();
    if (!result) return;
    if (!captchaToken) {
      setLeadStatus("Please complete the reCAPTCHA.");
      return;
    }

    setLeadLoading(true);
    setLeadStatus("");

    try {
      const res = await fetch("/api/website-checker/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          note,
          captchaToken,
          result,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Could not send this snapshot.");
      setLeadSent(true);
      trackLead("website_checker");
    } catch (err) {
      setLeadStatus(err instanceof Error ? err.message : "Send failed.");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setLeadLoading(false);
    }
  }

  const hasIssues = Boolean(result && result.issues.length > 0);
  const seoChecks = result?.checks.filter((item) => item.group === "seo") ?? [];
  const geoChecks = result?.checks.filter((item) => item.group === "geo") ?? [];

  return (
    <FadeIn>
      <section className="px-6 pb-20 max-w-3xl mx-auto space-y-8 pt-8">
          <form
            onSubmit={handleScan}
            className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm space-y-4"
          >
            <label htmlFor="checker-url" className="block font-semibold text-[#102f35]">
              Website URL
            </label>
            <input
              id="checker-url"
              type="text"
              inputMode="url"
              autoComplete="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://yourwebsite.co.uk"
              className="w-full rounded-lg border border-gray-300 px-4 py-3"
            />
            {status && <p className="text-sm text-red-600">{status}</p>}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 rounded-lg bg-[#102f35] px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Checking…" : "Run homepage snapshot"}
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={() => {
                  setUrl(DEMO_URL);
                  void runCheck(DEMO_URL);
                }}
                className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-[#102f35] disabled:opacity-60"
              >
                Try this site
              </button>
            </div>
            <p className="text-sm text-gray-500">
              Prefer not to paste a URL?{" "}
              <Link
                href="/tools/ai-search-scorecard"
                className="font-semibold text-[#102f35] underline"
              >
                Take the 9-question scorecard
              </Link>
              .
            </p>
          </form>

          {result && (
            <div ref={resultsRef} className="space-y-6">
              <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm text-center">
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-gold mb-2">
                  Homepage snapshot
                </p>
                <p className="text-6xl font-bold text-[#102f35] mb-2">
                  {result.percent}
                </p>
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  {BAND_LABEL[result.band]}
                </p>
                <p className="text-gray-700 mb-3">{result.summary}</p>
                <p className="text-sm text-gray-500 break-all">
                  Checked: {result.finalUrl}
                </p>
                <p className="mt-4 text-xs text-gray-500">{result.disclaimer}</p>
              </article>

              {hasIssues && (
                <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-[#102f35] mb-4">
                    What to fix first
                  </h2>
                  <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                    {result.issues.map((issue) => (
                      <li key={issue.id}>
                        <p className="font-semibold text-[#102f35]">{issue.title}</p>
                        <p>{issue.detail}</p>
                      </li>
                    ))}
                  </ol>
                </article>
              )}

              <div className="grid gap-6 md:grid-cols-2">
                <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <CheckList title="SEO snapshot" items={seoChecks} />
                </article>
                <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <CheckList title="GEO snapshot" items={geoChecks} />
                </article>
              </div>

              <article className="rounded-2xl border border-[#102f35]/15 bg-[#102f35] p-6 md:p-8 text-white">
                <h2 className="text-2xl font-bold mb-2">
                  {hasIssues
                    ? "Something looks off? Talk to Karol."
                    : "Want this maintained?"}
                </h2>
                <p className="text-white/80 mb-6">
                  {hasIssues
                    ? "This snapshot is a starting point. Karol can review the issues, explain what actually matters for enquiries, and quote a proper audit or GEO fix."
                    : "The homepage snapshot looks healthy. A paid audit still covers speed, conversions, and whether AI search actually cites you."}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact?intent=audit"
                    onClick={() =>
                      trackEvent("cta_click", {
                        event_label: "checker_contact",
                        location: "website_checker_results",
                      })
                    }
                    className="rounded-lg bg-white px-6 py-3 text-center font-semibold text-[#102f35]"
                  >
                    {hasIssues
                      ? "Contact Karol about these issues"
                      : "Contact Karol"}
                  </Link>
                  <Link
                    href="/book"
                    onClick={() => {
                      setBookServicePrefill("Website Performance & Growth Audit");
                      trackEvent("cta_click", {
                        event_label: "checker_book",
                        location: "website_checker_results",
                      });
                    }}
                    className="rounded-lg border border-white/40 px-6 py-3 text-center font-semibold text-white"
                  >
                    Book a consultation
                  </Link>
                </div>
              </article>

              <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
                {leadSent ? (
                  <p className="text-center text-gray-700">
                    Sent. Karol Digital will follow up if a conversation looks useful.
                  </p>
                ) : (
                  <form onSubmit={handleLead} className="space-y-4">
                    <h2 className="text-xl font-bold text-[#102f35]">
                      Send this snapshot to Karol
                    </h2>
                    <p className="text-gray-600">
                      Optional. Include a note if you want help fixing what showed up.
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
                    <textarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="What do you want more of — calls, form fills, or AI citations?"
                      rows={3}
                      className="w-full rounded-lg border border-gray-300 px-4 py-3"
                    />
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => setCaptchaToken(token)}
                    />
                    {leadStatus && (
                      <p className="text-sm text-red-600">{leadStatus}</p>
                    )}
                    <button
                      type="submit"
                      disabled={leadLoading}
                      className="w-full rounded-lg bg-[#102f35] px-6 py-3 font-semibold text-white hover:opacity-90 disabled:opacity-60"
                    >
                      {leadLoading ? "Sending…" : "Email these results"}
                    </button>
                  </form>
                )}
              </article>

              <p className="text-center text-sm text-gray-500">
                This snapshot cannot see content systems or analytics.{" "}
                <Link
                  href="/tools/ai-search-scorecard"
                  className="font-semibold text-[#102f35] underline"
                >
                  Take the AI Search Scorecard
                </Link>{" "}
                or{" "}
                <Link
                  href="/services/website-audits"
                  className="font-semibold text-[#102f35] underline"
                >
                  see a paid website audit
                </Link>
                .
              </p>
            </div>
          )}
        </section>
      </FadeIn>
  );
}

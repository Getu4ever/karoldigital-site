"use client";

import LegalHero from "@/components/LegalHero";
import { openCookiePreferences } from "@/lib/cookie-consent";

export default function CookiePolicy() {
  return (
    <>
      <h1 className="sr-only">
        Cookie policy explaining how Karol Digital uses cookies on its web
        design and digital marketing website
      </h1>
      <LegalHero
        title="Cookie Policy"
        subtitle="How Karol Digital uses cookies, what each category does, and how you can manage your preferences."
      />

      <div className="mx-auto max-w-4xl px-6 py-24 text-gray-700">
        <p className="mb-10 text-sm text-gray-400">
          Last updated: 11 August 2026
        </p>

        {/* ── Introduction ─────────────────────────────── */}
        <Section title="1. Introduction">
          <p>
            This Cookie Policy explains how Karol Digital (&quot;we&quot;,
            &quot;our&quot;, &quot;us&quot;) uses cookies and similar tracking
            technologies on{" "}
            <a
              href="https://www.karoldigital.co.uk"
              className="font-semibold text-[#102f35] underline underline-offset-2"
            >
              www.karoldigital.co.uk
            </a>
            . It should be read alongside our{" "}
            <a
              href="/privacy-policy"
              className="font-semibold text-[#102f35] underline underline-offset-2"
            >
              Privacy Policy
            </a>
            .
          </p>
          <p>
            We comply with the UK General Data Protection Regulation (UK GDPR)
            and the Privacy and Electronic Communications Regulations 2003
            (PECR). Non-essential cookies are only placed on your device after
            you have given explicit, informed consent through our on-site cookie
            dialog.
          </p>
        </Section>

        {/* ── What are cookies ─────────────────────────── */}
        <Section title="2. What are cookies?">
          <p>
            Cookies are small text files that a website stores on your computer,
            phone, or tablet when you visit. They allow the site to recognise
            your device and remember information about your visit — such as your
            preferred language, login status, or browsing activity.
          </p>
          <p>
            Similar technologies include local storage, session storage, and
            tracking pixels. Where we refer to &quot;cookies&quot; in this
            policy, we mean all such technologies unless otherwise stated.
          </p>
        </Section>

        {/* ── How we use cookies ───────────────────────── */}
        <Section title="3. How we use cookies">
          <p>
            We use cookies to ensure core site features work correctly, protect
            forms against misuse, remember your cookie preferences, understand
            how visitors interact with our pages, and continually improve the
            experience for UK service businesses. No non-essential cookies are
            activated until you give consent.
          </p>
        </Section>

        {/* ── Categories ───────────────────────────────── */}
        <Section title="4. Categories of cookies we use">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-gray-200 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  <th className="pb-3 pr-4">Category</th>
                  <th className="pb-3 pr-4">Purpose</th>
                  <th className="pb-3 pr-4">Examples</th>
                  <th className="pb-3">Consent required</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 font-semibold text-[#102f35]">
                    Necessary
                  </td>
                  <td className="py-3 pr-4">
                    Security, page navigation, form protection, and storing
                    your cookie consent choice.
                  </td>
                  <td className="py-3 pr-4 text-gray-500">
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                      kd_cookie_consent
                    </code>
                  </td>
                  <td className="py-3 text-gray-500">No — always active</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-[#102f35]">
                    Analytics
                  </td>
                  <td className="py-3 pr-4">
                    Help us understand which pages are visited, how long
                    visitors stay, and overall site performance. We use Google
                    Analytics with IP anonymisation enabled where supported.
                  </td>
                  <td className="py-3 pr-4 text-gray-500">
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                      _ga
                    </code>
                    ,{" "}
                    <code className="rounded bg-gray-100 px-1.5 py-0.5 text-xs">
                      _ga_*
                    </code>
                  </td>
                  <td className="py-3 text-gray-500">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-semibold text-[#102f35]">
                    Marketing
                  </td>
                  <td className="py-3 pr-4">
                    May be used for optional promotional campaigns, retargeting,
                    or advertising features. Only activated after consent.
                  </td>
                  <td className="py-3 pr-4 text-gray-500">
                    Third-party campaign tags
                  </td>
                  <td className="py-3 text-gray-500">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        {/* ── Cookie duration ──────────────────────────── */}
        <Section title="5. Cookie duration">
          <p>
            <strong>Session cookies</strong> are temporary and expire when you
            close your browser.{" "}
            <strong>Persistent cookies</strong> remain on your device for a
            defined period or until you manually delete them. Your consent
            preferences are stored locally so we can honour your choice on
            return visits without asking again.
          </p>
        </Section>

        {/* ── Managing preferences ─────────────────────── */}
        <Section title="6. Managing your preferences">
          <p>
            When you first visit the site, a cookie dialog appears where you can
            accept all cookies, refuse non-essential cookies, or customise
            individual categories. You can update your choices at any time:
          </p>

          <button
            type="button"
            onClick={() => openCookiePreferences()}
            className="my-4 inline-flex items-center gap-2 rounded-lg bg-[#102f35] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1a4a52]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Manage cookie preferences
          </button>

          <p>
            You may also control cookies through your browser settings. Most
            browsers allow you to view, delete, or block cookies from specific
            or all websites. Please note that blocking necessary cookies may
            affect core site functionality such as forms or secure admin access.
          </p>
        </Section>

        {/* ── Third-party services ─────────────────────── */}
        <Section title="7. Third-party services">
          <p>
            Where analytics or marketing tools are enabled, those third-party
            providers may process limited technical data (such as anonymised IP
            addresses and page URLs) in accordance with their own privacy
            policies. We do not sell, share, or trade your personal data with
            third parties for their own marketing purposes.
          </p>
          <p>
            For broader information about how we handle personal data, please
            see our{" "}
            <a
              href="/privacy-policy"
              className="font-semibold text-[#102f35] underline underline-offset-2"
            >
              Privacy Policy
            </a>
            .
          </p>
        </Section>

        {/* ── Your rights ──────────────────────────────── */}
        <Section title="8. Your rights">
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="ml-6 list-disc space-y-1.5">
            <li>
              Withdraw cookie consent at any time via the preferences dialog or
              by contacting us directly.
            </li>
            <li>
              Request information about what data is processed through cookies.
            </li>
            <li>
              Lodge a complaint with the Information Commissioner&apos;s Office
              (ICO) if you believe your data is being mishandled.
            </li>
          </ul>
        </Section>

        {/* ── Changes ──────────────────────────────────── */}
        <Section title="9. Changes to this policy">
          <p>
            We may update this Cookie Policy when our tools, legal obligations,
            or site features change. The &quot;Last updated&quot; date at the
            top of this page shows when the latest revision took effect. We
            encourage you to review this page periodically.
          </p>
        </Section>

        {/* ── Contact ──────────────────────────────────── */}
        <Section title="10. Contact us" last>
          <p>
            If you have any questions about this Cookie Policy or how we use
            cookies, please get in touch:
          </p>
          <div className="mt-3 rounded-xl border border-gray-100 bg-gray-50 p-5 text-sm leading-7">
            <strong className="text-[#102f35]">Karol Digital</strong>
            <br />
            Web Design &amp; Digital Development for UK Service Businesses
            <br />
            Email:{" "}
            <a
              href="mailto:info@karoldigital.co.uk"
              className="font-semibold text-[#102f35] underline underline-offset-2"
            >
              info@karoldigital.co.uk
            </a>
            <br />
            Location: London, United Kingdom
          </div>
        </Section>
      </div>
    </>
  );
}

function Section({
  title,
  children,
  last,
}: {
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section className={last ? "" : "mb-12"}>
      <h2 className="mb-4 text-xl font-bold text-[#102f35]">{title}</h2>
      <div className="space-y-4 leading-7">{children}</div>
    </section>
  );
}

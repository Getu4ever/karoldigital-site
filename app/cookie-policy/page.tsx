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
        <p className="mb-8 text-sm text-gray-500">
          Last updated: 10 August 2026
        </p>

        <h2 className="mb-4 text-2xl font-semibold text-[#411b3f]">
          Introduction
        </h2>
        <p className="mb-6 leading-7">
          This Cookie Policy explains how Karol Digital (“we”, “our”, “us”) uses
          cookies and similar technologies on{" "}
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
          . We use cookies in line with UK GDPR and the Privacy and Electronic
          Communications Regulations (PECR).
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          What are cookies?
        </h2>
        <p className="mb-6 leading-7">
          Cookies are small text files stored on your device when you visit a
          website. They help the site work properly, remember preferences, and
          provide insight into how pages are used. Similar technologies may
          include local storage and pixels used for the same purposes.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          How we use cookies
        </h2>
        <p className="mb-6 leading-7">
          We use cookies to keep core site features working, protect forms,
          remember your cookie choices, understand traffic patterns, and improve
          the usefulness of our website for UK service businesses. Non-essential
          cookies are only set after you give consent through our cookie dialog.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          Types of cookies we use
        </h2>
        <ul className="mb-6 ml-6 list-disc leading-7">
          <li className="mb-3">
            <strong>Necessary cookies:</strong> Required for security,
            navigation, form submission, and storing your consent preferences.
            These do not require consent and cannot be switched off through our
            dialog.
          </li>
          <li className="mb-3">
            <strong>Analytics cookies:</strong> Help us understand which pages
            are visited and how the site performs. We use Google Analytics only
            when you allow analytics cookies. IP anonymisation is enabled where
            supported.
          </li>
          <li>
            <strong>Marketing cookies:</strong> May be used for optional
            promotional or campaign-related features. These only run if you
            allow marketing cookies.
          </li>
        </ul>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          Cookie duration
        </h2>
        <p className="mb-6 leading-7">
          Session cookies expire when you close your browser. Persistent cookies
          remain for a set period or until you delete them. Consent preferences
          are stored locally on your device so we can honour your choice on later
          visits.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          Managing your preferences
        </h2>
        <p className="mb-4 leading-7">
          You can allow all cookies, refuse non-essential cookies, or choose
          categories when the cookie dialog appears. You can also update your
          preferences at any time:
        </p>
        <button
          type="button"
          onClick={() => openCookiePreferences()}
          className="mb-6 rounded-lg bg-[#102f35] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#411b3f]"
        >
          Manage cookie preferences
        </button>
        <p className="mb-6 leading-7">
          You may also control cookies through your browser settings. Blocking
          necessary cookies may affect site functionality such as forms or
          secure admin access.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          Third-party services
        </h2>
        <p className="mb-6 leading-7">
          Where analytics or marketing tools are enabled, those providers may
          process limited technical data according to their own policies. We do
          not sell your personal data. For broader information about how we
          handle personal data, see our Privacy Policy.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          Changes to this policy
        </h2>
        <p className="mb-6 leading-7">
          We may update this Cookie Policy when our tools, legal obligations, or
          site features change. The “Last updated” date at the top of this page
          shows when the latest version took effect.
        </p>

        <h2 className="mb-4 mt-10 text-2xl font-semibold text-[#411b3f]">
          Contact
        </h2>
        <p className="leading-7">
          Karol Digital — Web Design &amp; Digital Development for UK Service
          Businesses
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
        </p>
      </div>
    </>
  );
}

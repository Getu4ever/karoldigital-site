"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import {
  COOKIE_PREFERENCES_EVENT,
  DEFAULT_CONSENT,
  readCookieConsent,
  writeCookieConsent,
  type CookieConsentState,
} from "@/lib/cookie-consent";

type TabId = "consent" | "details" | "about";

export default function CookieConsentDialog() {
  const titleId = useId();
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<TabId>("consent");
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const existing = readCookieConsent();
    if (!existing) {
      setVisible(true);
      return;
    }
    setAnalytics(existing.analytics);
    setMarketing(existing.marketing);
  }, []);

  useEffect(() => {
    const openPreferences = () => {
      const existing = readCookieConsent() ?? DEFAULT_CONSENT;
      setAnalytics(existing.analytics);
      setMarketing(existing.marketing);
      setTab("details");
      setVisible(true);
    };

    window.addEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
    return () => {
      window.removeEventListener(COOKIE_PREFERENCES_EVENT, openPreferences);
    };
  }, []);

  function save(next: Pick<CookieConsentState, "analytics" | "marketing">) {
    writeCookieConsent(next);
    setAnalytics(next.analytics);
    setMarketing(next.marketing);
    setVisible(false);
  }

  if (!visible) return null;

  const tabs: { id: TabId; label: string }[] = [
    { id: "consent", label: "Consent" },
    { id: "details", label: "Details" },
    { id: "about", label: "About" },
  ];

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby={titleId}
      className="fixed inset-x-0 bottom-0 z-[100] w-full border-t border-[#102f35]/15 bg-white shadow-[0_-8px_30px_rgba(16,47,53,0.12)]"
    >
      {/* Thin top strip: logo left + tabs */}
      <div className="flex items-center justify-between gap-3 border-b border-gray-100 px-4 py-2.5 sm:px-6">
        <div className="flex min-w-0 items-center gap-2.5">
          <Image
            src="/logo.WebP"
            alt="Karol Digital logo"
            width={56}
            height={34}
            className="h-8 w-auto shrink-0"
            priority
          />
          <p className="truncate text-sm font-semibold text-[#102f35]">
            Karol <span className="text-[#c9a84b]">Digital</span>
          </p>
        </div>

        <nav
          aria-label="Cookie policy sections"
          className="flex shrink-0 items-center gap-1 sm:gap-3"
        >
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setTab(item.id)}
              className={`border-b-2 px-2 py-1 text-xs font-medium transition sm:text-sm ${
                tab === item.id
                  ? "border-[#102f35] text-[#102f35]"
                  : "border-transparent text-gray-500 hover:text-[#102f35]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Compact body + actions */}
      <div className="px-4 py-3 sm:px-6 sm:py-3.5">
        {tab === "consent" ? (
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="min-w-0 flex-1">
              <h2
                id={titleId}
                className="mb-1 text-base font-bold text-[#102f35] sm:text-lg"
              >
                This website uses cookies
              </h2>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                We use cookies to keep the site working, understand traffic, and
                improve our services. You can accept all, refuse non-essential
                cookies, or customise your choices.{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-[#102f35] underline underline-offset-2 hover:text-[#411b3f]"
                >
                  Cookie Policy
                </Link>
              </p>
            </div>
            <ActionButtons
              tab={tab}
              onDeny={() => save({ analytics: false, marketing: false })}
              onCustomize={() => setTab("details")}
              onSave={() => save({ analytics, marketing })}
              onAllowAll={() => save({ analytics: true, marketing: true })}
            />
          </div>
        ) : null}

        {tab === "details" ? (
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
            <div className="min-w-0 flex-1">
              <h2
                id={titleId}
                className="mb-2 text-base font-bold text-[#102f35] sm:text-lg"
              >
                Cookie details
              </h2>
              <div className="grid gap-2 sm:grid-cols-3">
                <CategoryRow
                  title="Necessary"
                  description="Security, forms, and consent storage. Always on."
                  checked
                  disabled
                />
                <CategoryRow
                  title="Analytics"
                  description="Google Analytics after you opt in."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <CategoryRow
                  title="Marketing"
                  description="TikTok Pixel and other campaign tools."
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
            </div>
            <ActionButtons
              tab={tab}
              onDeny={() => save({ analytics: false, marketing: false })}
              onCustomize={() => setTab("details")}
              onSave={() => save({ analytics, marketing })}
              onAllowAll={() => save({ analytics: true, marketing: true })}
            />
          </div>
        ) : null}

        {tab === "about" ? (
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <div className="min-w-0 flex-1">
              <h2
                id={titleId}
                className="mb-1 text-base font-bold text-[#102f35] sm:text-lg"
              >
                About this notice
              </h2>
              <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                This consent bar helps Karol Digital comply with UK GDPR and
                PECR. Necessary cookies always run; analytics and marketing only
                run after you allow them. Change preferences anytime from the{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-[#102f35] underline underline-offset-2 hover:text-[#411b3f]"
                >
                  Cookie Policy
                </Link>{" "}
                or email{" "}
                <a
                  href="mailto:info@karoldigital.co.uk"
                  className="font-semibold text-[#102f35] underline underline-offset-2 hover:text-[#411b3f]"
                >
                  info@karoldigital.co.uk
                </a>
                .
              </p>
            </div>
            <ActionButtons
              tab={tab}
              onDeny={() => save({ analytics: false, marketing: false })}
              onCustomize={() => setTab("details")}
              onSave={() => save({ analytics, marketing })}
              onAllowAll={() => save({ analytics: true, marketing: true })}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ActionButtons({
  tab,
  onDeny,
  onCustomize,
  onSave,
  onAllowAll,
}: {
  tab: TabId;
  onDeny: () => void;
  onCustomize: () => void;
  onSave: () => void;
  onAllowAll: () => void;
}) {
  return (
    <div className="flex shrink-0 flex-wrap items-center gap-2 pr-16 sm:justify-end md:pr-20">
      <button
        type="button"
        onClick={onDeny}
        className="rounded-md border border-[#102f35]/20 bg-white px-3.5 py-2 text-xs font-semibold text-[#102f35] transition hover:border-[#102f35] sm:text-sm"
      >
        Deny
      </button>
      {tab !== "details" ? (
        <button
          type="button"
          onClick={onCustomize}
          className="rounded-md border border-[#102f35]/20 bg-white px-3.5 py-2 text-xs font-semibold text-[#102f35] transition hover:border-[#102f35] sm:text-sm"
        >
          Customize ›
        </button>
      ) : (
        <button
          type="button"
          onClick={onSave}
          className="rounded-md border border-[#102f35]/20 bg-white px-3.5 py-2 text-xs font-semibold text-[#102f35] transition hover:border-[#102f35] sm:text-sm"
        >
          Save selection
        </button>
      )}
      <button
        type="button"
        onClick={onAllowAll}
        className="rounded-md bg-[#102f35] px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#411b3f] sm:text-sm"
      >
        Allow all
      </button>
    </div>
  );
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <label
      className={`flex gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 ${
        disabled ? "opacity-90" : "cursor-pointer hover:border-[#102f35]/25"
      }`}
    >
      <input
        type="checkbox"
        className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#102f35]"
        checked={Boolean(checked)}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className="min-w-0">
        <span className="block text-xs font-bold text-[#102f35]">{title}</span>
        <span className="mt-0.5 block text-[11px] leading-snug text-gray-600 sm:text-xs">
          {description}
        </span>
      </span>
    </label>
  );
}

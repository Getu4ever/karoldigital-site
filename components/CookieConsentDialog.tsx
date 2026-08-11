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
      className="fixed inset-x-0 bottom-0 z-[100] w-full bg-white shadow-[0_-4px_40px_rgba(0,0,0,0.08)]"
    >
      {/* Top bar: logo + brand left, tabs right */}
      <div className="border-b border-gray-100 bg-gray-50/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-2.5 sm:px-8">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/logo.WebP"
              alt="Karol Digital logo"
              width={44}
              height={28}
              className="h-7 w-auto shrink-0"
              priority
            />
            <span className="text-[13px] font-semibold tracking-tight text-[#102f35]">
              Karol{" "}
              <span className="text-[#c9a84b]">Digital</span>
            </span>
          </Link>

          <nav
            aria-label="Cookie policy sections"
            className="flex items-center gap-0.5"
          >
            {tabs.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  tab === item.id
                    ? "text-[#102f35]"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item.label}
                {tab === item.id && (
                  <span className="absolute inset-x-1 -bottom-[11px] h-[2px] rounded-full bg-[#102f35]" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8 sm:py-5">
        {tab === "consent" && (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <div className="min-w-0 flex-1">
              <h2
                id={titleId}
                className="mb-1.5 text-[15px] font-bold text-[#102f35] sm:text-base"
              >
                This website uses cookies
              </h2>
              <p className="max-w-2xl text-[13px] leading-relaxed text-gray-500">
                We use cookies to keep the site working, understand traffic, and
                improve our services. You can accept all, refuse non-essential
                cookies, or customise your choices.{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-[#102f35] underline decoration-[#102f35]/30 underline-offset-2 transition hover:decoration-[#102f35]"
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
        )}

        {tab === "details" && (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-10">
            <div className="min-w-0 flex-1">
              <h2
                id={titleId}
                className="mb-3 text-[15px] font-bold text-[#102f35] sm:text-base"
              >
                Manage cookie categories
              </h2>
              <div className="grid gap-2.5 sm:grid-cols-3">
                <CategoryRow
                  title="Necessary"
                  description="Security, forms, and consent storage. Always on."
                  checked
                  disabled
                />
                <CategoryRow
                  title="Analytics"
                  description="Google Analytics — enabled only after you opt in."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <CategoryRow
                  title="Marketing"
                  description="Optional campaign and promotional tools."
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
        )}

        {tab === "about" && (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-10">
            <div className="min-w-0 flex-1">
              <h2
                id={titleId}
                className="mb-1.5 text-[15px] font-bold text-[#102f35] sm:text-base"
              >
                About this notice
              </h2>
              <p className="max-w-2xl text-[13px] leading-relaxed text-gray-500">
                This consent bar helps Karol Digital comply with UK GDPR and
                PECR. Necessary cookies always run; analytics and marketing
                cookies are only activated after you give consent. You can update
                your preferences at any time from our{" "}
                <Link
                  href="/cookie-policy"
                  className="font-semibold text-[#102f35] underline decoration-[#102f35]/30 underline-offset-2 transition hover:decoration-[#102f35]"
                >
                  Cookie Policy
                </Link>{" "}
                page or by emailing{" "}
                <a
                  href="mailto:info@karoldigital.co.uk"
                  className="font-semibold text-[#102f35] underline decoration-[#102f35]/30 underline-offset-2 transition hover:decoration-[#102f35]"
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
        )}
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
    <div className="flex shrink-0 items-center gap-2.5">
      <button
        type="button"
        onClick={onDeny}
        className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-[13px] font-semibold text-[#102f35] transition hover:border-[#102f35]/40 hover:bg-gray-50"
      >
        Deny
      </button>
      {tab !== "details" ? (
        <button
          type="button"
          onClick={onCustomize}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-[13px] font-semibold text-[#102f35] transition hover:border-[#102f35]/40 hover:bg-gray-50"
        >
          Customize ›
        </button>
      ) : (
        <button
          type="button"
          onClick={onSave}
          className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-[13px] font-semibold text-[#102f35] transition hover:border-[#102f35]/40 hover:bg-gray-50"
        >
          Save selection
        </button>
      )}
      <button
        type="button"
        onClick={onAllowAll}
        className="rounded-lg bg-[#102f35] px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-[#1a4a52]"
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
      className={`flex items-start gap-3 rounded-xl border px-3.5 py-3 transition ${
        disabled
          ? "border-gray-100 bg-gray-50/80"
          : "cursor-pointer border-gray-200 bg-white hover:border-[#102f35]/20 hover:shadow-sm"
      }`}
    >
      <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={Boolean(checked)}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
        />
        <span
          className={`flex h-4 w-4 items-center justify-center rounded border transition ${
            checked
              ? "border-[#102f35] bg-[#102f35]"
              : "border-gray-300 bg-white"
          } ${disabled ? "opacity-70" : ""}`}
        >
          {checked && (
            <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
      </span>
      <span className="min-w-0">
        <span className="block text-[13px] font-bold text-[#102f35]">
          {title}
          {disabled && (
            <span className="ml-1.5 text-[11px] font-medium text-gray-400">
              Always on
            </span>
          )}
        </span>
        <span className="mt-0.5 block text-[11px] leading-snug text-gray-500">
          {description}
        </span>
      </span>
    </label>
  );
}

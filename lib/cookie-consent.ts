export const COOKIE_CONSENT_KEY = "kd_cookie_consent";
export const COOKIE_CONSENT_EVENT = "kd-cookie-consent-changed";
export const COOKIE_PREFERENCES_EVENT = "kd-open-cookie-preferences";

export type CookieConsentState = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

export const DEFAULT_CONSENT: CookieConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: "",
};

export function readCookieConsent(): CookieConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<CookieConsentState>;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function writeCookieConsent(
  next: Omit<CookieConsentState, "necessary" | "updatedAt"> & {
    analytics: boolean;
    marketing: boolean;
  }
): CookieConsentState {
  const state: CookieConsentState = {
    necessary: true,
    analytics: next.analytics,
    marketing: next.marketing,
    updatedAt: new Date().toISOString(),
  };

  if (typeof window !== "undefined") {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state));
    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: state })
    );
  }

  return state;
}

export function openCookiePreferences(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_EVENT));
}

export function hasAnalyticsConsent(state: CookieConsentState | null): boolean {
  return Boolean(state?.analytics);
}

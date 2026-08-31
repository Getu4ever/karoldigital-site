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

export function hasMarketingConsent(state: CookieConsentState | null): boolean {
  return Boolean(state?.marketing);
}

/** Immediate current state, plus updates from this tab and other tabs. */
export function subscribeCookieConsent(
  listener: (state: CookieConsentState | null) => void
): () => void {
  if (typeof window === "undefined") return () => {};

  const emit = (state?: CookieConsentState | null) => {
    listener(state === undefined ? readCookieConsent() : state);
  };

  const onChange = (event: Event) => {
    const detail = (event as CustomEvent<CookieConsentState>).detail;
    emit(detail ?? readCookieConsent());
  };

  const onStorage = (event: StorageEvent) => {
    if (event.key !== null && event.key !== COOKIE_CONSENT_KEY) return;
    emit(event.key === null ? null : readCookieConsent());
  };

  window.addEventListener(COOKIE_CONSENT_EVENT, onChange);
  window.addEventListener("storage", onStorage);
  emit();

  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

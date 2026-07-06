const BOOK_PREFILL_KEY = "kd-book-service";

export function setBookServicePrefill(service: string): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(BOOK_PREFILL_KEY, service);
}

export function consumeBookServicePrefill(): string | null {
  if (typeof window === "undefined") return null;
  const value = sessionStorage.getItem(BOOK_PREFILL_KEY);
  if (value) sessionStorage.removeItem(BOOK_PREFILL_KEY);
  return value;
}

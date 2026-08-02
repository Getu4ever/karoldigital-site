type LeadEventLabel =
  | "consultation"
  | "audit"
  | "contact"
  | "pricing"
  | "scorecard"
  | "content_brief";

type AnalyticsEventName =
  | "generate_lead"
  | "scorecard_started"
  | "scorecard_completed"
  | "content_brief_generated"
  | "cta_click"
  | "tool_step";

function canTrack(): boolean {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function trackEvent(
  name: AnalyticsEventName,
  params?: Record<string, string | number | boolean | undefined>
): void {
  if (!canTrack()) return;

  window.gtag!("event", name, {
    event_category: "engagement",
    ...params,
  });
}

export function trackLead(label: LeadEventLabel): void {
  if (!canTrack()) return;

  window.gtag!("event", "generate_lead", {
    event_category: "form",
    event_label: label,
  });
}

export function trackCtaClick(label: string, location: string): void {
  trackEvent("cta_click", {
    event_label: label,
    location,
  });
}

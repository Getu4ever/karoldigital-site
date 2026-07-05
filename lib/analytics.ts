type LeadEventLabel = "consultation" | "audit" | "contact" | "pricing";

export function trackLead(label: LeadEventLabel): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", "generate_lead", {
    event_category: "form",
    event_label: label,
  });
}

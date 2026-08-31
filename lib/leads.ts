/**
 * Lead status helpers — exact pipeline labels stored via Prisma LeadStatus enum maps.
 */

export const LEAD_STATUS_VALUES = [
  "New Lead",
  "Scheduled",
  "Deposit Paid",
  "Project In Progress",
  "Project Completed",
] as const;

export type LeadStatusLabel = (typeof LEAD_STATUS_VALUES)[number];

/** Prisma enum member ↔ display label */
export const LEAD_STATUS_ENUM = {
  "New Lead": "New_Lead",
  Scheduled: "Scheduled",
  "Deposit Paid": "Deposit_Paid",
  "Project In Progress": "Project_In_Progress",
  "Project Completed": "Project_Completed",
} as const;

export const LEAD_STATUS_LABEL: Record<string, LeadStatusLabel> = {
  New_Lead: "New Lead",
  Scheduled: "Scheduled",
  Deposit_Paid: "Deposit Paid",
  Project_In_Progress: "Project In Progress",
  Project_Completed: "Project Completed",
};

export function toPrismaLeadStatus(label: string) {
  return LEAD_STATUS_ENUM[label as LeadStatusLabel] ?? "New_Lead";
}

export function toLeadStatusLabel(enumValue: string): LeadStatusLabel {
  return LEAD_STATUS_LABEL[enumValue] ?? "New Lead";
}

/** Count of pipeline rows currently in the "New Lead" CRM status. */
export function countNewLeads(leads: { status: string }[]): number {
  return leads.filter((lead) => lead.status === "New Lead").length;
}

export function countLeadsByStatus(
  leads: { status: string }[]
): Record<LeadStatusLabel, number> {
  const counts = Object.fromEntries(
    LEAD_STATUS_VALUES.map((status) => [status, 0])
  ) as Record<LeadStatusLabel, number>;
  for (const lead of leads) {
    if (lead.status in counts) {
      counts[lead.status as LeadStatusLabel] += 1;
    }
  }
  return counts;
}

/** Display label for Source / Channel — blank metadata → Direct Traffic */
export function leadSourceLabel(sourceChannel: string | null | undefined): string {
  const trimmed = (sourceChannel || "").trim();
  return trimmed || "Direct Traffic";
}

export const PRO_FORMA_LINE_ITEMS = [
  "High-Performance Websites",
  "Custom Web Development & E-commerce",
  "Custom Mobile Applications",
  "Website Audits",
  "AI Search (GEO)",
  "Digital Marketing",
] as const;

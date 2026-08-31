/**
 * Revenue operations + system health types for the admin dashboard.
 */

export const INVOICE_STATUS_VALUES = ["Paid", "Sent", "Overdue"] as const;

export type InvoiceStatus = (typeof INVOICE_STATUS_VALUES)[number];

export type RecentInvoice = {
  id: string;
  reference: string;
  clientName: string;
  amountGbp: number;
  status: InvoiceStatus;
  email: string | null;
  issuedAt: string;
};

export type FinancialOverview = {
  paidCurrentMonthGbp: number;
  overdueInvoiceCount: number;
  overdueAmountGbp: number;
  projectedRevenueGbp: number;
  openInvoiceCount: number;
  recentInvoices: RecentInvoice[];
};

export type DatabaseStorageSnapshot = {
  usedRows: number;
  estimatedUsedMb: number;
  capacityMb: number;
  planLabel: "Hobby" | "Pro";
};

export type SystemHealthCheck = {
  id: string;
  label: string;
  operational: boolean;
  detail: string;
};

export type OpsDashboardData = {
  financial: FinancialOverview;
  storage: DatabaseStorageSnapshot;
  checks: SystemHealthCheck[];
  generatedAt: string;
};

export function formatGbp(value: number): string {
  return `£${value.toLocaleString("en-GB", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function isInvoiceStatus(value: string): value is InvoiceStatus {
  return (INVOICE_STATUS_VALUES as readonly string[]).includes(value);
}

function isSameCalendarMonth(iso: string, now: Date): boolean {
  const issued = new Date(iso);
  return (
    issued.getFullYear() === now.getFullYear() &&
    issued.getMonth() === now.getMonth()
  );
}

function sumAmounts(rows: RecentInvoice[]): number {
  return rows.reduce((total, row) => total + row.amountGbp, 0);
}

/** Derive KPI cards from the live invoice list (updates as rows are edited). */
export function deriveFinancialOverview(
  invoices: RecentInvoice[],
  now = new Date()
): FinancialOverview {
  const paidThisMonth = invoices.filter(
    (invoice) => invoice.status === "Paid" && isSameCalendarMonth(invoice.issuedAt, now)
  );
  const overdue = invoices.filter((invoice) => invoice.status === "Overdue");
  const outstanding = invoices.filter(
    (invoice) => invoice.status === "Sent" || invoice.status === "Overdue"
  );

  return {
    paidCurrentMonthGbp: sumAmounts(paidThisMonth),
    overdueInvoiceCount: overdue.length,
    overdueAmountGbp: sumAmounts(overdue),
    projectedRevenueGbp: sumAmounts(paidThisMonth) + sumAmounts(outstanding),
    openInvoiceCount: outstanding.length,
    recentInvoices: [...invoices].sort((a, b) =>
      b.issuedAt.localeCompare(a.issuedAt)
    ),
  };
}

/** First-run seed if the Invoice table is empty. */
export const SEED_INVOICES: Omit<RecentInvoice, "id">[] = [
  {
    reference: "KD-INV-1042",
    clientName: "Northstar Legal",
    amountGbp: 2500,
    status: "Paid",
    email: "accounts@northstar.example",
    issuedAt: new Date().toISOString(),
  },
  {
    reference: "KD-INV-1043",
    clientName: "Harbour & Co",
    amountGbp: 1800,
    status: "Sent",
    email: "finance@harbour.example",
    issuedAt: new Date().toISOString(),
  },
  {
    reference: "KD-INV-1044",
    clientName: "Elmwood Clinic",
    amountGbp: 950,
    status: "Overdue",
    email: "practice@elmwood.example",
    issuedAt: new Date().toISOString(),
  },
];

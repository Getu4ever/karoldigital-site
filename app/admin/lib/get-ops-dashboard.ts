import "server-only";
import {
  deriveFinancialOverview,
  type OpsDashboardData,
  type RecentInvoice,
  type SystemHealthCheck,
} from "@/lib/ops-dashboard";

/** Vercel Postgres (Neon) Hobby included storage. Swap to 10240 for Pro. */
const HOBBY_STORAGE_MB = 512;
const SCHEMA_OVERHEAD_MB = 28;
const ESTIMATED_BYTES_PER_ROW = 2048;

function envConfigured(...keys: string[]): boolean {
  return keys.every((key) => Boolean(process.env[key]?.trim()));
}

export function getOpsDashboardData(input: {
  dbConnected: boolean;
  leadCount: number;
  invoices: RecentInvoice[];
}): OpsDashboardData {
  const usedRows = input.leadCount + input.invoices.length;
  const estimatedUsedMb =
    SCHEMA_OVERHEAD_MB + (usedRows * ESTIMATED_BYTES_PER_ROW) / (1024 * 1024);

  const resendOk = envConfigured("RESEND_API_KEY");
  const zohoOk = envConfigured("EMAIL_USER", "EMAIL_PASS");
  const recaptchaOk = envConfigured("RECAPTCHA_SECRET_KEY");

  const checks: SystemHealthCheck[] = [
    {
      id: "postgres",
      label: "Vercel Postgres",
      operational: input.dbConnected,
      detail: input.dbConnected
        ? "Lead, invoice, and admin tables reachable"
        : "Database unavailable",
    },
    {
      id: "form-persist",
      label: "Form submissions",
      operational: input.dbConnected,
      detail: input.dbConnected
        ? "Background lead insert operational"
        : "Lead persistence unavailable",
    },
    {
      id: "resend",
      label: "Book-a-call email (Resend)",
      operational: resendOk,
      detail: resendOk
        ? "API handshake configured"
        : "RESEND_API_KEY missing",
    },
    {
      id: "zoho",
      label: "Contact form email (Zoho)",
      operational: zohoOk,
      detail: zohoOk
        ? "SMTP handshake configured"
        : "EMAIL_USER / EMAIL_PASS missing",
    },
    {
      id: "recaptcha",
      label: "reCAPTCHA handshake",
      operational: recaptchaOk,
      detail: recaptchaOk
        ? "Siteverify secret present"
        : "RECAPTCHA_SECRET_KEY missing",
    },
  ];

  return {
    financial: deriveFinancialOverview(input.invoices),
    storage: {
      usedRows,
      estimatedUsedMb: Math.round(estimatedUsedMb * 10) / 10,
      capacityMb: HOBBY_STORAGE_MB,
      planLabel: "Hobby",
    },
    checks,
    generatedAt: new Date().toISOString(),
  };
}

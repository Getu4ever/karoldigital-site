"use client";

import { Lock } from "lucide-react";

type Props = {
  dbConnected: boolean;
  newLeadCount: number;
  overdueInvoiceCount: number;
  generatedAt: string;
};

function formatGeneratedAt(iso: string): string {
  return new Date(iso).toLocaleString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default function SystemStatusBanner({
  dbConnected,
  newLeadCount,
  overdueInvoiceCount,
  generatedAt,
}: Props) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Database
          </span>
          {dbConnected ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-200">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-500"
                aria-hidden
              />
              Vercel Postgres connected
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-800 ring-1 ring-red-200">
              <span
                className="h-1.5 w-1.5 rounded-full bg-red-500"
                aria-hidden
              />
              Database unavailable
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            CRM
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-[#102f35]/5 px-2.5 py-1 text-xs font-semibold text-[#102f35] ring-1 ring-[#102f35]/10"
            aria-live="polite"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                newLeadCount > 0 ? "bg-brand-gold" : "bg-emerald-500"
              }`}
              aria-hidden
            />
            {newLeadCount} New Lead{newLeadCount === 1 ? "" : "s"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Billing
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${
              overdueInvoiceCount > 0
                ? "bg-amber-50 text-amber-900 ring-amber-200"
                : "bg-emerald-50 text-emerald-800 ring-emerald-200"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                overdueInvoiceCount > 0 ? "bg-amber-500" : "bg-emerald-500"
              }`}
              aria-hidden
            />
            {overdueInvoiceCount > 0
              ? `${overdueInvoiceCount} overdue`
              : "Collections clear"}
          </span>
        </div>

        <div className="ml-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-medium text-gray-600">
          <span className="tabular-nums text-gray-500">
            Synced {formatGeneratedAt(generatedAt)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Lock className="h-3.5 w-3.5 text-[#102f35]" aria-hidden />
            Secure session
          </span>
        </div>
      </div>
    </div>
  );
}

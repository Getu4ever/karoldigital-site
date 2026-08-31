"use client";

import { useState } from "react";
import type { LeadDTO } from "@/app/admin/actions/leads";
import { adminLogoutAction } from "@/app/admin/actions/auth";
import ChangePasswordPanel from "@/app/admin/components/ChangePasswordPanel";
import LeadsTable from "@/app/admin/components/LeadsTable";
import PipelineSummary from "@/app/admin/components/PipelineSummary";
import RevenueOpsPanel from "@/app/admin/components/RevenueOpsPanel";
import SystemStatusBanner from "@/app/admin/components/SystemStatusBanner";
import { countLeadsByStatus, countNewLeads } from "@/lib/leads";
import {
  deriveFinancialOverview,
  type OpsDashboardData,
  type RecentInvoice,
} from "@/lib/ops-dashboard";

type Props = {
  initialLeads: LeadDTO[];
  initialInvoices: RecentInvoice[];
  dbConnected: boolean;
  ops: OpsDashboardData;
};

function formatHeaderDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function AdminDashboardClient({
  initialLeads,
  initialInvoices,
  dbConnected,
  ops,
}: Props) {
  const [leads, setLeads] = useState(initialLeads);
  const [invoices, setInvoices] = useState(initialInvoices);
  const newLeadCount = countNewLeads(leads);
  const pipelineCounts = countLeadsByStatus(leads);
  const overdueInvoiceCount =
    deriveFinancialOverview(invoices).overdueInvoiceCount;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] text-gray-900">
      <header className="border-b border-white/10 bg-[#102f35] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-lg font-bold tracking-tight">
              Karol{" "}
              <span className="text-brand-gold">Digital</span>
            </p>
            <h1 className="text-2xl font-bold md:text-3xl">
              Operations console
            </h1>
            <p className="mt-1 text-xs text-white/55">
              {formatHeaderDate(ops.generatedAt)}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold ring-1 ring-white/20"
              aria-live="polite"
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  newLeadCount > 0 ? "bg-brand-gold" : "bg-emerald-400"
                }`}
                aria-hidden
              />
              CRM {newLeadCount} New Lead{newLeadCount === 1 ? "" : "s"}
            </span>
            <ChangePasswordPanel />
            <form action={adminLogoutAction}>
              <button
                type="submit"
                className="rounded-full bg-brand-gold px-5 py-2 text-sm font-bold text-[#102f35] transition hover:bg-brand-gold-deep"
              >
                Sign out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10">
        <SystemStatusBanner
          dbConnected={dbConnected}
          newLeadCount={newLeadCount}
          overdueInvoiceCount={overdueInvoiceCount}
          generatedAt={ops.generatedAt}
        />
        <PipelineSummary counts={pipelineCounts} total={leads.length} />
        <LeadsTable leads={leads} onLeadsChange={setLeads} />
        <RevenueOpsPanel
          invoices={invoices}
          onInvoicesChange={setInvoices}
          storage={ops.storage}
          checks={ops.checks}
        />
      </div>
    </main>
  );
}

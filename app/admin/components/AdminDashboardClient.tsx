"use client";

import { useState } from "react";
import type { LeadDTO } from "@/app/admin/actions/leads";
import { adminLogoutAction } from "@/app/admin/actions/leads";
import type { GaDashboardMetrics } from "@/lib/ga4";
import AnalyticsPanel from "@/app/admin/components/AnalyticsPanel";
import LeadsTable from "@/app/admin/components/LeadsTable";
import ProFormaInvoicePanel from "@/app/admin/components/ProFormaInvoicePanel";

type Props = {
  leads: LeadDTO[];
  metrics: GaDashboardMetrics;
};

export default function AdminDashboardClient({ leads, metrics }: Props) {
  const [selected, setSelected] = useState<LeadDTO | null>(leads[0] || null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] text-gray-900">
      <header className="border-b border-gray-200 bg-[#102f35] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold-muted">
              Karol Digital ops
            </p>
            <h1 className="text-2xl font-bold md:text-3xl">Admin dashboard</h1>
          </div>
          <form action={adminLogoutAction}>
            <button
              type="submit"
              className="rounded-full border border-white/30 px-5 py-2 text-sm font-semibold hover:bg-white/10"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10">
        <AnalyticsPanel metrics={metrics} />
        <LeadsTable
          initialLeads={leads}
          selectedLeadId={selected?.id}
          onSelectLead={setSelected}
        />
        <ProFormaInvoicePanel lead={selected} />
      </div>
    </main>
  );
}

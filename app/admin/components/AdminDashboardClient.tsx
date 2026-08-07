"use client";

import type { LeadDTO } from "@/app/admin/actions/leads";
import { adminLogoutAction } from "@/app/admin/actions/auth";
import type { GaDashboardMetrics } from "@/lib/ga4";
import AnalyticsPanel from "@/app/admin/components/AnalyticsPanel";
import ChangePasswordPanel from "@/app/admin/components/ChangePasswordPanel";
import LeadsTable from "@/app/admin/components/LeadsTable";

type Props = {
  leads: LeadDTO[];
  metrics: GaDashboardMetrics;
};

export default function AdminDashboardClient({ leads, metrics }: Props) {
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
          <div className="flex flex-wrap items-center gap-3">
            <ChangePasswordPanel />
            <form action={adminLogoutAction}>
              <button
                type="submit"
                className="rounded-full bg-brand-gold px-5 py-2 text-sm font-bold text-[#102f35] transition hover:bg-brand-gold-deep"
              >
                Sign Out
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10">
        <LeadsTable initialLeads={leads} />
        <AnalyticsPanel metrics={metrics} />
      </div>
    </main>
  );
}

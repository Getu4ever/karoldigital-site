import { redirect } from "next/navigation";
import { getInvoicesAction } from "@/app/admin/actions/invoices";
import { getLeadsAction } from "@/app/admin/actions/leads";
import AdminDashboardClient from "@/app/admin/components/AdminDashboardClient";
import { getOpsDashboardData } from "@/app/admin/lib/get-ops-dashboard";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import type { RecentInvoice } from "@/lib/ops-dashboard";

export const metadata = {
  title: "Admin Dashboard | Karol Digital",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    redirect("/admin/login");
  }

  let leads: Awaited<ReturnType<typeof getLeadsAction>> = [];
  let invoices: RecentInvoice[] = [];
  let dbError: string | null = null;

  try {
    leads = await getLeadsAction();
  } catch (error) {
    dbError =
      error instanceof Error
        ? error.message
        : "Unable to load leads. Check database connection and migrations.";
  }

  if (!dbError) {
    try {
      invoices = await getInvoicesAction();
    } catch (error) {
      dbError =
        error instanceof Error
          ? error.message
          : "Unable to load invoices. Confirm the Invoice table exists.";
    }
  }

  const ops = getOpsDashboardData({
    dbConnected: !dbError,
    leadCount: leads.length,
    invoices,
  });

  return (
    <>
      {dbError && (
        <div className="bg-[#411b3f] px-6 py-3 text-center text-sm text-white">
          Database notice: {dbError}. Confirm{" "}
          <code>POSTGRES_PRISMA_URL</code> / migrate, then refresh.
        </div>
      )}
      <AdminDashboardClient
        initialLeads={leads}
        initialInvoices={invoices}
        dbConnected={!dbError}
        ops={ops}
      />
    </>
  );
}

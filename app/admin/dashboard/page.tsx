import { redirect } from "next/navigation";
import { getLeadsAction } from "@/app/admin/actions/leads";
import AdminDashboardClient from "@/app/admin/components/AdminDashboardClient";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { fetchGa4DashboardMetrics } from "@/lib/ga4";

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
  let dbError: string | null = null;

  try {
    leads = await getLeadsAction();
  } catch (error) {
    dbError =
      error instanceof Error
        ? error.message
        : "Unable to load leads. Check database connection and migrations.";
  }

  const metrics = await fetchGa4DashboardMetrics();

  return (
    <>
      {dbError && (
        <div className="bg-[#411b3f] px-6 py-3 text-center text-sm text-white">
          Database notice: {dbError}. Confirm{" "}
          <code>POSTGRES_PRISMA_URL</code> / migrate, then refresh.
        </div>
      )}
      <AdminDashboardClient leads={leads} metrics={metrics} />
    </>
  );
}

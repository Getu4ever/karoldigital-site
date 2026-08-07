import Link from "next/link";
import { adminLoginAction } from "@/app/admin/actions/leads";

export const metadata = {
  title: "Admin Login | Karol Digital",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const params = await searchParams;
  const hasError = params.error === "1";

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#f9fafb] to-[#f1f5f9] px-6">
      <div className="w-full max-w-md rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
        <p className="text-xs font-bold uppercase tracking-widest text-[#411b3f]">
          Secure access
        </p>
        <h1 className="mt-2 text-3xl font-bold text-[#102f35]">
          Admin dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Enter the shared admin token configured as{" "}
          <code className="text-xs">ADMIN_DASHBOARD_TOKEN</code>.
        </p>

        {hasError && (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            Invalid token. Try again.
          </p>
        )}

        <form action={adminLoginAction} className="mt-6 space-y-4">
          <label className="block text-sm">
            <span className="mb-1 block font-semibold text-[#102f35]">
              Access token
            </span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-[#102f35]"
              placeholder="Admin token"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-full bg-[#102f35] py-3 font-semibold text-white transition hover:bg-[#411b3f]"
          >
            Sign in
          </button>
        </form>

        <Link
          href="/"
          className="mt-6 inline-block text-sm font-semibold text-[#102f35] hover:text-[#411b3f]"
        >
          ← Back to site
        </Link>
      </div>
    </main>
  );
}

import { cookies } from "next/headers";

export const ADMIN_COOKIE_NAME = "kd_admin_session";

/**
 * Simple shared-secret session for /admin/*
 * Set ADMIN_DASHBOARD_TOKEN in `.env.local` / Vercel env.
 * This is a placeholder gate — replace with NextAuth / Clerk when ready.
 */
export function getAdminToken(): string {
  const token = process.env.ADMIN_DASHBOARD_TOKEN;
  if (!token) {
    throw new Error(
      "Missing ADMIN_DASHBOARD_TOKEN. Add it to .env.local before using the admin dashboard."
    );
  }
  return token;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  try {
    const expected = process.env.ADMIN_DASHBOARD_TOKEN;
    if (!expected) return false;
    const jar = await cookies();
    const session = jar.get(ADMIN_COOKIE_NAME)?.value;
    return Boolean(session && session === expected);
  } catch {
    return false;
  }
}

export async function requireAdmin(): Promise<void> {
  const ok = await isAdminAuthenticated();
  if (!ok) {
    throw new Error("Unauthorized");
  }
}

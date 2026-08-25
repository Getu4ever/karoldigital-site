"use server";

import { redirect } from "next/navigation";
import { unstable_rethrow } from "next/navigation";
import {
  clearAdminSessionCookie,
  getBootstrapPassword,
  requireAdmin,
  setAdminSessionCookie,
  upsertAdminPassword,
  validateNewPassword,
  verifyAdminPassword,
  verifyPassword,
  ADMIN_ACCOUNT_ID,
} from "@/lib/admin-auth";
import { prisma } from "@/lib/db";

export async function adminLoginAction(formData: FormData) {
  const password = String(formData.get("password") || "");

  try {
    const ok = await verifyAdminPassword(password);
    if (!ok) {
      redirect("/admin/login?error=1");
    }

    // First successful login with bootstrap password: persist hash so change-password works.
    try {
      const account = await prisma.adminAccount.findUnique({
        where: { id: ADMIN_ACCOUNT_ID },
      });
      if (!account) {
        await upsertAdminPassword(password);
      }
    } catch (persistError) {
      console.error("[adminLogin] Could not persist admin account hash:", persistError);
      // Still allow session — bootstrap password already verified.
    }

    await setAdminSessionCookie();
  } catch (error) {
    unstable_rethrow(error);
    console.error("[adminLogin] Login failed:", error);
    redirect("/admin/login?error=1");
  }

  redirect("/admin/dashboard");
}

export async function adminLogoutAction() {
  await clearAdminSessionCookie();
  redirect("/admin/login");
}

export type ChangePasswordResult =
  | { ok: true }
  | { ok: false; error: string };

export async function adminChangePasswordAction(formData: FormData): Promise<ChangePasswordResult> {
  await requireAdmin();

  const currentPassword = String(formData.get("currentPassword") || "");
  const newPassword = String(formData.get("newPassword") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (!currentPassword || !newPassword || !confirmPassword) {
    return { ok: false, error: "All fields are required." };
  }

  const strengthError = validateNewPassword(newPassword);
  if (strengthError) {
    return { ok: false, error: strengthError };
  }

  if (newPassword !== confirmPassword) {
    return { ok: false, error: "New passwords do not match." };
  }

  const account = await prisma.adminAccount.findUnique({
    where: { id: ADMIN_ACCOUNT_ID },
  });

  let currentOk = false;
  if (account) {
    currentOk = verifyPassword(currentPassword, account.passwordHash);
  } else {
    const bootstrap = getBootstrapPassword();
    currentOk = Boolean(bootstrap && currentPassword === bootstrap);
  }

  if (!currentOk) {
    return { ok: false, error: "Current password is incorrect." };
  }

  await upsertAdminPassword(newPassword);
  await setAdminSessionCookie();
  return { ok: true };
}

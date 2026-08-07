"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { LeadStatus } from "@prisma/client";
import { prisma } from "@/lib/db";
import {
  ADMIN_COOKIE_NAME,
  getAdminToken,
  requireAdmin,
} from "@/lib/admin-auth";
import { toPrismaLeadStatus, type LeadStatusLabel } from "@/lib/leads";

export type LeadDTO = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  serviceOfInterest: string | null;
  message: string | null;
  status: LeadStatusLabel;
  customNotes: string | null;
  createdAt: string;
  updatedAt: string;
};

function mapLead(lead: {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  serviceOfInterest: string | null;
  message: string | null;
  status: LeadStatus;
  customNotes: string | null;
  createdAt: Date;
  updatedAt: Date;
}): LeadDTO {
  const statusMap: Record<LeadStatus, LeadStatusLabel> = {
    New_Lead: "New Lead",
    Scheduled: "Scheduled",
    Deposit_Paid: "Deposit Paid",
    Project_In_Progress: "Project In Progress",
    Project_Completed: "Project Completed",
  };

  return {
    id: lead.id,
    name: lead.name,
    email: lead.email,
    company: lead.company,
    phone: lead.phone,
    serviceOfInterest: lead.serviceOfInterest,
    message: lead.message,
    status: statusMap[lead.status],
    customNotes: lead.customNotes,
    createdAt: lead.createdAt.toISOString(),
    updatedAt: lead.updatedAt.toISOString(),
  };
}

export async function adminLoginAction(formData: FormData) {
  const password = String(formData.get("password") || "");
  const expected = getAdminToken();

  if (!password || password !== expected) {
    redirect("/admin/login?error=1");
  }

  const jar = await cookies();
  jar.set(ADMIN_COOKIE_NAME, expected, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 12, // 12 hours
  });

  redirect("/admin/dashboard");
}

export async function adminLogoutAction() {
  const jar = await cookies();
  jar.delete(ADMIN_COOKIE_NAME);
  redirect("/admin/login");
}

export async function getLeadsAction(): Promise<LeadDTO[]> {
  await requireAdmin();
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });
  return leads.map(mapLead);
}

export async function createLeadAction(input: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceOfInterest?: string;
  message?: string;
}) {
  await requireAdmin();
  const lead = await prisma.lead.create({
    data: {
      name: input.name.trim(),
      email: input.email.trim().toLowerCase(),
      company: input.company?.trim() || null,
      phone: input.phone?.trim() || null,
      serviceOfInterest: input.serviceOfInterest?.trim() || null,
      message: input.message?.trim() || null,
      status: "New_Lead",
    },
  });
  revalidatePath("/admin/dashboard");
  return mapLead(lead);
}

export async function updateLeadStatusAction(id: string, statusLabel: string) {
  await requireAdmin();
  const status = toPrismaLeadStatus(statusLabel) as LeadStatus;
  const lead = await prisma.lead.update({
    where: { id },
    data: { status },
  });
  revalidatePath("/admin/dashboard");
  return mapLead(lead);
}

export async function updateLeadNotesAction(id: string, customNotes: string) {
  await requireAdmin();
  const lead = await prisma.lead.update({
    where: { id },
    data: { customNotes: customNotes.trim() || null },
  });
  revalidatePath("/admin/dashboard");
  return mapLead(lead);
}

export async function updateLeadFieldsAction(
  id: string,
  fields: {
    name?: string;
    email?: string;
    company?: string;
    phone?: string;
    serviceOfInterest?: string;
    message?: string;
  }
) {
  await requireAdmin();
  const lead = await prisma.lead.update({
    where: { id },
    data: {
      ...(fields.name !== undefined ? { name: fields.name.trim() } : {}),
      ...(fields.email !== undefined
        ? { email: fields.email.trim().toLowerCase() }
        : {}),
      ...(fields.company !== undefined
        ? { company: fields.company.trim() || null }
        : {}),
      ...(fields.phone !== undefined
        ? { phone: fields.phone.trim() || null }
        : {}),
      ...(fields.serviceOfInterest !== undefined
        ? { serviceOfInterest: fields.serviceOfInterest.trim() || null }
        : {}),
      ...(fields.message !== undefined
        ? { message: fields.message.trim() || null }
        : {}),
    },
  });
  revalidatePath("/admin/dashboard");
  return mapLead(lead);
}

export async function deleteLeadAction(id: string) {
  await requireAdmin();
  await prisma.lead.delete({ where: { id } });
  revalidatePath("/admin/dashboard");
}

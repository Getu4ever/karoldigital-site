"use server";

import { revalidatePath } from "next/cache";
import type { InvoiceStatus as PrismaInvoiceStatus } from "@prisma/client";
import { prisma } from "@/lib/db";
import { requireAdmin } from "@/lib/admin-auth";
import {
  SEED_INVOICES,
  isInvoiceStatus,
  type InvoiceStatus,
  type RecentInvoice,
} from "@/lib/ops-dashboard";

function mapInvoice(invoice: {
  id: string;
  reference: string;
  clientName: string;
  amountGbp: { toString(): string } | number;
  status: PrismaInvoiceStatus;
  email: string | null;
  issuedAt: Date;
}): RecentInvoice {
  return {
    id: invoice.id,
    reference: invoice.reference,
    clientName: invoice.clientName,
    amountGbp: Number(invoice.amountGbp),
    status: invoice.status,
    email: invoice.email,
    issuedAt: invoice.issuedAt.toISOString(),
  };
}

function nextReference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-6);
  return `KD-INV-${stamp}`;
}

export async function getInvoicesAction(): Promise<RecentInvoice[]> {
  await requireAdmin();
  const existing = await prisma.invoice.count();
  if (existing === 0) {
    await prisma.invoice.createMany({
      data: SEED_INVOICES.map((row) => ({
        reference: row.reference,
        clientName: row.clientName,
        amountGbp: row.amountGbp,
        status: row.status,
        email: row.email,
        issuedAt: new Date(row.issuedAt),
      })),
    });
  }

  const invoices = await prisma.invoice.findMany({
    orderBy: { issuedAt: "desc" },
  });
  return invoices.map(mapInvoice);
}

export async function createInvoiceAction(input: {
  clientName: string;
  amountGbp: number;
  status: string;
  email?: string;
}): Promise<RecentInvoice> {
  await requireAdmin();
  const clientName = input.clientName.trim();
  if (!clientName) {
    throw new Error("Client name is required.");
  }
  if (!Number.isFinite(input.amountGbp) || input.amountGbp < 0) {
    throw new Error("Amount must be a valid number.");
  }
  const status: InvoiceStatus = isInvoiceStatus(input.status)
    ? input.status
    : "Sent";

  const invoice = await prisma.invoice.create({
    data: {
      reference: nextReference(),
      clientName,
      amountGbp: input.amountGbp,
      status,
      email: input.email?.trim() || null,
    },
  });
  revalidatePath("/admin/dashboard");
  return mapInvoice(invoice);
}

export async function updateInvoiceAction(
  id: string,
  fields: {
    clientName?: string;
    amountGbp?: number;
    status?: string;
    email?: string;
    reference?: string;
  }
): Promise<RecentInvoice> {
  await requireAdmin();
  const data: {
    clientName?: string;
    amountGbp?: number;
    status?: PrismaInvoiceStatus;
    email?: string | null;
    reference?: string;
  } = {};

  if (fields.clientName !== undefined) {
    const clientName = fields.clientName.trim();
    if (!clientName) throw new Error("Client name is required.");
    data.clientName = clientName;
  }
  if (fields.amountGbp !== undefined) {
    if (!Number.isFinite(fields.amountGbp) || fields.amountGbp < 0) {
      throw new Error("Amount must be a valid number.");
    }
    data.amountGbp = fields.amountGbp;
  }
  if (fields.status !== undefined) {
    if (!isInvoiceStatus(fields.status)) {
      throw new Error("Invalid invoice status.");
    }
    data.status = fields.status;
  }
  if (fields.email !== undefined) {
    data.email = fields.email.trim() || null;
  }
  if (fields.reference !== undefined) {
    const reference = fields.reference.trim().toUpperCase();
    if (!reference) throw new Error("Reference is required.");
    data.reference = reference;
  }

  const invoice = await prisma.invoice.update({
    where: { id },
    data,
  });
  revalidatePath("/admin/dashboard");
  return mapInvoice(invoice);
}

export async function deleteInvoiceAction(id: string): Promise<void> {
  await requireAdmin();
  await prisma.invoice.delete({ where: { id } });
  revalidatePath("/admin/dashboard");
}

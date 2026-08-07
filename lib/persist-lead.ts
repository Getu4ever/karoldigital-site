import { prisma } from "@/lib/db";

/**
 * Best-effort Lead insert for public contact / book forms.
 * Never throws to the caller — email delivery must not fail if DB is down.
 */
export async function persistPublicLead(input: {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  serviceOfInterest?: string | null;
  message?: string | null;
}): Promise<void> {
  try {
    await prisma.lead.create({
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
  } catch (error) {
    console.error("Lead persistence skipped:", error);
  }
}

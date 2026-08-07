import { NextResponse } from "next/server";
import { Resend } from "resend";
import { persistPublicLead } from "@/lib/persist-lead";
import {
  buildAdminNotificationEmail,
  buildUserConfirmationEmail,
} from "@/lib/email-templates";
import { normalizeBookService } from "@/lib/recaptcha";

async function verifyCaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return false;

  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  });

  const verifyData = await verifyRes.json();
  return Boolean(verifyData.success);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message, captchaToken } = body;

    if (!name?.trim() || !email?.trim() || !service?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and service are required." },
        { status: 400 }
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        { error: "Please complete the reCAPTCHA." },
        { status: 400 }
      );
    }

    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    const resend = new Resend(resendKey);

    const selectedService = normalizeBookService(
      typeof service === "string" ? service : null
    );

    const fullMessage = [
      phone?.trim() ? `Phone: ${phone.trim()}` : null,
      message?.trim() || null,
    ]
      .filter(Boolean)
      .join("\n\n");

    const userEmail = buildUserConfirmationEmail({
      name: String(name),
      contextLabel: selectedService,
    });
    const adminEmail = buildAdminNotificationEmail({
      name: String(name),
      email: String(email),
      phone: phone ? String(phone) : null,
      source: "Book a call",
      service: selectedService,
      message: fullMessage || null,
    });

    const [{ error: adminError }, { error: userError }] = await Promise.all([
      resend.emails.send({
        from: "Karol Digital <info@karoldigital.co.uk>",
        to: "info@karoldigital.co.uk",
        replyTo: String(email),
        subject: adminEmail.subject,
        text: adminEmail.text,
        html: adminEmail.html,
      }),
      resend.emails.send({
        from: "Karol Digital <info@karoldigital.co.uk>",
        to: String(email),
        subject: userEmail.subject,
        text: userEmail.text,
        html: userEmail.html,
      }),
    ]);

    if (adminError) throw adminError;
    if (userError) throw userError;

    await persistPublicLead({
      name: String(name),
      email: String(email),
      phone: phone ? String(phone) : null,
      serviceOfInterest: selectedService,
      message: fullMessage || null,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Booking API Error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

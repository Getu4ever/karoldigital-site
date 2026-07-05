import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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

    const fullMessage = [
      phone?.trim() ? `Phone: ${phone.trim()}` : null,
      message?.trim() || null,
    ]
      .filter(Boolean)
      .join("\n\n");

    const { error } = await supabase.from("bookings").insert([
      {
        full_name: name.trim(),
        email: email.trim(),
        service_type: service.trim(),
        message: fullMessage || null,
      },
    ]);

    if (error) throw error;

    await resend.emails.send({
      from: "info@karoldigital.co.uk",
      to: "info@karoldigital.co.uk",
      subject: `New Lead: ${service} - ${name}`,
      text: `You have a new booking request!

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
Service: ${service}

Message:
${fullMessage || "(No additional details provided)"}`,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Booking API Error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

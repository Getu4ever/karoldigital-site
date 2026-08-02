import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  generateContentBrief,
  type ContentBriefInput,
} from "@/lib/content-brief";

async function verifyCaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) return false;

  const verifyRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
    }
  );

  const verifyData = await verifyRes.json();
  return Boolean(verifyData.success);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      email,
      captchaToken,
      sendCopy,
      ...briefInput
    } = body as ContentBriefInput & {
      email?: string;
      captchaToken?: string;
      sendCopy?: boolean;
    };

    if (!briefInput.service?.trim() || !briefInput.industry?.trim()) {
      return NextResponse.json(
        { error: "Service and industry are required." },
        { status: 400 }
      );
    }

    const brief = generateContentBrief({
      businessName: briefInput.businessName || "",
      industry: briefInput.industry,
      service: briefInput.service,
      location: briefInput.location || "UK",
      audience: briefInput.audience || "decision makers",
      primaryKeyword: briefInput.primaryKeyword || "",
      goal: briefInput.goal || "enquiries",
    });

    if (sendCopy && email?.trim()) {
      if (!captchaToken) {
        return NextResponse.json(
          { error: "Please complete the reCAPTCHA to email the brief." },
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
      const outlineText = brief.outline
        .map((s, i) => `${i + 1}. ${s.heading}\n   ${s.notes}`)
        .join("\n");

      await resend.emails.send({
        from: "info@karoldigital.co.uk",
        to: "info@karoldigital.co.uk",
        replyTo: email.trim(),
        subject: `Content Brief Lead: ${briefInput.service} — ${email}`,
        text: `New content brief generated

Email: ${email}
Business: ${briefInput.businessName || "(n/a)"}
Industry: ${briefInput.industry}
Service: ${briefInput.service}
Location: ${briefInput.location || "UK"}
Keyword: ${brief.primaryKeyword}
Goal: ${briefInput.goal}

Title options:
${brief.titleOptions.map((t) => `- ${t}`).join("\n")}

Outline:
${outlineText}

Meta: ${brief.metaDescription}`,
      });
    }

    return NextResponse.json({ success: true, brief });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Content brief API Error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

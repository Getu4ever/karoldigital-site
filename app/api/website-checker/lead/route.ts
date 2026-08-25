import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { WebsiteSnapshotResult } from "@/lib/website-checker";

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

function isSnapshotResult(value: unknown): value is WebsiteSnapshotResult {
  if (!value || typeof value !== "object") return false;
  const result = value as WebsiteSnapshotResult;
  return (
    typeof result.finalUrl === "string" &&
    typeof result.percent === "number" &&
    Array.isArray(result.checks) &&
    Array.isArray(result.issues)
  );
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      note?: string;
      captchaToken?: string;
      result?: unknown;
    };

    if (!body.name?.trim() || !body.email?.trim() || !body.result) {
      return NextResponse.json(
        { error: "Name, email, and a completed snapshot are required." },
        { status: 400 }
      );
    }
    if (!body.captchaToken) {
      return NextResponse.json(
        { error: "Please complete the reCAPTCHA." },
        { status: 400 }
      );
    }
    if (!(await verifyCaptcha(body.captchaToken))) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed." },
        { status: 400 }
      );
    }
    if (!isSnapshotResult(body.result)) {
      return NextResponse.json(
        { error: "The snapshot result looks incomplete. Run the check again." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    const result = body.result;
    const issueLines =
      result.issues.map((issue, i) => `${i + 1}. ${issue.title}: ${issue.detail}`).join(
        "\n"
      ) || "None flagged in this snapshot.";
    const checkLines = result.checks
      .map((check) => `- [${check.status}] ${check.label}: ${check.detail}`)
      .join("\n");

    const resend = new Resend(resendKey);
    const { error } = await resend.emails.send({
      from: "info@karoldigital.co.uk",
      to: "info@karoldigital.co.uk",
      replyTo: body.email.trim(),
      subject: `Website snapshot: ${result.percent}% (${result.band}) — ${body.name}`,
      text: `New GEO/SEO website snapshot lead

Name: ${body.name.trim()}
Email: ${body.email.trim()}
Checked URL: ${result.inputUrl}
Final URL: ${result.finalUrl}
Score: ${result.percent}% — ${result.band}

Summary: ${result.summary}

Note from visitor:
${body.note?.trim() || "(none)"}

Top issues:
${issueLines}

Checks:
${checkLines}

Disclaimer: ${result.disclaimer}`,
    });

    if (error) throw error;
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Website checker lead error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

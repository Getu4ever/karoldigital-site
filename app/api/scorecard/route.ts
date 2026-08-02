import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  SCORECARD_QUESTIONS,
  scoreAnswers,
  type ScorecardAnswer,
} from "@/lib/ai-search-scorecard";

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
    const { name, email, website, answers, captchaToken } = body as {
      name?: string;
      email?: string;
      website?: string;
      answers?: Record<string, ScorecardAnswer>;
      captchaToken?: string;
    };

    if (!name?.trim() || !email?.trim() || !answers) {
      return NextResponse.json(
        { error: "Name, email, and answers are required." },
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

    const result = scoreAnswers(answers);
    const answerLines = SCORECARD_QUESTIONS.map((q) => {
      const value = answers[q.id] ?? "no";
      return `- [${q.pillar}] ${q.question} → ${value}`;
    }).join("\n");

    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }

    const resend = new Resend(resendKey);

    const { error } = await resend.emails.send({
      from: "info@karoldigital.co.uk",
      to: "info@karoldigital.co.uk",
      replyTo: email.trim(),
      subject: `AI Search Scorecard: ${result.percent}% (${result.band}) — ${name}`,
      text: `New AI Search Readiness Scorecard lead

Name: ${name}
Email: ${email}
Website: ${website?.trim() || "(not provided)"}
Score: ${result.total}/${result.max} (${result.percent}%) — ${result.band}

Summary: ${result.summary}

Top priorities:
${result.priorities.map((p, i) => `${i + 1}. ${p}`).join("\n") || "None"}

Answers:
${answerLines}`,
    });

    if (error) throw error;

    return NextResponse.json({ success: true, result });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Scorecard API Error:", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

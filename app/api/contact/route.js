import nodemailer from "nodemailer";
import { persistPublicLead } from "@/lib/persist-lead";
import { forwardPortalEnquiry } from "@/lib/forward-portal-enquiry";
import {
  buildAdminNotificationEmail,
  buildUserConfirmationEmail,
} from "@/lib/email-templates";

export async function POST(req) {
  try {
    const data = await req.json();
    const { captchaToken, name, email, phone, message, source } = data;

    if (!captchaToken || !name || !email || !message || !source) {
      return Response.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }

    /* 1. Verify reCAPTCHA */
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) throw new Error("RECAPTCHA_SECRET_KEY is not defined in environment variables.");

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: captchaToken }),
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return Response.json({ success: false, error: "reCAPTCHA verification failed" }, { status: 400 });
    }

    /* 2. Email Transport */
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const userEmail = buildUserConfirmationEmail({
      name,
      contextLabel: "your project enquiry",
    });
    const adminEmail = buildAdminNotificationEmail({
      name,
      email,
      phone,
      source,
      service: source,
      message,
    });

    /* 3. Send Emails */
    const customerMail = {
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: userEmail.subject,
      text: userEmail.text,
      html: userEmail.html,
    };

    const adminMail = {
      from: `"Karol Digital Leads" <${process.env.EMAIL_USER}>`,
      to: "info@karoldigital.co.uk",
      cc: "getu4ever@gmail.com",
      replyTo: email,
      subject: adminEmail.subject,
      text: adminEmail.text,
      html: adminEmail.html,
    };

    await Promise.all([
      transporter.sendMail(customerMail),
      transporter.sendMail(adminMail),
      persistPublicLead({
        name,
        email,
        phone,
        serviceOfInterest: "Contact form",
        sourceChannel: source || null,
        message,
      }),
      forwardPortalEnquiry({
        service: "web",
        sourceSite: "karoldigital.co.uk",
        sourceKind: "contact",
        sourceChannel: source || data.service || null,
        name,
        email,
        phone,
        message,
      }),
    ]);

    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}

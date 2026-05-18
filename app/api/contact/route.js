import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const {
      captchaToken,
      name,
      email,
      phone,
      message,
      source,
    } = data;

    if (!captchaToken || !name || !email || !message || !source) {
      return Response.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    /* -------------------------------
       1. Verify reCAPTCHA
    -------------------------------- */
    const secretKey =
      process.env.RECAPTCHA_SECRET_KEY ||
      "6LdsKYQsAAAAABVjVqYu_7QcS5AcKC32Mg-salN1";

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secretKey,
          response: captchaToken,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      console.error("reCAPTCHA failed:", verifyData);
      return Response.json(
        {
          success: false,
          error:
            verifyData["error-codes"]?.[0] || "reCAPTCHA verification failed",
        },
        { status: 400 }
      );
    }

    /* -------------------------------
       2. Email Transport
    -------------------------------- */
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    /* -------------------------------
       3. Send Emails
    -------------------------------- */

    // EMAIL A: Send Confirmation to Customer
    const customerMailPromise = transporter.sendMail({
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Confirmation: We've received your inquiry, ${name}`,
      html: `
        <div style="font-family: Verdana, sans-serif; color: #333;">
          <header>
            <h2 style="color: #d91e18;">Karol <span style="color: #333;">Digital</span></h2>
          </header>
          <p>Hi ${name},</p>
          <p>Thank you for contacting Karol Digital. We have received your message and our team will get back to you shortly.</p>
          <hr />
          <footer style="font-size: 12px; color: #777;">
            <p>&copy; 2026 Karol Digital. All rights reserved.</p>
          </footer>
        </div>
      `,
    });

    // EMAIL B: Send Lead Notification to YOU (The one you reply to)
    const adminMailPromise = transporter.sendMail({
      from: `"Karol Digital Leads" <${process.env.EMAIL_USER}>`,
      to: "info@karoldigital.co.uk",
      cc: "getu4ever@gmail.com",
      replyTo: email, // This ensures when you hit reply, it goes to the customer
      subject: `New Web Inquiry: ${name} via ${source}`,
      html: `
        <div style="font-family: Verdana, sans-serif; color: #333;">
          <header>
             <h2 style="color: #d91e18;">New Lead <span style="color: #333;">Notification</span></h2>
          </header>
          <div style="background:#f4f4f4;padding:16px;border-radius:8px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-line;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #666;"><em>Note: You can reply directly to this email to contact the customer.</em></p>
          <hr />
          <footer style="font-size: 12px; color: #777;">
            <p>Internal Notification | Karol Digital</p>
          </footer>
        </div>
      `,
    });

    // Run both email sends
    await Promise.all([customerMailPromise, adminMailPromise]);

    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
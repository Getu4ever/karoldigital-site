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
      source, // NEW FIELD
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
       3. Send Email
    -------------------------------- */
    await transporter.sendMail({
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: email,
      bcc: ["info@karoldigital.co.uk", "getu4ever@gmail.com"],
      replyTo: email,
      subject: `Confirmation: We've received your inquiry, ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>Thank you for contacting Karol Digital, ${name}</h2>
          <p>We have received your message and will respond shortly.</p>

          <div style="background:#f4f4f4;padding:16px;border-radius:8px;margin-top:16px;">
            <h3 style="margin-top:0;">Inquiry Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Heard About Us Via:</strong> ${source}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space:pre-line;">${message}</p>
          </div>

          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;" />

          <footer style="font-size:12px;color:#777;">
            <p>&copy; 2026 Karol Digital. All rights reserved.</p>
          </footer>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
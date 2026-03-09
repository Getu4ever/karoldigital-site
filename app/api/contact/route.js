import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { captchaToken, name, email, phone, message } = data;

    // 1. Verify reCAPTCHA first
    const verifyRes = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      { method: "POST" }
    );
    const verifyData = await verifyRes.json();

    if (!verifyData.success) {
      return Response.json({ success: false, error: "reCAPTCHA failed" }, { status: 400 });
    }

    // 2. Setup Transporter
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

    // 3. SEND ONE COMPOSITE EMAIL
    // We send to the CUSTOMER and BCC YOU. This bypasses the Zoho "Self-to-Self" filter.
    await transporter.sendMail({
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: email, // Send to the customer
      bcc: "info@karoldigital.co.uk", // Send a copy to you
      replyTo: email, // Clicking reply in your inbox goes to the customer
      subject: `Confirmation: We've received your inquiry, ${name}`,
      html: `
        <div style="font-family: Arial; color: #333;">
          <h2>Thanks for contacting Karol Digital, ${name}!</h2>
          <p>We have received your message and will get back to you shortly.</p>
          <br />
          <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
            <p><strong>Your Inquiry Details:</strong></p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          <p style="font-size: 11px; color: #999; margin-top: 20px;">
            Ref: Website Contact Form Submission
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("ZOHO ERROR:", error.message);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
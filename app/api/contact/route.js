import nodemailer from "nodemailer";

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

    /* 3. Send Emails */
    const customerMail = {
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your inquiry, ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
          <header style="border-bottom: 2px solid #d91e18; padding-bottom: 10px;">
            <h2 style="color: #d91e18;">Karol Digital</h2>
          </header>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out. We have received your inquiry and are currently reviewing your project requirements. Our team will contact you within 24 hours.</p>
          <footer style="font-size: 12px; color: #777; margin-top: 30px;">
            <p>&copy; 2026 Karol Digital. All rights reserved.</p>
          </footer>
        </div>
      `,
    };

    const adminMail = {
      from: `"Karol Digital Leads" <${process.env.EMAIL_USER}>`,
      to: "info@karoldigital.co.uk",
      cc: "getu4ever@gmail.com",
      replyTo: email,
      subject: `New Web Inquiry: ${name} via ${source}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto;">
          <header style="border-bottom: 2px solid #d91e18; padding-bottom: 10px;">
             <h2 style="color: #d91e18;">New Lead Notification</h2>
          </header>
          <div style="background:#f9f9f9; padding:15px; border-radius:5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Source:</strong> ${source}</p>
            <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
          </div>
          <footer style="font-size: 12px; color: #777;">
            <p>Internal Notification | Karol Digital</p>
          </footer>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(customerMail),
      transporter.sendMail(adminMail)
    ]);

    return Response.json({ success: true });
  } catch (error) {
    console.error("SERVER ERROR:", error);
    return Response.json({ success: false, error: "Internal server error." }, { status: 500 });
  }
}
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    const { captchaToken, name, email, phone, message } = data;

    // 1. Verify reCAPTCHA with Google (Vercel-Optimized Fetch)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY || "6LdsKYQsAAAAABVjVqYu_7QcS5AcKC32Mg-salN1";
    
    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: captchaToken,
      }),
    });

    const verifyData = await verifyRes.json();

    // Log the error to Vercel dashboard so we can see WHY it fails
    if (!verifyData.success) {
      console.error("reCAPTCHA Google Response:", verifyData);
      return Response.json({ 
        success: false, 
        error: `reCAPTCHA failed: ${verifyData["error-codes"]?.[0] || "Unknown error"}` 
      }, { status: 400 });
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

    // 3. Send the Email
    await transporter.sendMail({
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: email, 
      bcc: "info@karoldigital.co.uk",
      replyTo: email, 
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
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.error("SERVER ERROR:", error.message);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
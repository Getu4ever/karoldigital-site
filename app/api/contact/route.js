import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com", // Use .com for global Vercel stability
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Give Vercel/Zoho more time to talk
      connectionTimeout: 10000, 
      greetingTimeout: 10000,
    });

    // Verify the connection first
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: "info@karoldigital.co.uk",
      replyTo: data.email,
      subject: `New Message: ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #007bb6;">New Website Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Vercel Email Error:", error.message);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
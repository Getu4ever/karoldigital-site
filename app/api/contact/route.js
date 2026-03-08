import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    // 1. Create the Transporter for Zoho
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu", // Use .eu for UK accounts; change to .com if it fails
      port: 465,
      secure: true, // Required for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Send the Email
    const info = await transporter.sendMail({
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: "info@karoldigital.co.uk",
      replyTo: data.email, // Allows you to reply directly to the sender
      subject: `New Contact Form: ${data.name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee;">
          <h2 style="color: #007bb6;">New Website Message</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
    });

    console.log("Email sent successfully! Message ID:", info.messageId);

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    // Log the EXACT reason for the failure in your console
    console.error("--- ZOHO ERROR LOG ---");
    console.error("Message:", error.message);
    if (error.response) console.error("Response:", error.response);
    
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
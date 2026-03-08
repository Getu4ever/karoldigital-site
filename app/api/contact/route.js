import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.eu", 
      port: 465,
      secure: true, 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // CRITICAL: We MUST await the verify and the sendMail completely
    await transporter.verify();

    // We send ONE email to the customer and BCC you. 
    // This is faster and prevents Zoho from blocking "duplicate" self-emails.
    await transporter.sendMail({
      from: `"Karol Digital" <${process.env.EMAIL_USER}>`,
      to: data.email, 
      bcc: "info@karoldigital.co.uk", // This ensures you get the notification
      replyTo: data.email, 
      subject: `We've received your message, ${data.name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #333;">
          <h2 style="color: #007bb6;">Thanks for reaching out!</h2>
          <p>Hi ${data.name},</p>
          <p>We've received your message through <strong>karoldigital.co.uk</strong>. We'll get back to you shortly.</p>
          <br />
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
            <strong>Your Message:</strong><br/>
            ${data.message}
          </div>
        </div>
      `,
    });

    // ONLY return the success response AFTER the await above is finished
    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Vercel Email Error:", error.message);
    return new Response(JSON.stringify({ success: false, error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
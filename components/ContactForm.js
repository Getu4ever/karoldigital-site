"use client"; // Critical for Next.js App Router
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // Debugging: This will show in your browser console (F12)
  console.log("ReCAPTCHA Site Key:", siteKey);

  return (
    <form>
      {/* Your inputs here */}
      
      <div className="my-4">
        <ReCAPTCHA
          sitekey={siteKey}
          onChange={(value) => console.log("Captcha value:", value)}
        />
      </div>

      <button type="submit">Send</button>
    </form>
  );
}
/**
 * Shared branded HTML email templates for Karol Digital transactional mail.
 * Logo uses the production site asset so clients can load it reliably.
 */

const BRAND = {
  name: "Karol Digital",
  phoneDisplay: "020 8123 4567",
  phoneTel: "+442081234567",
  email: "info@karoldigital.co.uk",
  address: "616A Kingston Rd, London SW20 8DN",
  siteUrl: "https://www.karoldigital.co.uk",
  logoUrl: "https://www.karoldigital.co.uk/logo.WebP",
  teal: "#102f35",
  plum: "#411b3f",
  gold: "#c9a84b",
  muted: "#6b7280",
  border: "#e5e7eb",
  bg: "#f8fafc",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function emailShell(title: string, bodyHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:Arial,Helvetica,sans-serif;color:${BRAND.teal};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BRAND.bg};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid ${BRAND.border};">
          <tr>
            <td style="background:${BRAND.teal};padding:28px 32px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="vertical-align:middle;">
                    <img src="${BRAND.logoUrl}" alt="Karol Digital logo" width="72" height="44" style="display:block;height:44px;width:auto;border:0;" />
                  </td>
                  <td style="vertical-align:middle;padding-left:14px;">
                    <p style="margin:0;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:0.2px;">
                      Karol <span style="color:${BRAND.gold};">Digital</span>
                    </p>
                    <p style="margin:4px 0 0;font-size:12px;color:#d1d5db;">
                      High-Performance Web &amp; App Engineering
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${bodyHtml}
            </td>
          </tr>
          <tr>
            <td style="background:#f9fafb;border-top:1px solid ${BRAND.border};padding:24px 32px;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:${BRAND.teal};">
                ${BRAND.name}
              </p>
              <p style="margin:0 0 4px;font-size:12px;color:${BRAND.muted};line-height:1.6;">
                <a href="tel:${BRAND.phoneTel}" style="color:${BRAND.teal};text-decoration:none;">${BRAND.phoneDisplay}</a>
                &nbsp;·&nbsp;
                <a href="mailto:${BRAND.email}" style="color:${BRAND.teal};text-decoration:none;">${BRAND.email}</a>
              </p>
              <p style="margin:0 0 12px;font-size:12px;color:${BRAND.muted};line-height:1.6;">
                ${BRAND.address}
              </p>
              <p style="margin:0;font-size:11px;color:#9ca3af;">
                &copy; ${new Date().getFullYear()} ${BRAND.name}. All rights reserved.
                <a href="${BRAND.siteUrl}" style="color:${BRAND.gold};text-decoration:none;">karoldigital.co.uk</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Template 1 — confirmation email to the enquiring user */
export function buildUserConfirmationEmail(input: {
  name: string;
  contextLabel?: string;
}): { subject: string; html: string; text: string } {
  const safeName = escapeHtml(input.name.trim());
  const context = input.contextLabel
    ? escapeHtml(input.contextLabel)
    : "your enquiry";

  const subject = `We've received your enquiry, ${input.name.trim()}`;
  const html = emailShell(
    subject,
    `
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.plum};">
        Enquiry received
      </p>
      <h1 style="margin:0 0 16px;font-size:24px;line-height:1.3;color:${BRAND.teal};">
        Thank you for contacting Karol Digital
      </h1>
      <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#374151;">
        Hi ${safeName},
      </p>
      <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#374151;">
        Thank you for reaching out about <strong>${context}</strong>. We have received your
        message and our team is reviewing your goals for a high-performance website,
        e-commerce platform, or custom mobile application.
      </p>
      <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#374151;">
        You can expect a thoughtful follow-up from us within <strong>24 hours</strong> on
        UK business days. If your enquiry is urgent, call us on
        <a href="tel:${BRAND.phoneTel}" style="color:${BRAND.teal};font-weight:700;text-decoration:none;">${BRAND.phoneDisplay}</a>.
      </p>
      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;width:100%;background:#f9fafb;border:1px solid ${BRAND.border};border-radius:12px;">
        <tr>
          <td style="padding:16px 18px;font-size:13px;line-height:1.7;color:#4b5563;">
            <strong style="color:${BRAND.teal};">What happens next</strong><br />
            We review your brief, clarify scope where needed, and reply with clear next steps
            — never a hard sell.
          </td>
        </tr>
      </table>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#374151;">
        Warm regards,<br />
        <strong>The Karol Digital Team</strong>
      </p>
    `
  );

  const text = `Hi ${input.name.trim()},

Thank you for contacting Karol Digital. We have received your enquiry and will follow up within 24 hours on UK business days.

Phone: ${BRAND.phoneDisplay}
Email: ${BRAND.email}
Address: ${BRAND.address}

— Karol Digital`;

  return { subject, html, text };
}

/** Template 2 — internal notification email to admin */
export function buildAdminNotificationEmail(input: {
  name: string;
  email: string;
  phone?: string | null;
  source?: string | null;
  service?: string | null;
  message?: string | null;
}): { subject: string; html: string; text: string } {
  const name = escapeHtml(input.name.trim());
  const email = escapeHtml(input.email.trim());
  const phone = escapeHtml((input.phone || "").trim() || "Not provided");
  const source = escapeHtml((input.source || "").trim() || "Website");
  const service = escapeHtml((input.service || "").trim() || "Not specified");
  const messageHtml = escapeHtml((input.message || "").trim() || "(No message provided)").replace(
    /\n/g,
    "<br/>"
  );

  const subject = `New enquiry: ${input.name.trim()} — ${
    (input.service || input.source || "Website").trim()
  }`;

  const html = emailShell(
    subject,
    `
      <p style="margin:0 0 8px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:${BRAND.plum};">
        Internal lead notification
      </p>
      <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;color:${BRAND.teal};">
        New form submission
      </h1>
      <p style="margin:0 0 18px;font-size:14px;line-height:1.6;color:#4b5563;">
        A prospective client submitted an enquiry via the Karol Digital website.
      </p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:700;color:${BRAND.muted};width:34%;border-bottom:1px solid ${BRAND.border};">Name</td>
          <td style="padding:12px 16px;font-size:14px;color:${BRAND.teal};border-bottom:1px solid ${BRAND.border};">${name}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:700;color:${BRAND.muted};border-bottom:1px solid ${BRAND.border};">Email</td>
          <td style="padding:12px 16px;font-size:14px;border-bottom:1px solid ${BRAND.border};"><a href="mailto:${email}" style="color:${BRAND.teal};text-decoration:none;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:700;color:${BRAND.muted};border-bottom:1px solid ${BRAND.border};">Phone</td>
          <td style="padding:12px 16px;font-size:14px;color:${BRAND.teal};border-bottom:1px solid ${BRAND.border};">${phone}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:700;color:${BRAND.muted};border-bottom:1px solid ${BRAND.border};">Service</td>
          <td style="padding:12px 16px;font-size:14px;color:${BRAND.teal};border-bottom:1px solid ${BRAND.border};">${service}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:700;color:${BRAND.muted};border-bottom:1px solid ${BRAND.border};">Source</td>
          <td style="padding:12px 16px;font-size:14px;color:${BRAND.teal};border-bottom:1px solid ${BRAND.border};">${source}</td>
        </tr>
        <tr>
          <td style="padding:12px 16px;background:#f9fafb;font-size:12px;font-weight:700;color:${BRAND.muted};vertical-align:top;">Message</td>
          <td style="padding:12px 16px;font-size:14px;line-height:1.7;color:#374151;">${messageHtml}</td>
        </tr>
      </table>
      <p style="margin:20px 0 0;font-size:12px;color:${BRAND.muted};">
        Reply directly to this email to contact the lead (where reply-to is set).
      </p>
    `
  );

  const text = `New Karol Digital enquiry

Name: ${input.name}
Email: ${input.email}
Phone: ${input.phone || "Not provided"}
Service: ${input.service || "Not specified"}
Source: ${input.source || "Website"}

Message:
${input.message || "(No message provided)"}

— ${BRAND.name}
${BRAND.phoneDisplay} | ${BRAND.email}
${BRAND.address}`;

  return { subject, html, text };
}

export const COMPANY_CONTACT = BRAND;

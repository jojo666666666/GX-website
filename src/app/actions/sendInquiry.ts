"use server";

import nodemailer from "nodemailer";

export type InquiryState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

export async function sendInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const name = (formData.get("name") as string | null)?.trim() ?? "";
  const company = (formData.get("company") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const inquiryType =
    (formData.get("inquiryType") as string | null)?.trim() ?? "";
  const message = (formData.get("message") as string | null)?.trim() ?? "";

  // Basic validation
  if (!name || !phone || !email) {
    return {
      status: "error",
      message: "Please fill in all required fields (Name, Phone, Email).",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM ?? user;
  const to = process.env.CONTACT_EMAIL ?? user;

  if (!host || !user || !pass || !from || !to) {
    console.error("SMTP environment variables are not configured.");
    return {
      status: "error",
      message: "Email service is not configured. Please contact us directly.",
    };
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // SSL for port 465; TLS (STARTTLS) for 587
    auth: { user, pass },
  });

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New B2B Inquiry — GANXING Tools</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f5;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:#c8102e;padding:28px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:#ffffff;margin-right:10px;vertical-align:middle;"></span>
                    <span style="color:#ffffff;font-size:16px;font-weight:700;letter-spacing:0.12em;vertical-align:middle;">GANXING TOOLS</span>
                  </td>
                  <td align="right">
                    <span style="color:rgba(255,255,255,0.75);font-size:12px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;">New B2B Inquiry</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px 36px 28px;">
              <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#0a0a0a;">New Inquiry Received</h1>
              <p style="margin:0 0 28px;font-size:14px;color:#737373;">Submitted via ganxingtools.com contact form</p>

              <!-- Info grid -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e5e5e5;border-radius:8px;overflow:hidden;">
                <tr style="background:#fafafa;">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;width:140px;border-bottom:1px solid #e5e5e5;">Full Name</td>
                  <td style="padding:12px 16px;font-size:14px;color:#171717;border-bottom:1px solid #e5e5e5;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;border-bottom:1px solid #e5e5e5;">Company</td>
                  <td style="padding:12px 16px;font-size:14px;color:#171717;border-bottom:1px solid #e5e5e5;">${escapeHtml(company) || "<em style='color:#a3a3a3'>Not provided</em>"}</td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;border-bottom:1px solid #e5e5e5;">Phone</td>
                  <td style="padding:12px 16px;font-size:14px;color:#171717;border-bottom:1px solid #e5e5e5;">${escapeHtml(phone)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;border-bottom:1px solid #e5e5e5;">Email</td>
                  <td style="padding:12px 16px;font-size:14px;border-bottom:1px solid #e5e5e5;"><a href="mailto:${escapeHtml(email)}" style="color:#c8102e;text-decoration:none;">${escapeHtml(email)}</a></td>
                </tr>
                <tr style="background:#fafafa;">
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;border-bottom:1px solid #e5e5e5;">Inquiry Type</td>
                  <td style="padding:12px 16px;font-size:14px;color:#171717;border-bottom:1px solid #e5e5e5;">${escapeHtml(inquiryType)}</td>
                </tr>
                <tr>
                  <td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;vertical-align:top;">Message</td>
                  <td style="padding:12px 16px;font-size:14px;color:#171717;line-height:1.65;white-space:pre-wrap;">${escapeHtml(message) || "<em style='color:#a3a3a3'>No message provided</em>"}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 36px 32px;border-top:1px solid #f0f0f0;">
              <p style="margin:0;font-size:12px;color:#a3a3a3;line-height:1.6;">
                This email was automatically generated by the GANXING Tools website inquiry form.<br />
                Reply directly to this email to respond to the client at <strong>${escapeHtml(email)}</strong>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  try {
    await transporter.sendMail({
      from: `"GANXING Tools Inquiry" <${from}>`,
      to, // CONTACT_EMAIL = Sales@ganxingtools.com
      replyTo: email, // reply goes directly to the client
      subject: `[B2B Inquiry] ${name}${company ? ` — ${company}` : ""} | ${inquiryType}`,
      html: htmlBody,
    });

    return { status: "success" };
  } catch (err) {
    console.error("Failed to send inquiry email:", err);
    return {
      status: "error",
      message:
        "Failed to send your inquiry. Please try again or email us directly at Sales@ganxingtools.com.",
    };
  }
}

/** Escape HTML special characters to prevent injection in email body */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

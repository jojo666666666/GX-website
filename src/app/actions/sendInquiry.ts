"use server";

import nodemailer from "nodemailer";
import { headers } from "next/headers";

const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const ALLOWED_INQUIRY_TYPES = new Set(["product", "dealer", "oem"]);

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
  const productName = (formData.get("productName") as string | null)?.trim() ?? "";
  const rawSourceUrl = (formData.get("sourceUrl") as string | null)?.trim() ?? "";
  const sourceUrl = getSafeSourceUrl(rawSourceUrl);
  const turnstileToken =
    (formData.get("cf-turnstile-response") as string | null)?.trim() ?? "";
  const honeypot = (formData.get("website") as string | null)?.trim() ?? "";
  const formStartedAt = Number(formData.get("formStartedAt") ?? 0);
  const language = formData.get("lang") === "zh" ? "zh" : "en";
  const localize = (en: string, zh: string) => (language === "zh" ? zh : en);

  if (honeypot) {
    return { status: "success" };
  }

  const elapsed = Date.now() - formStartedAt;
  if (!Number.isFinite(elapsed) || elapsed < 1500 || elapsed > 2 * 60 * 60 * 1000) {
    return {
      status: "error",
      message: localize("Please refresh the page and try again.", "请刷新页面后重试。"),
    };
  }

  const requestHeaders = await headers();
  const clientId =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    requestHeaders.get("x-real-ip") ||
    "unknown";

  if (!(await verifyTurnstile(turnstileToken, clientId))) {
    return {
      status: "error",
      message: localize(
        "Security verification failed. Please try again.",
        "安全验证失败，请重试。",
      ),
    };
  }

  const now = Date.now();
  if (submissionLog.size > 5000) {
    for (const [key, timestamps] of submissionLog) {
      if (!timestamps.some((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS)) {
        submissionLog.delete(key);
      }
    }
  }
  const recent = (submissionLog.get(clientId) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    return {
      status: "error",
      message: localize(
        "Too many submissions. Please try again later.",
        "提交次数过多，请稍后再试。",
      ),
    };
  }
  submissionLog.set(clientId, [...recent, now]);

  // Basic validation
  if (!name || !phone || !email) {
    return {
      status: "error",
      message: localize(
        "Please fill in all required fields (Name, Phone, Email).",
        "请填写所有必填项（姓名、电话和电子邮箱）。",
      ),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      status: "error",
      message: localize("Please enter a valid email address.", "请输入有效的电子邮箱地址。"),
    };
  }

  if (inquiryType && !ALLOWED_INQUIRY_TYPES.has(inquiryType)) {
    return {
      status: "error",
      message: localize("Please choose a valid inquiry type.", "请选择有效的询问类型。"),
    };
  }

  if (
    name.length > 100 ||
    company.length > 160 ||
    phone.length > 50 ||
    email.length > 254 ||
    inquiryType.length > 100 ||
    message.length > 3000 ||
    productName.length > 240 ||
    sourceUrl.length > 500
  ) {
    return {
      status: "error",
      message: localize("One or more fields are too long.", "部分字段内容过长，请适当精简。"),
    };
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
      message: localize(
        "Email service is not configured. Please contact us directly.",
        "邮件服务尚未配置，请直接联系我们。",
      ),
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
                ${productName ? `<tr><td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;width:140px;border-bottom:1px solid #e5e5e5;">Product</td><td style="padding:12px 16px;font-size:14px;color:#171717;border-bottom:1px solid #e5e5e5;">${escapeHtml(productName)}</td></tr>` : ""}
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
                ${sourceUrl ? `<tr style="background:#fafafa;"><td style="padding:12px 16px;font-size:11px;font-weight:700;color:#c8102e;text-transform:uppercase;letter-spacing:0.14em;">Source Page</td><td style="padding:12px 16px;font-size:14px;color:#171717;"><a href="${escapeHtml(sourceUrl)}" style="color:#c8102e;">${escapeHtml(sourceUrl)}</a></td></tr>` : ""}
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
      subject: `[B2B Inquiry] ${productName || inquiryType} | ${name}${company ? ` — ${company}` : ""}`,
      html: htmlBody,
    });

    await archiveInquiry({
      name,
      company,
      phone,
      email,
      inquiryType,
      message,
      productName,
      sourceUrl,
      language,
      submittedAt: new Date().toISOString(),
    });

    return { status: "success" };
  } catch (err) {
    console.error("Failed to send inquiry email:", err);
    return {
      status: "error",
      message: localize(
        "Failed to send your inquiry. Please try again or email us directly at Sales@ganxingtools.com.",
        "询盘发送失败，请重试或直接发送邮件至 Sales@ganxingtools.com。",
      ),
    };
  }
}

async function verifyTurnstile(token: string, remoteIp: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.error("TURNSTILE_SECRET_KEY is not configured in production.");
      return false;
    }

    // Keep local development usable until a developer adds local test keys.
    return !process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
  }

  if (!token || token.length > 2048) {
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret,
          response: token,
          ...(remoteIp !== "unknown" ? { remoteip: remoteIp } : {}),
        }),
        cache: "no-store",
      },
    );
    const result = (await response.json()) as { success?: boolean };
    return response.ok && result.success === true;
  } catch (error) {
    console.error("Turnstile verification request failed", error);
    return false;
  }
}

function getSafeSourceUrl(value: string) {
  if (!value) {
    return "";
  }

  try {
    const url = new URL(value);
    const allowedHosts = new Set(["ganxingtools.com", "www.ganxingtools.com"]);
    return url.protocol === "https:" && allowedHosts.has(url.hostname)
      ? url.toString()
      : "";
  } catch {
    return "";
  }
}

async function archiveInquiry(record: Record<string, string>) {
  const webhookUrl = process.env.INQUIRY_WEBHOOK_URL;
  if (!webhookUrl) {
    return;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INQUIRY_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify(record),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      console.error("Inquiry archive webhook returned", response.status);
    }
  } catch (error) {
    // Email delivery remains the primary path; a storage integration outage
    // should not make the customer resubmit the same inquiry.
    console.error("Inquiry archive webhook failed", error);
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

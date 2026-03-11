/**
 * Send lead notification email via SMTP using Brevo (Sendinblue) Transactional API.
 * Works on Cloudflare Workers — no Node.js SMTP libraries needed.
 *
 * Required env vars:
 *   SMTP_API_KEY    — Brevo API key (or any transactional email provider)
 *   LEAD_EMAIL_TO   — Team email to receive leads (e.g. "leads@cargoiq.ai")
 *   LEAD_EMAIL_FROM — Sender address (e.g. "noreply@cargoiq.ai")
 */

interface LeadData {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
  interest?: string;
  summary?: string;
  sessionId: string;
  capturedAt: string;
  transcript: Array<{ role: string; content: string }>;
}

interface EmailEnv {
  SMTP_API_KEY: string;
  LEAD_EMAIL_TO: string;
  LEAD_EMAIL_FROM: string;
}

function formatTranscript(messages: Array<{ role: string; content: string }>): string {
  return messages
    .map((m) => {
      const label = m.role === 'user' ? '👤 Visitor' : '🤖 Cargo';
      return `${label}:\n${m.content}`;
    })
    .join('\n\n---\n\n');
}

export async function sendLeadEmail(lead: LeadData, env: EmailEnv): Promise<boolean> {
  if (!env.SMTP_API_KEY || !env.LEAD_EMAIL_TO) {
    console.error('Missing SMTP_API_KEY or LEAD_EMAIL_TO — skipping email');
    return false;
  }

  const senderEmail = env.LEAD_EMAIL_FROM || 'noreply@cargoiq.ai';
  const recipients = env.LEAD_EMAIL_TO.split(',').map((e) => ({ email: e.trim() }));

  const subject = `🔔 New Lead: ${lead.name || 'Unknown'} ${lead.company ? `@ ${lead.company}` : ''} — ${lead.interest || 'General'}`;

  const htmlBody = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #0D1117;">
  <div style="background: #0D1117; padding: 20px 24px; border-radius: 10px 10px 0 0;">
    <h1 style="color: #fff; font-size: 18px; margin: 0;">
      <span style="color: #1A5FA8;">Cargo</span>IQ — New Lead Captured
    </h1>
  </div>

  <div style="background: #fff; padding: 24px; border: 1px solid #E2E8F0; border-top: none;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0; width: 120px;"><strong>Name</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${lead.name || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Email</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">
          <a href="mailto:${lead.email || ''}" style="color: #1A5FA8;">${lead.email || '—'}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Company</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${lead.company || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Role</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${lead.role || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Interest</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${lead.interest || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Summary</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${lead.summary || '—'}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568;"><strong>Captured</strong></td>
        <td style="padding: 8px 12px; font-size: 14px;">${lead.capturedAt}</td>
      </tr>
    </table>

    <div style="margin-top: 20px;">
      <h2 style="font-size: 14px; color: #0D1117; margin: 0 0 12px 0; padding-bottom: 8px; border-bottom: 2px solid #1A5FA8;">
        Full Conversation Transcript
      </h2>
      <div style="background: #F8F9FB; padding: 16px; border-radius: 8px; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${formatTranscript(lead.transcript)}</div>
    </div>

    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #8A96A3;">
      Session ID: ${lead.sessionId} · Sent by CargoIQ Chat
    </div>
  </div>
</div>`;

  const textBody = `NEW LEAD CAPTURED

Name: ${lead.name || '—'}
Email: ${lead.email || '—'}
Company: ${lead.company || '—'}
Role: ${lead.role || '—'}
Interest: ${lead.interest || '—'}
Summary: ${lead.summary || '—'}
Captured: ${lead.capturedAt}

--- TRANSCRIPT ---

${formatTranscript(lead.transcript)}

---
Session ID: ${lead.sessionId}`;

  try {
    // Brevo (Sendinblue) Transactional Email API
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': env.SMTP_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: 'CargoIQ Chat' },
        to: recipients,
        subject,
        htmlContent: htmlBody,
        textContent: textBody,
        tags: ['chatbot-lead'],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Brevo API error:', response.status, err);
      return false;
    }

    return true;
  } catch (err) {
    console.error('Email send error:', err);
    return false;
  }
}

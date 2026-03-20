/**
 * POST /api/contact
 * Contact form endpoint — validates input, sends email via Brevo, returns JSON.
 */

interface Env {
  SMTP_API_KEY: string;
  LEAD_EMAIL_TO: string;
  LEAD_EMAIL_FROM: string;
}

interface ContactForm {
  name: string;
  email: string;
  company: string;
  role?: string;
  message?: string;
  interest?: string;
}

const ALLOWED_ORIGINS = [
  'https://freightmynd.com',
  'https://www.freightmynd.com',
  'https://freightmynd.pages.dev',
  'http://localhost:4321',
  'http://localhost:8788',
];

function corsHeaders(origin: string): Record<string, string> {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export const onRequestOptions: PagesFunction<Env> = async ({ request }) => {
  return new Response(null, {
    status: 204,
    headers: corsHeaders(request.headers.get('Origin') || ''),
  });
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const origin = request.headers.get('Origin') || '';
  const headers = { ...corsHeaders(origin), 'Content-Type': 'application/json' };

  // Parse body
  let data: ContactForm;
  try {
    data = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), { status: 400, headers });
  }

  // Validate required fields
  if (!data.name?.trim() || !data.email?.trim() || !data.company?.trim()) {
    return new Response(
      JSON.stringify({ error: 'Name, email, and company are required.' }),
      { status: 400, headers },
    );
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    return new Response(
      JSON.stringify({ error: 'Invalid email address.' }),
      { status: 400, headers },
    );
  }

  // Check for honeypot (if _gotcha field is somehow sent)
  if ((data as Record<string, unknown>)._gotcha) {
    // Silently accept but don't send email (bot detected)
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  // Send email via Brevo
  if (!env.SMTP_API_KEY || !env.LEAD_EMAIL_TO) {
    console.error('Missing SMTP_API_KEY or LEAD_EMAIL_TO');
    return new Response(
      JSON.stringify({ error: 'Server configuration error. Please email us directly.' }),
      { status: 500, headers },
    );
  }

  const senderEmail = env.LEAD_EMAIL_FROM || 'noreply@freightmynd.com';
  const recipients = env.LEAD_EMAIL_TO.split(',').map((e) => ({ email: e.trim() }));
  const timestamp = new Date().toISOString();

  const subject = `📋 Audit Request: ${escapeHtml(data.name.trim())}${data.company ? ` @ ${escapeHtml(data.company.trim())}` : ''}`;

  const htmlBody = `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #0D1117;">
  <div style="background: #0D1117; padding: 20px 24px; border-radius: 10px 10px 0 0;">
    <h1 style="color: #fff; font-size: 18px; margin: 0;">
      <span style="color: #1A5FA8;">Freight</span>Mynd — New Audit Request
    </h1>
  </div>

  <div style="background: #fff; padding: 24px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 10px 10px;">
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0; width: 120px;"><strong>Name</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.name.trim())}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Email</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">
          <a href="mailto:${escapeHtml(data.email.trim())}" style="color: #1A5FA8;">${escapeHtml(data.email.trim())}</a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Company</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.company.trim())}</td>
      </tr>
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Role</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${data.role ? escapeHtml(data.role.trim()) : '—'}</td>
      </tr>
      ${data.interest ? `<tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568; border-bottom: 1px solid #E2E8F0;"><strong>Interest</strong></td>
        <td style="padding: 8px 12px; font-size: 14px; border-bottom: 1px solid #E2E8F0;">${escapeHtml(data.interest)}</td>
      </tr>` : ''}
      <tr>
        <td style="padding: 8px 12px; font-size: 13px; color: #4A5568;"><strong>Submitted</strong></td>
        <td style="padding: 8px 12px; font-size: 14px;">${timestamp}</td>
      </tr>
    </table>

    ${data.message ? `<div style="margin-top: 16px;">
      <h2 style="font-size: 14px; color: #0D1117; margin: 0 0 8px 0; padding-bottom: 8px; border-bottom: 2px solid #1A5FA8;">
        Message
      </h2>
      <div style="background: #F8F9FB; padding: 16px; border-radius: 8px; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message.trim())}</div>
    </div>` : ''}

    <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #E2E8F0; font-size: 12px; color: #8A96A3;">
      Sent via FreightMynd Contact Form
    </div>
  </div>
</div>`;

  const textBody = `NEW AUDIT REQUEST

Name: ${data.name.trim()}
Email: ${data.email.trim()}
Company: ${data.company.trim()}
Role: ${data.role?.trim() || '—'}
${data.interest ? `Interest: ${data.interest}\n` : ''}Submitted: ${timestamp}

${data.message ? `--- MESSAGE ---\n\n${data.message.trim()}` : ''}

---
Sent via FreightMynd Contact Form`;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': env.SMTP_API_KEY,
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: 'FreightMynd' },
        to: recipients,
        replyTo: { email: data.email.trim(), name: data.name.trim() },
        subject,
        htmlContent: htmlBody,
        textContent: textBody,
        tags: ['contact-form'],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('Brevo API error:', response.status, err);
      return new Response(
        JSON.stringify({ error: 'Failed to send message. Please email us directly.' }),
        { status: 502, headers },
      );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  } catch (err) {
    console.error('Email send error:', err);
    return new Response(
      JSON.stringify({ error: 'Failed to send message. Please try again.' }),
      { status: 500, headers },
    );
  }
};

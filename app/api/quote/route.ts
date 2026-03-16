import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, email, service, postcode, details } = await req.json();

  if (!name || !phone || !service || !postcode) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'Quote Request <onboarding@resend.dev>',
      to: 'aldidmk1@gmail.com',
      replyTo: email || undefined,
      subject: `New Quote Request – ${service} – ${postcode}`,
      html: `
        <h2>New Quote Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:sans-serif;font-size:15px;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email || '—'}</td></tr>
          <tr><td><strong>Service</strong></td><td>${service}</td></tr>
          <tr><td><strong>Postcode</strong></td><td>${postcode}</td></tr>
          <tr><td><strong>Details</strong></td><td>${details || '—'}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

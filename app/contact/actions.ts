'use server';

import { Resend } from 'resend';
import { profile } from '@/content/profile';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// From address: use your Resend-verified domain, or Resend's test domain (onboarding@resend.dev)
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || profile.email;

export async function submitContact(formData: FormData): Promise<{ success?: boolean; error?: string }> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return { success: false, error: 'Please fill in all fields.' };
  }

  if (name.length > 200 || message.length > 5000) {
    return { success: false, error: 'Message too long.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please use a valid email address.' };
  }

  if (resend) {
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: `Contact from ${name} (omaromran.com)`,
      text: message,
      html: `<p>From: ${name} &lt;${email}&gt;</p><pre>${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>`,
    });
    if (error) {
      console.error('[Contact form] Resend error:', error);
      // Resend's test sender (onboarding@resend.dev) can only send TO your Resend signup email.
      // Verify a domain in Resend and set CONTACT_FROM_EMAIL to send to any address.
      const errMessage = error.message || 'Failed to send. Please try again or email directly.';
      return { success: false, error: errMessage };
    }
    return { success: true };
  }

  // No API key: still accept so form works in dev; log for debugging
  console.log('[Contact form] No RESEND_API_KEY; submission not sent.', { name, email });
  return { success: true };
}

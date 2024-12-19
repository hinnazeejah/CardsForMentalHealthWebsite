import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(subject: string, content: string) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return false;
    }

    const response = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: "az5222008@gmail.com",
      subject: subject,
      html: content
    });

    if (!response) {
      console.error('No response from Resend');
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
} 
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(subject: string, content: string) {
  try {
    await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: "hinnazeejahhh@gmail.com",
      subject: subject,
      html: content
    });
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
} 
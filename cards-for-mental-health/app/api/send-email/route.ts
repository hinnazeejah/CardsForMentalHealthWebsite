import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, ...data } = body;
    
    let subject = '';
    let content = '';
    
    if (type === 'feedback') {
      subject = 'New Feedback Received';
      content = `
        <h2>New Feedback Received</h2>
        <p><strong>Name:</strong> ${data.name || 'Anonymous'}</p>
        <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
        <p><strong>Feedback:</strong></p>
        <p>${data.feedback}</p>
      `;
    } else if (type === 'message') {
      subject = 'New Message Received';
      content = `
        <h2>New Message Received</h2>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    }

    const success = await sendEmail(subject, content);
    
    if (!success) throw new Error('Failed to send email');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, ...data } = body;
    
    if (!type) {
      return NextResponse.json(
        { success: false, error: 'Type is required' },
        { status: 400 }
      );
    }
    
    let subject = '';
    let content = '';
    
    if (type === 'feedback') {
      if (!data.feedback) {
        return NextResponse.json(
          { success: false, error: 'Feedback is required' },
          { status: 400 }
        );
      }
      
      subject = 'New Feedback Received';
      content = `
        <h2>New Feedback Received</h2>
        <p><strong>Name:</strong> ${data.name || 'Anonymous'}</p>
        <p><strong>Email:</strong> ${data.email || 'Not provided'}</p>
        <p><strong>Feedback:</strong></p>
        <p>${data.feedback}</p>
      `;
    } else if (type === 'message') {
      if (!data.message) {
        return NextResponse.json(
          { success: false, error: 'Message is required' },
          { status: 400 }
        );
      }
      
      subject = 'New Message Received';
      content = `
        <h2>New Message Received</h2>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
      `;
    }

    const success = await sendEmail(subject, content);
    
    if (!success) {
      return NextResponse.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error occurred' },
      { status: 500 }
    );
  }
} 
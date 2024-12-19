import { connectDB } from '@/lib/mongodb';
import { Feedback } from '@/app/models/Feedback';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, feedbacks });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch feedback' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    await connectDB();
    
    const feedback = await Feedback.create({
      name: name || 'Anonymous',
      email: email,
      feedback: message
    });

    return NextResponse.json({ success: true, feedback });
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
} 
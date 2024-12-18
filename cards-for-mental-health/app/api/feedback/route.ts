import { connectDB } from '@/lib/mongodb';
import { Feedback } from '@/app/models/Feedback';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, feedbacks });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch feedback' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    
    const feedback = await Feedback.create({
      name: body.name || 'Anonymous',
      email: body.email,
      feedback: body.feedback
    });

    return NextResponse.json({ success: true, feedback });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to submit feedback' },
      { status: 500 }
    );
  }
} 
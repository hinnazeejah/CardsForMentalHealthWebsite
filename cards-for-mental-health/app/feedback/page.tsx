'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { MessageSquare, Send } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'feedback',
          ...formData
        }),
      });

      if (!response.ok) throw new Error('Failed to submit feedback');

      // Clear form
      setFormData({ name: '', email: '', feedback: '' });
      alert('Thank you for your feedback!');
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <SidebarLayout>
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:justify-between pt-8 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Share Your Feedback
            </h1>
            <div className="w-28 sm:w-36 lg:w-48 lg:mr-20">
              <Image 
                src="/cards4mentalhealth.png"
                alt="Cards for Mental Health Logo"
                width={200}
                height={200}
                className="relative w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Share Your Thoughts</h2>
              <p className="text-muted-foreground">
                Your feedback helps us improve and better serve our community. Share your thoughts, suggestions, or experiences with us.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name (Optional)"
                className="bg-white/70"
              />
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email (Optional)"
                className="bg-white/70"
              />
              <Textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                placeholder="Your Feedback"
                required
                className="h-32 bg-white/70"
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-emerald-800 hover:bg-emerald-50 border-2 border-emerald-800 font-serif tracking-wide"
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </SidebarLayout>
  );
}
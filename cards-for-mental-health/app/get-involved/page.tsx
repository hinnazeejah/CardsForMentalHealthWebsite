'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { Send } from 'lucide-react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function WaysToGetInvolvedPage() {
  const [message, setMessage] = useState('');
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
          type: 'message',
          message: message
        }),
      });

      if (!response.ok) throw new Error('Failed to submit message');

      // Clear form
      setMessage('');
      alert('Thank you for your message!');
      
    } catch {
      alert('Failed to submit message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700 min-h-screen sm:min-h-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8 min-h-[100vh] sm:min-h-0 flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:justify-between pt-8 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Get Involved
            </h1>
            <div className="w-40 sm:w-36 lg:w-48 mt-6 sm:mt-0 sm:mr-20">
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

      {/* Introduction Text */}
      <section className="container mx-auto px-4 py-8 sm:py-8 lg:px-8 mt-8 sm:mt-0">
        <Card className="overflow-hidden bg-white/50 backdrop-blur shadow-sm">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed text-muted-foreground text-center max-w-3xl mx-auto">
              At Cards for Mental Health, we believe in the power of a simple, heartfelt message to bring comfort and hope to those facing mental health challenges. There are many ways you can contribute to our mission and help spread kindness to those in need.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Create and Send Cards Section */}
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Create and Send Cards</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Create a Digital Card:</h3>
                    <p className="text-muted-foreground">
                      Use any digital design tool or app (like Canva, Adobe Spark, or even simple tools like Microsoft Paint) to create a beautiful, uplifting card. Include a positive message, a quote, or even a small piece of artwork that could brighten someone's day.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email Your Card:</h3>
                    <p className="text-muted-foreground">
                      Once your card is ready, save it as an image file (JPEG, PNG) or PDF.
                    </p>
                    <div className="mt-2">
                      <a href="mailto:licardsformentalhealth@gmail.com" className="text-emerald-600 hover:text-emerald-700">
                        licardsformentalhealth@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <Image
                  src="/cards1.png"
                  alt="Cards for Mental Health Example"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  priority
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Quick Message Section */}
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <Image
                  src="/cards2.png"
                  alt="Cards for Mental Health Example"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Write a Quick Message</h2>
                <p className="text-muted-foreground mb-6">
                  Can't make a card but still want to brighten someone's day? Leave a thoughtful message of encouragement and support for our mental health patients. Your words have the power to uplift, inspire, and remind them they are not alone.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your uplifting message here..." 
                      className="h-32 bg-white/70"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="bg-white text-emerald-800 hover:bg-emerald-50 border-2 border-emerald-800 font-sans tracking-wide"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Other Ways Section */}
      <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold tracking-tight mb-4">Other Ways to Get Involved</h2>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-emerald-700">
                Spread the Word: Help us raise awareness by sharing our mission with your network. Follow and share our social media pages and posts.
              </p>
              <p className="mt-3 text-emerald-700 font-medium">
                More ways to contribute coming very soon! Stay tuned in!
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </SidebarLayout>
  )
} 
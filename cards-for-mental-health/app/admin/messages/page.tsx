'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"

interface Message {
  _id: string;
  message: string;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/api/messages');
        const data = await response.json();
        if (data.success) {
          setMessages(data.messages);
        }
      } catch (error) {
        console.error('Failed to fetch messages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <SidebarLayout>
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold mb-8">Submitted Messages</h1>
            
            {loading ? (
              <p>Loading messages...</p>
            ) : (
              <div className="space-y-4">
                {messages.map((message) => (
                  <Card key={message._id} className="bg-white/70">
                    <CardContent className="p-4">
                      <p className="text-muted-foreground">{message.message}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        {new Date(message.createdAt).toLocaleDateString()}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </SidebarLayout>
  );
} 
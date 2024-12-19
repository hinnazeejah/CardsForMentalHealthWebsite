'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { Phone, MessageSquare } from 'lucide-react'
import { AnimatedCard } from "@/components/AnimatedCard"
import Image from 'next/image'

const hotlines = [
  {
    icon: <Phone className="h-6 w-6 text-emerald-700" />,
    title: "National Suicide Prevention Lifeline",
    content: "Call or Text: 988"
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-emerald-700" />,
    title: "Crisis Text Line",
    content: "Text HOME to: 741741"
  },
  {
    icon: <Phone className="h-6 w-6 text-emerald-700" />,
    title: "National Alliance on Mental Illness (NAMI)",
    content: "Call: 1-800-950-NAMI\nText HELPLINE to: 6264"
  },
  {
    icon: <Phone className="h-6 w-6 text-emerald-700" />,
    title: "SAMHSA's National Helpline",
    content: "Call: 1-800-662-HELP (4357)"
  },
  {
    icon: <Phone className="h-6 w-6 text-emerald-700" />,
    title: "Long Island Crisis Center",
    content: "Call: 516-679-1111"
  }
]

export default function HotlinesPage() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:justify-between pt-8 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Hotlines to Call
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

      {/* Introduction Section - Static Card */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <p className="leading-relaxed text-muted-foreground">
              If you or someone you know is struggling with mental health, here are some important hotlines to call:
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Hotlines Grid Section - Animated Cards */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {hotlines.map((hotline, index) => (
            <AnimatedCard
              key={index}
              icon={
                <div className="rounded-lg bg-emerald-100 p-3">
                  {hotline.icon}
                </div>
              }
              title={hotline.title}
            >
              <p className="text-muted-foreground whitespace-pre-line">
                {hotline.content}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </SidebarLayout>
  )
} 
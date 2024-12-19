'use client'

import { CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { AnimatedCard } from "@/components/AnimatedCard"
import { Ear, Clock, HandHeart, Stethoscope, BookOpen } from 'lucide-react'
import Image from 'next/image'

const tips = [
  {
    icon: <Ear className="w-5 h-5 text-emerald-600" />,
    title: "Listen",
    content: "Sometimes, the best thing you can do is listen without judgment. Be the shoulder people you care about can cry on and trust."
  },
  {
    icon: <Clock className="w-5 h-5 text-emerald-600" />,
    title: "Be Patient",
    content: "Understand that recovery takes time and be patient with those who are struggling with their mental health. Remember recovery isn't always linear."
  },
  {
    icon: <HandHeart className="w-5 h-5 text-emerald-600" />,
    title: "Offer Support",
    content: "Let them know you are there for them and willing to help in any way you can."
  },
  {
    icon: <Stethoscope className="w-5 h-5 text-emerald-600" />,
    title: "Encourage Professional Help",
    content: "Suggest seeking help from a mental health professional. Let them know it's okay to seek professional help. Validate their feelings."
  },
  {
    icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
    title: "Educate Yourself",
    content: "Learn about mental health to better understand what they might be going through. Reading books, and researching about mental health can have a positive effect on you as well as help you learn how to help others."
  }
]

export default function TipsForHelpingPeoplePage() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-center gap-8 sm:justify-between">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Tips for Helping People
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

      {/* Tips Grid */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {tips.map((tip, index) => (
            <AnimatedCard
              key={index}
              icon={tip.icon}
              title={tip.title}
            >
              <p className="text-muted-foreground">
                {tip.content}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </SidebarLayout>
  )
} 
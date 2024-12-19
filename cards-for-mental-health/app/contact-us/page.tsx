'use client'

import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { Mail, Instagram } from 'lucide-react'
import { AnimatedCard } from "@/components/AnimatedCard"
import Image from 'next/image'

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6 text-emerald-700" />,
    title: "Email",
    content: "licardsformentalhealth@gmail.com",
    href: "mailto:licardsformentalhealth@gmail.com"
  },
  {
    icon: <Instagram className="h-6 w-6 text-emerald-700" />,
    title: "Instagram",
    content: "@cards_formentalhealth",
    href: "https://www.instagram.com/cards_formentalhealth"
  }
]

export default function ContactPage() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:justify-between pt-8 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Contact Us
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
              Have questions or want to get involved? I'd love to hear from you!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Methods Grid - Animated Cards */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {contactMethods.map((method, index) => (
            <AnimatedCard
              key={index}
              icon={
                <div className="rounded-lg bg-emerald-100 p-3">
                  {method.icon}
                </div>
              }
              title={method.title}
            >
              <a 
                href={method.href}
                target={method.title === 'Instagram' ? '_blank' : undefined}
                rel={method.title === 'Instagram' ? 'noopener noreferrer' : undefined}
                className="text-muted-foreground hover:text-emerald-700 transition-colors"
              >
                {method.content}
              </a>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </SidebarLayout>
  )
}
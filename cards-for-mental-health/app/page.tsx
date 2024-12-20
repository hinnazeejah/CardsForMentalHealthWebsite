'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Send } from 'lucide-react'
import Link from "next/link"
import { SidebarLayout } from "@/components/SidebarLayout"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { PageTransition } from "@/components/PageTransition"
import { ScrollReveal } from "@/components/ScrollReveal"
import { ScrollIndicator } from "@/components/ScrollIndicator"

const magdalena = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function Page() {
  return (
    <SidebarLayout>
      <PageTransition>
        {/* Hero Section */}
        <ScrollReveal>
          <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700 min-h-screen sm:min-h-0">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
            <ScrollIndicator />
            <div className="container relative mx-auto px-4 py-0 sm:py-24 sm:px-6 lg:px-8 min-h-[90vh] sm:min-h-0 flex flex-col justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-8 sm:justify-between pt-16 sm:pt-0">
                <div className="max-w-2xl text-center sm:text-left mt-0 sm:mt-0">
                  <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter text-white xl:text-7xl/none">
                    Cards for Mental Health
                  </h1>
                  <p className="mt-4 sm:mt-4 text-lg sm:text-xl text-white/90">
                    Creating cards for people struggling with mental health across Long Island
                  </p>
                  <div className="mt-10 sm:mt-8 flex flex-wrap justify-center sm:justify-start gap-4">
                    <Link href="/get-involved" className="w-full sm:w-auto">
                      <Button 
                        size="lg" 
                        variant="secondary" 
                        className="bg-white text-emerald-800 hover:bg-emerald-50 border-2 border-emerald-800 font-sans tracking-wide w-full sm:w-auto"
                      >
                        Get Involved
                        <Heart className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/about-us" className="w-full sm:w-auto">
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-white text-white hover:bg-white/20 font-sans tracking-wide w-full sm:w-auto"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-40 sm:w-36 lg:w-44 mt-2 sm:mt-0 sm:mr-20">
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
        </ScrollReveal>

        {/* Welcome Section */}
        <ScrollReveal delay={0.2}>
          <section className="container mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8 mt-8 sm:mt-0">
            <Card className="overflow-hidden bg-white/50 backdrop-blur">
              <CardContent className="p-4 sm:p-8">
                <h2 className="mb-3 sm:mb-6 text-xl sm:text-2xl font-bold tracking-tight sm:text-3xl">
                  Welcome to Cards For Mental Health!
                </h2>
                <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
                  Hi there! Welcome to Cards For Mental Health, a project run by a high school student dedicated to bringing smiles
                  and support to people in mental health hospitals and emergency rooms, as well as people in hospitals struggling
                  with their mental health during their stay on Long Island. Our mission is simple: spread kindness and show that
                  we care through handmade cards.
                </p>
              </CardContent>
            </Card>
          </section>
        </ScrollReveal>

        {/* Mission Section */}
        <ScrollReveal delay={0.4}>
          <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8">
                <Card className="overflow-hidden bg-white/50 backdrop-blur">
                  <CardContent className="p-6 sm:p-8">
                    <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Mission of the project</h2>
                    <p className="leading-relaxed text-muted-foreground">
                      At Cards For Mental Health for Long Island, our mission is to provide comfort and hope to those facing mental
                      health challenges during their hospital stay. We believe that small acts of kindness can make a big difference
                      in someones day. Through our handmade cards, we aim to bring a little bit of joy and remind people that
                      they are not alone.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid gap-4">
                  <Card className="overflow-hidden bg-white/50 backdrop-blur">
                    <CardContent className="flex items-center gap-4 p-6">
                      <div className="rounded-lg bg-emerald-100 p-3">
                        <Heart className="h-6 w-6 text-emerald-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Show You Care</h3>
                        <p className="text-sm text-muted-foreground">Send a handmade card to someone in need</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Link href="/get-involved">
                    <Card className="overflow-hidden bg-white/50 backdrop-blur">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="rounded-lg bg-emerald-100 p-3">
                          <Send className="h-6 w-6 text-emerald-700" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Get Involved</h3>
                          <p className="text-sm text-muted-foreground">Join our community of card makers</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-1">
                <Card className="overflow-hidden bg-white/50 backdrop-blur h-full">
                  <CardContent className="p-6 sm:p-8">
                    <div className="relative aspect-[4/3] bg-emerald-50/50 rounded-lg">
                      <Image
                        src="/kate.jpg"  // We'll update this with your actual image path
                        alt="Cards for Mental Health Impact"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </PageTransition>
    </SidebarLayout>
  )
}


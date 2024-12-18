import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { Clock, Ear, HandHeart, Stethoscope, BookOpen } from 'lucide-react'
import Image from 'next/image'

export default function TipsForHelpingPeoplePage() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:justify-between pt-8 sm:pt-0">
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

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <p className="leading-relaxed text-muted-foreground">
              If people in your life are struggling with their mental health, here's what you can do to support and help them in the best way possible.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Tips Grid Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Ear className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Listen</h3>
              </div>
              <p className="text-muted-foreground">
                Sometimes, the best thing you can do is listen without judgment. Be the shoulder people you care about can cry on and trust.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Clock className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Be Patient</h3>
              </div>
              <p className="text-muted-foreground">
                Understand that recovery takes time and be patient with those who are struggling with their mental health. Remember recovery isn't always linear.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <HandHeart className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Offer Support</h3>
              </div>
              <p className="text-muted-foreground">
                Let them know you are there for them and willing to help in any way you can.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Stethoscope className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Encourage Professional Help</h3>
              </div>
              <p className="text-muted-foreground">
                Suggest seeking help from a mental health professional. Let them know it's okay to seek professional help. Validate their feelings.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <BookOpen className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Educate Yourself</h3>
              </div>
              <p className="text-muted-foreground">
                Learn about mental health to better understand what they might be going through. Reading books, and researching about mental health can have a positive effect on you as well as help you learn how to help others.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SidebarLayout>
  )
} 
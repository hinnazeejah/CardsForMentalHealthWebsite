import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { Phone, MessageSquare } from 'lucide-react'
import Image from 'next/image'

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

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <p className="leading-relaxed text-muted-foreground">
              If you or someone you know is struggling with mental health, here are some important hotlines to call:
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Hotlines Grid Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">National Suicide Prevention Lifeline</h3>
              </div>
              <p className="text-muted-foreground">
                Call or Text: <span className="font-semibold">988</span>
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <MessageSquare className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Crisis Text Line</h3>
              </div>
              <p className="text-muted-foreground">
                Text HOME to: <span className="font-semibold">741741</span>
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">National Alliance on Mental Illness (NAMI)</h3>
              </div>
              <p className="text-muted-foreground">
                Call: <span className="font-semibold">1-800-950-NAMI</span><br />
                Text HELPLINE to: <span className="font-semibold">6264</span>
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">SAMHSA's National Helpline</h3>
              </div>
              <p className="text-muted-foreground">
                Call: <span className="font-semibold">1-800-662-HELP (4357)</span>
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Phone className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Long Island Crisis Center</h3>
              </div>
              <p className="text-muted-foreground">
                Call: <span className="font-semibold">516-679-1111</span>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </SidebarLayout>
  )
} 
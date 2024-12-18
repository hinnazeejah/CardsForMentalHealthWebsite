import { Card, CardContent } from "@/components/ui/card"
import { Navigation } from "@/components/Navigation"
import { SidebarLayout } from "@/components/SidebarLayout"
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-8 sm:justify-between pt-8 sm:pt-0">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              About Us
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

      {/* Meet the Founder Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur shadow-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <Image
                  src="/impact1.png"
                  alt="Making an Impact"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Meet the Founder</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Hi! I'm Aleena, a high school student from Oceanside, passionate about spreading kindness and positivity. 
                  I created Cards For Mental Health because I believe in the power of small gestures to make a big difference 
                  in the lives of those struggling, especially with their mental health.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Inspiration Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur shadow-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-center">
              The Inspiration Behind Cards For Mental Health
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The idea for this project came to me after witnessing the impact that a simple, heartfelt card can have. 
                  In today's fast-paced world, people often overlook the power of a handwritten note.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  One of my biggest inspirations to start Cards For Mental Health was during my sophomore year when I created 
                  cards for Send A Smile Today, an organization that sends handmade cards to cancer patients.
                </p>
              </div>
              <div>
                <Image
                  src="/impact2.png"
                  alt="Making an Impact"
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

      {/* Partnerships Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur shadow-sm">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2">
                <Image
                  src="/impact3.png"
                  alt="Making an Impact"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md"
                  priority
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-bold tracking-tight mb-4">Our Partnerships</h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I proudly announce that Cards for Mental Health has established partnerships with Mather Hospital, 
                  Cohen Children's Medical Center, Mount Sinai South Nassau, and Long Island Community Hospital.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </SidebarLayout>
  )
}

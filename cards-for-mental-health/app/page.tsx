import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Heart, Send } from 'lucide-react'
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6 text-white">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Cards for Mental Health
                </h1>
                <p className="max-w-[600px] text-zinc-100 sm:text-xl">
                  Creating cards for people struggling with mental health across Long Island
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Get Involved
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-full">
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Brain className="h-64 w-64 text-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome to Cards For Mental Health!
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Hi there! Welcome to Cards For Mental Health, a project run by a high school student dedicated to bringing smiles
              and support to people in mental health hospitals and emergency rooms, as well as people in hospitals struggling
              with their mental health during their stay on Long Island. Our mission is simple: spread kindness and show that
              we care through handmade cards.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">Mission of the project</h2>
              <p className="leading-relaxed text-muted-foreground">
                At Cards For Mental Health for Long Island, our mission is to provide comfort and hope to those facing mental
                health challenges during their hospital stay. We believe that small acts of kindness can make a big difference
                in someone&apos;s day. Through our handmade cards, we aim to bring a little bit of joy and remind people that
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
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-zinc-900 p-4">
        <div className="mb-8">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Heart className="h-6 w-6" />
            <span className="font-semibold">Cards For Mental Health</span>
          </Link>
        </div>
        <div className="space-y-1">
          {[
            "Home",
            "About Us",
            "Ways to Get Involved",
            "Tips for Helping People",
            "Hotlines to Call",
            "Get in Touch",
            "Citations",
          ].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block rounded-lg px-4 py-2 text-sm text-zinc-100 hover:bg-zinc-800"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}


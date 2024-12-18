import { Card, CardContent } from "@/components/ui/card"
import { SidebarLayout } from "@/components/SidebarLayout"
import { Mail, Instagram } from 'lucide-react'

export default function GetInTouchPage() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Card className="overflow-hidden bg-white/50 backdrop-blur">
          <CardContent className="p-6 sm:p-8">
            <p className="leading-relaxed text-muted-foreground">
              Have questions or want to get involved? I'd love to hear from you!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Methods Section */}
      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Mail className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <a 
                href="mailto:az5222008@gmail.com" 
                className="text-emerald-700 hover:underline"
              >
                az5222008@gmail.com
              </a>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-lg bg-emerald-100 p-3">
                  <Instagram className="h-6 w-6 text-emerald-700" />
                </div>
                <h3 className="text-xl font-semibold">Instagram</h3>
              </div>
              <a 
                href="https://instagram.com/cards_formentalhealth" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-emerald-700 hover:underline"
              >
                @cards_formentalhealth
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </SidebarLayout>
  )
} 
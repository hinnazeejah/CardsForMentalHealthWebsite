'use client'

import { Navigation } from "./Navigation"
import { PageTransition } from "./PageTransition"

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F4F4DD] to-[#F4F4DD]">
      <Navigation />
      <main className="lg:ml-[256px] transition-all duration-200">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
    </div>
  )
}
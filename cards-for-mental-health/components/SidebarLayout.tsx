'use client'

import { Navigation } from './Navigation'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-[#e8f5e4]">
      <Navigation />
      <main>{children}</main>
    </div>
  )
}
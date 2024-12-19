'use client'

import { Navigation } from './Navigation'
import { SIDEBAR_WIDTH } from '@/lib/constants'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDE7] to-[#e8f5e4]">
      <Navigation />
      <main className="lg:ml-64">
        {children}
      </main>
    </div>
  )
}
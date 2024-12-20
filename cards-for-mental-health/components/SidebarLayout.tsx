'use client'

import { Navigation } from './Navigation'
import { MobileNavbar } from './MobileNavbar'
import { Footer } from './Footer'
import { useState } from 'react'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDE7] to-[#e8f5e4] flex flex-col">
      <MobileNavbar onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <main className="lg:ml-64 pt-0 flex-1">
        {children}
      </main>
      <div className="lg:ml-64">
        <Footer />
      </div>
    </div>
  )
}
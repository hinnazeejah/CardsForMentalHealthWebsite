'use client'

import { Navigation } from './Navigation'
import { MobileNavbar } from './MobileNavbar'
import { useState } from 'react'

export function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDE7] to-[#e8f5e4]">
      <MobileNavbar onMenuClick={() => setIsMenuOpen(!isMenuOpen)} />
      <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <main className="lg:ml-64 pt-0">
        {children}
      </main>
    </div>
  )
}
'use client'

import { Playfair_Display } from "next/font/google"
import "./globals.css"
import { AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation'

const serif = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  
  return (
    <html lang="en">
      <body className={`${serif.variable} font-serif antialiased`}>
        <AnimatePresence mode="wait">
          <div key={pathname}>
            {children}
          </div>
        </AnimatePresence>
      </body>
    </html>
  )
}

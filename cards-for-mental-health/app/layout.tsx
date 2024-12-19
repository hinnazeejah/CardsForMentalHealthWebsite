'use client'

import { Montserrat } from "next/font/google"
import "./globals.css"
import { AnimatePresence } from "framer-motion"
import { usePathname } from 'next/navigation'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname()
  
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <AnimatePresence mode="wait">
          <div key={pathname}>
            {children}
          </div>
        </AnimatePresence>
      </body>
    </html>
  )
}

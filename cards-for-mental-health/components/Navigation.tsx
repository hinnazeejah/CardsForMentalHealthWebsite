'use client'

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

const navItems = [
  "Home",
  "About Us",
  "Get Involved",
  "Tips for Helping People",
  "Hotlines to Call",
  "Contact Us",
  "Feedback",
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X /> : <Menu />}
      </motion.button>

      {/* Navigation Menu */}
      <div 
        className={`fixed left-0 top-0 h-screen w-[256px] 
          bg-gradient-to-b from-emerald-50 to-[#e8f5e4] 
          lg:bg-gradient-to-b lg:from-emerald-100/80 lg:to-[#c8e6bc]/80 
          backdrop-blur-sm border-r border-emerald-100 p-4 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-200 z-40`}
      >
        <motion.div 
          className="mb-8 p-2 rounded-xl bg-white border border-emerald-100 shadow-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link href="/" className="flex items-center gap-2 text-emerald-900">
            <Image 
              src="/cards4mentalhealth.png"
              alt="Cards for Mental Health Logo"
              width={24}
              height={24}
              className="h-6 w-6"
              priority
            />
            <span className="font-semibold">Cards For Mental Health</span>
          </Link>
        </motion.div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.02, x: 4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block rounded-lg px-4 py-2.5 text-sm text-emerald-900 hover:bg-white border border-transparent hover:border-emerald-100 transition-all duration-200 hover:shadow-sm"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
} 
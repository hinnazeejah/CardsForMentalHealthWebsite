'use client'

import * as React from "react"
import { useState, useEffect, useRef } from "react"
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
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </motion.button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Navigation Menu */}
      <div 
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-screen w-[80%] max-w-[360px]
          bg-gradient-to-b from-emerald-50 to-[#e8f5e4]
          backdrop-blur-sm border-r border-emerald-100
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:w-64 lg:max-w-none lg:translate-x-0 
          transition-transform duration-200 z-50`}
      >
        {/* Close button */}
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        <div className="p-4">
          <motion.div 
            className="mt-2 mb-8 p-2 rounded-xl bg-white border border-emerald-100 shadow-sm"
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

          <div className="space-y-1">
            {navItems.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block rounded-lg px-4 py-3 text-base text-gray-900 hover:bg-gray-100 border border-transparent transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 
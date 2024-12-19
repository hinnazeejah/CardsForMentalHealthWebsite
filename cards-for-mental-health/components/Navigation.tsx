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

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
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
  }, [isOpen, setIsOpen])

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-emerald-800/90 backdrop-blur-sm shadow-lg hover:bg-emerald-700/90 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Menu className="w-6 h-6 text-white" />
        )}
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
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/80 backdrop-blur-sm 
            hover:bg-white transition-colors duration-200 text-emerald-900 
            hover:text-emerald-950 shadow-sm lg:hidden"
          >
            <X className="w-4 h-4" />
          </button>
        )}

        <div className="p-4">
          <div className="flex items-center bg-white rounded-2xl p-3 mb-8 shadow-sm">
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Link href="/" className="flex items-center gap-3">
                <Image 
                  src="/cards4mentalhealth.png"
                  alt="Cards for Mental Health Logo"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                  priority
                />
                <span className="font-medium text-emerald-900">Cards For Mental Health</span>
              </Link>
            </motion.div>
            
            {isOpen && (
              <button
                onClick={() => setIsOpen(false)}
                className="ml-2 p-2 rounded-xl hover:bg-emerald-50 transition-colors duration-200 text-emerald-900"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

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
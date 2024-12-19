'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { motion } from 'framer-motion'

interface MobileNavbarProps {
  onMenuClick: () => void
}

export function MobileNavbar({ onMenuClick }: MobileNavbarProps) {
  return (
    <motion.div 
      className="sticky top-0 z-50 bg-emerald-800/95 backdrop-blur-sm border-b border-emerald-700/50 shadow-sm lg:hidden"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-between px-4 h-16">
        <motion.button 
          onClick={onMenuClick}
          className="p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Link href="/" className="flex items-center justify-center">
            <Image 
              src="/cards4mentalhealth.png"
              alt="Cards for Mental Health Logo"
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
          </Link>
        </motion.div>
        
        <div className="w-10" /> {/* Spacer for balance */}
      </div>
    </motion.div>
  )
} 
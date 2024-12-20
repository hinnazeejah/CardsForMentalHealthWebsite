'use client'

import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
    <motion.div 
      className="absolute bottom-32 left-[48%] -translate-x-1/2 text-white cursor-pointer sm:hidden"
      animate={{ y: [0, 10, 0] }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
    >
      <ChevronDown className="h-8 w-8" />
    </motion.div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div 
      className="absolute bottom-28 left-1/2 -translate-x-1/2 text-white/70 sm:hidden text-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <p className="text-xs font-light tracking-wider mb-1">Scroll to Explore</p>
      <motion.div 
        className="flex justify-center space-x-0.5"
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 3, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {[...Array(3)].map((_, i) => (
          <div 
            key={i} 
            className="w-1 h-1 rounded-full bg-white/70"
            style={{
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
} 
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
      className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white/80 sm:hidden text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <p className="text-sm font-light tracking-wider mb-2">Scroll to Explore</p>
      <motion.div 
        className="flex justify-center space-x-1"
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, -4, 0]
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
            className="w-1.5 h-1.5 rounded-full bg-white/80"
            style={{
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
} 
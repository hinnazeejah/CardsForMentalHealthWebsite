'use client'

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
  title?: string
}

export function AnimatedCard({ children, className, icon, title }: AnimatedCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
      }}
      transition={{ 
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <Card className={cn("overflow-hidden bg-white/80 backdrop-blur p-6", className)}>
        {(icon || title) && (
          <div className="flex items-center gap-3 mb-4">
            {icon && (
              <div className="p-2 bg-emerald-50 rounded-lg">
                {icon}
              </div>
            )}
            {title && (
              <h3 className="text-xl font-semibold">{title}</h3>
            )}
          </div>
        )}
        {children}
      </Card>
    </motion.div>
  )
} 
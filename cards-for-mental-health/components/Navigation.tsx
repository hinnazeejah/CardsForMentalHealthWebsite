'use client'

import { SIDEBAR_WIDTH } from "@/lib/constants"
import Link from "next/link"
import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md"
      >
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* Navigation Menu */}
      <nav 
        className={`fixed left-0 top-0 h-screen w-[256px] bg-emerald-50 lg:bg-[#b0e892]/[0.65] border-r border-emerald-100 p-4 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 transition-transform duration-200 z-40`}
      >
        <div className="mb-8 p-2 rounded-xl bg-white border border-emerald-100 shadow-sm">
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
        </div>
        <div className="space-y-2">
          {[
            "Home",
            "About Us",
            "Get Involved",
            "Tips for Helping People",
            "Hotlines to Call",
            "Contact Us",
            "Feedback",
          ].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="block rounded-lg px-4 py-2.5 text-sm text-emerald-900 hover:bg-white border border-transparent hover:border-emerald-100 transition-all duration-200 hover:shadow-sm"
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea } 
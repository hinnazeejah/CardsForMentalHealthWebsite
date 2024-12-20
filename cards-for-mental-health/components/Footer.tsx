'use client'

import Link from 'next/link'
import { Heart, Mail, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-emerald-800 to-green-700 text-white mt-16">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Cards For Mental Health is dedicated to bringing smiles and support 
              to people in mental health hospitals and emergency rooms across Long Island 
              through handmade cards.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Get Involved', 'Contact Us', 'Feedback'].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Link 
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-white/80 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:licardsformentalhealth@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  licardsformentalhealth@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80 text-sm">
                <Instagram className="h-4 w-4" />
                <a 
                  href="https://www.instagram.com/cards_formentalhealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  @cards_formentalhealth
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-red-400" /> by Cards For Mental Health
          </p>
          <p className="mt-2">
            © {currentYear} Cards For Mental Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
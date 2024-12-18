"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SidebarLayout } from "@/components/SidebarLayout";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerChildren,
  cardVariants,
  slideInFromLeft,
} from "@/lib/animations";

export default function WaysToGetInvolvedPage() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <motion.section
        {...fadeIn}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none"
          >
            Ways to Get Involved
          </motion.h1>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section
        {...cardVariants}
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="leading-relaxed text-muted-foreground"
              >
                At Cards for Mental Health, we believe in the power of a simple,
                heartfelt message to bring comfort and hope to those facing
                mental health challenges. There are many ways you can contribute
                to our mission and help spread kindness to those in need.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Create and Send Cards Section */}
      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Create and Send Cards Online
              </motion.h2>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    Create a Digital Card:
                  </h3>
                  <p className="text-muted-foreground">
                    Use any digital design tool or app (like Canva, Adobe Spark,
                    or even simple tools like Microsoft Paint) to create a
                    beautiful, uplifting card. Include a positive message, a
                    quote, or even a small piece of artwork that could brighten
                    someone's day.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h3 className="mb-2 text-lg font-semibold">
                    Email Your Card:
                  </h3>
                  <p className="text-muted-foreground">
                    Once your card is ready, save it as an image file (JPEG,
                    PNG) or PDF.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 flex items-center gap-2 text-emerald-700"
                  >
                    <Mail className="h-5 w-5" />
                    <a
                      href="mailto:az5222008@gmail.com"
                      className="hover:underline"
                    >
                      az5222008@gmail.com
                    </a>
                  </motion.div>
                  <p className="mt-4 text-muted-foreground">
                    Send your card to us with the subject line "Cards for Mental
                    Health Submission". In your email, feel free to include a
                    brief message about why you wanted to participate, if you'd
                    like.
                  </p>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Other Ways Section */}
      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Other Ways to Get Involved
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-muted-foreground"
              >
                Spread the Word: Help us raise awareness by sharing our mission
                with your network. Follow and share our social media pages and
                posts.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 text-muted-foreground"
              >
                More ways to contribute coming very soon! Stay tuned in!
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </SidebarLayout>
  );
}

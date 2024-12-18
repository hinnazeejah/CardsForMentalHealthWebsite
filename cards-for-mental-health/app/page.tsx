"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Send } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { SidebarLayout } from "@/components/SidebarLayout";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Page() {
  return (
    <SidebarLayout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-r from-emerald-800 to-green-700"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="container relative mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6 text-white"
            >
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                >
                  Cards for Mental Health
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="max-w-[600px] text-zinc-100 sm:text-xl"
                >
                  Creating cards for people struggling with mental health across
                  Long Island
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/ways-to-get-involved">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="secondary">
                      Get Involved
                      <Heart className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                </Link>
                <Link href="/tips-for-helping-people">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="bg-white/10">
                      Learn More
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative h-full"
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <Brain className="h-64 w-64 text-white/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Card className="overflow-hidden bg-white/50 backdrop-blur">
            <CardContent className="p-6 sm:p-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl"
              >
                Welcome to Cards For Mental Health!
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed text-muted-foreground"
              >
                Hi there! Welcome to Cards For Mental Health, a project run by a
                high school student dedicated to bringing smiles and support to
                people in mental health hospitals and emergency rooms, as well
                as people in hospitals struggling with their mental health
                during their stay on Long Island. Our mission is simple: spread
                kindness and show that we care through handmade cards.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="overflow-hidden bg-white/50 backdrop-blur">
              <CardContent className="p-6 sm:p-8">
                <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
                  Mission of the project
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  At Cards For Mental Health for Long Island, our mission is to
                  provide comfort and hope to those facing mental health
                  challenges during their hospital stay. We believe that small
                  acts of kindness can make a big difference in someones day.
                  Through our handmade cards, we aim to bring a little bit of
                  joy and remind people that they are not alone.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <div className="grid gap-4">
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden bg-white/50 backdrop-blur">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="rounded-lg bg-emerald-100 p-3">
                    <Heart className="h-6 w-6 text-emerald-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Show You Care</h3>
                    <p className="text-sm text-muted-foreground">
                      Send a handmade card to someone in need
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <Link href="/ways-to-get-involved">
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden bg-white/50 backdrop-blur">
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="rounded-lg bg-emerald-100 p-3">
                      <Send className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Get Involved</h3>
                      <p className="text-sm text-muted-foreground">
                        Join our community of card makers
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>
    </SidebarLayout>
  );
}

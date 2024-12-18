"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SidebarLayout } from "@/components/SidebarLayout";
import {
  Heart,
  Brain,
  Ear,
  Clock,
  HandHeart,
  Stethoscope,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerChildren,
  cardVariants,
} from "@/lib/animations";

export default function TipsForHelpingPeoplePage() {
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
            Tips for Helping People
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
                If people in your life are struggling with their mental health,
                here's what you can do to support and help them in the best way
                possible.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Tips Grid Section */}
      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              icon: Ear,
              title: "Listen",
              description:
                "Sometimes, the best thing you can do is listen without judgment. Be the shoulder people you care about can cry on and trust.",
            },
            {
              icon: Clock,
              title: "Be Patient",
              description:
                "Understand that recovery takes time and be patient with those who are struggling with their mental health. Remember recovery isn't always linear.",
            },
            {
              icon: HandHeart,
              title: "Offer Support",
              description:
                "Let them know you are there for them and willing to help in any way you can.",
            },
            {
              icon: Stethoscope,
              title: "Encourage Professional Help",
              description:
                "Suggest seeking help from a mental health professional. Let them know it's okay to seek professional help. Validate their feelings.",
            },
            {
              icon: BookOpen,
              title: "Educate Yourself",
              description:
                "Learn about mental health to better understand what they might be going through. Reading books, and researching about mental health can have a positive effect on you as well as help you learn how to help others.",
            },
          ].map((tip, index) => (
            <motion.div
              key={tip.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden bg-white/50 backdrop-blur">
                <CardContent className="p-6 sm:p-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="mb-6 flex items-center gap-4"
                  >
                    <div className="rounded-lg bg-emerald-100 p-3">
                      {<tip.icon className="h-6 w-6 text-emerald-700" />}
                    </div>
                    <h3 className="text-xl font-semibold">{tip.title}</h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                    className="text-muted-foreground"
                  >
                    {tip.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </SidebarLayout>
  );
}

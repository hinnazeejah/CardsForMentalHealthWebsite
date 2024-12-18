"use client";

import { Card, CardContent } from "@/components/ui/card";
import { SidebarLayout } from "@/components/SidebarLayout";
import { Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  staggerChildren,
  cardVariants,
} from "@/lib/animations";

const hotlines = [
  {
    title: "National Suicide Prevention Lifeline",
    icon: Phone,
    contact: "Call or Text: 988",
  },
  {
    title: "Crisis Text Line",
    icon: MessageSquare,
    contact: "Text HOME to: 741741",
  },
  {
    title: "National Alliance on Mental Illness (NAMI)",
    icon: Phone,
    contact: "Call: 1-800-950-NAMI\nText HELPLINE to: 6264",
  },
  {
    title: "SAMHSA's National Helpline",
    icon: Phone,
    contact: "Call: 1-800-662-HELP (4357)",
  },
  {
    title: "Long Island Crisis Center",
    icon: Phone,
    contact: "Call: 516-679-1111",
  },
];

export default function HotlinesPage() {
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
            Hotlines to Call
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
                If you or someone you know is struggling with mental health,
                here are some important hotlines to call:
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Hotlines Grid Section */}
      <motion.section
        variants={staggerChildren}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="grid gap-8 md:grid-cols-2">
          {hotlines.map((hotline, index) => (
            <motion.div
              key={hotline.title}
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
                      {<hotline.icon className="h-6 w-6 text-emerald-700" />}
                    </div>
                    <h3 className="text-xl font-semibold">{hotline.title}</h3>
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                    className="text-muted-foreground whitespace-pre-line"
                  >
                    <span className="font-semibold">{hotline.contact}</span>
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

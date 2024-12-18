"use client";

import { Card, CardContent } from "@/components/ui/card";
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

export default function AboutUsPage() {
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
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none"
          >
            About Us
          </motion.h1>
        </div>
      </motion.section>

      {/* Introduction Section */}
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
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="leading-relaxed text-muted-foreground"
              >
                Hi! I'm Aleena, a high school student from Oceanside, passionate
                about spreading kindness and positivity. I created Cards For
                Mental Health because I believe in the power of small gestures
                to make a big difference in the lives of those struggling,
                especially with their mental health. I have always been a big
                advocate for mental health awareness. Throughout my high school
                career alone I have been a part of various mental health
                advocacy groups such as Natural Helpers, and Northwell Health's
                Social Media project, and been involved in my school community
                by being an active SLATE ambassador to create and helping
                maintain a sense of belonging in the school community which
                leads to better mental health for all students.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Inspiration Section */}
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
                The Inspiration Behind Cards For Mental Health
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed text-muted-foreground"
              >
                The idea for this project came to me after witnessing the impact
                that a simple, heartfelt card can have. In today's fast-paced
                world, people often overlook the power of a handwritten note. I
                have always loved creating cards and handmade notes for people I
                care about to express my feelings. Every time I see that one of
                my friends is upset about something I always write them a sweet
                note and it is always appreciated because a lot of people in
                this day and age instead will send a text that is not as
                personal as a lovely, heartfelt card or note.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-4 leading-relaxed text-muted-foreground"
              >
                One of my biggest inspirations to start Cards For Mental Health
                was during my sophomore year of high school when I had done AP
                experience for my AP Human Geography class. For my project, I
                created cards for Send A Smile Today, an organization that sends
                handmade cards to cancer patients. After I had crafted these
                cards, I felt a sense of accomplishment and happiness knowing
                that I could be the reason someone does not give up and feels
                happy. With this, I decided to start Cards For Mental Health, to
                help those struggling with their mental health because even
                though nowadays, people struggling with their mental health have
                many resources, there is still a lot of stigma around mental
                health issues and I wanted to spread awareness and try to make
                even a little difference to a lot of people.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Partnerships Section */}
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
                Partnerships
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="leading-relaxed text-muted-foreground"
              >
                I proudly announce that Cards for Mental Health has established
                partnerships with Mather Hospital, Cohen Children's Medical
                Center, Mount Sinai South Nassau, and Long Island Community
                Hospital. These collaborations allow us to extend our mission of
                bringing hope and compassion to individuals in mental health
                hospitals through heartfelt, handmade cards created by community
                members. By working with these incredible healthcare
                institutions, we can continue spreading kindness, raising
                awareness about mental health, and reminding patients that they
                are seen, supported, and not alone.
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>
    </SidebarLayout>
  );
}

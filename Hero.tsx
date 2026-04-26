import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Starburst } from "./Starburst";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 overflow-hidden noise">
      {/* background gradients */}
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-blur blur-3xl animate-blob" />

      {/* starburst */}
      <div className="absolute top-32 right-8 lg:right-24 z-0 hidden sm:block">
        <Starburst size={140} color="hsl(var(--orange))" />
      </div>
      <div className="absolute bottom-20 left-10 z-0 hidden lg:block">
        <Starburst size={80} color="hsl(var(--ink))" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        {/* Top meta strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-muted-foreground mb-12 border-y border-foreground/20 py-3"
        >
          <span>Portfolio © 2026</span>
          <span className="hidden sm:inline">B.Tech CSE · AI/ML</span>
          <span>New Delhi, IN</span>
        </motion.div>

        {/* Name tag */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="font-display text-sm md:text-base tracking-widest mb-4"
        >
          ★ CHHAVI GOYAL — B.TECH CSE AI/ML STUDENT
        </motion.p>

        {/* Big headline */}
        <div className="space-y-2 md:space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-[18vw] md:text-[14vw] lg:text-[11rem] leading-[0.85] tracking-tighter"
          >
            CREATIVE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="font-display text-[18vw] md:text-[14vw] lg:text-[11rem] leading-[0.85] tracking-tighter flex items-center gap-4 md:gap-8 flex-wrap"
          >
            <span className="text-stroke">PORT</span>
            <span className="bg-primary text-primary-foreground px-4 md:px-8 inline-block">FOLIO</span>
          </motion.h1>
        </div>

        {/* Lower row */}
        <div className="mt-12 grid md:grid-cols-2 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-serif-i text-xl md:text-2xl text-muted-foreground max-w-md leading-snug"
          >
            "Blending technology, design, and innovation through clean, modern digital experiences."
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-4 md:justify-end"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 font-semibold hover:bg-primary transition-all hover:-translate-y-1"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-2 border-foreground px-6 py-4 font-semibold hover:bg-foreground hover:text-background transition-all hover:-translate-y-1"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

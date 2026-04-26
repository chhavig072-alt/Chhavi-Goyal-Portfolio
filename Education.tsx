import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export const Education = () => (
  <section id="education" className="relative py-24 md:py-32 px-6 lg:px-10 bg-foreground text-background overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-10" />
    <div className="max-w-7xl mx-auto relative">
      <div className="mb-12 md:mb-16">
        <div className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-background/60 mb-4">
          <span className="font-display text-primary">02</span>
          <span className="h-px flex-1 max-w-24 bg-background/30" />
          <span>Background</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
          Education
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-12 gap-8 border-t-2 border-background/20 pt-10"
      >
        <div className="md:col-span-3">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground">
            <GraduationCap className="w-8 h-8" />
          </div>
          <p className="mt-4 font-display text-3xl text-primary">2025—2029</p>
        </div>
        <div className="md:col-span-9">
          <h3 className="font-display text-3xl md:text-5xl mb-4">KR Mangalam University</h3>
          <p className="text-lg text-background/80 max-w-3xl leading-relaxed">
            Currently developing skills in programming, artificial intelligence, and problem solving. Actively working on academic and personal projects to strengthen technical knowledge along with interest in UI/UX and graphic design.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

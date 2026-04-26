import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

export const About = () => (
  <section id="about" className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionHeader number="01" label="Introduction" title="Hi! I'm Chhavi" />
      <div className="grid md:grid-cols-12 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-9 md:col-start-2"
        >
          <p className="text-2xl md:text-3xl leading-relaxed font-light">
            B.Tech <span className="font-display text-primary">CSE (AI & ML)</span> student passionate about technology, design, and innovation. Skilled in programming fundamentals with a keen interest in <span className="font-serif-i text-3xl md:text-4xl">graphic designing</span> and UI/UX.
          </p>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            I enjoy creating projects that blend functionality with clean and modern design — building things that work as well as they look.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

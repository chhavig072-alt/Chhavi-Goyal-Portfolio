import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Briefcase } from "lucide-react";

const items = [
  {
    org: "InAmigos Foundation",
    role: "Content Writer",
    period: "March 2026 — April 2026",
    desc: "Crafted compelling written content for foundation initiatives and digital outreach.",
  },
  {
    org: "Mediaverse Club",
    role: "Outreach Head",
    period: "2025 — Present",
    desc: "Leading outreach efforts, building partnerships, and growing community engagement.",
  },
];

export const Experience = () => (
  <section id="experience" className="relative py-24 md:py-32 px-6 lg:px-10">
    <div className="max-w-7xl mx-auto">
      <SectionHeader number="03" label="Work" title="Experience" />
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {items.map((item, i) => (
          <motion.article
            key={item.org}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-card border-2 border-foreground p-8 hover:shadow-orange transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2"
          >
            <div className="flex justify-between items-start mb-6">
              <Briefcase className="w-8 h-8 text-primary" />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{item.period}</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl mb-2 group-hover:text-primary transition-colors">
              {item.org}
            </h3>
            <p className="font-serif-i text-xl text-muted-foreground mb-4">{item.role}</p>
            <p className="text-foreground/80">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

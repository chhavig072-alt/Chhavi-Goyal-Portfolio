import { motion } from "framer-motion";
import { Linkedin, Github, ArrowUpRight } from "lucide-react";

const profiles = [
  { icon: Linkedin, label: "LinkedIn", handle: "chhavi-goyal-4b2261381", url: "https://linkedin.com/in/chhavi-goyal-4b2261381" },
  { icon: Github, label: "GitHub", handle: "chhavig072-alt", url: "https://github.com/ChhaviG072-alt" },
];

export const Profiles = () => (
  <section id="profiles" className="py-20 px-6 lg:px-10 bg-muted">
    <div className="max-w-7xl mx-auto">
      <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">— Profiles —</p>
      <div className="grid md:grid-cols-2 gap-4">
        {profiles.map((p, i) => (
          <motion.a
            key={p.label}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex items-center justify-between p-6 bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <p.icon className="w-8 h-8" />
              <div>
                <p className="text-xs uppercase tracking-widest opacity-70">{p.label}</p>
                <p className="font-display text-xl md:text-2xl">{p.handle}</p>
              </div>
            </div>
            <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

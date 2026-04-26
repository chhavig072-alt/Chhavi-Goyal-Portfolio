import { motion } from "framer-motion";

interface Props {
  number: string;
  label: string;
  title: string;
}

export const SectionHeader = ({ number, label, title }: Props) => (
  <div className="mb-12 md:mb-16">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
    >
      <span className="font-display text-primary">{number}</span>
      <span className="h-px flex-1 max-w-24 bg-foreground/30" />
      <span>{label}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight"
    >
      {title}
    </motion.h2>
  </div>
);

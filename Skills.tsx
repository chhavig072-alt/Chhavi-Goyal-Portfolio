import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Code2, Palette, Sparkles, Layout, Brain, Smartphone, FileCode, PenTool, Lightbulb, Video, Camera, MessageCircle } from "lucide-react";

const technical = [
  { icon: FileCode, name: "HTML", level: "Proficient" },
  { icon: Palette, name: "CSS", level: "Proficient" },
  { icon: Code2, name: "JavaScript", level: "Intermediate" },
  { icon: Layout, name: "Front-end Web Dev", level: "Intermediate" },
  { icon: Brain, name: "AI & ML Basics", level: "Learning" },
  { icon: Smartphone, name: "Responsive Design", level: "Proficient" },
  { icon: Sparkles, name: "Graphic Designing", level: "Advanced" },
];

const misc = [
  { icon: PenTool, name: "Content Writing" },
  { icon: Lightbulb, name: "Creative Thinking" },
  { icon: Video, name: "Video Editing" },
  { icon: Camera, name: "Photography" },
  { icon: MessageCircle, name: "Communication" },
];

export const Skills = () => (
  <section id="skills" className="relative py-24 md:py-32 px-6 lg:px-10 bg-muted overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div className="max-w-7xl mx-auto relative">
      <SectionHeader number="04" label="Capabilities" title="Skills" />

      {/* Technical */}
      <div className="mb-20">
        <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-4">
          <h3 className="font-display text-2xl md:text-3xl flex items-center gap-3">
            <span className="text-primary">/</span> Technical
          </h3>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            {technical.length} skills
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground border-2 border-foreground">
          {technical.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="group relative bg-background p-6 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <s.icon className="w-7 h-7" strokeWidth={1.5} />
                <span className="font-display text-xs text-muted-foreground group-hover:text-primary-foreground/70">
                  0{i + 1}
                </span>
              </div>
              <p className="font-display text-lg leading-tight mb-1">{s.name}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground group-hover:text-primary-foreground/80">
                {s.level}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Miscellaneous */}
      <div>
        <div className="flex items-end justify-between mb-8 border-b-2 border-foreground pb-4">
          <h3 className="font-display text-2xl md:text-3xl flex items-center gap-3">
            <span className="text-primary">/</span> Miscellaneous
          </h3>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Beyond code
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {misc.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group flex flex-col items-start gap-3 p-5 border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              <s.icon className="w-6 h-6" strokeWidth={1.5} />
              <p className="font-medium text-sm leading-tight">{s.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

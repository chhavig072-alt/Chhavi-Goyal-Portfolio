import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import gd1 from "@/assets/gd-pinterest.jpeg";
import gd2 from "@/assets/gd-medusa.jpeg";
import gd3 from "@/assets/gd-mandore.jpeg";
import gd4 from "@/assets/gd-idioms.jpeg";
import gd5 from "@/assets/gd-krishna.jpeg";
import gd6 from "@/assets/gd-inout.jpeg";
import krmu from "@/assets/krmu-talks.jpg";
import berrystic from "@/assets/berrystic.jpg";

export const Projects = () => (
  <section id="projects" className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <SectionHeader number="05" label="Selected Work" title="Projects" />

      {/* Project 1 - GitHub */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group mb-24 grid md:grid-cols-12 gap-6 items-center"
      >
        <div className="md:col-span-5">
          <p className="font-display text-primary text-sm mb-2">PROJECT 01 / DEV</p>
          <h3 className="font-display text-4xl md:text-5xl mb-4">GitHub Projects</h3>
          <p className="text-lg text-muted-foreground mb-6">
            A collection of development projects: advance personal profile, async weather tracker, smart event dashboard, and weather data visualizer.
          </p>
          <a
            href="https://github.com/ChhaviG072-alt"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Github className="w-4 h-4" /> ChhaviG072-alt
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-3 font-mono text-sm">
          {[
            { name: "advance-personal-profile", lang: "CSS", color: "bg-purple-500" },
            { name: "async-weather-tracker", lang: "JavaScript", color: "bg-yellow-500" },
            { name: "SMART-EVENT-DASHBOARD", lang: "JavaScript", color: "bg-yellow-500" },
            { name: "weather-data-visualizer", lang: "Python", color: "bg-blue-500" },
          ].map((repo) => (
            <div key={repo.name} className="border-2 border-foreground p-4 bg-card hover:bg-foreground hover:text-background transition-colors">
              <p className="font-semibold truncate">{repo.name}</p>
              <p className="flex items-center gap-2 mt-2 text-xs">
                <span className={`w-2 h-2 rounded-full ${repo.color}`} /> {repo.lang}
              </p>
            </div>
          ))}
        </div>
      </motion.article>

      {/* Project 2 - Graphic Design */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24"
      >
        <div className="grid md:grid-cols-12 gap-6 mb-10 items-end">
          <div className="md:col-span-7">
            <p className="font-display text-primary text-sm mb-2">PROJECT 02 / VISUAL</p>
            <h3 className="font-display text-4xl md:text-6xl leading-[0.95]">
              Graphic <span className="font-serif-i italic font-normal">Design</span>
            </h3>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground mb-4">
              Poster-style designs, music-inspired graphics, aesthetic compositions, photography, and experimental editorial layouts.
            </p>
            <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">
              ✦ 6 selected pieces · 2025—2026
            </p>
          </div>
        </div>

        {/* Editorial mosaic — varied sizes, no labels */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {[
            { src: gd1, alt: "Pinterest aesthetic collage with flowers and analog photography" },
            { src: gd2, alt: "Medusa editorial design with classical sculpture and serpents" },
            { src: gd3, alt: "Mandore Garden Jodhpur travel editorial design" },
            { src: gd4, alt: "Idioms multilingual typographic poster design" },
            { src: gd5, alt: "Krishna divine Madhav illustrated editorial design" },
            { src: gd6, alt: "In Out meditation peace of mind atmospheric poster" },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/5] overflow-hidden border-2 border-foreground bg-foreground"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-0 ring-primary group-hover:ring-4 ring-inset transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.article>

      {/* Project 3 - KRMU Talks */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-24 grid md:grid-cols-12 gap-8 items-center bg-foreground text-background p-8 md:p-12 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/30 blur-3xl" />
        <div className="md:col-span-7 relative">
          <p className="font-display text-primary text-sm mb-2">PROJECT 03 / APP</p>
          <h3 className="font-display text-4xl md:text-6xl mb-4">KRMU Talks</h3>
          <p className="text-background/80 mb-6 leading-relaxed">
            A college-focused social media app designed to help students connect, share updates, post content, interact through likes and comments, and participate in polls. Built with focus on clean UI, responsive design, and engaging interaction.
          </p>
          <p className="text-sm font-serif-i text-primary mb-6">(still working on more features to add)</p>
          <div className="flex flex-wrap gap-2">
            {["User Authentication", "Profile Pages", "Post Creation", "Likes & Comments", "Follow Features", "One-vote Polls", "Live Percentages", "Responsive UI"].map((f) => (
              <span key={f} className="px-3 py-1 border border-background/40 text-xs hover:bg-primary hover:border-primary transition-colors">
                {f}
              </span>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <img src={krmu} alt="KRMU Talks mobile app interface screenshot" className="w-full h-auto border-2 border-background shadow-orange" loading="lazy" />
        </div>
      </motion.article>

      {/* Project 4 - Berrystic */}
      <motion.article
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-12 gap-8 items-center"
      >
        <div className="md:col-span-7 order-2 md:order-1">
          <img src={berrystic} alt="Berrystic digital museum platform Figma design" className="w-full h-auto border-2 border-foreground shadow-bold" loading="lazy" />
        </div>
        <div className="md:col-span-5 order-1 md:order-2">
          <p className="font-display text-primary text-sm mb-2">PROJECT 04 / UX</p>
          <h3 className="font-display text-4xl md:text-6xl mb-4">Berrystic</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            A digital museum platform that lets users curate memories, moods, playlists, and personal artifacts through aesthetically designed rooms and exhibits. Currently being designed in Figma — six pages completed.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Digital Museum", "Figma Design", "Aesthetic Rooms", "Personal Artifacts", "Playlists", "Memories", "UI/UX Design"].map((f) => (
              <span key={f} className="px-3 py-1 bg-card border border-foreground text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                {f}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </div>
  </section>
);

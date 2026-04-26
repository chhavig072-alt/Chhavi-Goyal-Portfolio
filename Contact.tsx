import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Starburst } from "./Starburst";

export const Contact = () => (
  <section id="contact" className="relative py-24 md:py-40 px-6 lg:px-10 bg-primary text-primary-foreground overflow-hidden">
    <div className="absolute -top-20 -left-20 opacity-30">
      <Starburst size={300} color="hsl(0 0% 8%)" />
    </div>
    <div className="absolute -bottom-32 -right-32 opacity-20">
      <Starburst size={400} color="hsl(0 0% 100%)" />
    </div>

    <div className="max-w-7xl mx-auto relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="font-display text-sm tracking-[0.3em] mb-8">★ GET IN TOUCH</p>
        <h2 className="font-display text-[14vw] md:text-[10vw] lg:text-[9rem] leading-[0.85] tracking-tighter">
          LET'S CREATE
          <br />
          SOMETHING{" "}
          <span className="font-serif-i italic font-normal">great</span>
          <br />
          TOGETHER!
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16 grid md:grid-cols-3 gap-6 border-t-2 border-primary-foreground/30 pt-10"
      >
        <a href="tel:+917206219716" className="group flex items-start gap-4 hover:translate-x-2 transition-transform">
          <Phone className="w-6 h-6 mt-1 shrink-0" />
          <div>
            <p className="text-sm uppercase tracking-widest opacity-70">Phone</p>
            <p className="font-display text-2xl md:text-3xl">+91 7206219716</p>
          </div>
        </a>
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 mt-1 shrink-0" />
          <div>
            <p className="text-sm uppercase tracking-widest opacity-70">Location</p>
            <p className="font-display text-2xl md:text-3xl">Vikaspuri, New Delhi</p>
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-widest opacity-70 mb-2">Available For</p>
          <p className="font-serif-i text-2xl md:text-3xl">Internships, design collabs & creative projects.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

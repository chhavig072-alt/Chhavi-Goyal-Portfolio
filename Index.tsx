import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Profiles } from "@/components/portfolio/Profiles";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Chhavi Goyal — Creative Portfolio | B.Tech CSE AI/ML";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement('meta'); m.setAttribute('name', 'description'); document.head.appendChild(m); return m;
    })();
    meta.setAttribute('content', "Creative portfolio of Chhavi Goyal — B.Tech CSE AI/ML student blending technology, design and innovation through clean modern digital experiences.");
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Profiles />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TimelineSection from "@/components/sections/Timeline";
import Formation from "@/components/sections/Formation";
import Metiers from "@/components/sections/Metiers";
import Competences from "@/components/sections/Competences";
import Realisations from "@/components/sections/Realisations";
import CVSection from "@/components/sections/CVSection";
import Veille from "@/components/sections/Veille";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div data-testid="portfolio-page" className="min-h-screen relative bg-[hsl(var(--bg-base))]">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <TimelineSection />
        <Formation />
        <Metiers />
        <Competences />
        <Realisations />
        <CVSection />
        <Veille />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

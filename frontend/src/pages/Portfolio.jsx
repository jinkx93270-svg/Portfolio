import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import BackgroundFX from "@/components/BackgroundFX";
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
  // Reveal on scroll
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

  // Cursor-tracking light on .hover-card
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".hover-card");
      if (!card) return;
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      data-testid="portfolio-page"
      className="min-h-screen relative text-white"
    >
      <BackgroundFX />
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

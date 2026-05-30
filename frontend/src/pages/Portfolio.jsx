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

  // Active section highlight + blur out-of-focus sections
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    if (!sections.length) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const center = window.innerHeight / 2;
      // Prefer the section currently covering the viewport center
      let active = sections.find((s) => {
        const r = s.getBoundingClientRect();
        return r.top <= center && r.bottom >= center;
      });
      // Fallback : closest section by edge distance
      if (!active) {
        let bestDist = Infinity;
        sections.forEach((s) => {
          const r = s.getBoundingClientRect();
          const d = Math.min(
            Math.abs(r.top - center),
            Math.abs(r.bottom - center)
          );
          if (d < bestDist) {
            bestDist = d;
            active = s;
          }
        });
      }
      sections.forEach((s) => {
        if (s === active) {
          s.classList.add("section-active");
          s.classList.remove("section-far");
        } else {
          s.classList.remove("section-active");
          s.classList.add("section-far");
        }
      });
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
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

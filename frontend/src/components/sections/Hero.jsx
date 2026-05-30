import { ArrowDown, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData as d } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="aurora" />
      <div className="noise" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
        {/* LEFT — text */}
        <div className="lg:col-span-7 reveal">
          <span className="section-label" data-testid="hero-label">
            <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--violet-400))] animate-pulse" />
            Portfolio · BTS SIO 2025-2026
          </span>

          <h1
            data-testid="hero-title"
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight"
          >
            <span className="text-white block">{d.identity.firstName}</span>
            <span className="gradient-violet-text block">{d.identity.lastName}</span>
          </h1>

          <p
            data-testid="hero-subtitle"
            className="mt-6 text-lg sm:text-xl text-[hsl(var(--text-secondary))] max-w-xl leading-relaxed"
          >
            <span className="text-white font-medium">{d.identity.title}</span> — spécialité{" "}
            <span className="text-[hsl(var(--violet-300))] font-mono">{d.identity.subtitle}</span>.
            <br />
            <span className="text-[hsl(var(--text-muted))] text-base">{d.identity.tagline}</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" data-testid="hero-cta-contact">
              <Button className="gradient-violet-bg text-white hover:opacity-90 border-0 rounded-full px-6 h-11 font-medium">
                Prendre contact
                <ArrowDown size={16} className="ml-2 rotate-[-45deg]" />
              </Button>
            </a>
            <a href={d.identity.cv} target="_blank" rel="noopener noreferrer" data-testid="hero-cta-cv">
              <Button
                variant="outline"
                className="border-[hsl(var(--violet-500)/0.4)] bg-transparent text-white hover:bg-[hsl(var(--violet-500)/0.1)] hover:text-white rounded-full px-6 h-11"
              >
                <Download size={16} className="mr-2" />
                Télécharger le CV
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-sm font-mono text-[hsl(var(--text-muted))]">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[hsl(var(--violet-400))]" />
              {d.identity.location}
            </span>
            <span>{d.identity.email}</span>
            <span>{d.identity.phone}</span>
          </div>
        </div>

        {/* RIGHT — portrait */}
        <div className="lg:col-span-5 reveal">
          <div className="relative mx-auto max-w-md">
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-[2rem] gradient-violet-bg opacity-30 blur-2xl" />
            <div className="absolute -inset-1 rounded-[1.75rem] gradient-violet-bg opacity-50" />

            <div className="relative gradient-violet-border rounded-[1.5rem] overflow-hidden glow-violet-strong">
              <img
                data-testid="hero-photo"
                src={d.identity.photo}
                alt={`${d.identity.firstName} ${d.identity.lastName}`}
                className="w-full h-[460px] sm:h-[520px] object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--bg-base))]/80 via-transparent to-transparent" />

              {/* HUD-like overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[hsl(var(--bg-base))]/70 backdrop-blur border border-[hsl(var(--violet-500)/0.35)] text-[hsl(var(--violet-200))]">
                  ● en formation
                </span>
                <span className="text-[hsl(var(--violet-300))]">/ SISR</span>
              </div>

              {/* Corner ticks */}
              <span className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[hsl(var(--violet-400))]" />
              <span className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[hsl(var(--violet-400))]" />
              <span className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[hsl(var(--violet-400))]" />
              <span className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[hsl(var(--violet-400))]" />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        data-testid="hero-scroll-indicator"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[hsl(var(--violet-300))] hover:text-white transition-colors flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono uppercase tracking-widest">Découvrir</span>
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}

import {
  Database,
  Headphones,
  Network,
  MonitorCog,
  Building2,
  Server,
  Wrench,
} from "lucide-react";
import SectionDecor from "@/components/SectionDecor";
import { portfolioData as d } from "@/data/portfolioData";

const iconMap = { Database, Headphones, Network, MonitorCog, Building2, Server };

export default function Competences() {
  return (
    <section
      id="competences"
      data-testid="competences-section"
      className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6 md:px-10 overflow-hidden"
    >
      <SectionDecor variant="competences" />
      <div className="max-w-7xl mx-auto relative">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <Wrench size={12} />
            Compétences SISR — 1ère année
          </span>
          <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="hover-title">
              Ce que je <span className="gradient-violet-text">construis</span> cette année.
            </span>
          </h2>
          <p className="mt-4 text-[hsl(var(--text-secondary))]">
            Compétences en cours d'acquisition dans le cadre de la spécialité{" "}
            <span className="font-mono text-[hsl(var(--violet-300))]">SISR</span> du BTS SIO.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {d.competences.map((c, i) => {
            const Icon = iconMap[c.icon] || Wrench;
            return (
              <div
                key={c.category}
                data-testid={`competence-card-${i}`}
                className="hover-card reveal group gradient-violet-border rounded-2xl p-6 glow-violet"
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-[hsl(var(--violet-500)/0.18)]">
                  <span className="w-10 h-10 rounded-lg bg-[hsl(var(--violet-500)/0.14)] border border-[hsl(var(--violet-500)/0.32)] grid place-items-center">
                    <Icon size={18} className="text-[hsl(var(--violet-300))]" />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white leading-tight">
                    <span className="hover-title">{c.category}</span>
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

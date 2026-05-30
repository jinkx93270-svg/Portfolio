import { BookMarked, CheckCircle2 } from "lucide-react";
import { portfolioData as d } from "@/data/portfolioData";

export default function Formation() {
  return (
    <section
      id="formation"
      data-testid="formation-section"
      className="relative py-24 sm:py-32 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <BookMarked size={12} />
            Formation actuelle
          </span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">
            <span className="gradient-violet-text">{d.formation.nom}</span>
          </h2>
          <p className="mt-2 font-mono text-sm text-[hsl(var(--text-muted))]">
            {d.formation.long}
          </p>
          <p className="mt-6 text-[hsl(var(--text-secondary))] leading-relaxed text-[15px]">
            {d.formation.description}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {d.formation.blocs.map((b, i) => (
            <div
              key={b.code}
              data-testid={`formation-bloc-${i}`}
              className="reveal gradient-violet-border rounded-2xl p-6 glow-violet"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--violet-300))]">
                  {b.code}
                </span>
                <span className="font-mono text-xs text-[hsl(var(--text-muted))]">
                  0{i + 1}/0{d.formation.blocs.length}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-4 leading-tight">
                {b.nom}
              </h3>
              <ul className="space-y-2.5">
                {b.items.map((it) => (
                  <li key={it} className="flex gap-2.5 text-sm text-[hsl(var(--text-secondary))]">
                    <CheckCircle2
                      size={16}
                      className="text-[hsl(var(--violet-400))] shrink-0 mt-0.5"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

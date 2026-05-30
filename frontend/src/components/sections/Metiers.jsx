import { Briefcase, Sparkles, MapPlus } from "lucide-react";
import { portfolioData as d } from "@/data/portfolioData";

export default function Metiers() {
  const empty = d.metiers?.needsContent || (d.metiers?.items?.length ?? 0) === 0;

  return (
    <section
      id="metiers"
      data-testid="metiers-section"
      className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <Briefcase size={12} />
            Métiers visés
          </span>
          <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="hover-title">
              Vers quels <span className="gradient-violet-text">métiers</span> je me dirige.
            </span>
          </h2>
        </div>

        {empty ? (
          <div className="mt-12 reveal">
            <div className="hover-card placeholder-box max-w-3xl flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="w-14 h-14 rounded-xl bg-[hsl(var(--violet-500)/0.14)] border border-[hsl(var(--violet-500)/0.32)] grid place-items-center shrink-0">
                <MapPlus size={22} className="text-[hsl(var(--violet-300))]" />
              </div>
              <div>
                <p className="font-display text-lg text-white mb-1.5">Section en attente de contenu</p>
                <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                  Les métiers visés et la carte heuristique (séance{" "}
                  <span className="font-mono text-[hsl(var(--violet-300))]">B1.6-SQ1-S2</span>) seront
                  ajoutés ici dès qu'Ennadhir les communique.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12 sm:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {d.metiers.items.map((m) => (
              <article
                key={m.slug}
                data-testid={`metier-card-${m.slug}`}
                className="hover-card gradient-violet-border rounded-2xl p-6 glow-violet reveal"
              >
                <Sparkles size={20} className="text-[hsl(var(--violet-300))] mb-3" />
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  <span className="hover-title">{m.name}</span>
                </h3>
                {m.summary && (
                  <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                    {m.summary}
                  </p>
                )}
                {m.mindmapUrl && (
                  <a
                    href={m.mindmapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-mono text-[hsl(var(--violet-300))] hover:text-white transition-colors"
                    data-testid={`metier-mindmap-${m.slug}`}
                  >
                    Voir la carte heuristique →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

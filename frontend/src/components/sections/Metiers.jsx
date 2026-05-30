import {
  Network,
  Headphones,
  Server,
  ShieldCheck,
  Briefcase,
  ExternalLink,
  Map as MapIcon,
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { portfolioData as d } from "@/data/portfolioData";

const iconMap = { Network, Headphones, Server, ShieldCheck };

export default function Metiers() {
  return (
    <section
      id="metiers"
      data-testid="metiers-section"
      className="relative py-24 sm:py-32 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <Briefcase size={12} />
            Métiers visés
          </span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">
            Vers quels <span className="gradient-violet-text">métiers</span> je me dirige.
          </h2>
          <p className="mt-4 text-[hsl(var(--text-secondary))]">
            Quelques pistes professionnelles que je vise à l'issue du BTS SIO SISR.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {d.metiers.map((m, i) => {
            const Icon = iconMap[m.icon] || Briefcase;
            return (
              <article
                key={m.slug}
                data-testid={`metier-card-${m.slug}`}
                className={`reveal group relative gradient-violet-border rounded-2xl p-6 glow-violet hover:glow-violet-strong transition-all duration-500 ${
                  m.featured ? "lg:row-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="w-12 h-12 rounded-xl gradient-violet-bg grid place-items-center text-white shadow-lg shadow-[hsl(var(--violet-700)/0.35)]">
                    <Icon size={20} />
                  </span>
                  {m.featured && (
                    <span className="px-2.5 py-1 text-[10px] font-mono uppercase rounded-full bg-[hsl(var(--violet-500)/0.18)] border border-[hsl(var(--violet-500)/0.4)] text-[hsl(var(--violet-200))]">
                      Favori
                    </span>
                  )}
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3 leading-tight">
                  {m.name}
                </h3>
                <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                  {m.summary}
                </p>

                {m.hasMindmap && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <button
                        data-testid={`metier-mindmap-${m.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-mono text-[hsl(var(--violet-300))] hover:text-white transition-colors"
                      >
                        <MapIcon size={14} />
                        Voir la carte heuristique
                        <ExternalLink size={12} />
                      </button>
                    </DialogTrigger>
                    <DialogContent
                      data-testid="mindmap-dialog"
                      className="bg-[hsl(var(--bg-elevated))] border border-[hsl(var(--violet-500)/0.4)] text-white max-w-lg"
                    >
                      <DialogHeader>
                        <DialogTitle className="font-display text-2xl gradient-violet-text">
                          Carte heuristique — {m.name}
                        </DialogTitle>
                        <DialogDescription className="text-[hsl(var(--text-secondary))] pt-2">
                          Réalisée dans le cadre de la séance{" "}
                          <span className="font-mono text-[hsl(var(--violet-300))]">
                            B1.6-SQ1-S2
                          </span>
                          .
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-4 p-5 rounded-xl bg-[hsl(var(--bg-base))] border border-[hsl(var(--violet-500)/0.25)]">
                        <p className="text-sm text-[hsl(var(--text-secondary))]">
                          {m.mindmapNote}
                        </p>
                        <a
                          href={m.mindmapUrl}
                          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-violet-bg text-white text-sm font-medium"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ouvrir la carte
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    </DialogContent>
                  </Dialog>
                )}

                <div className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[hsl(var(--violet-600)/0.08)] via-transparent to-[hsl(var(--violet-400)/0.06)]" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

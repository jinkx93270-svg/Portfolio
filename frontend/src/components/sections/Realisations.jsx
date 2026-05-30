import { useState } from "react";
import { FolderGit2, Clock, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { portfolioData as d } from "@/data/portfolioData";

export default function Realisations() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="realisations"
      data-testid="realisations-section"
      className="relative py-24 sm:py-32 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <FolderGit2 size={12} />
            Réalisations
          </span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">
            Mes <span className="gradient-violet-text">projets</span> & productions.
          </h2>
          <p className="mt-4 text-[hsl(var(--text-secondary))]">
            Vignettes cliquables — chaque tuile sera détaillée au fur et à mesure de l'année.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {d.realisations.map((r) => (
            <button
              key={r.slug}
              onClick={() => setActive(r)}
              data-testid={`realisation-card-${r.slug}`}
              className="group text-left relative gradient-violet-border rounded-2xl p-6 glow-violet hover:glow-violet-strong transition-all duration-500 reveal cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-xl mb-5 relative overflow-hidden bg-gradient-to-br from-[hsl(var(--violet-700))] via-[hsl(var(--violet-500))] to-[hsl(var(--violet-400))]">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="font-mono text-3xl sm:text-4xl font-bold text-white/90 drop-shadow-lg">
                    {r.tag}
                  </span>
                </div>
                <span className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-mono uppercase rounded-full bg-[hsl(var(--bg-base))]/70 backdrop-blur border border-white/20 text-white flex items-center gap-1.5">
                  <Clock size={10} />
                  {r.status}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold text-white mb-2 flex items-start justify-between gap-3">
                <span>{r.title}</span>
                <ArrowUpRight
                  size={20}
                  className="text-[hsl(var(--violet-300))] shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </h3>
              <p className="text-sm text-[hsl(var(--text-secondary))]">{r.subtitle}</p>
            </button>
          ))}

          {/* Placeholder "more to come" tile */}
          <div
            data-testid="realisation-placeholder"
            className="reveal rounded-2xl p-6 border-2 border-dashed border-[hsl(var(--violet-500)/0.3)] flex flex-col items-center justify-center min-h-[280px] text-center"
          >
            <span className="w-12 h-12 rounded-full bg-[hsl(var(--violet-500)/0.1)] grid place-items-center mb-4">
              <FolderGit2 size={22} className="text-[hsl(var(--violet-400))]" />
            </span>
            <p className="font-display text-base text-white mb-1">D'autres réalisations</p>
            <p className="text-xs font-mono text-[hsl(var(--text-muted))]">À venir cette année</p>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent
          data-testid="realisation-dialog"
          className="bg-[hsl(var(--bg-elevated))] border border-[hsl(var(--violet-500)/0.4)] text-white max-w-lg"
        >
          {active && (
            <>
              <DialogHeader>
                <span className="font-mono text-xs uppercase tracking-wider text-[hsl(var(--violet-300))]">
                  {active.tag}
                </span>
                <DialogTitle className="font-display text-2xl gradient-violet-text mt-1">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-[hsl(var(--text-secondary))] pt-2">
                  {active.subtitle}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 p-5 rounded-xl bg-[hsl(var(--bg-base))] border border-[hsl(var(--violet-500)/0.25)]">
                <p className="text-sm text-[hsl(var(--text-secondary))]">{active.description}</p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-xs font-mono text-[hsl(var(--violet-300))]">
                  <Clock size={12} />
                  Statut : {active.status}
                </span>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

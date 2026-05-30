import { GraduationCap, BookOpen, Sparkles, Cpu } from "lucide-react";
import SectionDecor from "@/components/SectionDecor";
import { portfolioData as d } from "@/data/portfolioData";

const iconFor = (type) => {
  if (type === "diplome") return GraduationCap;
  if (type === "current") return Cpu;
  return BookOpen;
};

export default function TimelineSection() {
  return (
    <section
      id="parcours"
      data-testid="timeline-section"
      className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6 md:px-10 overflow-hidden"
    >
      <SectionDecor variant="parcours" />
      <div className="max-w-5xl mx-auto relative">
        <div className="reveal">
          <span className="section-label">
            <Sparkles size={12} />
            Du bac au BTS
          </span>
          <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="hover-title">
              Une <span className="gradient-violet-text">timeline</span> d'apprentissage.
            </span>
          </h2>
          <p className="mt-4 text-[hsl(var(--text-secondary))] max-w-2xl">
            Chaque étape m'a rapproché un peu plus de ce qui me passionne réellement : les
            systèmes, les réseaux et l'infrastructure.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Rail */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px tl-rail md:-translate-x-px" />

          <ol className="space-y-12">
            {d.timeline.map((step, i) => {
              const Icon = iconFor(step.type);
              const isLeft = i % 2 === 0;
              const isCurrent = step.type === "current";
              return (
                <li
                  key={step.year + step.title}
                  data-testid={`timeline-item-${i}`}
                  className={`relative reveal grid md:grid-cols-2 gap-6 items-center`}
                >
                  {/* Mobile node */}
                  <span className="md:hidden absolute left-5 -translate-x-1/2 top-3 w-3 h-3 rounded-full gradient-violet-bg ring-4 ring-[hsl(var(--bg-base))]" />

                  {/* Desktop node */}
                  <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full gradient-violet-bg ring-[6px] ring-[hsl(var(--bg-base))] z-10">
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-full gradient-violet-bg animate-ping opacity-75" />
                    )}
                  </span>

                  {/* Card */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft ? "md:pr-12" : "md:col-start-2 md:pl-12"
                    }`}
                  >
                    <article
                      className={`hover-card gradient-violet-border rounded-2xl p-6 glow-violet ${
                        isCurrent ? "glow-violet-strong" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-9 h-9 rounded-lg bg-[hsl(var(--violet-500)/0.14)] border border-[hsl(var(--violet-500)/0.32)] grid place-items-center">
                          <Icon size={16} className="text-[hsl(var(--violet-300))]" />
                        </span>
                        <span className="font-mono text-xs text-[hsl(var(--violet-300))] tracking-wider">
                          {step.year}
                        </span>
                        {isCurrent && (
                          <span className="ml-auto px-2 py-0.5 text-[10px] font-mono uppercase rounded-full bg-[hsl(var(--violet-500)/0.18)] border border-[hsl(var(--violet-500)/0.4)] text-[hsl(var(--violet-200))]">
                            En cours
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-white">
                        <span className="hover-title">{step.title}</span>
                      </h3>
                      <p className="mt-1 text-sm text-[hsl(var(--text-secondary))]">
                        {step.subtitle}
                      </p>
                      <p className="mt-3 text-xs font-mono text-[hsl(var(--text-muted))]">
                        {step.place}
                      </p>
                    </article>
                  </div>

                  {/* Empty col on the other side */}
                  <div className={isLeft ? "hidden md:block" : "hidden md:block md:row-start-1"} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

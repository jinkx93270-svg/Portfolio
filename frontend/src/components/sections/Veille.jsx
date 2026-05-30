import { Rss, Mail, Bell, MessageSquare, ShieldAlert, Layers, Radar } from "lucide-react";
import { portfolioData as d } from "@/data/portfolioData";

const dispIcons = { Rss, Mail, Bell, MessageSquare };
const themeIcons = { ShieldAlert, Layers };

export default function Veille() {
  return (
    <section
      id="veille"
      data-testid="veille-section"
      className="relative py-24 sm:py-32 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <Radar size={12} />
            Veille informationnelle
          </span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">
            Garder l'œil sur la <span className="gradient-violet-text">tech</span>.
          </h2>
          <p className="mt-4 text-[hsl(var(--text-secondary))]">{d.veille.presentation}</p>
        </div>

        {/* Dispositifs */}
        <div className="mt-14">
          <h3 className="font-display text-2xl font-semibold text-white mb-6">
            Dispositifs mis en place
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {d.veille.dispositifs.map((dp, i) => {
              const Icon = dispIcons[dp.icon] || Rss;
              return (
                <div
                  key={dp.nom}
                  data-testid={`veille-dispositif-${i}`}
                  className="reveal gradient-violet-border rounded-2xl p-5 glow-violet"
                >
                  <Icon size={20} className="text-[hsl(var(--violet-300))] mb-3" />
                  <h4 className="font-display text-base font-semibold text-white mb-2">
                    {dp.nom}
                  </h4>
                  <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                    {dp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Thèmes */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold text-white mb-6">
            Thèmes surveillés
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {d.veille.themes.map((t, i) => {
              const Icon = themeIcons[t.icon] || ShieldAlert;
              return (
                <article
                  key={t.nom}
                  data-testid={`veille-theme-${i}`}
                  className="reveal gradient-violet-border rounded-2xl p-7 glow-violet"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <span className="w-12 h-12 rounded-xl gradient-violet-bg grid place-items-center text-white shrink-0 shadow-lg shadow-[hsl(var(--violet-700)/0.35)]">
                      <Icon size={20} />
                    </span>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-[hsl(var(--violet-300))]">
                        Thème 0{i + 1}
                      </span>
                      <h4 className="font-display text-xl font-semibold text-white mt-1 leading-tight">
                        {t.nom}
                      </h4>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--violet-300))] mb-1.5">
                        Présentation
                      </h5>
                      <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[hsl(var(--violet-500)/0.18)]">
                      <h5 className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--violet-300))] mb-1.5">
                        Pourquoi ce choix
                      </h5>
                      <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                        {t.choix}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

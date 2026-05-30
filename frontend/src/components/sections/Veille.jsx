import { Rss, Mail, Bell, MessageSquare, ShieldAlert, Layers, Radar, Eye } from "lucide-react";
import { portfolioData as d } from "@/data/portfolioData";

const dispIcons = { Rss, Mail, Bell, MessageSquare };
const themeIcons = { ShieldAlert, Layers };

export default function Veille() {
  const empty =
    d.veille?.needsContent ||
    ((d.veille?.dispositifs?.length ?? 0) === 0 && (d.veille?.themes?.length ?? 0) === 0);

  return (
    <section
      id="veille"
      data-testid="veille-section"
      className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="reveal max-w-3xl">
          <span className="section-label">
            <Radar size={12} />
            Veille informationnelle
          </span>
          <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="hover-title">
              Garder l'œil sur la <span className="gradient-violet-text">tech</span>.
            </span>
          </h2>
        </div>

        {empty ? (
          <div className="mt-12 reveal">
            <div className="hover-card placeholder-box max-w-3xl flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="w-14 h-14 rounded-xl bg-[hsl(var(--violet-500)/0.14)] border border-[hsl(var(--violet-500)/0.32)] grid place-items-center shrink-0">
                <Eye size={22} className="text-[hsl(var(--violet-300))]" />
              </div>
              <div>
                <p className="font-display text-lg text-white mb-1.5">Section en attente de contenu</p>
                <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                  Les dispositifs de veille mis en place et les thèmes surveillés (séquence{" "}
                  <span className="font-mono text-[hsl(var(--violet-300))]">B1.6-SQ3</span>) seront
                  ajoutés ici dès qu'Ennadhir les communique.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {d.veille.presentation && (
              <p className="mt-4 text-[hsl(var(--text-secondary))] max-w-3xl reveal">
                {d.veille.presentation}
              </p>
            )}

            {d.veille.dispositifs?.length > 0 && (
              <div className="mt-12 sm:mt-14">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-6">
                  Dispositifs mis en place
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {d.veille.dispositifs.map((dp, i) => {
                    const Icon = dispIcons[dp.icon] || Rss;
                    return (
                      <div
                        key={dp.nom}
                        data-testid={`veille-dispositif-${i}`}
                        className="hover-card reveal gradient-violet-border rounded-2xl p-5 glow-violet"
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
            )}

            {d.veille.themes?.length > 0 && (
              <div className="mt-12 sm:mt-16">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-6">
                  Thèmes surveillés
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {d.veille.themes.map((t, i) => {
                    const Icon = themeIcons[t.icon] || ShieldAlert;
                    return (
                      <article
                        key={t.nom}
                        data-testid={`veille-theme-${i}`}
                        className="hover-card reveal gradient-violet-border rounded-2xl p-7 glow-violet"
                      >
                        <div className="flex items-start gap-4 mb-5">
                          <span className="w-12 h-12 rounded-xl gradient-violet-bg grid place-items-center text-white shrink-0">
                            <Icon size={20} />
                          </span>
                          <div>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[hsl(var(--violet-300))]">
                              Thème 0{i + 1}
                            </span>
                            <h4 className="font-display text-xl font-semibold text-white mt-1 leading-tight">
                              <span className="hover-title">{t.nom}</span>
                            </h4>
                          </div>
                        </div>
                        <div className="space-y-4">
                          {t.description && (
                            <div>
                              <h5 className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--violet-300))] mb-1.5">
                                Présentation
                              </h5>
                              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                                {t.description}
                              </p>
                            </div>
                          )}
                          {t.choix && (
                            <div className="pt-3 border-t border-[hsl(var(--violet-500)/0.18)]">
                              <h5 className="text-xs font-mono uppercase tracking-wider text-[hsl(var(--violet-300))] mb-1.5">
                                Pourquoi ce choix
                              </h5>
                              <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                                {t.choix}
                              </p>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}

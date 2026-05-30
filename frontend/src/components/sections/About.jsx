import { Compass, Target, Sparkles, Heart } from "lucide-react";
import { portfolioData as d } from "@/data/portfolioData";

const Card = ({ icon: Icon, title, children, testid }) => (
  <div
    data-testid={testid}
    className="hover-card gradient-violet-border rounded-2xl p-7 glow-violet h-full reveal"
  >
    <div className="w-11 h-11 rounded-xl bg-[hsl(var(--violet-500)/0.12)] border border-[hsl(var(--violet-500)/0.3)] grid place-items-center mb-5">
      <Icon size={20} className="text-[hsl(var(--violet-300))]" />
    </div>
    <h3 className="font-display text-xl font-semibold text-white mb-3">
      <span className="hover-title">{title}</span>
    </h3>
    <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[15px]">{children}</p>
  </div>
);

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-20 sm:py-28 lg:py-32 px-5 sm:px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal">
          <span className="section-label">
            <Sparkles size={12} />
            Qui suis-je
          </span>
          <h2 className="font-display mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            <span className="hover-title">
              Une <span className="gradient-violet-text">trajectoire</span> qui converge
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>vers l'informatique.
            </span>
          </h2>
        </div>

        <div className="mt-10 sm:mt-12 grid md:grid-cols-3 gap-5 sm:gap-6">
          <Card icon={Compass} title="Mon parcours" testid="about-card-parcours">
            {d.about.intro}
          </Card>
          <Card icon={Heart} title="Ma motivation" testid="about-card-motivation">
            {d.about.motivation}
          </Card>
          <Card icon={Target} title="Mes objectifs" testid="about-card-objectifs">
            {d.about.objectifs}
          </Card>
        </div>
      </div>
    </section>
  );
}

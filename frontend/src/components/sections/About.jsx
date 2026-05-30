import { Compass, Target, Sparkles } from "lucide-react";
import { portfolioData as d } from "@/data/portfolioData";

const Card = ({ icon: Icon, title, children, testid }) => (
  <div
    data-testid={testid}
    className="gradient-violet-border rounded-2xl p-7 glow-violet h-full reveal"
  >
    <div className="w-11 h-11 rounded-xl bg-[hsl(var(--violet-500)/0.12)] border border-[hsl(var(--violet-500)/0.3)] grid place-items-center mb-5">
      <Icon size={20} className="text-[hsl(var(--violet-300))]" />
    </div>
    <h3 className="font-display text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[15px]">{children}</p>
  </div>
);

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 sm:py-32 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl reveal">
          <span className="section-label">
            <Sparkles size={12} />
            Qui suis-je
          </span>
          <h2 className="font-display mt-5 text-4xl sm:text-5xl font-bold text-white">
            Une <span className="gradient-violet-text">trajectoire</span> qui converge
            <br />
            vers les infrastructures.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card icon={Compass} title="Mon parcours" testid="about-card-parcours">
            {d.about.intro}
          </Card>
          <Card icon={Sparkles} title="Ma motivation" testid="about-card-motivation">
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

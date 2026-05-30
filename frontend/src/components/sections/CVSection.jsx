import { FileDown, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolioData as d } from "@/data/portfolioData";

export default function CVSection() {
  return (
    <section
      id="cv"
      data-testid="cv-section"
      className="relative py-16 sm:py-20 px-5 sm:px-6 md:px-10"
    >
      <div className="max-w-5xl mx-auto reveal">
        <div className="hover-card gradient-violet-border rounded-3xl p-7 sm:p-10 lg:p-12 glow-violet-strong relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
            <div>
              <span className="section-label">
                <FileText size={12} />
                Curriculum Vitae
              </span>
              <h2 className="font-display mt-5 text-3xl sm:text-4xl font-bold text-white leading-tight">
                <span className="hover-title">
                  Mon <span className="gradient-violet-text">CV</span> au format PDF.
                </span>
              </h2>
              <p className="mt-3 text-[hsl(var(--text-secondary))] max-w-xl">
                Document préparé dans le respect du référentiel de la séance{" "}
                <span className="font-mono text-[hsl(var(--violet-300))]">B1.6-SQ2-S1</span> —
                téléchargeable en un clic.
              </p>
            </div>
            <a
              href={d.identity.cv}
              target="_blank"
              rel="noopener noreferrer"
              download
              data-testid="cv-download-btn"
            >
              <Button
                size="lg"
                className="gradient-violet-bg text-white border-0 rounded-full px-7 h-12 font-medium hover:opacity-90"
              >
                <FileDown size={18} className="mr-2" />
                Télécharger le CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

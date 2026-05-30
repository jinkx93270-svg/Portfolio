import { portfolioData as d } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative py-10 px-6 md:px-10 border-t border-[hsl(var(--violet-500)/0.18)] mt-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="flex items-center gap-2 font-display font-semibold">
          <span className="w-7 h-7 rounded-md gradient-violet-bg grid place-items-center text-white font-mono text-xs">
            EB
          </span>
          <span className="text-white">
            {d.identity.firstName} {d.identity.lastName}
          </span>
          <span className="hidden sm:inline text-[hsl(var(--text-muted))] font-mono text-xs ml-2">
            / BTS SIO SISR · CNED
          </span>
        </div>
        <p className="text-xs font-mono text-[hsl(var(--text-muted))]">
          © {new Date().getFullYear()} — Portfolio réalisé dans le cadre du BTS SIO.
        </p>
      </div>
    </footer>
  );
}

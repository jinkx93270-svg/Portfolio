import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#parcours", label: "Parcours" },
  { href: "#formation", label: "Formation" },
  { href: "#metiers", label: "Métiers" },
  { href: "#competences", label: "Compétences" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#veille", label: "Veille" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[hsl(var(--bg-base))]/70 border-b border-[hsl(var(--violet-500)/0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#hero"
          data-testid="navbar-logo"
          className="flex items-center gap-2 font-display font-bold text-lg"
        >
          <span className="w-7 h-7 rounded-md gradient-violet-bg grid place-items-center text-white font-mono text-xs">
            EB
          </span>
          <span className="hidden sm:inline gradient-violet-text">benarous.dev</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.href.replace("#", "")}`}
              className="px-3.5 py-2 text-sm text-[hsl(var(--text-secondary))] hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[hsl(var(--violet-400))] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden md:inline-flex">
            <Button
              data-testid="navbar-cta"
              className="gradient-violet-bg text-white hover:opacity-90 border-0 rounded-full px-5"
            >
              Me contacter
            </Button>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            data-testid="navbar-toggle"
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[hsl(var(--violet-500)/0.18)] bg-[hsl(var(--bg-base))]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm text-[hsl(var(--text-secondary))] hover:text-white rounded-md hover:bg-[hsl(var(--violet-500)/0.08)]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

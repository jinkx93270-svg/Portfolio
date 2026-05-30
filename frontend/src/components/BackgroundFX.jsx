import { useEffect, useRef } from "react";

/**
 * Fond dynamique du site entier :
 * - 3 orbes violets en mouvement permanent (CSS) + parallax au scroll
 * - Grille technique qui dérive en continu et se décale au scroll
 * - Beam lumineux oscillant
 * - 14 particules flottantes
 * - Bruit léger pour la texture
 */
export default function BackgroundFX() {
  const orbARef = useRef(null);
  const orbBRef = useRef(null);
  const orbCRef = useRef(null);
  const gridRef = useRef(null);
  const beamRef = useRef(null);
  const rafRef = useRef(0);
  const targetRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      targetRef.current = window.scrollY;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    // Parallax au scroll : superpose un translate au CSS animation des éléments.
    // On utilise une CSS custom-property (--scroll) appliquée via .style sur chaque ref,
    // qui est combinée dans le keyframe via calc().
    const tick = () => {
      const next = currentRef.current + (targetRef.current - currentRef.current) * 0.08;
      currentRef.current = next;

      if (orbARef.current) orbARef.current.style.setProperty("--sy", `${next * 0.18}px`);
      if (orbBRef.current) orbBRef.current.style.setProperty("--sy", `${next * -0.12}px`);
      if (orbCRef.current) orbCRef.current.style.setProperty("--sy", `${next * 0.22}px`);
      if (gridRef.current) gridRef.current.style.setProperty("--sy", `${next * 0.25}px`);
      if (beamRef.current) beamRef.current.style.setProperty("--sy", `${next * 0.5}px`);

      if (Math.abs(targetRef.current - currentRef.current) > 0.5) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = 0;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      data-testid="background-fx"
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-[hsl(var(--bg-base))]"
    >
      {/* Grid (dérive continue + parallax) */}
      <div ref={gridRef} className="absolute inset-0 grid-bg-fx bg-fx-grid-anim will-change-transform" />

      {/* Beam — rayon lumineux qui oscille */}
      <div
        ref={beamRef}
        className="absolute -left-1/4 top-0 h-[160vh] w-[60vw] will-change-transform bg-fx-beam-anim"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(271 91% 65% / 0.08) 30%, hsl(263 95% 60% / 0.18) 50%, hsl(271 91% 65% / 0.08) 70%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Orbes violets */}
      <div
        ref={orbARef}
        className="absolute top-[5%] left-[5%] w-[640px] h-[640px] rounded-full will-change-transform bg-fx-orb-a"
        style={{
          background:
            "radial-gradient(circle, hsl(271 91% 65% / 0.85) 0%, hsl(271 91% 65% / 0.22) 40%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.85,
        }}
      />
      <div
        ref={orbBRef}
        className="absolute top-[40%] right-[-8%] w-[720px] h-[720px] rounded-full will-change-transform bg-fx-orb-b"
        style={{
          background:
            "radial-gradient(circle, hsl(252 95% 58% / 0.75) 0%, hsl(252 95% 58% / 0.18) 45%, transparent 75%)",
          filter: "blur(90px)",
          opacity: 0.8,
        }}
      />
      <div
        ref={orbCRef}
        className="absolute bottom-[-15%] left-[25%] w-[600px] h-[600px] rounded-full will-change-transform bg-fx-orb-c"
        style={{
          background:
            "radial-gradient(circle, hsl(289 85% 65% / 0.6) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.7,
        }}
      />

      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="bg-fx-particle"
            style={{
              left: `${(i * 71) % 100}%`,
              top: `${(i * 137) % 100}%`,
              animationDelay: `${(i * 1.3) % 8}s`,
              animationDuration: `${10 + (i % 5) * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Bruit subtil */}
      <div className="absolute inset-0 noise-fx" />

      {/* Vignette douce */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 55%, hsl(260 45% 4% / 0.55) 100%)",
        }}
      />
    </div>
  );
}

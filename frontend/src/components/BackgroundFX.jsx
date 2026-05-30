import { useEffect, useRef } from "react";

/**
 * Fond dynamique réactif au scroll :
 * - 3 orbes violets en parallax (translation + rotation lente)
 * - Grille technique qui défile légèrement
 * - Bruit léger pour la texture
 * Tout en `position: fixed` pour réagir au scroll global.
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

    const tick = () => {
      // lerp pour rendu fluide
      const next = currentRef.current + (targetRef.current - currentRef.current) * 0.08;
      currentRef.current = next;

      if (orbARef.current) {
        orbARef.current.style.transform = `translate3d(${next * -0.05}px, ${next * 0.18}px, 0) rotate(${next * 0.03}deg)`;
      }
      if (orbBRef.current) {
        orbBRef.current.style.transform = `translate3d(${next * 0.08}px, ${next * -0.12}px, 0) rotate(${next * -0.04}deg)`;
      }
      if (orbCRef.current) {
        orbCRef.current.style.transform = `translate3d(${next * -0.12}px, ${next * 0.22}px, 0) scale(${1 + Math.min(next, 1200) * 0.0001})`;
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translate3d(0, ${(next * 0.25) % 56}px, 0)`;
      }
      if (beamRef.current) {
        beamRef.current.style.transform = `translate3d(0, ${next * 0.5}px, 0) rotate(${12 + next * 0.01}deg)`;
      }

      if (Math.abs(targetRef.current - currentRef.current) > 0.5) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        rafRef.current = 0;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initial paint
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
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Grid base (s'écoule lentement) */}
      <div
        ref={gridRef}
        className="absolute inset-0 grid-bg-fx will-change-transform"
      />

      {/* Beam (rayon lumineux qui s'incline) */}
      <div
        ref={beamRef}
        className="absolute -left-1/4 top-0 h-[140vh] w-[60vw] will-change-transform"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, hsl(271 91% 65% / 0.06) 30%, hsl(263 95% 60% / 0.12) 50%, hsl(271 91% 65% / 0.06) 70%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* Orbes violets en parallax */}
      <div
        ref={orbARef}
        className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(271 91% 65% / 0.55) 0%, hsl(271 91% 65% / 0.15) 40%, transparent 70%)",
          filter: "blur(80px)",
          opacity: 0.7,
        }}
      />
      <div
        ref={orbBRef}
        className="absolute top-[40%] -right-40 w-[720px] h-[720px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(252 95% 58% / 0.5) 0%, hsl(252 95% 58% / 0.12) 45%, transparent 75%)",
          filter: "blur(90px)",
          opacity: 0.65,
        }}
      />
      <div
        ref={orbCRef}
        className="absolute bottom-[-20%] left-[30%] w-[560px] h-[560px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, hsl(289 85% 65% / 0.4) 0%, transparent 70%)",
          filter: "blur(100px)",
          opacity: 0.55,
        }}
      />

      {/* Bruit subtil */}
      <div className="absolute inset-0 noise-fx" />

      {/* Vignette douce pour assombrir les bords */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, hsl(260 45% 4% / 0.55) 100%)",
        }}
      />
    </div>
  );
}

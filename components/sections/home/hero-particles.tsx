"use client";

import { motion } from "framer-motion";
import { easeOutProduct } from "@/lib/motion/home";
import { cn } from "@/lib/utils";

/** PRNG déterministe (SSR / client identiques). */
function seeded01(i: number, salt: number): number {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453123;
  return x - Math.floor(x);
}

type HeroParticleSpec = {
  cx: number;
  cy: number;
  r: number;
  dx: number;
  dy: number;
  duration: number;
  delay: number;
  opMin: number;
  opMax: number;
  soft: boolean;
};

const PARTICLE_COUNT = 42;

function buildParticles(): HeroParticleSpec[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const u0 = seeded01(i, 0);
    const u1 = seeded01(i, 1);
    const u2 = seeded01(i, 2);
    const u3 = seeded01(i, 3);
    const u4 = seeded01(i, 4);
    const u5 = seeded01(i, 5);
    /* Nuage plutôt à droite / haut du viewBox */
    const cx = 48 + u0 * 165;
    const cy = 20 + u1 * 175;
    const r = 0.32 + u2 * 1.15;
    const dx = (u3 - 0.5) * 26;
    const dy = (u4 - 0.5) * 26;
    const duration = 8.5 + u5 * 10;
    const delay = seeded01(i, 6) * 5;
    const opMin = 0.1 + seeded01(i, 7) * 0.18;
    const opMax = 0.35 + seeded01(i, 8) * 0.45;
    const soft = seeded01(i, 9) > 0.62;
    return { cx, cy, r, dx, dy, duration, delay, opMin, opMax, soft };
  });
}

const PARTICLES = buildParticles();

type HeroParticlesProps = {
  className?: string;
};

/**
 * Champ de particules léger (SVG + Framer), à la place d’anneaux statiques.
 * `prefers-reduced-motion` géré par le parent (ne pas monter ce bloc si reduce).
 */
export function HeroParticles({ className }: HeroParticlesProps) {
  return (
    <motion.svg
      aria-hidden
      className={cn("pointer-events-none text-terracotta", className)}
      viewBox="0 0 220 220"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.32, duration: 1.05, ease: easeOutProduct }}
    >
      <defs>
        <radialGradient id="hero-particle-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(232, 165, 139)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="rgb(217, 119, 87)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Halos en dessous des points pour éviter de les masquer */}
      {[
        { cx: 168, cy: 52, r: 14 },
        { cx: 92, cy: 118, r: 18 },
        { cx: 198, cy: 140, r: 12 },
      ].map((h, i) => (
        <motion.circle
          key={`glow-${i}`}
          cx={h.cx}
          cy={h.cy}
          r={h.r}
          fill="url(#hero-particle-glow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.06, 0.14, 0.08, 0.12, 0.06],
            r: [h.r * 0.92, h.r * 1.08, h.r * 0.96, h.r * 1.04, h.r * 0.92],
          }}
          transition={{
            duration: 11 + i * 2.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.1,
          }}
        />
      ))}
      {PARTICLES.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill={p.soft ? "rgba(232, 165, 139, 0.5)" : "rgba(217, 119, 87, 0.42)"}
          initial={false}
          animate={{
            cx: [p.cx, p.cx + p.dx * 0.45, p.cx - p.dx * 0.28, p.cx + p.dx * 0.12, p.cx],
            cy: [p.cy, p.cy - p.dy * 0.38, p.cy + p.dy * 0.32, p.cy - p.dy * 0.15, p.cy],
            opacity: [p.opMin, p.opMax, p.opMin * 1.15, p.opMax * 0.88, p.opMin],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </motion.svg>
  );
}

"use client";

import { motion } from "framer-motion";
import { easeOutProduct } from "@/lib/motion/home";
import { cn } from "@/lib/utils";

/** Côté du viewBox SVG (~3× l’ancien 220px). */
const VIEWBOX = 660;

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

const PARTICLE_COUNT = 130;

function buildParticles(): HeroParticleSpec[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    const u0 = seeded01(i, 0);
    const u1 = seeded01(i, 1);
    const u2 = seeded01(i, 2);
    const u3 = seeded01(i, 3);
    const u4 = seeded01(i, 4);
    const u5 = seeded01(i, 5);
    /* Nuage large, biais droite / haut du canvas */
    const cx = 120 + u0 * 520;
    const cy = 40 + u1 * 580;
    const r = 0.55 + u2 * 2.35;
    const dx = (u3 - 0.5) * 72;
    const dy = (u4 - 0.5) * 72;
    const duration = 8.5 + u5 * 11;
    const delay = seeded01(i, 6) * 6;
    const opMin = 0.08 + seeded01(i, 7) * 0.16;
    const opMax = 0.32 + seeded01(i, 8) * 0.42;
    const soft = seeded01(i, 9) > 0.58;
    return { cx, cy, r, dx, dy, duration, delay, opMin, opMax, soft };
  });
}

const PARTICLES = buildParticles();

/** Halos volumétriques (coordonnées dans le viewBox 0…660). */
const GLOW_BLOBS: { cx: number; cy: number; r: number }[] = [
  { cx: 520, cy: 140, r: 44 },
  { cx: 280, cy: 360, r: 52 },
  { cx: 580, cy: 420, r: 38 },
  { cx: 400, cy: 220, r: 36 },
  { cx: 320, cy: 520, r: 34 },
  { cx: 560, cy: 300, r: 40 },
  { cx: 180, cy: 180, r: 30 },
  { cx: 460, cy: 520, r: 32 },
];

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
      className={cn("pointer-events-none text-[#f26a06]", className)}
      viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
      preserveAspectRatio="xMidYMid meet"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.32, duration: 1.05, ease: easeOutProduct }}
    >
      <defs>
        <radialGradient id="hero-particle-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgb(232, 165, 139)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="rgb(217, 119, 87)" stopOpacity="0" />
        </radialGradient>
      </defs>
      {GLOW_BLOBS.map((h, i) => (
        <motion.circle
          key={`glow-${i}`}
          cx={h.cx}
          cy={h.cy}
          r={h.r}
          fill="url(#hero-particle-glow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.05, 0.12, 0.07, 0.1, 0.05],
            r: [h.r * 0.92, h.r * 1.08, h.r * 0.96, h.r * 1.04, h.r * 0.92],
          }}
          transition={{
            duration: 11 + (i % 5) * 2.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.85,
          }}
        />
      ))}
      {PARTICLES.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r={p.r}
          fill={p.soft ? "rgba(232, 165, 139, 0.48)" : "rgba(217, 119, 87, 0.4)"}
          initial={false}
          animate={{
            cx: [p.cx, p.cx + p.dx * 0.45, p.cx - p.dx * 0.28, p.cx + p.dx * 0.12, p.cx],
            cy: [p.cy, p.cy - p.dy * 0.38, p.cy + p.dy * 0.32, p.cy - p.dy * 0.15, p.cy],
            opacity: [p.opMin, p.opMax, p.opMin * 1.12, p.opMax * 0.88, p.opMin],
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

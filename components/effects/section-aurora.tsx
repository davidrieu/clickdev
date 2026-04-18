"use client";

import { motion, useReducedMotion } from "framer-motion";

type SectionAuroraProps = {
  /** soft = discret ; medium = un peu plus présent sous les sections clés */
  variant?: "soft" | "medium";
};

/**
 * Halos colorés animés en fond de section (sans quadrillage).
 * Désactivé si prefers-reduced-motion.
 */
export function SectionAurora({ variant = "soft" }: SectionAuroraProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  const medium = variant === "medium";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute -right-[22%] top-1/2 h-[min(380px,60vw)] w-[min(380px,60vw)] -translate-y-1/2 rounded-full bg-terracotta/25 blur-[100px]"
        animate={{
          x: [0, 42, -28, 0],
          y: [0, 18, -14, 0],
          scale: medium ? [1, 1.18, 1.05, 1] : [1, 1.12, 1],
          opacity: medium ? [0.18, 0.42, 0.28, 0.2] : [0.12, 0.32, 0.18],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[min(300px,48vw)] w-[min(300px,48vw)] rounded-full bg-success/18 blur-[85px]"
        animate={{
          x: [0, -26, 20, 0],
          y: [0, 36, -20, 0],
          scale: [1, 1.14, 1],
          opacity: [0.1, 0.3, 0.14],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className="absolute left-[35%] bottom-[0%] h-[min(220px,40vw)] w-[min(220px,40vw)] rounded-full bg-terracotta-soft/12 blur-[72px]"
        animate={{
          x: [0, -30, 24, 0],
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.22, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

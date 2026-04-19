"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionAuroraProps = {
  /** subtle = quasi imperceptible (pages longues type doc) ; soft / medium = sections marketing & home */
  variant?: "subtle" | "soft" | "medium";
};

/**
 * Halos colorés animés en fond de section (sans quadrillage).
 * Désactivé si prefers-reduced-motion.
 */
export function SectionAurora({ variant = "soft" }: SectionAuroraProps) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return null;

  const medium = variant === "medium";
  const subtle = variant === "subtle";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className={cn(
          "absolute -right-[22%] top-1/2 h-[min(380px,60vw)] w-[min(380px,60vw)] -translate-y-1/2 rounded-full blur-[100px]",
          subtle ? "bg-[#d10a8a]/14" : "bg-[#d10a8a]/22",
        )}
        animate={{
          x: [0, 42, -28, 0],
          y: [0, 18, -14, 0],
          scale: medium ? [1, 1.18, 1.05, 1] : subtle ? [1, 1.06, 1] : [1, 1.12, 1],
          opacity: medium
            ? [0.18, 0.42, 0.28, 0.2]
            : subtle
              ? [0.04, 0.1, 0.06]
              : [0.12, 0.32, 0.18],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={cn(
          "absolute -left-[20%] top-[10%] h-[min(300px,48vw)] w-[min(300px,48vw)] rounded-full blur-[85px]",
          subtle ? "bg-[#2e08cf]/10" : "bg-[#2e08cf]/18",
        )}
        animate={{
          x: [0, -26, 20, 0],
          y: [0, 36, -20, 0],
          scale: subtle ? [1, 1.06, 1] : [1, 1.14, 1],
          opacity: subtle ? [0.03, 0.08, 0.05] : [0.1, 0.3, 0.14],
        }}
        transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
      <motion.div
        className={cn(
          "absolute left-[35%] bottom-[0%] h-[min(220px,40vw)] w-[min(220px,40vw)] rounded-full blur-[72px]",
          subtle ? "bg-[#f26a06]/8" : "bg-[#f26a06]/14",
        )}
        animate={{
          x: [0, -30, 24, 0],
          scale: subtle ? [1, 1.08, 1] : [1, 1.2, 1],
          opacity: subtle ? [0.02, 0.06, 0.04] : [0.08, 0.22, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}

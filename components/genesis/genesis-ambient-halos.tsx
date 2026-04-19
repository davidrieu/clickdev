"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Halos colorés du template Genesis — au-dessus du fond noir, sous le contenu (z-0).
 * Les halos dans le hero en `fixed -z-20` passaient derrière le fond `.genesis-skin` et disparaissaient.
 */
export function GenesisAmbientHalos() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {!reduceMotion ? (
        <>
          <motion.div
            className="absolute left-[35%] top-[12%] size-[min(520px,55vw)] -translate-x-1/2 rounded-full bg-[#D10A8A] blur-[100px]"
            initial={{ opacity: 0.35 }}
            animate={{ opacity: [0.32, 0.55, 0.38, 0.5, 0.32] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[-8%] top-[28%] size-[min(480px,50vw)] rounded-full bg-[#2E08CF] blur-[100px]"
            initial={{ opacity: 0.28 }}
            animate={{ opacity: [0.26, 0.48, 0.32, 0.44, 0.26] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.div
            className="absolute left-1/2 top-[-6%] size-[min(440px,48vw)] -translate-x-1/2 rounded-full bg-[#F26A06] blur-[100px]"
            initial={{ opacity: 0.22 }}
            animate={{ opacity: [0.2, 0.42, 0.28, 0.38, 0.2] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          />
        </>
      ) : (
        <>
          <div className="absolute left-[35%] top-[12%] size-[min(480px,50vw)] -translate-x-1/2 rounded-full bg-[#D10A8A]/35 blur-[100px]" />
          <div className="absolute right-[-8%] top-[28%] size-[min(420px,45vw)] rounded-full bg-[#2E08CF]/30 blur-[100px]" />
          <div className="absolute left-1/2 top-[-6%] size-[min(400px,42vw)] -translate-x-1/2 rounded-full bg-[#F26A06]/25 blur-[100px]" />
        </>
      )}
    </div>
  );
}

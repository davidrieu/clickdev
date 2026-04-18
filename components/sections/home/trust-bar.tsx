"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Noms affichés en wordmark typographique — remplacement par SVG au fil de l’eau (brief §7). */
const clientWordmarks = [
  "Accor",
  "Greenweez",
  "Spreadshirt",
  "Made in France",
  "SIF Group",
  "Urbawise",
  "Crack It",
  "The French Maisons",
  "Musée Up’",
  "Mayami Production",
] as const;

export function TrustBar() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="border-b border-line/80 bg-bg-2 py-14 md:py-16 lg:py-20"
      aria-label="Ils me font confiance"
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
    >
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
          Ils me font confiance
        </p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 md:gap-y-8">
          {clientWordmarks.map((name) => (
            <li key={name}>
              <span className="block cursor-default font-serif text-xl italic tracking-tight text-ink opacity-60 transition-opacity duration-200 select-none hover:opacity-100 md:text-2xl lg:text-[1.65rem]">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

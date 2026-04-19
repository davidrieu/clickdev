"use client";

import { motion } from "framer-motion";

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

export function GenesisTrusted() {
  return (
    <motion.section
      className="mt-14"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, damping: 70, mass: 1 }}
    >
      <p className="mt-14 py-6 text-center text-sm text-neutral-300">
        Ils font confiance au delivery — dont notamment
      </p>
      <div className="mx-auto flex w-full max-w-4xl flex-wrap justify-between gap-10 py-4 max-sm:justify-center">
        {clientWordmarks.map((name) => (
          <span
            key={name}
            className="text-sm font-medium tracking-tight text-white/70 transition hover:text-white md:text-base"
          >
            {name}
          </span>
        ))}
      </div>
    </motion.section>
  );
}

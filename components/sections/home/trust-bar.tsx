"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionAurora } from "@/components/effects/section-aurora";
import { staggerItemReveal, viewportOnceTight } from "@/lib/motion/home";

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
  const titleVariants = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 bg-bg-2 py-14 md:py-16 lg:py-20"
      aria-label="Ils me font confiance"
    >
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[1600px] px-4 md:px-8">
        <motion.p
          className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          Ils me font confiance
        </motion.p>

        {reduceMotion ? (
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 md:gap-y-8">
            {clientWordmarks.map((name) => (
              <li key={name}>
                <span className="block cursor-default font-serif text-xl italic tracking-tight text-ink opacity-60 transition-opacity duration-200 select-none hover:opacity-100 md:text-2xl lg:text-[1.65rem]">
                  {name}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="trust-marquee-mask relative mt-8 overflow-hidden py-2">
            <div className="trust-marquee-track items-center">
              {[...clientWordmarks, ...clientWordmarks].map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 cursor-default font-serif text-xl italic tracking-tight text-ink opacity-55 transition-opacity duration-300 select-none hover:opacity-100 md:text-2xl lg:text-[1.65rem]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

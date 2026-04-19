"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceTight,
} from "@/lib/motion/home";
import { cn } from "@/lib/utils";

export function AboutDavidSection() {
  const reduceMotion = useReducedMotion();
  const grid = staggerContainer(reduceMotion, 0.12, 0.02);
  const block = staggerItemReveal(reduceMotion);

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          <motion.div
            variants={block}
            className="relative mx-auto aspect-[4/5] w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            {!reduceMotion ? (
              <motion.div
                aria-hidden
                className="absolute -inset-[2px] rounded-lg opacity-70 blur-md"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, rgba(242,106,6,0.45), transparent 40%, rgba(209,10,138,0.32), transparent 70%)",
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
            ) : null}
            <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-lg border border-line bg-bg-3">
              <span className="absolute inset-0 flex items-center justify-center p-6 text-center font-mono text-[11px] uppercase leading-relaxed tracking-widest text-ink-muted">
                Photo / vidéo
                <br />
                (shooting à planifier)
              </span>
              {!reduceMotion ? (
                <div
                  aria-hidden
                  className="about-photo-shimmer pointer-events-none absolute inset-0 w-[180%] -translate-x-1/4 bg-[linear-gradient(105deg,transparent_42%,rgba(255,255,255,0.07)_50%,transparent_58%)]"
                />
              ) : null}
            </div>
          </motion.div>

          <motion.div variants={block}>
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
              À propos
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Derrière Clickdev,{" "}
              <span className="font-semibold text-[#f26a06]">David Rieu</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-dim md:text-lg">
              Je travaille avec des équipes marketing, produit et tech qui veulent un
              partenaire capable de livrer vite — sans sacrifier la qualité, la perf ou
              le SEO.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
              Mon approche : moins de slides, plus de décisions ; moins de jargon, plus
              de résultats mesurables. Basé en France, j’accompagne des marques en
              Europe et au-delà.
            </p>
            <motion.div
              whileHover={reduceMotion ? undefined : { x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="mt-8 inline-flex"
            >
              <Link
                href="/a-propos/"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "w-fit",
                )}
              >
                En savoir plus
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

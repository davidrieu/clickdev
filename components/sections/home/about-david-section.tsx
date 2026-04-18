"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AboutDavidSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-lg border border-line bg-bg-3 lg:mx-0 lg:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <span className="absolute inset-0 flex items-center justify-center p-6 text-center font-mono text-[11px] uppercase leading-relaxed tracking-widest text-ink-muted">
              Photo / vidéo
              <br />
              (shooting à planifier)
            </span>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: reduceMotion ? 0 : 0.5,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
              À propos
            </p>
            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
            >
              Derrière Clickdev,{" "}
              <span className="font-semibold text-terracotta">David Rieu</span>
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
            <Link
              href="/a-propos/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "mt-8 inline-flex w-fit",
              )}
            >
              En savoir plus
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MetricBlock } from "@/components/blocks/metric-block";
import { cn } from "@/lib/utils";

const stats = [
  { value: "80+", label: "projets livrés" },
  { value: "10", label: "ans d’expérience" },
  { value: "98%", label: "clients satisfaits" },
  { value: "100/100", label: "Lighthouse moyen" },
] as const;

type HeroSectionProps = {
  monthLabel: string;
};

export function HeroSection({ monthLabel }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.45;
  const delayStep = reduceMotion ? 0 : 0.07;

  const fadeUp = {
    hidden: { opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay: i * delayStep,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="max-w-4xl">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <Badge
              variant="outline"
              className="h-auto gap-2 rounded-full border-line bg-bg-2 py-1.5 pl-2 pr-3 font-mono text-[11px] uppercase tracking-widest text-ink-dim"
            >
              <span
                className="size-2 shrink-0 rounded-full bg-success shadow-[0_0_0_4px_rgba(125,216,125,0.25)]"
                aria-hidden
              />
              Disponible pour de nouveaux projets — {monthLabel}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 font-serif text-[clamp(1.875rem,3.2vw+0.6rem,3rem)] font-medium leading-[1.12] tracking-[-0.02em] text-ink md:tracking-[-0.03em]"
          >
            Développeur freelance pour e-commerce,{" "}
            <span className="font-semibold text-terracotta">marketplaces</span> et
            outils métiers qui performent.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl"
          >
            Depuis 10 ans, je conçois des sites, applications et CRM sur mesure pour des
            marques ambitieuses. Accor, Greenweez, Spreadshirt et 80+ entreprises me
            font confiance.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
              Démarrer un projet →
            </Link>
            <Link
              href="/realisations/"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "justify-center",
              )}
            >
              Voir les réalisations
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 border-t border-line pt-12 md:mt-24 md:pt-16"
          initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: reduceMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12 lg:gap-16">
            {stats.map((s) => (
              <MetricBlock key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

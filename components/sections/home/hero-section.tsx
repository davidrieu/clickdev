"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MetricBlock } from "@/components/blocks/metric-block";
import {
  easeOutProduct,
  heroHeadingContainer,
  heroWordVariant,
  staggerContainer,
  staggerItemReveal,
} from "@/lib/motion/home";
import { cn } from "@/lib/utils";

const stats = [
  { value: "80+", label: "projets livrés" },
  { value: "10", label: "ans d’expérience" },
  { value: "98%", label: "clients satisfaits" },
  { value: "100/100", label: "Lighthouse moyen" },
] as const;

const h1Line1 = ["Développeur", "freelance", "pour", "e-commerce,"] as const;
const h1Line2Rest = ["et", "outils", "métiers", "qui", "performent."] as const;

type HeroSectionProps = {
  monthLabel: string;
};

export function HeroSection({ monthLabel }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.48;

  const blurReveal = (delay: number) => ({
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      y: reduceMotion ? 0 : 22,
      filter: reduceMotion ? "blur(0px)" : "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration,
        delay: reduceMotion ? 0 : delay,
        ease: easeOutProduct,
      },
    },
  });

  const wordVariant = heroWordVariant(reduceMotion);
  const headingContainer = heroHeadingContainer(reduceMotion);
  const statsContainer = staggerContainer(reduceMotion, 0.1, 0.72);
  const statItem = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="hero-heading"
    >
      {!reduceMotion ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <motion.div
            className="absolute -right-[15%] top-[8%] h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-terracotta/25 blur-[100px]"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.55, 0.35],
              x: [0, 24, 0],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -left-[10%] bottom-[5%] h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-success/20 blur-[90px]"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.45, 0.25],
              y: [0, -18, 0],
            }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-[min(600px,80vw)] w-[min(600px,80vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/5 blur-[120px]"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
        </div>
      ) : null}

      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="max-w-4xl">
          <motion.div variants={blurReveal(0)} initial="hidden" animate="visible">
            <Badge
              variant="outline"
              className="h-auto gap-2 rounded-full border-line bg-bg-2/80 py-1.5 pl-2 pr-3 font-mono text-[11px] uppercase tracking-widest text-ink-dim backdrop-blur-sm"
            >
              <motion.span
                className="size-2 shrink-0 rounded-full bg-success shadow-[0_0_0_4px_rgba(125,216,125,0.25)]"
                aria-hidden
                animate={
                  reduceMotion
                    ? undefined
                    : { scale: [1, 1.2, 1], opacity: [1, 0.75, 1] }
                }
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              Disponible pour de nouveaux projets — {monthLabel}
            </Badge>
          </motion.div>

          <motion.h1
            id="hero-heading"
            className="mt-8 font-serif text-[clamp(1.875rem,3.2vw+0.6rem,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink md:tracking-[-0.03em]"
            variants={headingContainer}
            initial="hidden"
            animate="visible"
          >
            <span className="block">
              {h1Line1.map((w) => (
                <motion.span
                  key={w}
                  variants={wordVariant}
                  className="mr-[0.28em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <span className="mt-1 block">
              <motion.span
                variants={wordVariant}
                className="mr-[0.28em] inline-block font-semibold text-terracotta"
              >
                marketplaces
              </motion.span>
              {h1Line2Rest.map((w) => (
                <motion.span
                  key={w}
                  variants={wordVariant}
                  className="mr-[0.28em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.p
            variants={blurReveal(0.48)}
            initial="hidden"
            animate="visible"
            className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-dim md:text-xl"
          >
            Depuis 10 ans, je conçois des sites, applications et CRM sur mesure pour des
            marques ambitieuses. Accor, Greenweez, Spreadshirt et 80+ entreprises me
            font confiance.
          </motion.p>

          <motion.div
            variants={blurReveal(0.62)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.02 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
            >
              <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
                Démarrer un projet →
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
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
          </motion.div>
        </div>

        <motion.div
          className="mt-20 border-t border-line pt-12 md:mt-24 md:pt-16"
          variants={statsContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12 lg:gap-16">
            {stats.map((s) => (
              <motion.div key={s.label} variants={statItem}>
                <MetricBlock value={s.value} label={s.label} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { MetricBlock } from "@/components/blocks/metric-block";
import {
  easeOutProduct,
  heroHeadingContainer,
  heroWordVariantExpressive,
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

const heroSubcopy = [
  "Depuis 10 ans, je conçois des sites, applications et CRM sur mesure",
  "pour des marques ambitieuses.",
  "Accor, Greenweez, Spreadshirt et 80+ entreprises me font confiance.",
] as const;

type HeroSectionProps = {
  monthLabel: string;
};

export function HeroSection({ monthLabel }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.48;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 42, damping: 30, restDelta: 0.001 });
  const springY = useSpring(mouseY, { stiffness: 42, damping: 30, restDelta: 0.001 });

  const orb1x = useTransform(springX, [0, 1], [-52, 52]);
  const orb1y = useTransform(springY, [0, 1], [-36, 36]);
  const orb2x = useTransform(springX, [0, 1], [36, -44]);
  const orb2y = useTransform(springY, [0, 1], [28, -32]);
  const orb3x = useTransform(springX, [0, 1], [-18, 22]);
  const orb3y = useTransform(springY, [0, 1], [14, -18]);

  function handleHeroMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }

  function handleHeroMouseLeave() {
    if (reduceMotion) return;
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

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

  const wordVariant = heroWordVariantExpressive(reduceMotion);
  const headingContainer = heroHeadingContainer(reduceMotion, 0.046, 0.08);
  const statsContainer = staggerContainer(reduceMotion, 0.1, 0.72);
  const statItem = staggerItemReveal(reduceMotion);
  const subcopyContainer = staggerContainer(reduceMotion, 0.07, 0.42);
  const subcopyLine = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="hero-heading"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
    >
      {!reduceMotion ? (
        <>
          <div
            className="hero-mesh pointer-events-none absolute inset-0 opacity-[0.65]"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <motion.div
              className="absolute -right-[15%] top-[8%]"
              style={{ x: orb1x, y: orb1y }}
            >
              <motion.div
                className="h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-terracotta/25 blur-[100px]"
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.35, 0.55, 0.35],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div
              className="absolute -left-[10%] bottom-[5%]"
              style={{ x: orb2x, y: orb2y }}
            >
              <motion.div
                className="h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-success/20 blur-[90px]"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 11,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ x: orb3x, y: orb3y }}
            >
              <motion.div
                className="h-[min(600px,80vw)] w-[min(600px,80vw)] rounded-full bg-terracotta/5 blur-[120px]"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[6%] top-[18%] hidden h-56 w-56 rounded-full border border-line/25 md:block lg:h-72 lg:w-72"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-[8%] top-[22%] hidden h-40 w-40 rounded-full border border-terracotta/15 md:block"
            animate={{ rotate: [360, 0] }}
            transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
          />
        </>
      ) : null}

      <div className="relative mx-auto max-w-[1600px] px-4 md:px-8">
        <div className="relative max-w-4xl">
          {!reduceMotion ? (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -left-6 top-24 h-px w-24 origin-left bg-gradient-to-r from-transparent via-terracotta/40 to-transparent md:-left-10 md:top-32 md:w-32"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.35, duration: 0.7, ease: easeOutProduct }}
            />
          ) : null}

          <motion.div variants={blurReveal(0)} initial="hidden" animate="visible">
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Badge
                variant="outline"
                className="relative h-auto gap-2 overflow-hidden rounded-full border-line bg-bg-2/85 py-1.5 pl-2 pr-3 font-mono text-[11px] uppercase tracking-widest text-ink-dim shadow-[0_0_0_1px_rgba(217,119,87,0.12)] backdrop-blur-sm"
              >
                {!reduceMotion ? (
                  <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 -left-1/4 w-[150%] bg-[linear-gradient(105deg,transparent_38%,rgba(255,255,255,0.08)_50%,transparent_62%)]"
                    initial={{ x: "-20%" }}
                    animate={{ x: ["-20%", "45%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 1.6,
                    }}
                  />
                ) : null}
                <motion.span
                  className="relative z-[1] size-2 shrink-0 rounded-full bg-success shadow-[0_0_0_4px_rgba(125,216,125,0.25)]"
                  aria-hidden
                  animate={
                    reduceMotion
                      ? undefined
                      : { scale: [1, 1.22, 1], opacity: [1, 0.72, 1] }
                  }
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="relative z-[1]">
                  Disponible pour de nouveaux projets — {monthLabel}
                </span>
              </Badge>
            </motion.div>
          </motion.div>

          <div className="mt-8 [perspective:1200px]">
            <motion.h1
              id="hero-heading"
              className="font-serif text-[clamp(1.875rem,3.2vw+0.6rem,3rem)] font-medium leading-[1.15] tracking-[-0.02em] text-ink [transform-style:preserve-3d] md:tracking-[-0.03em]"
              variants={headingContainer}
              initial="hidden"
              animate="visible"
              style={{ transformStyle: "preserve-3d" }}
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
          </div>

          {!reduceMotion ? (
            <motion.div
              aria-hidden
              className="mt-4 h-1 max-w-[min(22rem,88vw)] origin-left rounded-full bg-gradient-to-r from-terracotta via-terracotta-soft to-success/80"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.92, duration: 0.95, ease: easeOutProduct }}
            />
          ) : null}

          <motion.p
            variants={subcopyContainer}
            initial="hidden"
            animate="visible"
            className="mt-8 flex max-w-2xl flex-col gap-1.5 text-lg leading-relaxed text-ink-dim md:text-xl"
          >
            {heroSubcopy.map((line) => (
              <motion.span
                key={line}
                variants={subcopyLine}
                className="block [overflow-wrap:anywhere]"
              >
                {line}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            variants={blurReveal(reduceMotion ? 0 : 0.58)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.04 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 16 }}
            >
              <Link href="/devis/" className={cn(buttonVariants({ size: "cta" }))}>
                Démarrer un projet →
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { x: 6 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
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

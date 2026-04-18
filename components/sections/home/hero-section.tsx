"use client";

import { useId } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
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

/** Grain SVG discret (immersion sans surcharge visuelle). */
const noiseDataUri =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0 : 0.48;
  const orbitGradId = `hero-orbit-${useId().replace(/:/g, "")}`;

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const springX = useSpring(mouseX, { stiffness: 52, damping: 32, restDelta: 0.001 });
  const springY = useSpring(mouseY, { stiffness: 52, damping: 32, restDelta: 0.001 });

  const orb1x = useTransform(springX, [0, 1], [-72, 72]);
  const orb1y = useTransform(springY, [0, 1], [-48, 48]);
  const orb2x = useTransform(springX, [0, 1], [48, -58]);
  const orb2y = useTransform(springY, [0, 1], [36, -42]);
  const orb3x = useTransform(springX, [0, 1], [-28, 32]);
  const orb3y = useTransform(springY, [0, 1], [20, -26]);
  const orb4x = useTransform(springX, [0, 1], [-20, 36]);
  const orb4y = useTransform(springY, [0, 1], [-24, 28]);

  const contentX = useTransform(springX, [0, 1], [12, -12]);
  const contentY = useTransform(springY, [0, 1], [8, -8]);

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
      y: reduceMotion ? 0 : 18,
      filter: reduceMotion ? "blur(0px)" : "blur(11px)",
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
  const headingContainer = heroHeadingContainer(reduceMotion, 0.036, 0.1);
  const statsContainer = staggerContainer(reduceMotion, 0.1, 0.72);
  const statItem = staggerItemReveal(reduceMotion);
  const subcopyContainer = staggerContainer(reduceMotion, 0.08, 0.52);
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
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <motion.div
              className="absolute -right-[15%] top-[8%] will-change-transform"
              style={{ x: orb1x, y: orb1y }}
            >
              <motion.div
                className="h-[min(420px,55vw)] w-[min(420px,55vw)] rounded-full bg-terracotta/28 blur-[110px]"
                animate={{
                  scale: [1, 1.18, 1.04, 1.12, 1],
                  opacity: [0.28, 0.55, 0.38, 0.5, 0.28],
                  x: [0, 22, -16, 18, 0],
                  y: [0, -18, 12, -9, 0],
                }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
            <motion.div
              className="absolute -left-[10%] bottom-[5%] will-change-transform"
              style={{ x: orb2x, y: orb2y }}
            >
              <motion.div
                className="h-[min(380px,50vw)] w-[min(380px,50vw)] rounded-full bg-terracotta/20 blur-[100px]"
                animate={{
                  scale: [1, 1.14, 1.03, 1.1, 1],
                  opacity: [0.18, 0.46, 0.3, 0.42, 0.18],
                  x: [0, -18, 20, -12, 0],
                  y: [0, 24, -14, 16, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 will-change-transform"
              style={{ x: orb3x, y: orb3y }}
            >
              <motion.div
                className="h-[min(620px,82vw)] w-[min(620px,82vw)] rounded-full bg-gradient-to-br from-terracotta/14 via-terracotta-soft/11 to-terracotta/7 blur-[130px]"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.06, 1.02, 1.08, 1],
                  opacity: [0.4, 0.68, 0.5, 0.62, 0.4],
                }}
                transition={{
                  rotate: { duration: 88, repeat: Infinity, ease: "linear" },
                  scale: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 11, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </motion.div>
            <motion.div
              className="absolute left-[8%] top-[38%] will-change-transform"
              style={{ x: orb4x, y: orb4y }}
            >
              <motion.div
                className="h-[min(220px,40vw)] w-[min(220px,40vw)] rounded-full bg-terracotta-soft/32 blur-[80px]"
                animate={{
                  scale: [1, 1.28, 1.08, 1.22, 1],
                  opacity: [0.2, 0.48, 0.32, 0.44, 0.2],
                  x: [0, 16, -18, 10, 0],
                  y: [0, -12, 18, -7, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.25,
                }}
              />
            </motion.div>
          </div>

          <div
            className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_75%_60%_at_50%_-10%,rgba(217,119,87,0.09),transparent_55%),radial-gradient(ellipse_55%_45%_at_100%_50%,transparent_40%,rgba(13,13,13,0.55)_100%)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-[1] mix-blend-overlay opacity-[0.55]"
            style={{ backgroundImage: noiseDataUri }}
            aria-hidden
          />

          <motion.svg
            aria-hidden
            className="pointer-events-none absolute right-[2%] top-[10%] z-[1] hidden h-[min(300px,48vw)] w-[min(300px,48vw)] md:block"
            viewBox="0 0 200 200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 1.1, ease: easeOutProduct }}
          >
            <defs>
              <linearGradient id={orbitGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(217,119,87,0.45)" />
                <stop offset="55%" stopColor="rgba(232,165,139,0.2)" />
                <stop offset="100%" stopColor="rgba(217,119,87,0.08)" />
              </linearGradient>
            </defs>
            <motion.g style={{ transformOrigin: "100px 100px" }} animate={{ rotate: 360 }} transition={{ duration: 52, repeat: Infinity, ease: "linear" }}>
              <circle
                cx="100"
                cy="100"
                r="88"
                fill="none"
                stroke={`url(#${orbitGradId})`}
                strokeWidth="0.65"
                strokeDasharray="5 16"
                className="opacity-90"
              />
            </motion.g>
            <motion.g style={{ transformOrigin: "100px 100px" }} animate={{ rotate: -360 }} transition={{ duration: 70, repeat: Infinity, ease: "linear" }}>
              <circle
                cx="100"
                cy="100"
                r="74"
                fill="none"
                stroke="rgba(217,119,87,0.18)"
                strokeWidth="0.5"
                strokeDasharray="2 20"
              />
            </motion.g>
          </motion.svg>
        </>
      ) : null}

      <div className="relative z-[2] mx-auto max-w-[1600px] px-4 md:px-8">
        <motion.div
          className="relative max-w-4xl will-change-transform"
          style={reduceMotion ? undefined : { x: contentX, y: contentY }}
        >
          <div className="mt-1 [perspective:1200px] md:mt-0">
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

          <motion.p
            variants={subcopyContainer}
            initial="hidden"
            animate="visible"
            className="mt-8 flex max-w-2xl flex-col gap-1.5 text-lg leading-relaxed text-ink-dim md:mt-10 md:text-xl"
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
            variants={blurReveal(reduceMotion ? 0 : 0.42)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
            >
              <Link
                href="/devis/"
                className={cn(
                  buttonVariants({ size: "cta" }),
                  "shadow-none transition-shadow duration-300",
                  !reduceMotion &&
                    "hover:shadow-[0_0_48px_-12px_rgba(217,119,87,0.38)] focus-visible:shadow-[0_0_48px_-12px_rgba(217,119,87,0.38)]",
                )}
              >
                Démarrer un projet →
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { x: 5 }}
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
        </motion.div>

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

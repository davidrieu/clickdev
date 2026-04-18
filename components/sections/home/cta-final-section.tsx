"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { calBookingUrl } from "@/lib/constants/site";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceTight,
} from "@/lib/motion/home";
import { cn } from "@/lib/utils";

export function CtaFinalSection() {
  const reduceMotion = useReducedMotion();
  const content = staggerContainer(reduceMotion, 0.12, 0.02);
  const block = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="cta-final-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-95" aria-hidden>
        <motion.div
          className="absolute -left-1/4 top-0 h-[120%] w-1/2 rounded-full bg-terracotta/22 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.16, 1.05, 1.14, 1],
                  x: [0, 36, -22, 28, 0],
                  y: [0, -24, 16, -12, 0],
                  opacity: [0.55, 0.92, 0.68, 0.88, 0.55],
                }
          }
          transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[100%] w-1/2 rounded-full bg-success/16 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1.06, 1.15, 1],
                  x: [0, -28, 20, -16, 0],
                  y: [0, -32, 22, -18, 0],
                  opacity: [0.45, 0.85, 0.6, 0.78, 0.45],
                }
          }
          transition={{
            duration: 8.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {!reduceMotion ? (
          <motion.div
            className="absolute left-1/2 top-1/2 h-[min(420px,70vw)] w-[min(420px,70vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta-soft/16 blur-[100px]"
            animate={{
              scale: [1, 1.22, 1.06, 1.18, 1],
              opacity: [0.32, 0.62, 0.42, 0.55, 0.32],
              x: [0, 20, -16, 14, 0],
              y: [0, -18, 12, -10, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ) : null}
      </div>

      <div className="relative z-[1] mx-auto max-w-[960px] px-4 text-center md:px-8">
        <motion.div
          variants={content}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          <motion.h2
            variants={block}
            id="cta-final-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Un projet e-commerce, une app ou une idée à industrialiser ?
          </motion.h2>
          <motion.p
            variants={block}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg"
          >
            Décrivez votre contexte : objectifs, contraintes, stack. Je reviens vers
            vous avec une proposition claire — délai, périmètre et prochaines étapes.
          </motion.p>
          <motion.div
            variants={block}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/devis/"
                className={cn(buttonVariants({ size: "cta" }), "w-full sm:w-auto")}
              >
                Demander un devis →
              </Link>
            </motion.div>
            <motion.div
              whileHover={reduceMotion ? undefined : { scale: 1.02, y: -2 }}
              whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              transition={{ type: "spring", stiffness: 380, damping: 20 }}
              className="w-full sm:w-auto"
            >
              <a
                href={calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex w-full border-line bg-bg/80 backdrop-blur-sm sm:w-auto",
                )}
              >
                Réserver un créneau
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

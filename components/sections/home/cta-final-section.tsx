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
          className="absolute -left-1/4 top-0 h-[120%] w-1/2 rounded-full bg-terracotta/15 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  x: [0, 18, 0],
                  opacity: [0.85, 1, 0.85],
                }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-1/4 bottom-0 h-[100%] w-1/2 rounded-full bg-success/10 blur-3xl"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.1, 1],
                  y: [0, -14, 0],
                  opacity: [0.75, 1, 0.75],
                }
          }
          transition={{
            duration: 7.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[960px] px-4 text-center md:px-8">
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

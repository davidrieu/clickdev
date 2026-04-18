"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { calBookingUrl } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

export function CtaFinalSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="cta-final-heading"
    >
      <div className="pointer-events-none absolute inset-0 opacity-90" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[120%] w-1/2 rounded-full bg-terracotta/15 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[100%] w-1/2 rounded-full bg-success/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[960px] px-4 text-center md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <h2
            id="cta-final-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Un projet e-commerce, une app ou une idée à industrialiser ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">
            Décrivez votre contexte : objectifs, contraintes, stack. Je reviens vers
            vous avec une proposition claire — délai, périmètre et prochaines étapes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/devis/"
              className={cn(buttonVariants({ size: "cta" }), "w-full sm:w-auto")}
            >
              Demander un devis →
            </Link>
            <a
              href={calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full border-line bg-bg/80 backdrop-blur-sm sm:w-auto",
              )}
            >
              Réserver un créneau
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

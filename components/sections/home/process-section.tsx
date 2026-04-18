"use client";

import { motion, useReducedMotion } from "framer-motion";
import { homeProcessSteps } from "@/lib/constants/home-process";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[960px] px-4 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
        >
          <h2
            id="process-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl"
          >
            Process
          </h2>
          <p className="mt-4 text-base text-ink-dim md:text-lg">
            Une méthode claire, orientée livrables et mesure — du cadrage au run.
          </p>
        </motion.div>

        <ol className="mt-14 flex flex-col gap-12 md:gap-16">
          {homeProcessSteps.map((step, index) => {
            const n = String(index + 1).padStart(2, "0");
            return (
              <motion.li
                key={step.title}
                className="grid gap-6 border-t border-line pt-10 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,7rem)_1fr] md:gap-10 md:pt-12 first:md:pt-0"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
              >
                <span className="font-serif text-5xl font-semibold leading-none tracking-tighter text-terracotta md:text-6xl lg:text-7xl">
                  {n}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-normal text-ink md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim md:text-base">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

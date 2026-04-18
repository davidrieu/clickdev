"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionAurora } from "@/components/effects/section-aurora";
import { homeProcessSteps } from "@/lib/constants/home-process";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceTight,
} from "@/lib/motion/home";

export function ProcessSection() {
  const reduceMotion = useReducedMotion();
  const head = staggerItemReveal(reduceMotion);
  const list = staggerContainer(reduceMotion, 0.14, 0.02);
  const row = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="process-heading"
    >
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[960px] px-4 md:px-8">
        <motion.div
          variants={head}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
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

        <motion.ol
          className="mt-14 flex flex-col gap-12 md:gap-16"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          {homeProcessSteps.map((step, index) => {
            const n = String(index + 1).padStart(2, "0");
            return (
              <motion.li
                key={step.title}
                className="grid gap-6 border-t border-line pt-10 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,7rem)_1fr] md:gap-10 md:pt-12 first:md:pt-0"
                variants={row}
              >
                <motion.span
                  className="inline-block font-serif text-5xl font-semibold leading-none tracking-tighter text-terracotta md:text-6xl lg:text-7xl"
                  initial={reduceMotion ? false : { scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: reduceMotion ? 0 : index * 0.04,
                  }}
                >
                  {n}
                </motion.span>
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
        </motion.ol>
      </div>
    </section>
  );
}

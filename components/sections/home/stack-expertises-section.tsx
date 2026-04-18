"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { homeStackItems } from "@/lib/constants/home-stack";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceTight,
} from "@/lib/motion/home";

const MotionLink = motion.create(Link);

export function StackExpertisesSection() {
  const reduceMotion = useReducedMotion();
  const head = staggerItemReveal(reduceMotion);
  const grid = staggerContainer(reduceMotion, 0.045, 0.04);
  const cell = staggerItemReveal(reduceMotion);

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <motion.div
          variants={head}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
          className="max-w-3xl"
        >
          <h2
            id="stack-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Stack & expertises
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
            Une sélection de technologies où je vais en profondeur — chaque lien mène à
            une page d’expertise dédiée.
          </p>
        </motion.div>

        <motion.ul
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          {homeStackItems.map((item) => (
            <motion.li key={item.href} variants={cell}>
              <MotionLink
                href={item.href}
                className="flex min-h-[4.5rem] items-center justify-center rounded-lg border border-line bg-bg px-3 py-4 text-center transition-colors hover:border-line-2 hover:bg-bg-2 md:min-h-[5rem]"
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <span className="font-serif text-base font-medium text-ink md:text-lg">
                  {item.label}
                </span>
              </MotionLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

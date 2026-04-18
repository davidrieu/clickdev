"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { homeStackItems } from "@/lib/constants/home-stack";

export function StackExpertisesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="stack-heading"
    >
      <div className="mx-auto max-w-[1600px] px-4 md:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: reduceMotion ? 0 : 0.45,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
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

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-4">
          {homeStackItems.map((item, i) => (
            <motion.li
              key={item.href}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                delay: reduceMotion ? 0 : i * 0.04,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <Link
                href={item.href}
                className="flex min-h-[4.5rem] items-center justify-center rounded-lg border border-line bg-bg px-3 py-4 text-center transition-colors hover:bg-bg-2 md:min-h-[5rem]"
              >
                <span className="font-serif text-base font-medium text-ink md:text-lg">
                  {item.label}
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

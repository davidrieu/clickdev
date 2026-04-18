"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CaseStudyRow } from "@/components/blocks/case-study-row";
import { homeFeaturedCaseStudies } from "@/lib/constants/home-case-studies";

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="case-studies-heading"
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
            id="case-studies-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Études de cas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-dim md:text-lg">
            Quelques livraisons récentes — chiffres vérifiables, stack moderne, impact
            mesurable.
          </p>
        </motion.div>

        <div className="mt-4 md:mt-6">
          {homeFeaturedCaseStudies.map((study, i) => (
            <motion.div
              key={study.href}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-48px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <CaseStudyRow study={study} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-4 text-center md:mt-8 md:text-left"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.4 }}
        >
          <Link
            href="/realisations/"
            className="inline-flex items-center gap-1 font-medium text-terracotta transition-transform hover:translate-x-0.5"
          >
            Voir toutes les réalisations
            <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

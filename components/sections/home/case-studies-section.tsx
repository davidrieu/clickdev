"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { CaseStudyRow } from "@/components/blocks/case-study-row";
import { SectionAurora } from "@/components/effects/section-aurora";
import { homeFeaturedCaseStudies } from "@/lib/constants/home-case-studies";
import { staggerItemReveal, viewportOnceTight } from "@/lib/motion/home";

export function CaseStudiesSection() {
  const reduceMotion = useReducedMotion();
  const head = staggerItemReveal(reduceMotion);
  const foot = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="case-studies-heading"
    >
      <SectionAurora variant="soft" />
      <div className="relative z-[1] mx-auto max-w-[1600px] px-4 md:px-8">
        <motion.div
          variants={head}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
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
          {homeFeaturedCaseStudies.map((study) => (
            <CaseStudyRow key={study.href} study={study} />
          ))}
        </div>

        <motion.div
          className="mt-4 text-center md:mt-8 md:text-left"
          variants={foot}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          <motion.div
            whileHover={reduceMotion ? undefined : { x: 4 }}
            transition={{ type: "spring", stiffness: 380, damping: 20 }}
            className="inline-flex"
          >
            <Link
              href="/realisations/"
              className="inline-flex items-center gap-1 font-medium text-[#f26a06]"
            >
              Voir toutes les réalisations
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

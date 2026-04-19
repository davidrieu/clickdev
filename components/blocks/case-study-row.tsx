"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { MetricBlock } from "@/components/blocks/metric-block";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceLoose,
} from "@/lib/motion/home";
import type { HomeCaseStudy } from "@/lib/constants/home-case-studies";

type CaseStudyRowProps = {
  study: HomeCaseStudy;
};

export function CaseStudyRow({ study }: CaseStudyRowProps) {
  const reduceMotion = useReducedMotion();
  const container = staggerContainer(reduceMotion, 0.12, 0.02);
  const block = staggerItemReveal(reduceMotion);

  return (
    <motion.article
      className="border-b border-line py-14 last:border-b-0 md:py-20"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnceLoose}
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16 lg:gap-20">
        <motion.div variants={block}>
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
            {study.eyebrow}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-normal tracking-tight text-ink md:text-3xl lg:text-4xl">
            {study.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-dim md:text-base">
            {study.description}
          </p>
          <motion.div
            whileHover={reduceMotion ? undefined : { x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="mt-6 inline-flex"
          >
            <Link
              href={study.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-[#f26a06]"
            >
              Voir le projet
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div variants={block} className="grid grid-cols-2 gap-6 md:gap-8">
          {study.metrics.map((m) => (
            <MetricBlock key={m.label} compact value={m.value} label={m.label} />
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}

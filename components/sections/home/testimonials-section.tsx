"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionAurora } from "@/components/effects/section-aurora";
import { homeTestimonials } from "@/lib/constants/home-testimonials";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceTight,
} from "@/lib/motion/home";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();
  const head = staggerItemReveal(reduceMotion);
  const grid = staggerContainer(reduceMotion, 0.1, 0.03);
  const card = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Témoignages
          </h2>
          <p className="mt-4 text-base text-ink-dim md:text-lg">
            Ce que disent les équipes avec lesquelles je collabore.
          </p>
        </motion.div>

        <motion.ul
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          {homeTestimonials.map((t) => (
            <motion.li
              key={`${t.name}-${t.company}`}
              variants={card}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -8,
                      boxShadow: "0 28px 56px -32px rgba(0,0,0,0.55)",
                    }
              }
              transition={{ type: "spring", stiffness: 360, damping: 22 }}
              className="flex flex-col rounded-lg border border-line bg-bg p-6 transition-colors hover:border-line-2 md:p-8"
            >
              <blockquote className="flex flex-1 flex-col">
                <p className="font-serif text-lg italic leading-relaxed text-ink md:text-xl">
                  « {t.quote} »
                </p>
                <footer className="mt-6 border-t border-line pt-6">
                  <p className="font-medium text-ink">{t.name}</p>
                  <p className="mt-1 text-sm text-ink-muted">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </footer>
              </blockquote>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

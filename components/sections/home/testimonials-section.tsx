"use client";

import { motion, useReducedMotion } from "framer-motion";
import { homeTestimonials } from "@/lib/constants/home-testimonials";

export function TestimonialsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="testimonials-heading"
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
            id="testimonials-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Témoignages
          </h2>
          <p className="mt-4 text-base text-ink-dim md:text-lg">
            Ce que disent les équipes avec lesquelles je collabore.
          </p>
        </motion.div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {homeTestimonials.map((t, i) => (
            <motion.li
              key={`${t.name}-${t.company}`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-32px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : i * 0.06,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="flex flex-col rounded-lg border border-line bg-bg p-6 md:p-8"
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
        </ul>
      </div>
    </section>
  );
}

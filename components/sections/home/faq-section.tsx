"use client";

import { motion, useReducedMotion } from "framer-motion";
import { homeFaqItems } from "@/lib/constants/home-faq";
import { staggerItemReveal, viewportOnceTight } from "@/lib/motion/home";
import { FaqHomeAccordion } from "./faq-home-accordion";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FaqSection() {
  const reduceMotion = useReducedMotion();
  const head = staggerItemReveal(reduceMotion);
  const panel = staggerItemReveal(reduceMotion);

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[720px] px-4 md:px-8">
        <motion.div
          variants={head}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          <h2
            id="faq-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-4 text-base text-ink-dim md:text-lg">
            Les questions les plus fréquentes avant de démarrer un projet.
          </p>
        </motion.div>
        <motion.div
          className="mt-10"
          variants={panel}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          <FaqHomeAccordion />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "@/components/blocks/service-card";
import { SectionAurora } from "@/components/effects/section-aurora";
import { homeServices } from "@/lib/constants/home-services";
import {
  staggerContainer,
  staggerItemReveal,
  viewportOnceTight,
} from "@/lib/motion/home";

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const head = staggerItemReveal(reduceMotion);
  const list = staggerContainer(reduceMotion, 0.09, 0.02);
  const item = staggerItemReveal(reduceMotion);

  return (
    <section
      className="relative overflow-hidden border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="services-heading"
    >
      <SectionAurora variant="medium" />
      <div className="relative z-[1] mx-auto max-w-[1600px] px-4 md:px-8">
        <motion.div
          variants={head}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          <h2
            id="services-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Services
          </h2>
        </motion.div>

        <motion.ul
          className="mt-12 grid list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8"
          variants={list}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnceTight}
        >
          {homeServices.map((service, i) => (
            <motion.li key={service.href} variants={item}>
              <ServiceCard index={i} service={service} />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

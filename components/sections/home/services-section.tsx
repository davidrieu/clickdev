"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ServiceCard } from "@/components/blocks/service-card";
import { homeServices } from "@/lib/constants/home-services";

export function ServicesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="services-heading"
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
        >
          <h2
            id="services-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl lg:text-[2.75rem] lg:leading-tight"
          >
            Services
          </h2>
        </motion.div>

        <ul className="mt-12 grid list-none grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3 xl:gap-8">
          {homeServices.map((service, i) => (
            <motion.li
              key={service.href}
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
                delay: reduceMotion ? 0 : i * 0.06,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              <ServiceCard index={i} service={service} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

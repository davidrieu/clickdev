"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};

export function GenesisSectionTitle({ title, description }: Props) {
  return (
    <div className="text-center">
      <motion.h2
        className="mx-auto mt-4 max-w-lg text-3xl font-semibold text-white"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mx-auto mt-4 max-w-md text-center text-sm leading-7 text-neutral-200"
        initial={{ y: 120, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
      >
        {description}
      </motion.p>
    </div>
  );
}

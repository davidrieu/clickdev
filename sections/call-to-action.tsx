'use client';

import { ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CallToAction() {
  return (
    <motion.div
      className="glass mx-auto mt-40 flex max-w-5xl flex-col items-center justify-center rounded-xl px-4 py-16 text-center"
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
    >
      <motion.h2
        className="mt-2 text-2xl font-medium md:text-4xl"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 280, damping: 70, mass: 1 }}
      >
        Ready to build?
      </motion.h2>
      <motion.p
        className="mt-4 max-w-md text-sm/7"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 70, mass: 1 }}
      >
        See how fast you can turn your ideas into reality. Get started for free, no credit card
        required.
      </motion.p>
      <motion.button
        type="button"
        className="btn glass mt-8 flex items-center gap-2 transition-none"
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 280, damping: 70, mass: 1 }}
      >
        Try now
        <ArrowRightIcon className="size-4" />
      </motion.button>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

/** Halos alignés sur la home (template) pour les pages marketing longues. */
export function MarketingAmbientBackdrop() {
  return (
    <motion.div
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
      initial={{ opacity: 0.45 }}
      animate={{ opacity: 0.92 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-72 left-1/3 size-130 -translate-x-1/2 rounded-full bg-[#D10A8A]/80 blur-[100px]" />
      <div className="absolute top-96 right-0 size-130 translate-x-1/4 rounded-full bg-[#2E08CF]/78 blur-[100px]" />
      <div className="absolute top-32 left-1/2 size-130 -translate-x-1/2 rounded-full bg-[#F26A06]/85 blur-[100px]" />
    </motion.div>
  );
}

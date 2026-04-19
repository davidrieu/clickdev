'use client';

import { PlayCircleIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
      <motion.div
        className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
        initial={{ opacity: 0.4 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-80 left-2/5 size-130 -translate-x-1/2 rounded-full bg-[#D10A8A] blur-[100px]" />
        <div className="absolute top-80 right-0 size-130 -translate-x-1/2 rounded-full bg-[#2E08CF] blur-[100px]" />
        <div className="absolute top-0 left-1/2 size-130 -translate-x-1/2 rounded-full bg-[#F26A06] blur-[100px]" />
      </motion.div>
      <motion.section className="flex flex-col items-center">
        <motion.div
          className="mt-32 flex items-center gap-3"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
        >
          <p>Smart, Fast, Always Active.</p>
          <button type="button" className="btn glass px-3 py-1 text-xs">
            Launch App
          </button>
        </motion.div>
        <motion.h1
          className="mt-4 max-w-3xl text-center text-4xl/13 font-semibold tracking-tight md:text-6xl/19"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 240, damping: 70, mass: 1 }}
        >
          Build, Deploy & Talk to AI Agents in Seconds.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-md text-center text-base/7 text-gray-100"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
        >
          Design AI assistants that research, plan, and execute tasks — all powered by your prompts.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col items-center gap-4 max-md:w-full md:flex-row md:gap-3"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 320, damping: 70, mass: 1 }}
        >
          <button type="button" className="btn glass py-3 max-md:w-full">
            Create Agent
          </button>
          <button
            type="button"
            className="btn glass flex items-center justify-center gap-2 py-3 max-md:w-full"
          >
            <PlayCircleIcon className="size-4.5" />
            Watch Demo
          </button>
        </motion.div>
      </motion.section>
    </>
  );
}

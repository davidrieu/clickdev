'use client';

import { HOME_PROCESS_STEPS, HOME_STACK_ITEMS } from '@/lib/constants/home-content';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeStackProcess() {
  return (
    <>
      <section className="mt-24 md:mt-32">
        <motion.h2
          className="text-center text-3xl font-semibold text-white md:text-4xl"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 70 }}
        >
          Stack & expertises
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">
          Les technos que j’utilise au quotidien — pages dédiées en cours de rédaction.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {HOME_STACK_ITEMS.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.35 }}
            >
              <Link
                href={`/expertises/${item.slug}`}
                className="flex h-full min-h-[4.5rem] items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-3 py-4 text-center text-sm font-medium text-white/85 transition hover:bg-white/[0.08]"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-24 md:mt-32">
        <motion.h2
          className="text-center text-3xl font-semibold text-white md:text-4xl"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 70 }}
        >
          Process
        </motion.h2>
        <ol className="mx-auto mt-12 max-w-2xl space-y-10">
          {HOME_PROCESS_STEPS.map((step, index) => (
            <motion.li
              key={step.title}
              className="flex gap-6"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.4 }}
            >
              <span className="font-serif text-5xl leading-none font-semibold text-[#F26A06] italic md:text-6xl">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{step.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>
    </>
  );
}

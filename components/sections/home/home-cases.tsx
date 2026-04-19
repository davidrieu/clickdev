'use client';

import { HOME_CASE_PREVIEWS } from '@/lib/constants/home-content';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeCases() {
  return (
    <section className="mt-24 md:mt-32">
      <motion.h2
        className="text-center text-3xl font-semibold text-white md:text-4xl"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 70 }}
      >
        Études de cas
      </motion.h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">
        Quelques projets récents — chiffres indicatifs, détails à venir dans le portfolio.
      </p>
      <div className="mt-12 flex flex-col gap-12">
        {HOME_CASE_PREVIEWS.map((c, index) => (
          <motion.div
            key={c.title}
            className="grid gap-8 border-b border-white/10 pb-12 last:border-0 last:pb-0 md:grid-cols-2 md:items-start"
            initial={{ y: 28, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, type: 'spring', stiffness: 260, damping: 72 }}
          >
            <div>
              <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">
                {c.category}
              </p>
              <h3 className="mt-2 text-2xl font-semibold md:text-3xl">{c.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
                {c.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
              {c.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-center"
                >
                  <p className="text-lg font-semibold text-[#F26A06] md:text-xl">{m.value}</p>
                  <p className="mt-1 text-xs text-white/55">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/realisations"
          className="text-sm font-medium text-white/90 underline-offset-4 hover:underline"
        >
          Voir toutes les réalisations →
        </Link>
      </div>
    </section>
  );
}

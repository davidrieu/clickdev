'use client';

import { HOME_SERVICE_CARDS } from '@/lib/constants/home-content';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const logos = [
  '/assets/company-logo-1.svg',
  '/assets/company-logo-2.svg',
  '/assets/company-logo-3.svg',
  '/assets/company-logo-4.svg',
  '/assets/company-logo-5.svg',
] as const;

export default function HomeTrustServices() {
  return (
    <>
      <motion.section
        className="mt-16 rounded-2xl bg-white/[0.04] px-4 py-10 md:px-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <p className="text-center font-mono text-[11px] tracking-widest text-white/50 uppercase">
          Ils me font confiance
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-10 md:justify-between">
          {logos.map((src) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={140}
              height={28}
              className="h-7 w-auto opacity-60 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </motion.section>

      <section className="mt-24 md:mt-32">
        <motion.h2
          className="text-center text-3xl font-semibold text-white md:text-4xl"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 260, damping: 70 }}
        >
          Ce que je construis pour vous
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">
          Six familles d’expertise — du site vitrine à l’outil métier complexe, en passant par le
          SEO et l’IA.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {HOME_SERVICE_CARDS.map((card, index) => (
            <motion.article
              key={card.href}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, type: 'spring', stiffness: 280, damping: 72 }}
            >
              <span className="font-mono text-xs text-white/40">{card.number}</span>
              <h3 className="mt-2 text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">
                {card.description}
              </p>
              <p className="mt-4 text-xs text-white/45">{card.tags.join(' · ')}</p>
              <Link
                href={card.href}
                className="mt-5 text-sm font-medium text-white/90 underline-offset-4 hover:underline"
              >
                Découvrir →
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

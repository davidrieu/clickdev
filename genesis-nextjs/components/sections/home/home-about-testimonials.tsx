'use client';

import { HOME_TESTIMONIALS } from '@/lib/constants/home-content';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HomeAboutTestimonials() {
  return (
    <>
      <section className="mt-24 md:mt-32">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-gradient-to-br from-white/12 to-white/[0.03] ring-1 ring-white/10"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            aria-hidden
          />
          <div>
            <motion.p
              className="font-mono text-[11px] tracking-widest text-white/45 uppercase"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              À propos
            </motion.p>
            <motion.h2
              className="mt-3 text-3xl font-semibold md:text-4xl"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Derrière Clickdev,{' '}
              <em className="font-serif font-medium text-white/90 not-italic">David Rieu</em>
            </motion.h2>
            <motion.p
              className="mt-5 text-sm leading-relaxed text-white/75 md:text-base"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Je suis développeur freelance avec une décennie de projets web, mobile et outils
              métiers. J’aime les équipes exigeantes, les sujets techniques sérieux, et les
              livrables qui tiennent dans le temps.
            </motion.p>
            <motion.p
              className="mt-4 text-sm leading-relaxed text-white/75 md:text-base"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.14 }}
            >
              Mon approche : être transparent sur les risques, pragmatique sur le scope, et
              rigoureux sur la qualité (perf, SEO technique, accessibilité).
            </motion.p>
            <Link
              href="/a-propos"
              className="mt-8 inline-block rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              En savoir plus
            </Link>
          </div>
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
          Témoignages
        </motion.h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {HOME_TESTIMONIALS.map((t, index) => (
            <motion.blockquote
              key={t.name}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, type: 'spring', stiffness: 280, damping: 72 }}
            >
              <p className="text-sm leading-relaxed text-white/85 md:text-base">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-white/55">
                <span className="font-medium text-white/80">{t.name}</span> — {t.role}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>
    </>
  );
}

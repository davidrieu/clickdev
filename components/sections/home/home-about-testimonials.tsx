'use client';

import { HOME_TESTIMONIALS } from '@/lib/constants/home-content';
import { SOCIAL_LINKS } from '@/lib/constants/site';
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
              key={t.id}
              className="flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, type: 'spring', stiffness: 280, damping: 72 }}
            >
              <span className="mb-4 inline-flex gap-0.5 text-amber-300/90" role="img" aria-label="5 sur 5">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg key={i} className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
                  </svg>
                ))}
              </span>
              <p className="whitespace-pre-line text-sm leading-relaxed text-white/85 md:text-base">«{t.quote}»</p>
            </motion.blockquote>
          ))}
        </div>
        <p className="mt-8 text-center text-[11px] text-white/38">
          <a
            href={SOCIAL_LINKS.codeur}
            rel="me noopener noreferrer"
            target="_blank"
            className="text-white/45 transition-none hover:text-white/45"
          >
            Voir sur Codeur.com
          </a>
        </p>
      </section>
    </>
  );
}

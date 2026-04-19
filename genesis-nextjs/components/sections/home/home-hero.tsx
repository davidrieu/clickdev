'use client';

import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stats = [
  { value: '80+', label: 'projets livrés' },
  { value: '10 ans', label: "d'expérience" },
  { value: '98%', label: 'clients satisfaits' },
  { value: 'TPE → CAC40', label: 'tailles de projet' },
];

function monthLabel() {
  return new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' }).format(new Date());
}

export default function HomeHero() {
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
      <section className="flex flex-col items-center px-2 pt-10 pb-4 md:pt-14">
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ y: -12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 320, damping: 70 }}
        >
          <Badge variant="secondary" className="border-white/20 bg-white/10 text-white/90">
            <span
              className="mr-2 inline-flex size-2 animate-pulse rounded-full bg-emerald-400"
              aria-hidden
            />
            Disponible pour de nouveaux projets — {monthLabel()}
          </Badge>
        </motion.div>
        <motion.h1
          className="mt-6 max-w-4xl text-center text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 240, damping: 70 }}
        >
          Développeur freelance pour sites, applications et outils digitaux.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-center text-base leading-relaxed text-white/80 md:text-lg"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, type: 'spring', stiffness: 280, damping: 70 }}
        >
          Depuis 10 ans, je conçois des plateformes digitales sur mesure, des projets de
          particuliers aux grands groupes. Accor, Greenweez, Spreadshirt mais aussi des artisans,
          PME et startups me font confiance.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 280, damping: 70 }}
        >
          <Link href="/devis" className="btn glass px-8 py-3 text-sm md:text-base">
            Démarrer un projet →
          </Link>
          <Link
            href="/realisations"
            className="rounded-full border border-white/25 px-8 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10 md:text-base"
          >
            Voir les réalisations
          </Link>
        </motion.div>
        <motion.div
          className="mt-14 w-full max-w-4xl border-t border-white/15 pt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-semibold tracking-tight md:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-white/55 md:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { PremiumFinalCta } from '@/components/silos/sites-internet/premium-final-cta';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { caseStudyTypeOrCategoryLabel } from '@/lib/constants/case-study';
import type { SanityCaseStudyTeaser } from '@/types/sanity-case-study';

import { displayMetric, displayYear } from '@/components/silos/sites-internet/premium-cases';

import { PremiumPageBreadcrumb } from './premium-page-breadcrumb';

const INTRO =
  "Découvrez mon portfolio en tant que développeur web freelance spécialisé en création de sites web, applications mobiles et solutions digitales. Chaque réalisation est une histoire de collaboration, d'innovation et de résultats concrets. 110+ projets variés — du site vitrine à la plateforme complexe — que j'ai eu le plaisir de mener.";

type Props = {
  cases: SanityCaseStudyTeaser[];
  configured: boolean;
};

export function RealisationsListClient({ cases, configured }: Props) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <main className="bg-black text-white">
      <PremiumPageBreadcrumb
        items={[
          { href: '/', label: 'Accueil' },
          { href: '/realisations', label: 'Réalisations', current: true },
        ]}
      />

      <section
        className="relative overflow-hidden bg-black pt-20 pb-16 md:pt-24 md:pb-24 lg:pt-28 lg:pb-32"
        onPointerMoveCapture={onPointerMoveCapture}
        onPointerLeave={onPointerLeave}
      >
        <StellarField count={96} className="opacity-[0.88]" interactive pointer={pointer} shootingMeteors />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />
        <div className="relative z-10 si-shell-1400">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Chapitre · Portfolio</span>
              <span className="block h-px max-w-[120px] flex-1 origin-left bg-gradient-to-r from-white/50 to-white/12" />
            </div>
            <p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase md:text-[11px]">
              Réalisations — Clickdev
            </p>
            <h1 className="si-serif-display mt-8 text-[clamp(2.125rem,4vw,3.75rem)] leading-[1.06] font-medium tracking-[-0.035em] text-white">
              Réalisations
            </h1>
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/72 md:text-lg">{INTRO}</p>
          </motion.div>

          <div className="mt-12 md:mt-16">
          {!configured ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-8 text-center text-sm text-white/65 md:p-10">
              <p>
                Ajoutez{' '}
                <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs">NEXT_PUBLIC_SANITY_PROJECT_ID</code>{' '}
                sur l’environnement pour charger le portfolio depuis Sanity.
              </p>
            </div>
          ) : cases.length === 0 ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-white/20 bg-white/[0.03] p-8 text-center text-sm text-white/65 md:p-10">
              <p>Aucune réalisation publiée pour le moment. Créez un document « Réalisation (portfolio) » dans Sanity.</p>
            </div>
          ) : (
            <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {cases.map((c, index) => (
                <motion.li
                  key={c._id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6%' }}
                  transition={{ delay: index * 0.05, duration: 0.45 }}
                  className="min-h-0"
                >
                  <motion.div
                    className="h-full"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  >
                    <Link
                      href={`/realisations/${c.slug}`}
                      className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 transition duration-500 hover:border-white/[0.16]"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                        {c.thumbnail ? (
                          <Image
                            src={c.thumbnail}
                            alt={`Aperçu — ${c.title}`}
                            fill
                            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black"
                            aria-hidden
                          />
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                      </div>
                      <div className="relative z-[2] flex flex-1 flex-col p-6">
                        <span className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">
                          {caseStudyTypeOrCategoryLabel(c)}
                        </span>
                        <h2 className="mt-2 text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
                          {c.title}
                        </h2>
                        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
                          {c.tagline?.trim() ||
                            (c.client
                              ? `Projet pour ${c.client}${c.year ? ` · ${c.year}` : ''}.`
                              : 'Voir la fiche pour le contexte et les résultats.')}
                        </p>
                        <p className="mt-3 font-mono text-[10px] tracking-wider text-white/45">
                          {displayMetric(c)} <span className="text-white/30">·</span> {displayYear(c)}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white">
                          Découvrir <span aria-hidden>↗</span>
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          )}
          </div>
        </div>
      </section>

      <PremiumFinalCta
        title="Un projet sur la même base ?"
        description={
          <p>
            De la vitrine à la plateforme : on cadrera ensemble objectifs, stack et jalons. Première réponse sous{' '}
            <strong className="font-medium text-white/85">24h ouvrées</strong>.
          </p>
        }
        primaryHref="/devis"
        primaryLabel="Demander un devis"
        secondaryHref="/contact"
        secondaryLabel="Parler de votre projet"
      />
    </main>
  );
}

'use client';

import Link from 'next/link';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { ServiceCardGlow } from '@/components/premium/service-card-glow';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { motion, useReducedMotion } from 'framer-motion';

type BentoItem = { href: string; title: string; description: string };

const ITEMS: BentoItem[] = [
  {
    href: '/ia/integration-ia',
    title: 'IA dans le site ou l’appli',
    description: 'Assistant, formulaires intelligents : intégration propre, budget maîtrisé, données protégées.',
  },
  {
    href: '/ia/chatbot-ia',
    title: 'Chatbot & assistant',
    description: 'Réponses basées sur vos textes, transfert vers une vraie personne, lien avec le support.',
  },
  {
    href: '/ia/agents-ia',
    title: 'Scénarios sur plusieurs étapes',
    description: 'Enchaîner des actions dans vos outils avec limites, validation humaine et suivi clair.',
  },
  {
    href: '/ia/automatisation-ia',
    title: 'Automatisation IA',
    description: 'Tri de demandes, extraction d’infos : relecture humaine quand la confiance n’est pas totale.',
  },
  {
    href: '/ia/rag-base-connaissances',
    title: 'Vos documents, vos réponses',
    description: 'FAQ interne, notices, PDF : l’assistant cite vos sources et dit quand il ne sait pas.',
  },
  {
    href: '/ia/ia-generative-ecommerce',
    title: 'IA & boutique en ligne',
    description: 'Brouillons de fiches, aide au support : sous votre contrôle, sans promesses inventées.',
  },
];

function BentoTile({ item, index }: { item: BentoItem; index: number }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.06, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[240px] sm:min-h-[252px] md:min-h-[268px]"
    >
      <motion.div
        className="h-full min-h-[inherit]"
        whileHover={reduce ? undefined : { scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      >
        <Link
          href={item.href}
          className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-6 transition duration-500 hover:border-white/[0.16]"
        >
          <ServiceCardGlow />
          <div className="relative z-[2] mt-auto flex flex-col pt-6 sm:pt-8">
            <h3 className="text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-xl">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)]">
              {item.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white sm:text-xs">
              Découvrir <span aria-hidden>↗</span>
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function IaPremiumBento() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <section
      id="offres"
      className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={40} className="opacity-[0.55]" interactive pointer={pointer} />
      <div className="relative z-10 si-shell-1400">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Offres</p>
          <h2 className="si-serif-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] font-medium tracking-[-0.03em] text-white">
            Six façons d’utiliser l’IA au service de votre activité
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Chaque page résume l’idée, pour qui c’est fait, le déroulé et une fourchette de budget indicative.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {ITEMS.map((item, i) => (
            <BentoTile key={item.href} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

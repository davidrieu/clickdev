'use client';

import Link from 'next/link';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { ServiceCardGlow } from '@/components/premium/service-card-glow';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { motion, useReducedMotion } from 'framer-motion';

type BentoItem = { href: string; title: string; description: string };

const ITEMS: BentoItem[] = [
  { href: '/seo/audit-seo', title: 'Audit SEO', description: 'État des lieux clair : urgences, quick wins, sans jargon.' },
  { href: '/seo/seo-technique', title: 'SEO technique', description: 'Vitesse, indexation, erreurs : je code les correctifs.' },
  { href: '/seo/seo-local', title: 'SEO local', description: 'Maps, pages ville, avis : être trouvé près de chez vous.' },
  { href: '/seo/seo-ecommerce', title: 'SEO e-commerce', description: 'Catalogue, filtres, fiches : structure pour Google.' },
  { href: '/seo/migration-seo', title: 'Migration SEO', description: 'Changement d’URL ou de CMS sans tout perdre.' },
  { href: '/seo/redaction-seo', title: 'Rédaction SEO', description: 'Pages utiles, intentions réelles, FAQ honnêtes.' },
  { href: '/seo/netlinking', title: 'Netlinking', description: 'Liens de qualité, pas de spam ni fermes douteuses.' },
  {
    href: '/seo/geo-generative-engine-optimization',
    title: 'GEO',
    description: 'Être mieux cité quand on pose la question à une IA — sans promesse magique.',
  },
];

function BentoTile({ item, index }: { item: BentoItem; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.05, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[220px] sm:min-h-[236px] md:min-h-[248px]"
    >
      <motion.div className="h-full min-h-[inherit]" whileHover={reduce ? undefined : { scale: 1.01 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
        <Link
          href={item.href}
          className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-5 transition duration-500 hover:border-white/[0.16] sm:p-6"
        >
          <ServiceCardGlow />
          <div className="relative z-[2] mt-auto flex flex-col pt-5 sm:pt-7">
            <h3 className="text-base font-semibold tracking-tight text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.75)] md:text-lg">{item.title}</h3>
            <p className="mt-2 text-xs leading-relaxed text-white/75 [text-shadow:0_1px_10px_rgba(0,0,0,0.8)] sm:text-sm">{item.description}</p>
            <span className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/60 uppercase transition group-hover:gap-3 group-hover:text-white sm:text-[11px]">
              Découvrir <span aria-hidden>↗</span>
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function SeoPremiumBento() {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  return (
    <section
      id="offres"
      className="relative overflow-hidden bg-black py-24 md:py-36 lg:py-44"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <PremiumSectionDivider />
      <StellarField count={36} className="opacity-[0.5]" interactive pointer={pointer} />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Offres</p>
          <h2 className="si-serif-display mt-4 text-[clamp(1.85rem,3.6vw,3.1rem)] leading-[1.08] font-medium tracking-[-0.03em] text-white">
            Huit leviers pour votre visibilité Google
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Textes courts, objectifs clairs. Chaque page indique un budget indicatif.
          </p>
        </motion.div>
        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {ITEMS.map((item, i) => (
            <BentoTile key={item.href} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

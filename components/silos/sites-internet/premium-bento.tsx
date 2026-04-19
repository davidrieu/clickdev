'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type BentoItem = {
  href: string;
  title: string;
  description: string;
};

const ITEMS: BentoItem[] = [
  {
    href: '/sites-internet/site-vitrine',
    title: 'Site vitrine',
    description: 'Présenter votre activité avec une hiérarchie claire et un mobile irréprochable.',
  },
  {
    href: '/sites-internet/site-ecommerce',
    title: 'E-commerce',
    description: 'Tunnel, perf, SEO catalogue — sans sacrifier la vélocité business.',
  },
  {
    href: '/sites-internet/marketplace',
    title: 'Marketplace',
    description: 'Multi-vendeurs, confiance, modération — architecture à la hauteur.',
  },
  {
    href: '/sites-internet/site-mise-en-relation',
    title: 'Mise en relation',
    description: 'Matching, confiance, conversion des deux côtés du marché.',
  },
  {
    href: '/sites-internet/site-sur-mesure',
    title: 'Sur mesure',
    description: 'Règles métiers complexes, intégrations, produit web comme actif.',
  },
  {
    href: '/sites-internet/site-wordpress',
    title: 'WordPress',
    description: 'Autonomie rédactionnelle avec discipline perf & sécurité.',
  },
  {
    href: '/sites-internet/intranet-extranet',
    title: 'Intranet / extranet',
    description: 'Portails RH, docs, workflows — usage interne exigeant.',
  },
  {
    href: '/sites-internet/landing-page',
    title: 'Landing page',
    description: 'Campagne, message unique, vitesse de chargement et tracking propres.',
  },
];

function useFirstRowParallax(index: number, reduce: boolean | null) {
  const tileRef = useRef<HTMLDivElement>(null);
  const active = !reduce && index < 4;

  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    !active ? [0, 0] : index === 0 ? [10, -10] : index === 1 ? [8, -8] : index === 2 ? [6, -6] : [5, -5],
  );

  return { tileRef, parallaxY };
}

/** Halos bleu nuit + léger voile bas pour garder le texte blanc lisible. */
function BentoNightGlow() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.48] transition duration-500 group-hover:opacity-[0.62]"
        style={{
          background:
            'radial-gradient(ellipse 130% 90% at 88% 8%, rgba(59, 91, 168, 0.42), transparent 52%), radial-gradient(circle at 12% 65%, rgba(30, 58, 138, 0.5), transparent 48%), radial-gradient(circle at 48% 100%, rgba(15, 23, 42, 0.55), transparent 42%)',
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black via-black/85 to-transparent" />
    </div>
  );
}

function BentoTile({ item, index }: { item: BentoItem; index: number }) {
  const reduce = useReducedMotion();
  const { tileRef, parallaxY } = useFirstRowParallax(index, reduce);

  return (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-[240px] sm:min-h-[260px] md:min-h-[280px]"
    >
      <motion.div
        className="h-full min-h-[inherit]"
        whileHover={reduce ? undefined : { scale: 1.012 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        <Link
          href={item.href}
          className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0a1628]/90 to-black p-5 transition duration-500 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(520px_220px_at_90%_-10%,rgba(96,165,250,0.12),transparent_55%)] before:opacity-0 before:transition-opacity before:duration-500 hover:border-white/[0.16] hover:before:opacity-100 sm:p-6 md:p-7"
        >
          <span
            className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(380px 200px at 75% 0%, rgba(59, 130, 246, 0.18), transparent 62%)',
            }}
            aria-hidden
          />
          <motion.div className="pointer-events-none absolute inset-0" style={{ y: parallaxY }} aria-hidden>
            <BentoNightGlow />
          </motion.div>
          <div className="relative z-[2] mt-auto pt-6 sm:pt-8">
            <h3 className="text-lg font-semibold tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.75)] sm:text-xl md:text-2xl">
              {item.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-white/80 [text-shadow:0_1px_12px_rgba(0,0,0,0.8)] sm:text-sm">
              {item.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-wider text-white/70 [text-shadow:0_1px_10px_rgba(0,0,0,0.85)] uppercase transition group-hover:gap-3 group-hover:text-white sm:text-xs">
              Découvrir <span aria-hidden>↗</span>
            </span>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}

export function PremiumBento() {
  return (
    <section className="relative border-t border-white/[0.06] bg-black py-24 md:py-36 lg:py-44">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Typologies</p>
          <h2 className="si-serif-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] font-medium tracking-[-0.03em] text-white">
            Huit façons de faire web — une seule exigence : la qualité.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Huit cartes en quatre colonnes : chacune mène vers une page détaillée.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {ITEMS.map((item, i) => (
            <BentoTile key={item.href} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

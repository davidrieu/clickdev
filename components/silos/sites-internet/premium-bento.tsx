'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

type BentoItem = {
  href: string;
  title: string;
  description: string;
  /** layout on md+ */
  className: string;
  visual: 'mesh-a' | 'mesh-b' | 'grid-lines' | 'rings' | 'diagonal' | 'dots' | 'bars' | 'pulse';
};

const ITEMS: BentoItem[] = [
  {
    href: '/sites-internet/site-vitrine',
    title: 'Site vitrine',
    description: 'Présenter votre activité avec une hiérarchie claire et un mobile irréprochable.',
    className: 'md:col-span-2 md:row-span-2 min-h-[300px]',
    visual: 'mesh-a',
  },
  {
    href: '/sites-internet/site-ecommerce',
    title: 'E-commerce',
    description: 'Tunnel, perf, SEO catalogue — sans sacrifier la vélocité business.',
    className: 'md:col-span-2 md:row-span-2 min-h-[300px]',
    visual: 'mesh-b',
  },
  {
    href: '/sites-internet/marketplace',
    title: 'Marketplace',
    description: 'Multi-vendeurs, confiance, modération — architecture à la hauteur.',
    className: 'min-h-[200px]',
    visual: 'grid-lines',
  },
  {
    href: '/sites-internet/site-mise-en-relation',
    title: 'Mise en relation',
    description: 'Matching, confiance, conversion des deux côtés du marché.',
    className: 'min-h-[200px]',
    visual: 'rings',
  },
  {
    href: '/sites-internet/site-sur-mesure',
    title: 'Sur mesure',
    description: 'Règles métiers complexes, intégrations, produit web comme actif.',
    className: 'min-h-[200px]',
    visual: 'diagonal',
  },
  {
    href: '/sites-internet/site-wordpress',
    title: 'WordPress',
    description: 'Autonomie rédactionnelle avec discipline perf & sécurité.',
    className: 'min-h-[200px]',
    visual: 'dots',
  },
  {
    href: '/sites-internet/intranet-extranet',
    title: 'Intranet / extranet',
    description: 'Portails RH, docs, workflows — usage interne exigeant.',
    className: 'md:col-span-2 min-h-[200px]',
    visual: 'bars',
  },
  {
    href: '/sites-internet/landing-page',
    title: 'Landing page',
    description: 'Campagne, message unique, vitesse de chargement et tracking propres.',
    className: 'md:col-span-2 min-h-[200px]',
    visual: 'pulse',
  },
];

function isFeatured(item: BentoItem) {
  return item.className.includes('row-span-2');
}

function BentoTile({ item, index }: { item: BentoItem; index: number }) {
  const reduce = useReducedMotion();
  const tileRef = useRef<HTMLDivElement>(null);
  const featured = isFeatured(item);

  const { scrollYProgress } = useScroll({
    target: tileRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce || !featured ? [0, 0] : index === 0 ? [22, -22] : [16, -16],
  );

  return (
    <motion.div
      ref={tileRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ delay: index * 0.08, duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
      className={item.className}
    >
      <motion.div
        className="h-full min-h-[inherit]"
        whileHover={reduce ? undefined : { scale: 1.012 }}
        transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      >
        <Link
          href={item.href}
          className="group relative flex h-full min-h-[inherit] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.035] to-black/40 p-6 transition duration-500 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(520px_220px_at_90%_-10%,rgba(242,106,6,0.14),transparent_55%)] before:opacity-0 before:transition-opacity before:duration-500 hover:border-white/[0.16] hover:from-white/[0.05] hover:before:opacity-100 md:p-8"
        >
          <span
            className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(400px 200px at 80% 0%, rgba(242,106,6,0.14), transparent 60%)',
            }}
            aria-hidden
          />
          <motion.div className="pointer-events-none absolute inset-0" style={{ y: parallaxY }} aria-hidden>
            <BentoVisual variant={item.visual} />
          </motion.div>
          <div className="relative z-[1] mt-auto pt-8">
            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">{item.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-white/55">{item.description}</p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs tracking-wider text-[#F26A06] uppercase transition group-hover:gap-3">
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
          <p className="font-mono text-[11px] tracking-[0.28em] text-[#F26A06] uppercase">Typologies</p>
          <h2 className="si-serif-display mt-4 text-[clamp(2rem,4vw,3.5rem)] leading-[1.08] font-medium tracking-[-0.03em] text-white">
            Huit façons de faire web — une seule exigence : la qualité.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
            Chaque carte mène vers une page détaillée. Tailles et textures différentes pour casser la monotonie des
            grilles « produit ».
          </p>
        </motion.div>

        <div className="mt-16 grid auto-rows-fr grid-cols-1 gap-3 md:grid-cols-4 md:gap-4">
          {ITEMS.map((item, i) => (
            <BentoTile key={item.href} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoVisual({ variant }: { variant: BentoItem['visual'] }) {
  const base = 'pointer-events-none absolute inset-0 opacity-[0.35] transition duration-500 group-hover:opacity-55';
  switch (variant) {
    case 'mesh-a':
      return (
        <div
          className={base}
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(209,10,138,0.35), transparent 45%), radial-gradient(circle at 80% 20%, rgba(46,8,207,0.3), transparent 40%)',
          }}
          aria-hidden
        />
      );
    case 'mesh-b':
      return (
        <div
          className={base}
          style={{
            background:
              'radial-gradient(circle at 70% 40%, rgba(242,106,6,0.35), transparent 50%), radial-gradient(circle at 10% 80%, rgba(46,8,207,0.25), transparent 45%)',
          }}
          aria-hidden
        />
      );
    case 'grid-lines':
      return (
        <div
          className={base}
          style={{
            opacity: 0.35,
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
          aria-hidden
        />
      );
    case 'rings':
      return (
        <div className={`${base} flex items-center justify-center`} aria-hidden>
          <div className="size-40 rounded-full border border-white/10" />
          <div className="absolute size-28 rounded-full border border-white/[0.08]" />
          <div className="absolute size-16 rounded-full border border-[#F26A06]/20" />
        </div>
      );
    case 'diagonal':
      return (
        <div
          className={`${base} bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.04)_2px,transparent_2px,transparent_14px)]`}
          aria-hidden
        />
      );
    case 'dots':
      return (
        <div
          className={base}
          style={{
            opacity: 0.45,
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1.5px)',
            backgroundSize: '10px 10px',
          }}
          aria-hidden
        />
      );
    case 'bars':
      return (
        <div className={`${base} flex items-end justify-center gap-1.5 pb-4 opacity-40`} aria-hidden>
          {[32, 52, 38, 64, 44, 56, 36].map((h, j) => (
            <span
              key={j}
              className="w-2 rounded-t bg-gradient-to-t from-white/10 to-white/30 transition-all duration-500 group-hover:opacity-100"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      );
    case 'pulse':
      return (
        <div className={base} aria-hidden>
          <div className="absolute left-1/2 top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F26A06]/10 blur-3xl transition group-hover:bg-[#F26A06]/18" />
        </div>
      );
    default:
      return null;
  }
}

'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

export type ExpertiseIndexGroupProps = {
  id: string;
  title: string;
  description: string;
  items: { slug: string; name: string; teaser: string }[];
};

type Props = { groups: ExpertiseIndexGroupProps[] };

export function ExpertisesIndexGrid({ groups }: Props) {
  return (
    <div className="bg-black">
      <PremiumSectionDivider />
      {groups.map((group, gi) => (
        <ExpertiseGroupSection key={group.id} group={group} index={gi} />
      ))}
    </div>
  );
}

function ExpertiseGroupSection({ group, index }: { group: ExpertiseIndexGroupProps; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-8%' });
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();
  const starCount = 28 + index * 6;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-t border-white/10 py-16 first:border-t-0 md:py-24 lg:py-28"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={starCount} className="opacity-[0.42]" interactive pointer={pointer} />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,rgba(255,255,255,0.03),transparent)]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8">
        <motion.div
          className="mx-auto max-w-[720px] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.26em] text-white/40 uppercase">Thématique {index + 1}</p>
          <h2 className="si-serif-display mt-3 text-balance text-[clamp(1.45rem,3vw,2.1rem)] font-medium tracking-[-0.03em] text-white">
            {group.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/58 md:text-base">{group.description}</p>
        </motion.div>

        <ul className="mt-12 grid list-none gap-4 p-0 sm:grid-cols-2 lg:gap-5">
          {group.items.map((item, i) => (
            <motion.li
              key={item.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 + i * 0.05, duration: 0.45 }}
            >
              <Link
                href={`/expertises/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900 p-5 transition duration-500 hover:border-white/[0.18] hover:shadow-[0_24px_80px_-40px_rgba(46,8,207,0.35)]"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">Fiche</span>
                <span className="si-serif-display mt-2 text-lg font-medium tracking-[-0.02em] text-white transition group-hover:text-white">
                  {item.name}
                </span>
                <span className="mt-3 line-clamp-4 text-sm leading-relaxed text-white/55">{item.teaser}</span>
                <span className="mt-4 text-xs font-medium text-white/45 transition group-hover:text-white/70">
                  Lire la fiche →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

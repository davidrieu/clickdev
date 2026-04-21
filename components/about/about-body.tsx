'use client';

import { useRef, type ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

import { PremiumSectionDivider } from '@/components/home-premium/premium-section-divider';
import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';

const sections = [
  {
    kicker: 'Sur mesure',
    title: 'Des outils numériques sur mesure',
    body: (
      <>
        <p>
          Chaque projet sur lequel je travaille est unique. Ma démarche de personnalisation donne l’opportunité
          d’adapter l’outil à vos besoins et non l’inverse. La phase de conseil permet de bien comprendre vos attentes
          afin de les retranscrire avec la solution technique la plus appropriée.
        </p>
        <p className="mt-4">
          Les accompagnements en gestion de projet, webdesign, technique et stratégie sont toujours propres à votre
          situation.
        </p>
      </>
    ),
  },
  {
    kicker: 'Stratégie',
    title: 'La vision « business » du projet',
    body: (
      <>
        <p>
          Partager la vision stratégique du projet est pour moi essentiel : rien n’est laissé au hasard. Cela me permet
          d’être force de proposition sur mes domaines d’expertise, mais également sur les aspects business model ou
          optimisation des process grâce aux technologies numériques.
        </p>
        <p className="mt-4">
          Ces conseils sont notamment prodigués lors de mes audits et rendez-vous de réflexion avant projet.
        </p>
      </>
    ),
  },
  {
    kicker: 'Relation',
    title: 'Partenaire plus que prestataire',
    body: (
      <>
        <p>
          Plus qu’un simple prestataire technique, je souhaite me positionner comme un véritable partenaire. Très
          impliqué dans chacune de mes missions, je pense que l’exécution seule d’un projet ne peut être qu’une partie
          de sa réussite.
        </p>
        <p className="mt-4">
          C’est pourquoi j’ai à cœur de vous partager mes conseils et mon expertise, tout au long du développement de
          votre projet web ou mobile. Je vous accompagne sur le long terme pour le faire évoluer et atteindre toujours
          de meilleures performances.
        </p>
      </>
    ),
  },
] as const;

export function AboutBody() {
  const introRef = useRef(null);
  const introInView = useInView(introRef, { once: true, margin: '-10%' });
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <>
      <section
        ref={introRef}
        className="relative overflow-hidden bg-[oklch(0.11_0_0)] py-20 md:py-28 lg:py-32"
        onPointerMoveCapture={onPointerMoveCapture}
        onPointerLeave={onPointerLeave}
      >
        <StellarField count={32} className="opacity-[0.45]" interactive pointer={pointer} />
        <div className="relative z-10 mx-auto max-w-[820px] px-4 md:px-8">
          <motion.p
            className="si-serif-display text-balance text-[clamp(1.35rem,2.8vw,1.85rem)] leading-snug font-medium tracking-[-0.02em] text-white/90"
            initial={{ opacity: 0, y: 24 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Qualité avant livraison, clarté après mise en ligne.
          </motion.p>
          <motion.div
            className="mt-8 space-y-4 text-base leading-relaxed text-white/65 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={introInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08, duration: 0.55 }}
          >
            <p>
              Des tests sont régulièrement réalisés en amont du lancement pour garantir un fonctionnement optimal. Une
              fois livré, j’analyse les indicateurs pertinents pour m’assurer de la réussite du projet — et ajuster ce
              qui doit l’être.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="bg-black">
        <PremiumSectionDivider />
      </div>

      <section className="relative overflow-hidden bg-black py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1100px] space-y-16 px-4 md:space-y-20 md:px-8 lg:space-y-24">
          {sections.map((s, index) => (
            <AboutSectionBlock key={s.title} kicker={s.kicker} title={s.title} index={index}>
              {s.body}
            </AboutSectionBlock>
          ))}
        </div>
      </section>
    </>
  );
}

function AboutSectionBlock({
  kicker,
  title,
  index,
  children,
}: {
  kicker: string;
  title: string;
  index: number;
  children: ReactNode;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-12%' });

  return (
    <article
      ref={ref}
      className={`relative scroll-mt-28 border-t border-white/10 pt-14 md:pt-16 ${index === 0 ? 'border-t-0 pt-0 md:pt-0' : ''}`}
    >
      <motion.p
        className="font-mono text-[10px] tracking-[0.26em] text-white/40 uppercase"
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45 }}
      >
        {kicker}
      </motion.p>
      <motion.h2
        className="si-serif-display mt-4 max-w-3xl text-balance text-[clamp(1.5rem,3.2vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-white"
        initial={{ opacity: 0, y: 22 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>
      <motion.div
        className="mt-6 max-w-3xl text-base leading-relaxed text-white/65 md:text-lg [&_p]:text-pretty"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.12, duration: 0.5 }}
      >
        {children}
      </motion.div>
    </article>
  );
}

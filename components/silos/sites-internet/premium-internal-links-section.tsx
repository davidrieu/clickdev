import Link from 'next/link';

import { PREMIUM_INTERNAL_LINK_GRID } from '@/lib/constants/premium-internal-links';

/** Bloc maillage interne (style aligné sur les sections premium sites-internet). */
export function PremiumInternalLinksSection() {
  return (
    <section
      aria-labelledby="premium-internal-links-heading"
      className="relative border-t border-white/[0.08] bg-black py-16 md:py-24"
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 md:px-8">
        <p className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Pour aller plus loin</p>
        <h2
          id="premium-internal-links-heading"
          className="si-serif-display mt-4 text-[clamp(1.5rem,2.8vw,2.25rem)] font-medium tracking-[-0.03em] text-white"
        >
          Autres pages du site qui peuvent vous être utiles
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
          Je préfère qu’on puisse passer du référencement à la boutique, de la PWA au chatbot, sans se perdre. Voici une
          partie du plan du site — cliquez sur ce qui ressemble à votre prochaine étape.
        </p>
        <ul className="mt-10 grid list-none grid-cols-1 gap-x-10 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {PREMIUM_INTERNAL_LINK_GRID.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex text-sm leading-snug text-white/72 underline-offset-[5px] transition hover:text-white hover:underline md:text-[15px]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

'use client';

import {
  StellarField,
  useSkyStellarPointer,
} from '@/components/silos/sites-internet/stellar-field';
import { useReducedMotion } from 'framer-motion';

const SKY_HEIGHT_VH = 200;

/**
 * Ciel stellaire commun (haut de page) : en arrière-plan, **en dehors** du menu et du contenu
 * (z-0, les couches UI sont en z-10+). Avec le hero sans second champ d’étoiles, le rendu
 * enchaîne menu → hero sans « découpe ».
 */
export function MarketingStellarSky() {
  const reduce = useReducedMotion();
  const { pointer } = useSkyStellarPointer(SKY_HEIGHT_VH);

  return (
    <div
      className="pointer-events-none absolute top-0 left-0 z-0 w-full overflow-hidden"
      style={{ minHeight: `${SKY_HEIGHT_VH}dvh` }}
      aria-hidden
    >
      <StellarField
        count={52}
        className="opacity-[0.88]"
        interactive={!reduce}
        pointer={reduce ? null : pointer}
        shootingMeteors
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.05),transparent)]" />
    </div>
  );
}

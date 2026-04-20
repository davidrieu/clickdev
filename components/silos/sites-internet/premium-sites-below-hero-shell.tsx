'use client';

import type { ReactNode } from 'react';

import { StellarField, useSectionStellarPointer } from './stellar-field';

/** Champ stellaire unique pour tout le contenu sous le hero (pointer partagé). */
export function PremiumSitesBelowHeroShell({ children }: { children: ReactNode }) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  return (
    <div
      className="relative bg-black text-white"
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField count={56} className="opacity-[0.68]" interactive pointer={pointer} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

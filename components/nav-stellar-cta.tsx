'use client';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type NavStellarCtaProps = {
  /** CTA cliquable (barre) ou remplacé par un <button> côté mobile. */
  href: string;
  onNavigate?: () => void;
  className?: string;
  /** Remplace le libellé par ex. le bouton d’en-tête tiroir (mobile) */
  children?: ReactNode;
  /** CTA pleine largeur, coins plus marqués (pied de tiroir) */
  layout?: 'bar' | 'sheet';
};

export function NavStellarCta({
  href,
  onNavigate,
  className,
  children,
  layout = 'bar',
}: NavStellarCtaProps) {
  const { pointer, onPointerMoveCapture, onPointerLeave } = useSectionStellarPointer();

  const label = children ?? 'Demander un devis';

  return (
    <Link
      href={href}
      onClick={onNavigate}
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
      className={cn(
        'relative z-0 inline-flex min-w-0 shrink-0 items-center justify-center overflow-hidden',
        'border font-semibold text-white no-underline transition [transition-duration:200ms] hover:opacity-95',
        'border-[#F26A06]/45 bg-gradient-to-b from-[#F26A06]/28 to-[#1a0a00]/50',
        'shadow-[0_0_0_1px_rgba(242,106,6,0.12),inset_0_1px_0_0_rgba(255,255,255,0.1)]',
        'hover:border-[#F26A06]/60 hover:from-[#F26A06]/38',
        'focus-visible:ring-2 focus-visible:ring-[#F26A06]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black/90 focus-visible:outline-none',
        layout === 'bar' &&
          'min-h-9 max-w-full rounded-full py-1.5 px-3.5 text-[12px] whitespace-nowrap sm:px-4 sm:text-sm',
        layout === 'sheet' &&
          'w-full max-w-full rounded-2xl py-3.5 text-center text-sm',
        className
      )}
    >
      <StellarField
        count={100}
        className="z-0 opacity-[0.88]"
        interactive
        pointer={pointer}
        shootingMeteors
        shootingIntervalScale={0.42}
      />
      <span
        className={cn(
          'pointer-events-none relative z-10 w-full',
          'drop-shadow-[0_1px_2px_rgba(0,0,0,0.65)]',
          'leading-tight',
          layout === 'sheet' && 'px-2',
          'font-semibold'
        )}
      >
        {label}
      </span>
    </Link>
  );
}

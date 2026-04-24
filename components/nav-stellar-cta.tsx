'use client';

import { StellarField, useSectionStellarPointer } from '@/components/silos/sites-internet/stellar-field';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type NavStellarCtaProps = {
  href: string;
  onNavigate?: () => void;
  className?: string;
  children?: ReactNode;
  layout?: 'bar' | 'sheet';
};

/**
 * CTA : fond blanc, texte noir. Le StellarField remplit la zone *autour* (padding du wrapper) ;
 * le bouton op masque l’intérieur — les étoiles et météores ne s’affichent qu’en auréole.
 */
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
    <div
      className={cn(
        'relative z-0 inline-flex items-center justify-center overflow-visible',
        layout === 'bar' && 'p-2.5 sm:p-3',
        layout === 'sheet' && 'w-full max-w-full p-2.5 sm:p-3.5',
      )}
      onPointerMoveCapture={onPointerMoveCapture}
      onPointerLeave={onPointerLeave}
    >
      <StellarField
        count={100}
        className="z-0 opacity-90"
        interactive
        pointer={pointer}
        shootingMeteors
        shootingIntervalScale={0.42}
      />
      <Link
        href={href}
        onClick={onNavigate}
        className={cn(
          'relative z-10 inline-flex min-w-0 items-center justify-center no-underline',
          'border border-black/10 bg-white font-semibold text-black',
          'shadow-sm [transition:background_160ms_ease,box-shadow_160ms_ease]',
          'hover:border-black/12 hover:bg-neutral-100',
          'focus-visible:ring-2 focus-visible:ring-[#F26A06] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950/80 focus-visible:outline-none',
          layout === 'bar' &&
            'min-h-9 max-w-full rounded-full py-1.5 px-3.5 text-[12px] whitespace-nowrap sm:px-4 sm:text-sm',
          layout === 'sheet' &&
            'w-full max-w-full rounded-2xl py-3.5 text-center text-sm',
          className
        )}
      >
        <span className="font-semibold leading-tight text-black">{label}</span>
      </Link>
    </div>
  );
}

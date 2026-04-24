import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type NavCtaProps = {
  href: string;
  onNavigate?: () => void;
  className?: string;
  children?: ReactNode;
  layout?: 'bar' | 'sheet';
};

/**
 * CTA de navigation : bouton clair, texte noir.
 */
export function NavStellarCta({ href, onNavigate, className, children, layout = 'bar' }: NavCtaProps) {
  const label = children ?? 'Demander un devis';

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        'inline-flex min-w-0 shrink-0 items-center justify-center no-underline',
        'border border-black/10 bg-white font-semibold text-black',
        'shadow-sm [transition:background_160ms_ease,box-shadow_160ms_ease]',
        'hover:border-black/12 hover:bg-neutral-100',
        'focus-visible:ring-2 focus-visible:ring-white/35 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 focus-visible:outline-none',
        layout === 'bar' &&
          'min-h-9 max-w-full rounded-full py-1.5 px-3.5 text-[12px] whitespace-nowrap sm:px-4 sm:text-sm',
        layout === 'sheet' &&
          'w-full max-w-full rounded-2xl py-3.5 text-center text-sm',
        className
      )}
    >
      <span className="font-semibold leading-tight text-black">{label}</span>
    </Link>
  );
}

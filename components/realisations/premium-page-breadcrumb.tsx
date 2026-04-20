import Link from 'next/link';

export type PremiumBreadcrumbItem = { href: string; label: string; current?: boolean };

/** Même fil d’Ariane que le pilier /sites-internet (fond noir, bordure légère). */
export function PremiumPageBreadcrumb({ items }: { items: PremiumBreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="relative z-20 border-b border-white/[0.06] bg-black/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-[11px] text-white/45 md:px-8 md:py-3 md:text-xs">
        {items.map((it, i) => (
          <span key={`${it.href}-${it.label}-${i}`} className="inline-flex max-w-full items-center gap-2">
            {i > 0 ? (
              <span aria-hidden className="text-white/25">
                /
              </span>
            ) : null}
            {it.current ? (
              <span
                className="max-w-[min(100%,56vw)] truncate font-medium text-white/60 md:max-w-[min(100%,32rem)]"
                title={it.label}
              >
                {it.label}
              </span>
            ) : (
              <Link href={it.href} className="transition hover:text-white/80">
                {it.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

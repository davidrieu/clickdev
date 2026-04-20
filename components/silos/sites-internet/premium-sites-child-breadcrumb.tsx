import Link from 'next/link';

type Crumb = { label: string; href?: string };

/** Fil d’Ariane 3 niveaux — même style discret que le pilier. */
export function PremiumSitesChildBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="relative z-20 border-b border-white/[0.06] bg-black/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-2 gap-y-1 px-4 py-2.5 text-[11px] text-white/45 md:px-8 md:py-3 md:text-xs">
        {items.map((item, i) => (
          <span key={`${item.label}-${i}`} className="flex items-center gap-2">
            {i > 0 ? (
              <span aria-hidden className="text-white/25">
                /
              </span>
            ) : null}
            {item.href ? (
              <Link href={item.href} className="transition hover:text-white/80">
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-white/60">{item.label}</span>
            )}
          </span>
        ))}
      </div>
    </nav>
  );
}

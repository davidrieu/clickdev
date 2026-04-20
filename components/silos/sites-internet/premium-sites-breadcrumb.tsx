import Link from 'next/link';

/** Fil d’Ariane discret au-dessus du hero (pilier /sites-internet). */
export function PremiumSitesBreadcrumb() {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="relative z-20 border-b border-white/[0.06] bg-black/80 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1400px] items-center gap-2 px-4 py-2.5 text-[11px] text-white/45 md:px-8 md:py-3 md:text-xs">
        <Link href="/" className="transition hover:text-white/80">
          Accueil
        </Link>
        <span aria-hidden className="text-white/25">
          /
        </span>
        <span className="font-medium text-white/60">Sites internet</span>
      </div>
    </nav>
  );
}

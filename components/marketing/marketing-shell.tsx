import Link from 'next/link';

type MarketingShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumb?: { label: string; href: string }[];
};

export default function MarketingShell({
  eyebrow,
  title,
  description,
  breadcrumb,
}: MarketingShellProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
      {breadcrumb && breadcrumb.length > 0 && (
        <nav aria-label="Fil d’Ariane" className="mb-8 text-xs text-white/50">
          <ol className="flex flex-wrap gap-2">
            {breadcrumb.map((b, i) => (
              <li key={b.href} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden>/</span>}
                <Link href={b.href} className="transition hover:text-white/80">
                  {b.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && (
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">{eyebrow}</p>
      )}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">{description}</p>
      <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.03] p-6 text-sm text-white/60">
        <p>
          Contenu détaillé en cours de rédaction (objectif : 1500–2500 mots selon le type de page,
          FAQ, TL;DR et maillage interne, comme défini dans le brief).
        </p>
        <p className="mt-4">
          <Link
            href="/devis"
            className="font-medium text-white/90 underline-offset-4 hover:underline"
          >
            Demander un devis
          </Link>
          {' · '}
          <Link
            href="/contact"
            className="font-medium text-white/90 underline-offset-4 hover:underline"
          >
            Contact
          </Link>
        </p>
      </div>
    </article>
  );
}

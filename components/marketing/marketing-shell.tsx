import Link from 'next/link';
import type { ReactNode } from 'react';

import PageBreadcrumb from '@/components/marketing/page-breadcrumb';

type MarketingShellProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumb?: { label: string; href: string }[];
  children?: ReactNode;
};

export default function MarketingShell({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: MarketingShellProps) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
      {breadcrumb && breadcrumb.length > 0 ? <PageBreadcrumb items={breadcrumb} /> : null}
      {eyebrow && (
        <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">{eyebrow}</p>
      )}
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">
        {title}
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">{description}</p>
      {children ? (
        <div className="mt-10">{children}</div>
      ) : (
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
      )}
    </article>
  );
}

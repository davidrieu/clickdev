import Link from 'next/link';
import type { ReactNode } from 'react';

import { MarketingAmbientBackdrop } from '@/components/marketing/marketing-ambient-backdrop';
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
    <main className="relative">
      <MarketingAmbientBackdrop />
      <div className="relative z-0 mx-auto max-w-6xl px-4 pb-24 pt-6 md:px-8 md:pt-10">
        <article className="mx-auto max-w-[52rem]">
          {breadcrumb && breadcrumb.length > 0 ? (
            <div className="mb-8">
              <PageBreadcrumb items={breadcrumb} />
            </div>
          ) : null}

          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.02] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07)] md:p-10">
            {eyebrow ? (
              <p className="font-mono text-[11px] tracking-widest text-white/50 uppercase">{eyebrow}</p>
            ) : null}
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-[2.75rem] lg:leading-tight">
              {title}
            </h1>
            <div className="mt-8 border-l-4 border-[#F26A06] bg-white/[0.03] py-4 pl-5 pr-4 md:pl-6">
              <p className="text-base leading-relaxed text-white/85 md:text-lg">{description}</p>
            </div>
          </div>

          {children ? (
            <div className="mt-12 md:mt-14">{children}</div>
          ) : (
            <div className="mt-12 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] p-8 text-center text-sm text-white/60 md:p-10">
              <p>
                Contenu détaillé en cours de rédaction (objectif longueur + FAQ + maillage, selon le brief).
              </p>
              <p className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <Link href="/devis" className="btn glass px-6 py-2.5 text-sm font-medium">
                  Demander un devis →
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-medium text-white/90 transition hover:bg-white/10"
                >
                  Contact
                </Link>
              </p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}

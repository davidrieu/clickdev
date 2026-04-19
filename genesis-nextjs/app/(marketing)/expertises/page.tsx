import MarketingShell from '@/components/marketing/marketing-shell';
import { HOME_STACK_ITEMS } from '@/lib/constants/home-content';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Expertises',
  description: 'Technologies et stacks — pages expert SEO par techno.',
};

export default function ExpertisesIndexPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
      <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">SEO</p>
      <h1 className="mt-3 text-3xl font-semibold md:text-4xl">Expertises</h1>
      <p className="mt-6 text-sm leading-relaxed text-white/75 md:text-base">
        Pages courtes ciblées par techno (freelance Next.js, Claude API, etc.). Liens vers les pages
        pilier correspondantes.
      </p>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {HOME_STACK_ITEMS.map((item) => (
          <li key={item.slug}>
            <Link
              href={`/expertises/${item.slug}`}
              className="block rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium transition hover:bg-white/[0.07]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

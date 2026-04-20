import Image from 'next/image';
import Link from 'next/link';

import { BLOG_AUTHOR, BLOG_PROJECT_CTA } from '@/lib/constants/blog-article';
import { formatDateFr } from '@/lib/format/date';
import type { SanityPostTeaser } from '@/types/sanity-post';

type Props = {
  currentSlug: string;
  posts: SanityPostTeaser[];
};

export function BlogPostSidebar({ currentSlug, posts }: Props) {
  const others = posts.filter((p) => p.slug !== currentSlug).slice(0, 5);

  const card =
    'rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950/90 via-neutral-900/50 to-white/[0.02] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]';

  return (
    <aside className="min-w-0" aria-label="Auteur et liens">
      <div className="sticky top-28 space-y-5">
        <div className={card}>
          <p className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">Qui écrit</p>
          <div className="mt-4 flex gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.05] font-mono text-sm font-medium tracking-tight text-white/90"
              aria-hidden
            >
              DR
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold tracking-tight text-white">{BLOG_AUTHOR.name}</p>
              <p className="mt-0.5 text-xs text-white/50">{BLOG_AUTHOR.role}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">{BLOG_AUTHOR.bio}</p>
          <Link
            href="/a-propos"
            className="mt-4 inline-flex text-xs font-medium text-white/75 underline-offset-4 transition hover:text-white hover:underline"
          >
            En savoir plus
          </Link>
        </div>

        <div className={card}>
          <p className="si-serif-display text-[1.35rem] font-medium leading-snug tracking-[-0.02em] text-white">
            {BLOG_PROJECT_CTA.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{BLOG_PROJECT_CTA.body}</p>
          <Link
            href="/devis"
            className="si-btn-pill-shine si-btn-pill-shine-on-light mt-4 inline-flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-semibold text-black shadow-[0_0_24px_-8px_rgba(255,255,255,0.35)] transition hover:bg-white/95"
          >
            {BLOG_AUTHOR.ctaDevisLabel}
          </Link>
          <Link
            href="/contact"
            className="mt-2 block text-center text-xs text-white/50 underline-offset-4 transition hover:text-white/80 hover:underline"
          >
            Préférez contacter
          </Link>
        </div>

        {others.length > 0 ? (
          <div className={card}>
            <p className="font-mono text-[10px] tracking-[0.22em] text-white/40 uppercase">À lire aussi</p>
            <ul className="mt-4 space-y-3">
              {others.map((p) => {
                const date = formatDateFr(p.publishedAt);
                return (
                  <li key={p._id}>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group flex gap-3 py-0.5 transition no-underline hover:opacity-95"
                    >
                      <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-neutral-900">
                        {p.coverImage ? (
                          <Image src={p.coverImage} alt="" fill className="object-cover" sizes="64px" />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-black" aria-hidden />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        {date ? (
                          <p className="font-mono text-[9px] tracking-wider text-white/35 uppercase">{date}</p>
                        ) : null}
                        <p className="mt-0.5 line-clamp-2 text-sm font-medium leading-snug text-white/90 transition group-hover:text-white">
                          {p.title}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/blog"
              className="mt-4 block text-center text-xs font-medium text-white/55 underline-offset-4 transition hover:text-white/85 hover:underline"
            >
              Tous les articles
            </Link>
          </div>
        ) : null}
      </div>
    </aside>
  );
}

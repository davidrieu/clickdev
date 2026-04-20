import SanityPortableText from '@/components/portable/sanity-portable-text';
import { CASE_STUDY_CATEGORY_LABELS } from '@/lib/constants/case-study';
import { cn } from '@/lib/utils';
import type { SanityCaseStudyDocument } from '@/types/sanity-case-study';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Props = { study: SanityCaseStudyDocument };

function hasBlocks(value: SanityCaseStudyDocument['context']): boolean {
  return Array.isArray(value) && value.length > 0;
}

function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('space-y-6', className)}>
      <h2 className="text-2xl font-semibold tracking-tight text-balance text-white md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

export default function CaseStudyDetail({ study }: Props) {
  const categoryLabel = study.category
    ? (CASE_STUDY_CATEGORY_LABELS[study.category] ?? study.category)
    : null;
  const displayTag = study.typeTag?.trim() || categoryLabel;
  const heroImage = study.heroImage ?? study.thumbnail ?? null;

  return (
    <div className="space-y-20 md:space-y-24">
      {/* Hero */}
      <header className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 lg:gap-16">
        <div className="min-w-0">
          <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Réalisation</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-white md:text-4xl lg:text-[2.5rem]">
            {study.title}
          </h1>
          {study.tagline ? (
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">{study.tagline}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-transparent bg-[#F26A06] px-5 text-sm font-medium text-white transition hover:bg-[#F26A06]/90"
            >
              Discuter d&apos;un projet similaire
            </Link>
            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-lg border border-white/20 bg-white/[0.04] px-5 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Accéder au site
              </a>
            ) : null}
            {!heroImage && displayTag ? (
              <span className="mt-4 inline-flex rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/85">
                {displayTag}
              </span>
            ) : null}
          </div>
        </div>

        {heroImage ? (
          <div className="relative w-full min-w-0">
            {displayTag ? (
              <span
                className="absolute right-3 top-3 z-10 rounded-full border border-white/20 bg-zinc-950/75 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm md:right-4 md:top-4"
                data-slot="type-tag"
              >
                {displayTag}
              </span>
            ) : null}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <Image
                src={heroImage}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        ) : null}
      </header>

      {/* Blocs de contenu (ordre imposé) */}
      {hasBlocks(study.context) ? (
        <Section title="Le projet">
          <div className="prose-portable max-w-none text-white/80">
            <SanityPortableText value={study.context} />
          </div>
        </Section>
      ) : null}

      {study.gallery && study.gallery.some((g) => g.image) ? (
        <Section title="Galerie">
          <ul className="space-y-8">
            {study.gallery.map(
              (g, i) =>
                g.image && (
                  <li
                    key={`${g.image}-${i}`}
                    className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
                  >
                    <div className="relative w-full">
                      <Image
                        src={g.image}
                        alt={g.caption ?? 'Capture du projet'}
                        width={1920}
                        height={1200}
                        className="h-auto w-full object-contain"
                        sizes="(max-width: 1280px) 100vw, 1152px"
                      />
                    </div>
                    {g.caption ? (
                      <p className="border-t border-white/10 px-4 py-3 text-center text-sm text-white/60">
                        {g.caption}
                      </p>
                    ) : null}
                  </li>
                ),
            )}
          </ul>
        </Section>
      ) : null}

      {hasBlocks(study.solution) ? (
        <Section title="Ce que j'ai réalisé">
          <div className="prose-portable max-w-none text-white/80">
            <SanityPortableText value={study.solution} />
          </div>
        </Section>
      ) : null}

      {hasBlocks(study.results) ? (
        <Section title="Résultats">
          <div className="prose-portable max-w-none text-white/80">
            <SanityPortableText value={study.results} />
          </div>
        </Section>
      ) : null}

      {study.testimonial?.quote ? (
        <blockquote className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
          <p className="text-lg leading-relaxed text-white/90 md:text-xl">&ldquo;{study.testimonial.quote}&rdquo;</p>
          <footer className="mt-4 text-sm text-white/55">
            <span className="font-medium text-white/80">{study.testimonial.name}</span>
            {study.testimonial.role ? <span> — {study.testimonial.role}</span> : null}
          </footer>
        </blockquote>
      ) : null}
    </div>
  );
}

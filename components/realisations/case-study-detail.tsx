import SanityPortableText from '@/components/portable/sanity-portable-text';
import { CaseStudyGallery } from '@/components/realisations/case-study-gallery';
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
    <section className={cn('space-y-6 md:space-y-8', className)}>
      <h2 className="si-serif-display text-[clamp(1.75rem,2.8vw,2.35rem)] font-medium tracking-[-0.03em] text-balance text-white">
        {title}
      </h2>
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
  const monoKicker = displayTag ? displayTag : 'Étude de cas';

  return (
    <div className="space-y-20 md:space-y-24 lg:space-y-28">
      <header className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12 lg:gap-16">
        <div className="min-w-0 max-w-3xl lg:max-w-none">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.28em] text-white/55 uppercase">Chapitre · Projet</span>
            <span className="block h-px max-w-[120px] flex-1 origin-left bg-gradient-to-r from-white/50 to-white/12" />
          </div>
          <p className="mt-2 font-mono text-[10px] tracking-[0.22em] text-white/45 uppercase md:text-[11px]">
            {monoKicker} — Clickdev
          </p>
          <h1 className="si-serif-display mt-8 text-[clamp(2.125rem,4vw,3.5rem)] leading-[1.06] font-medium tracking-[-0.035em] text-white">
            {study.title}
          </h1>
          {study.tagline ? (
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-white/72 md:text-lg">{study.tagline}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="si-btn-pill-shine si-btn-pill-shine-on-light group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_36px_-10px_rgba(255,255,255,0.35)] transition duration-300 hover:bg-white/95 hover:shadow-[0_0_48px_-8px_rgba(255,255,255,0.45)]"
            >
              Discuter d&apos;un projet similaire
            </Link>
            {study.liveUrl ? (
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="si-btn-pill-shine relative isolate inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/[0.04] px-8 py-3.5 text-sm font-medium text-white/90 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] backdrop-blur-sm transition duration-300 hover:border-white/35 hover:bg-white/[0.08]"
              >
                Accéder au site
              </a>
            ) : null}
            {!heroImage && displayTag ? (
              <span className="inline-flex rounded-full border border-white/20 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/85">
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
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-neutral-950 via-neutral-900/85 to-neutral-900">
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

      {hasBlocks(study.context) ? (
        <Section title="Le projet">
          <div className="prose-portable max-w-3xl text-white/80">
            <SanityPortableText value={study.context} />
          </div>
        </Section>
      ) : null}

      {study.gallery && study.gallery.some((g) => g.image) ? (
        <Section title="Galerie">
          <CaseStudyGallery items={study.gallery} />
        </Section>
      ) : null}

      {hasBlocks(study.solution) ? (
        <Section title="Ce que j'ai réalisé">
          <div className="prose-portable max-w-3xl text-white/80">
            <SanityPortableText value={study.solution} />
          </div>
        </Section>
      ) : null}

      {hasBlocks(study.results) ? (
        <Section title="Résultats">
          <div className="prose-portable max-w-3xl text-white/80">
            <SanityPortableText value={study.results} />
          </div>
        </Section>
      ) : null}

      {study.testimonial?.quote ? (
        <blockquote className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] md:p-10">
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

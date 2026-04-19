import SanityPortableText from '@/components/portable/sanity-portable-text';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { CASE_STUDY_CATEGORY_LABELS } from '@/lib/constants/case-study';
import { cn } from '@/lib/utils';
import type { SanityCaseStudyDocument } from '@/types/sanity-case-study';
import Link from 'next/link';

type Props = { study: SanityCaseStudyDocument };

export default function CaseStudyDetail({ study }: Props) {
  const categoryLabel = study.category ? CASE_STUDY_CATEGORY_LABELS[study.category] ?? study.category : null;
  const metrics = study.metrics?.filter((m) => m.value && m.label) ?? [];

  return (
    <div className="space-y-16">
      <header className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {categoryLabel ? <Badge variant="secondary">{categoryLabel}</Badge> : null}
          {study.year ? (
            <Badge variant="outline" className="border-white/20 text-white/70">
              {study.year}
            </Badge>
          ) : null}
          {study.client ? (
            <Badge variant="outline" className="border-white/20 text-white/70">
              {study.client}
            </Badge>
          ) : null}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-balance text-white md:text-4xl">
          {study.title}
        </h1>
        {study.tagline ? (
          <p className="text-lg font-medium leading-relaxed text-[#F26A06] md:text-xl">{study.tagline}</p>
        ) : null}
        <div className="flex flex-wrap gap-3">
          {study.liveUrl ? (
            <a
              href={study.liveUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'bg-[#F26A06] text-white hover:bg-[#F26A06]/90',
              )}
            >
              Voir le projet
            </a>
          ) : null}
          <Link
            href="/devis"
            className={cn(
              buttonVariants({ variant: 'outline' }),
              'border-white/20 text-white hover:bg-white/10',
            )}
          >
            Parler de votre projet
          </Link>
        </div>
      </header>

      {study.heroImage ? (
        <div className="overflow-hidden rounded-xl border border-white/10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={study.heroImage} alt="" className="w-full object-cover" loading="eager" />
        </div>
      ) : null}

      {(study.featuredMetric || metrics.length > 0) && (
        <section aria-label="Indicateurs clés">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {study.featuredMetric ? (
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-center md:col-span-2 lg:col-span-1">
                <p className="text-2xl font-semibold text-[#F26A06]">{study.featuredMetric}</p>
                <p className="mt-1 text-xs text-white/55">Résultat phare</p>
              </div>
            ) : null}
            {metrics.map((m) => (
              <div
                key={`${m.label}-${m.value}`}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-center"
              >
                <p className="text-xl font-semibold text-white">{m.value}</p>
                <p className="mt-1 text-xs text-white/55">{m.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {(study.role || study.duration) && (
        <dl className="grid gap-4 text-sm text-white/75 sm:grid-cols-2">
          {study.role ? (
            <div>
              <dt className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Rôle</dt>
              <dd className="mt-1">{study.role}</dd>
            </div>
          ) : null}
          {study.duration ? (
            <div>
              <dt className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Durée</dt>
              <dd className="mt-1">{study.duration}</dd>
            </div>
          ) : null}
        </dl>
      )}

      {study.technologies && study.technologies.length > 0 ? (
        <section>
          <h2 className="font-mono text-[11px] tracking-widest text-white/45 uppercase">Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {study.technologies.map((t) => (
              <li key={t}>
                <Badge variant="outline" className="border-white/15 text-white/80">
                  {t}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {study.context && study.context.length > 0 ? (
        <section>
          <h2 className="text-2xl font-semibold text-white">Contexte & enjeux</h2>
          <div className="mt-6">
            <SanityPortableText value={study.context} />
          </div>
        </section>
      ) : null}

      {study.challenges && study.challenges.length > 0 ? (
        <section>
          <h2 className="text-2xl font-semibold text-white">Défis</h2>
          <ul className="mt-8 space-y-10">
            {study.challenges.map((c, i) => (
              <li
                key={`${c.title ?? 'challenge'}-${i}`}
                className="grid gap-6 border-b border-white/10 pb-10 last:border-0 last:pb-0 md:grid-cols-2 md:items-start"
              >
                <div>
                  {c.title ? <h3 className="text-xl font-semibold text-white">{c.title}</h3> : null}
                  {c.description ? (
                    <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-white/75">{c.description}</p>
                  ) : null}
                </div>
                {c.image ? (
                  <div className="overflow-hidden rounded-lg border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt="" className="w-full object-cover" loading="lazy" />
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {study.solution && study.solution.length > 0 ? (
        <section>
          <h2 className="text-2xl font-semibold text-white">La solution</h2>
          <div className="mt-6">
            <SanityPortableText value={study.solution} />
          </div>
        </section>
      ) : null}

      {study.gallery && study.gallery.some((g) => g.image) ? (
        <section>
          <h2 className="text-2xl font-semibold text-white">Galerie</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {study.gallery.map((g, i) =>
              g.image ? (
                <figure key={`${g.image}-${i}`} className="overflow-hidden rounded-lg border border-white/10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={g.image} alt={g.caption ?? ''} className="w-full object-cover" loading="lazy" />
                  {g.caption ? (
                    <figcaption className="px-3 py-2 text-center text-xs text-white/55">{g.caption}</figcaption>
                  ) : null}
                </figure>
              ) : null,
            )}
          </div>
        </section>
      ) : null}

      {study.results && study.results.length > 0 ? (
        <section>
          <h2 className="text-2xl font-semibold text-white">Résultats</h2>
          <div className="mt-6">
            <SanityPortableText value={study.results} />
          </div>
        </section>
      ) : null}

      {study.stackDetails && study.stackDetails.length > 0 ? (
        <section>
          <h2 className="text-2xl font-semibold text-white">Stack détaillée</h2>
          <ul className="mt-6 space-y-6">
            {study.stackDetails.map((row, i) => (
              <li key={`${row.category ?? 'row'}-${i}`}>
                {row.category ? (
                  <p className="font-mono text-[11px] tracking-widest text-white/45 uppercase">{row.category}</p>
                ) : null}
                {row.items && row.items.length > 0 ? (
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {row.items.map((item) => (
                      <li key={item}>
                        <span className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-sm text-white/80">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {study.testimonial?.quote ? (
        <blockquote className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
          <p className="text-lg leading-relaxed text-white/90">&ldquo;{study.testimonial.quote}&rdquo;</p>
          <footer className="mt-4 text-sm text-white/55">
            <span className="font-medium text-white/80">{study.testimonial.name}</span>
            {study.testimonial.role ? <span> — {study.testimonial.role}</span> : null}
          </footer>
        </blockquote>
      ) : null}
    </div>
  );
}

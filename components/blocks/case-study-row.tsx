import Link from "next/link";
import { MetricBlock } from "@/components/blocks/metric-block";
import type { HomeCaseStudy } from "@/lib/constants/home-case-studies";

type CaseStudyRowProps = {
  study: HomeCaseStudy;
};

export function CaseStudyRow({ study }: CaseStudyRowProps) {
  return (
    <article className="border-b border-line py-14 last:border-b-0 md:py-20">
      <div className="grid gap-10 md:grid-cols-2 md:items-start md:gap-16 lg:gap-20">
        <div>
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-ink-muted">
            {study.eyebrow}
          </p>
          <h3 className="mt-2 font-serif text-2xl font-normal tracking-tight text-ink md:text-3xl lg:text-4xl">
            {study.title}
          </h3>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-dim md:text-base">
            {study.description}
          </p>
          <Link
            href={study.href}
            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-terracotta transition-transform hover:translate-x-0.5"
          >
            Voir le projet
            <span aria-hidden>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6 md:gap-8">
          {study.metrics.map((m) => (
            <MetricBlock key={m.label} compact value={m.value} label={m.label} />
          ))}
        </div>
      </div>
    </article>
  );
}

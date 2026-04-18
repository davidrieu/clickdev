"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { SanityCaseStudyListItem } from "@/types/sanity-case-study";
import { cn } from "@/lib/utils";

const FILTERS: { label: string; category: string | null }[] = [
  { label: "Tous", category: null },
  { label: "E-commerce", category: "ecommerce" },
  { label: "Marketplace", category: "marketplace" },
  { label: "Mobile", category: "mobile" },
  { label: "CRM", category: "crm" },
  { label: "Site web", category: "website" },
  { label: "Outil métier", category: "tool" },
];

type RealisationsViewProps = {
  items: SanityCaseStudyListItem[];
};

export function RealisationsView({ items }: RealisationsViewProps) {
  const [category, setCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!category) return items;
    return items.filter((i) => i.category === category);
  }, [items, category]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.label}
            type="button"
            onClick={() => setCategory(f.category)}
            className={cn(
              "rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors",
              category === f.category
                ? "border-terracotta bg-terracotta/15 text-ink"
                : "border-line bg-bg-3 text-ink-dim hover:border-line-2 hover:text-ink",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-lg border border-dashed border-line bg-bg-3/50 px-6 py-16 text-center text-ink-dim">
          {items.length === 0
            ? "Aucune étude de cas publiée dans Sanity pour l’instant."
            : "Aucun projet dans cette catégorie — essayez un autre filtre."}
        </div>
      ) : (
        <ul className="mt-14 grid gap-8 md:grid-cols-2">
          {filtered.map((study) => {
            const href = study.slug ? `/realisations/${study.slug}/` : "#";
            return (
              <li key={study._id}>
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-bg transition-colors hover:border-line-2 hover:bg-bg-2">
                  <Link href={href} className="block shrink-0">
                    <div className="relative aspect-[16/10] bg-bg-3">
                      {study.thumbnail ? (
                        <Image
                          src={study.thumbnail}
                          alt={study.title ?? "Projet"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                          Étude de cas
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
                      {study.client ?? "Client"} · {study.year ?? "—"}
                    </p>
                    <h2 className="mt-2 font-serif text-xl font-medium text-ink md:text-2xl">
                      <Link href={href} className="hover:text-terracotta">
                        {study.title ?? "Sans titre"}
                      </Link>
                    </h2>
                    {study.featuredMetric ? (
                      <p className="mt-3 font-serif text-lg text-terracotta">{study.featuredMetric}</p>
                    ) : null}
                    <Link
                      href={href}
                      className="mt-5 inline-flex font-mono text-[11px] font-medium uppercase tracking-widest text-terracotta underline-offset-4 hover:underline"
                    >
                      Voir l’étude →
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

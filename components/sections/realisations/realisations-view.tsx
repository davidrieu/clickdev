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
                ? "border-[#f26a06] bg-[#f26a06]/15 text-white"
                : "border-white/15 bg-white/[0.06] text-white/65 hover:border-white/25 hover:text-white",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 rounded-lg border border-dashed border-white/20 bg-white/[0.04] px-6 py-16 text-center text-white/65">
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
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/12 bg-white/[0.04] transition-colors hover:border-white/25 hover:bg-white/[0.07]">
                  <Link href={href} className="block shrink-0">
                    <div className="relative aspect-[16/10] bg-black/40">
                      {study.thumbnail ? (
                        <Image
                          src={study.thumbnail}
                          alt={study.title ?? "Projet"}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center font-mono text-[10px] uppercase tracking-widest text-white/45">
                          Étude de cas
                        </span>
                      )}
                    </div>
                  </Link>
                  <div className="flex flex-1 flex-col p-5 md:p-6">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-white/45">
                      {study.client ?? "Client"} · {study.year ?? "—"}
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                      <Link href={href} className="hover:text-[#ff9c6b]">
                        {study.title ?? "Sans titre"}
                      </Link>
                    </h2>
                    {study.featuredMetric ? (
                      <p className="mt-3 text-lg font-semibold text-[#f26a06]">{study.featuredMetric}</p>
                    ) : null}
                    <Link
                      href={href}
                      className="mt-5 inline-flex font-mono text-[11px] font-medium uppercase tracking-widest text-[#f26a06] underline-offset-4 hover:underline"
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

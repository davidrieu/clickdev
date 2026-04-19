import type { MarketingArticleSection } from '@/lib/content/marketing-article-types';
import Link from 'next/link';

import { MarketingSectionImage } from '@/components/marketing/marketing-section-image';

type RelatedPage = { label: string; href: string };

type Props = {
  sections: MarketingArticleSection[];
  faq: { question: string; answer: string }[];
  relatedPages?: RelatedPage[];
};

export default function MarketingArticleBody({ sections, faq, relatedPages }: Props) {
  return (
    <div className="space-y-10 text-sm leading-relaxed text-white/78 md:space-y-12 md:text-base">
      {sections.map((section) => (
        <SectionBlock key={section.heading} section={section} />
      ))}

      {faq.length > 0 ? (
        <section
          aria-labelledby="faq-heading"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-9"
        >
          <h2 id="faq-heading" className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            Questions fréquentes
          </h2>
          <div className="mt-6 space-y-3">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-white/10 bg-black/15 px-4 py-3"
              >
                <summary className="cursor-pointer list-none font-medium text-white/95 [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-2">
                    {item.question}
                    <span className="text-xs text-white/40 transition group-open:rotate-180">▼</span>
                  </span>
                </summary>
                <p className="mt-3 border-t border-white/10 pt-3 text-white/70">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ) : null}

      {relatedPages && relatedPages.length > 0 ? (
        <section
          aria-labelledby="related-heading"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-9"
        >
          <h2 id="related-heading" className="text-xl font-semibold tracking-tight text-white md:text-2xl">
            Pages proches
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {relatedPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-block rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/85 transition hover:border-white/25 hover:bg-white/[0.08]"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-center text-white/55">
        <Link href="/devis" className="font-medium text-[#F26A06] underline-offset-4 hover:underline">
          Demander un devis
        </Link>
        {' · '}
        <Link href="/contact" className="font-medium text-white/80 underline-offset-4 hover:underline">
          Contact
        </Link>
      </p>
    </div>
  );
}

function SectionBlock({ section }: { section: MarketingArticleSection }) {
  return (
    <section className="scroll-mt-24 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-9">
      <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">{section.heading}</h2>
      {section.image ? <MarketingSectionImage image={section.image} /> : null}
      <div className="mt-4 space-y-4">
        {section.paragraphs.map((p, i) => (
          <p key={`${section.heading}-${i}`}>{p}</p>
        ))}
      </div>
    </section>
  );
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { SiloFaqItem } from "@/lib/content/silo-child-types";

type Props = {
  title: string;
  subtitle?: string;
  items: SiloFaqItem[];
  headingId: string;
  ariaLabelledBy?: string;
};

export function PageFaqAccordion({ title, subtitle, items, headingId, ariaLabelledBy }: Props) {
  return (
    <section aria-labelledby={ariaLabelledBy ?? headingId}>
      <h2
        id={headingId}
        className="font-serif text-2xl font-medium tracking-tight text-ink md:text-3xl"
      >
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">{subtitle}</p>
      ) : null}
      <Accordion defaultValue={[]} className="mt-10 w-full">
        {items.map((item, index) => {
          const value = `faq-${headingId}-${index}`;
          return (
            <AccordionItem key={value} value={value}>
              <AccordionTrigger className="text-left font-serif text-base md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-ink-dim md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}

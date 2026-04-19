'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { HomeFaqItem } from '@/lib/constants/home-content';
import { PlusIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HomeFaq({ items }: { items: HomeFaqItem[] }) {
  return (
    <section className="mt-24 md:mt-32">
      <motion.h2
        className="text-center text-3xl font-semibold text-white md:text-4xl"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 70 }}
      >
        FAQ
      </motion.h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-white/70 md:text-base">
        Les questions les plus fréquentes avant de lancer un projet.
      </p>
      <div className="mx-auto mt-10 w-full max-w-2xl">
        <Accordion multiple={false} defaultValue={[]} className="space-y-2">
          {items.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="rounded-lg border border-white/12 bg-white/[0.03] px-1 data-[state=open]:bg-white/[0.05]"
            >
              <AccordionTrigger className="px-4 py-4 text-left text-sm font-medium hover:no-underline md:text-base [&_[data-slot=accordion-trigger-icon]]:hidden">
                <span className="flex flex-1 items-start gap-3 pr-2">
                  <PlusIcon className="mt-0.5 size-4 shrink-0 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45" />
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pl-11 text-sm leading-relaxed text-white/75">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

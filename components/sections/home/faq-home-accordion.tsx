"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { homeFaqItems } from "@/lib/constants/home-faq";

export function FaqHomeAccordion() {
  return (
    <Accordion defaultValue={[]} className="w-full">
      {homeFaqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger className="text-left font-serif text-base md:text-lg">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-ink-dim md:text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

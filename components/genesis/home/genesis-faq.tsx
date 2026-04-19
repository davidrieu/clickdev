"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";
import { motion } from "framer-motion";
import { GenesisSectionTitle } from "@/components/genesis/section-title";
import { homeFaqItems } from "@/lib/constants/home-faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function GenesisFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mt-32">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GenesisSectionTitle
        title="FAQ"
        description="Les questions les plus fréquentes avant de démarrer un projet."
      />
      <div className="mx-auto mt-12 w-full max-w-xl space-y-4">
        {homeFaqItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="glass flex flex-col rounded-md"
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <button
              type="button"
              className="flex w-full cursor-pointer items-start justify-between gap-4 p-4 text-left font-medium text-white transition hover:bg-white/10"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span>{item.question}</span>
              <ChevronDownIcon
                className={`size-5 shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden px-4 text-sm leading-6 text-neutral-200 transition-all duration-300 ${
                openIndex === index ? "max-h-96 pb-4 pt-2" : "max-h-0"
              }`}
            >
              {item.answer}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

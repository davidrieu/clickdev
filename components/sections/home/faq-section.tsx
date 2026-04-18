import { homeFaqItems } from "@/lib/constants/home-faq";
import { FaqHomeAccordion } from "./faq-home-accordion";

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

export function FaqSection() {
  return (
    <section
      className="border-b border-line/80 py-20 md:py-28 lg:py-[120px]"
      aria-labelledby="faq-heading"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-[720px] px-4 md:px-8">
        <div>
          <h2
            id="faq-heading"
            className="font-serif text-3xl font-normal tracking-tight text-ink md:text-4xl"
          >
            FAQ
          </h2>
          <p className="mt-4 text-base text-ink-dim md:text-lg">
            Les questions les plus fréquentes avant de démarrer un projet.
          </p>
        </div>
        <div className="mt-10">
          <FaqHomeAccordion />
        </div>
      </div>
    </section>
  );
}

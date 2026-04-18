import type { SiloPillarSection } from "@/components/templates/silo-pillar-layout";

/** Alias : sections enfants = sections piliers (H2 + paragraphes + sous-H3 optionnels). */
export type SiloChildSection = SiloPillarSection;

export type SiloFaqItem = { question: string; answer: string };

/** Lien interne contextualisé (brief §5 : 3–5+ par page). */
export type SiloContextualLink = {
  href: string;
  label: string;
  /** Pourquoi ce lien est pertinent depuis la page courante. */
  description: string;
};

export type SiloChildPageContent = {
  /** Meta description dédiée (≈150–160 car.). */
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  tldr: string[];
  sections: SiloChildSection[];
  faq: SiloFaqItem[];
  internalLinks: SiloContextualLink[];
};

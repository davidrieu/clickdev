import type { SiloPillarLayoutProps } from "@/components/templates/silo-pillar-layout";

export type SiloPillarDefinition = Pick<
  SiloPillarLayoutProps,
  "eyebrow" | "h1" | "lead" | "tldr" | "sections"
> & {
  metaTitle: string;
  metaDescription: string;
};

/** Props layout (sans métadonnées Next). */
export function siloLayoutBody(
  def: SiloPillarDefinition,
): Pick<SiloPillarLayoutProps, "eyebrow" | "h1" | "lead" | "tldr" | "sections"> {
  return {
    eyebrow: def.eyebrow,
    h1: def.h1,
    lead: def.lead,
    tldr: def.tldr,
    sections: def.sections,
  };
}

export const sitesInternetPillar: SiloPillarDefinition = {
  metaTitle: "Sites internet",
  metaDescription:
    "Sites vitrines, e-commerce, marketplaces et plateformes sur mesure — Next.js, WordPress, Shopify, WooCommerce.",
  eyebrow: "Sites internet",
  h1: "Des sites qui vendent, performent et restent maintenables.",
  lead: "Je conçois des expériences web orientées conversion et performance : du site vitrine à la marketplace, avec une stack choisie selon vos contraintes business, pas l’inverse.",
  tldr: [
    "Choix de stack argumenté (Next.js, WordPress, Shopify, WooCommerce, sur-mesure).",
    "SEO technique et perf intégrés dès le design, pas en rattrapage.",
    "Livrables clairs : cadrage, design system, intégration, recette, mise en ligne.",
  ],
  sections: [
    {
      heading: "Problèmes que je résous",
      paragraphs: [
        "Refonte lente, tunnel de conversion fragile, dette technique qui freine les campagnes marketing, ou stack inadaptée au catalogue et aux intégrations.",
        "Je priorise ce qui bouge l’aiguille : vitesse perçue, parcours d’achat, indexation, stabilité en production — avec des métriques vérifiables.",
      ],
    },
    {
      heading: "Comment on travaille ensemble",
      paragraphs: [
        "Atelier de cadrage court, backlog priorisé, itérations visibles sur un environnement de staging. Vous gardez la visibilité sur le périmètre, le risque et le calendrier.",
        "Après la mise en ligne : runbooks, transfert de compétences et option maintenance pour sécuriser la vélocité sur la durée.",
      ],
    },
  ],
};

export const applicationsMobilesPillar: SiloPillarDefinition = {
  metaTitle: "Applications mobiles",
  metaDescription:
    "Apps iOS, Android, React Native et PWA — de l’idée au store, avec une approche produit et perf.",
  eyebrow: "Applications mobiles",
  h1: "Apps mobiles natives ou cross-platform, prêtes pour le terrain.",
  lead: "Du MVP testable en conditions réelles au produit store-ready : navigation fluide, offline raisonnable, analytics et releases maîtrisées.",
  tldr: [
    "React Native, Swift, Kotlin ou PWA selon vos contraintes équipe et roadmap.",
    "CI/CD, signatures, conformité store et suivi des crashs intégrés au flux.",
    "Même exigence perf que sur le web : temps de démarrage, listes, médias.",
  ],
  sections: [
    {
      heading: "Quand choisir quoi",
      paragraphs: [
        "React Native pour partager une large partie du code avec votre stack web et itérer vite. Natif lorsque l’OS impose des APIs bas niveau, du hardware ou des UX très spécifiques.",
        "PWA lorsque la distribution store n’est pas le premier levier et que vous visez une adoption web immédiate.",
      ],
    },
    {
      heading: "Qualité & release",
      paragraphs: [
        "Tests ciblés sur parcours critiques, builds reproductibles, versioning sémantique et canaux de beta test.",
        "Je peux prendre en charge la soumission store ou former votre équipe pour le faire en autonomie.",
      ],
    },
  ],
};

export const iaPillar: SiloPillarDefinition = {
  metaTitle: "IA",
  metaDescription:
    "Intégration IA : chatbots, agents, RAG, automatisation — architectures pragmatiques et coûts maîtrisés.",
  eyebrow: "IA",
  h1: "IA en production, pas en slide deck.",
  lead: "Je branche l’IA sur vos données et vos workflows : assistants, agents, RAG, automatisations — avec une boucle de mesure (coût, latence, qualité).",
  tldr: [
    "Use cases priorisés : pas de catalogue de démos sans propriétaire métier.",
    "OpenAI, Claude, LangChain, n8n / Make : choix guidé par risque, budget et dette.",
    "Observabilité : logs, quotas, garde-fous et reprise humaine quand il le faut.",
  ],
  sections: [
    {
      heading: "Architecture",
      paragraphs: [
        "RAG sur vos documents avec chunking, métadonnées et évaluation continue des réponses. Agents avec outils limités et permissions explicites.",
        "Je documente les prompts, les versions de modèles et les jeux de tests pour éviter les régressions silencieuses.",
      ],
    },
    {
      heading: "ROI & risques",
      paragraphs: [
        "Estimation de coût token + monitoring, garde-fous anti-fuite de données, et stratégie de fallback lorsque le modèle ou l’API est indisponible.",
      ],
    },
  ],
};

export const seoPillar: SiloPillarDefinition = {
  metaTitle: "SEO & GEO",
  metaDescription:
    "SEO technique, contenu, netlinking et GEO (optimisation pour les moteurs d’IA) — audits et mises en œuvre.",
  eyebrow: "SEO & GEO",
  h1: "Visibilité Google et présence dans les réponses des IA.",
  lead: "Je traite le SEO comme une composante produit : indexation, données structurées, perf, maillage — et le GEO comme une extension naturelle de votre autorité technique et éditoriale.",
  tldr: [
    "Audits actionnables avec priorisation impact / effort.",
    "Migrations et refontes sans perdre le jus : plans 301, canoniques, suivis positions.",
    "GEO : structure claire, citations, FAQ et contenus factuels exploitables par les LLMs.",
  ],
  sections: [
    {
      heading: "SEO technique & contenu",
      paragraphs: [
        "Core Web Vitals, crawl budget, duplication, hreflang, données structurées — alignés avec votre CMS ou votre headless.",
        "Coordination avec la rédaction : intention de recherche, cannibalisation, maillage interne.",
      ],
    },
    {
      heading: "GEO",
      paragraphs: [
        "Résumés en tête de page, Q/R factuelles, sources externes crédibles et balisage cohérent pour faciliter l’ingestion par les IA.",
      ],
    },
  ],
};

export const crmOutilsMetiersPillar: SiloPillarDefinition = {
  metaTitle: "CRM & outils métiers",
  metaDescription:
    "CRM sur mesure, intranets, extranets, intégrations et automatisations — Node.js, Laravel, PostgreSQL.",
  eyebrow: "CRM & outils métiers",
  h1: "Des outils internes qui collent à votre façon de vendre et de livrer.",
  lead: "Je construis des interfaces métier, des connecteurs et des workflows qui réduisent les allers-retours Excel : droits, audit trail, exports et intégrations API.",
  tldr: [
    "Modèle de données aligné sur vos équipes commerciales, ops ou support.",
    "Intégrations CRM / ERP / outils SaaS avec files d’attente et idempotence.",
    "Hébergement et sauvegardes discutés dès le cadrage — pas en urgence post-go-live.",
  ],
  sections: [
    {
      heading: "Périmètre typique",
      paragraphs: [
        "Portails clients, extranets fournisseurs, configurateurs, outils de pricing, consoles d’administration et synchronisations bidirectionnelles.",
        "Je privilégie des stacks éprouvées (Node.js, Laravel, PostgreSQL) et des patterns maintenables par une équipe interne ou un prestataire tiers.",
      ],
    },
    {
      heading: "Automatisation",
      paragraphs: [
        "Make, n8n ou workers maison selon la criticité, le volume et la traçabilité requise. Chaque automatisation a un propriétaire et un plan de reprise.",
      ],
    },
  ],
};

export const maintenancePillar: SiloPillarDefinition = {
  metaTitle: "Maintenance & TMA",
  metaDescription:
    "Infogérance, correctifs, mises à jour de sécurité et évolutions — pour garder perf et sérénité après la mise en ligne.",
  eyebrow: "Maintenance & TMA",
  h1: "Gardez la vélocité après le go-live.",
  lead: "La maintenance n’est pas une ligne vide dans un devis : c’est la façon de réduire le risque, d’absorber les mises à jour des dépendances et de continuer à livrer des évolutions utiles.",
  tldr: [
    "Contrats clairs : SLA, canaux, volumétrie de tickets et plages d’astreinte si besoin.",
    "Veille sécurité, mises à jour mineures et revues de perf planifiées.",
    "Roadmap d’évolutions partagée avec la partie business, pas seulement la tech.",
  ],
  sections: [
    {
      heading: "Ce que couvre une TMA sérieuse",
      paragraphs: [
        "Correctifs, patchs dépendances, sauvegardes testées, monitoring basique et coordination avec l’hébergeur.",
        "Je documente l’existant pour accélérer l’onboarding de toute personne qui reprendrait le flambeau.",
      ],
    },
    {
      heading: "Évolutions",
      paragraphs: [
        "Petites features, A/B tests techniques, optimisations SEO ponctuelles ou chantiers d’industrialisation — chiffrés et priorisés avec vous.",
      ],
    },
  ],
};

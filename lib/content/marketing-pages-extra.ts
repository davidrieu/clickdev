import type { SiloContextualLink, SiloFaqItem } from "@/lib/content/silo-child-types";

export const aProposFaq: SiloFaqItem[] = [
  {
    question: "Travaillez-vous en régie, au forfait ou au temps passé ?",
    answer:
      "Au forfait quand le périmètre est stabilisable après cadrage ; au temps passé ou hybride quand l’incertitude est forte (R&D, intégrations mouvantes). La régie pure est rare : je préfère des jalons livrables.",
  },
  {
    question: "Intervenez-vous seul ou avec une équipe ?",
    answer:
      "Souvent seul sur le cœur technique, avec coordination design/SEO/contenu selon vos ressources internes ou partenaires. Je documente pour permettre la collaboration.",
  },
  {
    question: "Quels secteurs couvrez-vous ?",
    answer:
      "E-commerce, marketplaces, retail, hospitality, luxe, médias, outils B2B — avec une méthode commune : cadrage court, risques explicités, métriques.",
  },
  {
    question: "Comment se passe un démarrage concret ?",
    answer:
      "Devis structuré, atelier de kickoff, accès repo/staging, puis itérations visibles. Les décisions sensibles sont écrites (ADR légers) pour éviter les oublis.",
  },
];

export const aProposContextLinks: SiloContextualLink[] = [
  {
    href: "/sites-internet/site-ecommerce/",
    label: "Site e-commerce",
    description:
      "Le cœur de beaucoup de missions : tunnel, catalogue, intégrations — pour prolonger la lecture après l’à-propos.",
  },
  {
    href: "/ia/integration-ia/",
    label: "Intégration IA",
    description:
      "Positionnement 2026 : brancher l’IA sur vos produits avec garde-fous et mesure.",
  },
  {
    href: "/seo/geo-generative-engine-optimization/",
    label: "GEO",
    description:
      "Cohérent avec la façon dont ce site est rédigé : faits, TL;DR, FAQ, maillage.",
  },
  {
    href: "/realisations/",
    label: "Réalisations",
    description:
      "Études de cas publiées lorsque Sanity est alimenté — preuve terrain.",
  },
  {
    href: "/blog/",
    label: "Blog",
    description:
      "Guides, comparatifs et retours d’expérience pour le trafic informationnel.",
  },
  {
    href: "/devis/",
    label: "Demander un devis",
    description:
      "Le canal le plus structuré pour démarrer avec du contexte utile.",
  },
];

export const contactContextLinks: SiloContextualLink[] = [
  {
    href: "/devis/",
    label: "Demander un devis",
    description:
      "Pour un besoin projet avec périmètre, budget indicatif et calendrier : réponse plus actionnable qu’un e-mail libre.",
  },
  {
    href: "/a-propos/",
    label: "À propos",
    description:
      "Parcours, références et méthode avant un premier échange.",
  },
  {
    href: "/realisations/",
    label: "Réalisations",
    description:
      "Valider style de livraison et types de stacks.",
  },
  {
    href: "/sites-internet/",
    label: "Sites internet",
    description:
      "Vue d’ensemble des offres web si votre demande est encore large.",
  },
  {
    href: "/seo/audit-seo/",
    label: "Audit SEO",
    description:
      "Si votre sujet est plutôt visibilité / refonte SEO.",
  },
  {
    href: "/blog/",
    label: "Blog",
    description:
      "Pour orienter vers des lectures techniques avant contact.",
  },
];

export const blogContextLinks: SiloContextualLink[] = [
  {
    href: "/sites-internet/site-ecommerce/",
    label: "Site e-commerce",
    description:
      "Silo détaillé quand vos lectures blog portent sur conversion et catalogue.",
  },
  {
    href: "/seo/migration-seo/",
    label: "Migration SEO",
    description:
      "Articles et guides autour des refontes — sujet récurrent côté contenu.",
  },
  {
    href: "/ia/rag-base-connaissances/",
    label: "RAG",
    description:
      "Pour prolonger les lectures IA vers des patterns industrialisables.",
  },
  {
    href: "/realisations/",
    label: "Réalisations",
    description:
      "Études de cas à rapprocher des articles longs pour l’E-E-A-T.",
  },
  {
    href: "/devis/",
    label: "Demander un devis",
    description:
      "Passer du contenu à l’action lorsque vous avez un projet concret.",
  },
];

export const realisationsContextLinks: SiloContextualLink[] = [
  {
    href: "/sites-internet/site-ecommerce/",
    label: "Site e-commerce",
    description:
      "Pour comprendre la méthode appliquée aux tunnels d’achat avant de lire les cas publiés.",
  },
  {
    href: "/sites-internet/marketplace/",
    label: "Marketplace",
    description:
      "Quand les études de cas touchent multi-vendeurs et opérations complexes.",
  },
  {
    href: "/ia/integration-ia/",
    label: "Intégration IA",
    description:
      "Pour relier les projets « IA en production » aux offres actuelles.",
  },
  {
    href: "/seo/seo-ecommerce/",
    label: "SEO e-commerce",
    description:
      "Quand les métriques des cas incluent acquisition et indexation.",
  },
  {
    href: "/a-propos/",
    label: "À propos",
    description:
      "Parcours et références qui contextualisent les livraisons listées ici.",
  },
  {
    href: "/blog/",
    label: "Blog",
    description:
      "Articles longs qui complètent les études de cas par la pédagogie.",
  },
];

export const devisContextLinks: SiloContextualLink[] = [
  {
    href: "/contact/",
    label: "Contact",
    description:
      "Pour une question courte ou un besoin de NDA avant de détailler le formulaire.",
  },
  {
    href: "/a-propos/",
    label: "À propos",
    description:
      "Comprendre qui répondra et avec quelle méthode.",
  },
  {
    href: "/realisations/",
    label: "Réalisations",
    description:
      "Aligner attentes sur des livraisons passées publiées.",
  },
  {
    href: "/sites-internet/marketplace/",
    label: "Marketplace",
    description:
      "Si votre devis concerne un modèle multi-vendeurs complexe.",
  },
  {
    href: "/seo/audit-seo/",
    label: "Audit SEO",
    description:
      "Si votre demande démarre par une visibilité à reconstruire.",
  },
  {
    href: "/ia/chatbot-ia/",
    label: "Chatbot IA",
    description:
      "Si votre formulaire mentionne support automatisé ou FAQ intelligente.",
  },
];

export const blogFaq: SiloFaqItem[] = [
  {
    question: "Où sont hébergés les articles ?",
    answer:
      "Dans Sanity (CMS headless) : la home peut afficher les derniers posts ; ce listing évoluera vers pagination et filtres quand le volume le justifiera.",
  },
  {
    question: "Puis-je republier un article sur Medium/Dev.to ?",
    answer:
      "Oui sur devis de canonical et stratégie : éviter la duplication sans signal clair pour Google.",
  },
];

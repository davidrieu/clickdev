import type { ExpertiseSlug } from '@/lib/constants/sitemap';

import type { MarketingLongArticle } from './marketing-article-types';

const ARTICLES: Record<ExpertiseSlug, MarketingLongArticle> = {
  nextjs: {
    metaDescription:
      'Freelance Next.js : App Router, RSC, performances, SEO technique et déploiement Vercel / Node — Clickdev.',
    lead:
      'Next.js est le socle idéal pour des sites et apps web exigeants : rendu hybride, image optimisée, routes API et écosystème React mature. J’interviens sur le greenfield, les refontes et la dette technique (perf, bundle, architecture des données).',
    sections: [
      {
        heading: 'Ce que je livre',
        paragraphs: [
          'Applications marketing, e-commerce headless, dashboards et portails B2B. Mise en place de conventions de code, tests ciblés, CI et observabilité minimale utile (logs, erreurs front).',
          'Je privilégie App Router et les patterns recommandés par l’équipe Vercel, en gardant la compatibilité avec vos contraintes d’hébergement.',
        ],
      },
    ],
    faq: [
      {
        question: 'Next.js ou Remix / Nuxt ?',
        answer:
          'Next reste le plus demandé en France pour le SEO + React. Si votre stack impose autre chose, discutons du coût de bascule versus bénéfice.',
      },
    ],
  },
  wordpress: {
    metaDescription:
      'Freelance WordPress : thèmes sur mesure, performances, sécurité, migrations et maintenance — Clickdev.',
    lead:
      'WordPress reste un excellent CMS éditorial lorsqu’il est discipliné : thème sur mesure ou headless, plugins limités, cache et sécurité à jour. Je sécurise les mises à jour et les environnements de préproduction.',
    sections: [
      {
        heading: 'Thèmes & plugins',
        paragraphs: [
          'Je réduis la dépendance aux builders lourds quand ils nuisent aux performances. Les besoins métiers spécifiques passent souvent par des extensions maison plutôt que dix plugins génériques.',
        ],
      },
    ],
    faq: [
      {
        question: 'WordPress pour du e-commerce ?',
        answer:
          'WooCommerce est pertinent jusqu’à un certain volume de catalogue et de règles. Au-delà, Shopify ou du sur mesure mérite une étude rapide.',
      },
    ],
  },
  shopify: {
    metaDescription:
      'Freelance Shopify : thèmes Liquid, sections, apps privées, performances et intégrations — Clickdev.',
    lead:
      'Shopify accélère le time-to-market pour le e-commerce standard. J’interviens sur les thèmes Liquid (sections, snippets), les apps privées en Node et les intégrations (ERP, logistique, paiement).',
    sections: [
      {
        heading: 'Thème & checkout',
        paragraphs: [
          'Respect des guidelines Shopify, accessibilité et vitesse sur mobile. Extensions checkout lorsque le plan le permet, sinon workflows alternatifs documentés.',
        ],
      },
    ],
    faq: [
      {
        question: 'Shopify Plus ?',
        answer:
          'Oui : scripts checkout, automatisation B2B et intégrations plus poussées. Le périmètre dépend de votre contrat et des apps validées.',
      },
    ],
  },
  woocommerce: {
    metaDescription:
      'Freelance WooCommerce : catalogue, tunnel, paiements, perf et SEO e-commerce — Clickdev.',
    lead:
      'WooCommerce permet un contrôle fin du catalogue et du tunnel, à condition de maîtriser l’hébergement et les plugins. J’optimise le checkout, les gabarits produit et les intégrations de paiement / transport.',
    sections: [
      {
        heading: 'Fiabilité',
        paragraphs: [
          'Sauvegardes, staging, mises à jour de sécurité et monitoring des erreurs de commande. Je documente les hooks critiques pour éviter les régressions.',
        ],
      },
    ],
    faq: [
      {
        question: 'WooCommerce trop lent ?',
        answer:
          'Souvent : hébergement sous-dimensionné, requêtes SQL surchargées, plugins redondants. Un audit ciblé identifie les quick wins.',
      },
    ],
  },
  'react-native': {
    metaDescription:
      'Freelance React Native : apps iOS/Android, modules natifs, stores et CI — Clickdev.',
    lead:
      'React Native permet de partager une grande partie du code tout en gardant l’accès au natif si besoin. Je structure le projet (navigation, state, erreurs) pour limiter la dette à mesure que le produit grossit.',
    sections: [
      {
        heading: 'Stores & releases',
        paragraphs: [
          'Pipelines de build, signatures, versioning et gestion des environnements (dev / staging / prod). Accompagnement sur les refus Apple/Google.',
        ],
      },
    ],
    faq: [
      {
        question: 'Expo ou bare workflow ?',
        answer:
          'Expo accélère le démarrage ; le bare reste utile pour des SDK spécifiques. Le choix se fait sur la liste d’intégrations à J+90.',
      },
    ],
  },
  laravel: {
    metaDescription:
      'Freelance Laravel : API, admin, queues, intégrations et outils métiers — Clickdev.',
    lead:
      'Laravel excelle pour les backends structurés : API REST/JSON, admin Filament ou custom, jobs asynchrones et intégrations tierces. Je mets l’accent sur la validation des données, les migrations et les tests sur les règles métier.',
    sections: [
      {
        heading: 'Bonnes pratiques',
        paragraphs: [
          'Couches claires (actions / services), politiques d’autorisation, logs d’audit et observabilité basique. Documentation pour onboarding des développeurs suivants.',
        ],
      },
    ],
    faq: [
      {
        question: 'Laravel vs Node pour une API ?',
        answer:
          'Laravel accélère les back-offices et la modélisation relationnelle. Node peut mieux coller à une équipe full JS. On tranche selon compétences internes et contraintes d’hébergement.',
      },
    ],
  },
  nodejs: {
    metaDescription:
      'Freelance Node.js : API, microservices légers, workers et intégrations — Clickdev.',
    lead:
      'Node convient aux APIs à fort I/O et aux workers temps réel. Je structure les projets TypeScript, la gestion d’erreurs, la validation des payloads et le déploiement (Docker, PM2, serverless selon contexte).',
    sections: [
      {
        heading: 'Robustesse',
        paragraphs: [
          'Limitation de débit, timeouts, idempotence sur les webhooks et journaux exploitables. Les secrets ne passent jamais en clair dans le repo.',
        ],
      },
    ],
    faq: [
      {
        question: 'Serverless ou conteneur ?',
        answer:
          'Le serverless simplifie l’auto-scaling ; les conteneurs donnent plus de contrôle. Le coût total (cold start, egress) se chiffre avant décision.',
      },
    ],
  },
  python: {
    metaDescription:
      'Freelance Python : APIs, scripts métier, data pipelines, Django/FastAPI et automatisation — Clickdev.',
    lead:
      'Python sert aussi bien les APIs légères que les scripts métier, l’automatisation et les pipelines data. J’interviens sur du code structuré (typage, tests ciblés, packaging), les intégrations (queues, webhooks, fichiers) et le déploiement raisonnable (Docker, PaaS, VPS).',
    sections: [
      {
        heading: 'Cas d’usage',
        paragraphs: [
          'Services REST internes, ETL fiables, outils CLI pour vos équipes, ou briques IA (appels modèles, pré/post-traitement) quand Python est le bon outil dans la chaîne.',
        ],
      },
    ],
    faq: [
      {
        question: 'Django ou FastAPI ?',
        answer:
          'Django accélère les produits avec admin et ORM ; FastAPI brille pour des APIs async minimalistes. Le choix dépend du périmètre, de l’équipe et des contraintes d’hébergement.',
      },
    ],
  },
  openai: {
    metaDescription:
      'Intégration OpenAI : assistants, function calling, embeddings et garde-fous — Clickdev.',
    lead:
      'Les API OpenAI permettent prototyper vite — l’enjeu est la fiabilité en production : validation des sorties, budgets, logs et repli si le modèle est indisponible. Je conçois des pipelines testables et versionnés.',
    sections: [
      {
        heading: 'Bonnes pratiques',
        paragraphs: [
          'Prompts versionnés, jeux de tests sur cas limites, réduction des données personnelles envoyées au modèle, et monitoring des latences.',
        ],
      },
    ],
    faq: [
      {
        question: 'GPT-4 ou modèle plus petit ?',
        answer:
          'Le modèle le plus cher n’est pas toujours nécessaire : un modèle compact avec bons prompts bat souvent une grosse API mal cadrée.',
      },
    ],
  },
  'claude-api': {
    metaDescription:
      'Intégration Anthropic / Claude : agents, long context, sécurité des prompts — Clickdev.',
    lead:
      'Claude est particulièrement adapté au long contexte et aux tâches d’analyse documentaire. J’intègre l’API en respectant vos politiques de données et en encapsulant les prompts sensibles côté serveur.',
    sections: [
      {
        heading: 'Cas d’usage',
        paragraphs: [
          'Synthèse de dossiers internes, assistance à la rédaction contrôlée, extraction structurée depuis du texte brut ou PDF selon pipeline.',
        ],
      },
    ],
    faq: [
      {
        question: 'Claude vs OpenAI ?',
        answer:
          'Le choix dépend des quotas, des politiques d’entreprise et des benchmarks sur vos documents réels — un POC comparatif tranche vite.',
      },
    ],
  },
  langchain: {
    metaDescription:
      'LangChain / RAG : chaînes de retrieval, outils et évaluation — Clickdev.',
    lead:
      'LangChain (ou alternatives plus légères) sert à composer chaînes RAG, outils et mémoire. Je veille à ne pas sur-complexifier : parfois quelques fonctions et une base vectorielle suffisent pour un MVP robuste.',
    sections: [
      {
        heading: 'RAG durable',
        paragraphs: [
          'Chunking pertinent, métadonnées, reranking si nécessaire, et jeux de questions/réponses pour mesurer la qualité avant d’élargir aux utilisateurs.',
        ],
      },
    ],
    faq: [
      {
        question: 'Vector DB ?',
        answer:
          'Pgvector, Pinecone, Qdrant… le choix dépend du volume, de la latence et de vos contraintes d’hébergement. On part souvent simple puis on scale.',
      },
    ],
  },
  n8n: {
    metaDescription:
      'Freelance n8n : workflows, webhooks, intégrations SaaS, self-hosted et bonnes pratiques prod — Clickdev.',
    lead:
      'n8n sert à enchaîner apps, APIs et bases sans tout recoder : synchronisations, alertes, enrichissement de leads, pipelines vers le CRM ou la facturation. Je conçois des workflows lisibles (nommage, erreurs, retries), des secrets hors repo et des scénarios testables avant passage en prod.',
    sections: [
      {
        heading: 'Fiabilité',
        paragraphs: [
          'Gestion des quotas API, idempotence sur les webhooks, files d’attente et logs exploitables quand un nœud casse à 2 h du matin. Self-hosted ou cloud : on cale la stratégie sur vos contraintes RGPD et d’exploitation.',
        ],
      },
    ],
    faq: [
      {
        question: 'n8n plutôt que du code custom ?',
        answer:
          'Quand le flux est stable et surtout de l’intégration entre services, n8n va vite. Dès que la logique métier devient dense ou critique, un service dédié (Node, Python, Laravel) prend le relais — souvent en hybride avec n8n en orchestrateur.',
      },
    ],
  },
};

export function getExpertiseArticle(slug: ExpertiseSlug): MarketingLongArticle {
  return ARTICLES[slug];
}

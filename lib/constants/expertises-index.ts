import type { ExpertiseSlug } from '@/lib/constants/sitemap';

/** Regroupement thématique des fiches (titres H2 + maillage SEO). */
export const EXPERTISE_INDEX_GROUPS: {
  id: string;
  title: string;
  description: string;
  slugs: readonly ExpertiseSlug[];
}[] = [
  {
    id: 'web',
    title: 'Sites web & e-commerce',
    description:
      'Frameworks, CMS et plateformes pour des vitrines rapides, des boutiques évolutives et du headless quand le projet l’exige.',
    slugs: ['nextjs', 'wordpress', 'shopify', 'woocommerce'],
  },
  {
    id: 'apps',
    title: 'Applications & back-end',
    description:
      'Mobile cross-plateforme, APIs Node.js ou Python, monolithes Laravel : des bases solides pour scaler sans sacrifier la maintenabilité.',
    slugs: ['react-native', 'laravel', 'nodejs', 'python'],
  },
  {
    id: 'ia',
    title: 'IA & automatisation',
    description:
      'Modèles (OpenAI, Claude), orchestration RAG (LangChain) et workflows n8n : de la preuve de concept aux automatisations fiables en production.',
    slugs: ['openai', 'claude-api', 'langchain', 'n8n'],
  },
];

/** FAQ index — alignée avec le JSON-LD FAQPage (contenu visible). */
export const EXPERTISE_INDEX_FAQ = [
  {
    question: 'À quoi servent les pages expertises ?',
    answer:
      'Chaque fiche détaille une techno précise parmi celles que j’emploie au quotidien. Côté web & e-commerce : Next.js, WordPress, Shopify, WooCommerce. Côté apps & back-end : React Native, Laravel, Node.js, Python. Côté IA & automatisation : OpenAI, Claude (API), LangChain et n8n pour les workflows. Vous y trouvez périmètre, bonnes pratiques, pièges fréquents et liens vers les offres (sites, applications mobiles, IA, CRM).',
  },
  {
    question: 'Puis-je vous solliciter sur une stack qui n’est pas listée ?',
    answer:
      'Oui : les cartes reflètent mes socles les plus demandés. Si vous êtes sur une techno proche (Remix, Nuxt, autre CMS, Make/Zapier, stack Google ou Microsoft, autre LLM) ou un besoin hybride, écrivez-moi : on voit si une mission ciblée ou un audit a du sens avant d’engager une refonte.',
  },
  {
    question: 'Travaillez-vous en remote partout en France ?',
    answer:
      'Oui, en full remote avec créneaux partagés pour les points clés. Les livrables et la documentation restent centralisés pour que vos équipes internes ou futures prestataires puissent reprendre le flambeau.',
  },
] as const;

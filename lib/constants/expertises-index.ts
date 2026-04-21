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
      'Mobile cross-plateforme, APIs et monolithes Laravel : des bases solides pour scaler sans sacrifier la maintenabilité.',
    slugs: ['react-native', 'laravel', 'nodejs'],
  },
  {
    id: 'ia',
    title: 'IA & automatisation',
    description:
      'Modèles conversationnels, chaînage d’outils et intégrations : l’IA au service de vos process, pas l’inverse.',
    slugs: ['openai', 'claude-api', 'langchain'],
  },
];

/** FAQ index — alignée avec le JSON-LD FAQPage (contenu visible). */
export const EXPERTISE_INDEX_FAQ = [
  {
    question: 'À quoi servent les pages expertises ?',
    answer:
      'Chaque page décrit comment j’utilise une techno concrète (Next.js, Shopify, Laravel, APIs OpenAI ou Claude, etc.) dans des projets réels : périmètre, bonnes pratiques, pièges à éviter et liens vers les offres associées (sites, apps, IA, CRM). C’est utile pour le référencement longue traîne et pour vous projeter vite.',
  },
  {
    question: 'Puis-je vous solliciter sur une stack qui n’est pas listée ?',
    answer:
      'Oui : la liste couvre mes socles les plus demandés. Si vous êtes sur une variante proche (Remix, Nuxt, autre CMS) ou un besoin hybride, écrivez-moi : on voit si une mission ponctuelle ou un audit a du sens avant d’engager une refonte complète.',
  },
  {
    question: 'Travaillez-vous en remote partout en France ?',
    answer:
      'Oui, en full remote avec créneaux partagés pour les points clés. Les livrables et la documentation restent centralisés pour que vos équipes internes ou futures prestataires puissent reprendre le flambeau.',
  },
] as const;

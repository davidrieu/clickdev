import type { ServiceSilo } from '@/lib/constants/sitemap';

import type { MarketingLongArticle } from './marketing-article-types';
import { SITES_INTERNET_PILLAR_ARTICLE } from './silo-pillars/sites-internet-pillar-article';

const ARTICLES: Record<ServiceSilo, MarketingLongArticle> = {
  'sites-internet': SITES_INTERNET_PILLAR_ARTICLE,
  'applications-mobiles': {
    metaDescription:
      'Apps iOS, Android, React Native et PWA — développement mobile freelance, stores, performances et maintenance.',
    lead:
      'Les utilisateurs attendent fluidité, hors-ligne partiel et parcours courts. Je développe des applications mobiles natives ou cross-platform, des PWA et j’intègre les API métiers existantes (auth, paiement, CRM).',
    sections: [
      {
        heading: 'Périmètre mobile',
        paragraphs: [
          'Applications grand public ou outils internes : authentification sécurisée, synchronisation données, notifications push, mode offline ciblé et respect des guidelines Apple / Google pour la publication sur les stores.',
          'React Native permet souvent de mutualiser une grande partie du code iOS/Android tout en gardant des modules natifs lorsque nécessaire (Bluetooth, NFC, SDK partenaires).',
        ],
      },
      {
        heading: 'Qualité & suivi',
        paragraphs: [
          'Tests sur devices réels, télémétrie (crash reporting), builds CI et process de release pour réduire les incidents en production. Je peux prendre en charge les évolutions et correctifs après le go-live.',
        ],
      },
    ],
    faq: [
      {
        question: 'React Native ou natif pur ?',
        answer:
          'React Native accélère le time-to-market pour une UI partagée. Le natif pur reste pertinent pour des contraintes extrêmes (jeux 3D, bas niveau hardware). Le choix se fait après analyse du backlog et des intégrations.',
      },
      {
        question: 'Gérez-vous la soumission aux stores ?',
        answer:
          'Oui : préparation des fiches, captures, conformité des permissions et accompagnement sur les refus éventuels. Vous restez propriétaire des comptes développeur.',
      },
      {
        question: 'PWA ou app store ?',
        answer:
          'La PWA convient pour un périmètre web-first et des mises à jour instantanées. L’app store apporte découvrabilité et APIs plus poussées. On peut combiner les deux selon les cas d’usage.',
      },
    ],
  },
  ia: {
    metaDescription:
      'Intégration IA : chatbots, agents, RAG, automatisation — produits utiles et maîtrisés des coûts, avec Clickdev.',
    lead:
      'L’IA générative sert quand elle réduit un coût, accélère une décision ou améliore l’expérience utilisateur — pas pour afficher un gadget. Je conçois des intégrations pragmatiques (API OpenAI / Anthropic, RAG sur vos documents, workflows n8n/Make).',
    sections: [
      {
        heading: 'Cas d’usage',
        paragraphs: [
          'Assistants internes sur base documentaire (RAG), qualification de leads, génération de contenus contrôlés, extraction d’informations depuis des tickets ou emails, et orchestration avec vos outils existants (CRM, helpdesk).',
          'Chaque intégration inclut garde-fous : prompts versionnés, limitation des hallucinations, journaux et budgets tokens pour maîtriser les coûts.',
        ],
      },
      {
        heading: 'Sécurité & conformité',
        paragraphs: [
          'Classement des données, rétention, anonymisation et choix des modèles (cloud vs hébergement) sont discutés en amont. Les flux sensibles peuvent rester on-prem ou derrière vos API.',
        ],
      },
    ],
    faq: [
      {
        question: 'Faut-il fine-tuner un modèle ?',
        answer:
          'Rarement en première étape : prompt engineering, outils (function calling) et RAG donnent souvent 80 % de la valeur. Le fine-tuning se discute lorsque le volume et la stabilité des données l’exigent.',
      },
      {
        question: 'Combien coûte une intégration IA ?',
        answer:
          'Les coûts sont liés au volume d’appels, au modèle choisi et à la complexité du pipeline. Un POC cadré permet de mesurer le coût marginal avant industrialisation.',
      },
      {
        question: 'Quelle différence avec un simple chatbot ?',
        answer:
          'Un chatbot peut être une fenêtre de chat. Une intégration produit relie l’IA à vos données, vos règles métier et vos actions (création de ticket, mise à jour CRM, brouillon d’email validé par un humain).',
      },
    ],
  },
  seo: {
    metaDescription:
      'SEO technique, contenu, netlinking, migrations et GEO — visibilité Google et IA génératives, accompagnement freelance Clickdev.',
    lead:
      'Le SEO reste une combinaison de technique, d’intention de recherche et de preuve d’autorité. J’interviens sur les audits, la mise en œuvre technique (Core Web Vitals, données structurées, indexation) et j’aligne les équipes sur une roadmap réaliste.',
    sections: [
      {
        heading: 'SEO & GEO',
        paragraphs: [
          'Le GEO (Generative Engine Optimization) vise à améliorer la probabilité d’être cité ou recommandé dans les réponses des IA. Cela repose sur des contenus clairs, une entité forte (marque, personne), des faits vérifiables et une structure exploitable par les crawlers.',
          'Les audits couvrent crawl, maillage interne, duplication, internationalisation, données structurées et logs serveur lorsque c’est pertinent.',
        ],
      },
      {
        heading: 'E-commerce & local',
        paragraphs: [
          'Pour le e-commerce, je traite gabarits produit, facettes, pagination et stabilité des URLs. Pour le local, fiches, maillage géographique et cohérence NAP (nom, adresse, téléphone) avec vos points de vente.',
        ],
      },
    ],
    faq: [
      {
        question: 'Combien de temps pour voir des résultats ?',
        answer:
          'Les quick wins techniques peuvent apparaître en quelques semaines. Le netlinking et l’autorité prennent souvent plusieurs mois. Je fixe des indicateurs de succès par phase.',
      },
      {
        question: 'Travaillez-vous avec des agences ?',
        answer:
          'Oui, en renfort technique ou stratégique : je peux prendre la partie implémentation pendant que l’agence gère le contenu ou l’outreach.',
      },
      {
        question: 'Qu’est-ce que le GEO concrètement ?',
        answer:
          'Optimiser titres, FAQ, pages « about », preuves et données structurées pour que les moteurs génératifs comprennent qui vous êtes et quand vous recommander — sans promesse magique de positionnement.',
      },
    ],
  },
  'crm-outils-metiers': {
    metaDescription:
      'CRM sur mesure, intégrations, automatisation et outils internes — développement freelance pour équipes sales et ops.',
    lead:
      'Les outils métiers doivent coller à vos processus, pas l’inverse. Je conçois des CRM adaptés, des portails partenaires et des automatisations qui réduisent la saisie manuelle et les erreurs entre systèmes.',
    sections: [
      {
        heading: 'Intégrations & données',
        paragraphs: [
          'Synchronisation bidirectionnelle avec ERP, facturation, support ou data warehouse. Contrats d’API, idempotence, files d’attente et supervision pour éviter les silos de données.',
          'Les interfaces internes privilégient la clarté : droits par rôle, journaux d’audit et exports contrôlés.',
        ],
      },
      {
        heading: 'Fiabilité',
        paragraphs: [
          'Tests automatisés sur les règles métier critiques, sauvegardes et stratégie de rollback. Documentation pour transférer la maintenance à votre équipe si besoin.',
        ],
      },
    ],
    faq: [
      {
        question: 'Remplacer un Excel « monstre » ?',
        answer:
          'Souvent la première étape est de modéliser les règles implicites, puis de livrer un MVP utilisé par un pilote avant généralisation.',
      },
      {
        question: 'Intervenir sur un CRM existant ?',
        answer:
          'Oui : intégrations, champs personnalisés, webhooks, scripts de migration et formation des équipes.',
      },
    ],
  },
  maintenance: {
    metaDescription:
      'Maintenance WordPress, e-commerce, TMA et infogérance — sécurité, mises à jour et évolutions avec Clickdev.',
    lead:
      'Un produit en ligne vit : correctifs de sécurité, mises à jour de dépendances, surveillance et petites évolutions. Je propose des forfaits ou du réactif selon votre criticité et vos fenêtres de déploiement.',
    sections: [
      {
        heading: 'Périmètre',
        paragraphs: [
          'Surveillance uptime, sauvegardes testées, patchs, optimisation des performances régressives et gestion des incidents. Pour le e-commerce, anticipation des pics (soldes, Black Friday).',
          'La TMA (tierce maintenance applicative) inclut un backlog priorisé avec SLA de réponse adaptés à votre activité.',
        ],
      },
      {
        heading: 'Sécurité',
        paragraphs: [
          'Durcissement des accès admin, revue des plugins, headers HTTP, gestion des secrets et recommandations d’hébergement. Les audits post-incident peuvent être intégrés au contrat.',
        ],
      },
    ],
    faq: [
      {
        question: 'Forfait ou temps passé ?',
        answer:
          'Les deux : forfait pour un volume prévisible de mises à jour, temps passé pour les évolutions non planifiables. Le mix se calibre après un audit initial.',
      },
      {
        question: 'Intervention d’urgence ?',
        answer:
          'Possible selon disponibilité : contact direct et procédure d’escalade définie à l’avance.',
      },
    ],
  },
};

export function getSiloPillarArticle(silo: ServiceSilo): MarketingLongArticle {
  return ARTICLES[silo];
}

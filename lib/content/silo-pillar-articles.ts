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
      'IA pour sites, applications mobiles et chatbots : intégrations utiles, langage clair, budgets suivis — Clickdev.',
    lead:
      'L’IA sert quand elle fait gagner du temps au support, aide un visiteur sur le site, ou allège une tâche répétitive dans l’entreprise — pas pour la frime. Je conçois des assistants, des chatbots et des branchements dans vos outils, avec un œil sur le coût et la confidentialité.',
    sections: [
      {
        heading: 'Cas d’usage',
        paragraphs: [
          'Chatbot sur le site ou la boutique, aide sur vos documents internes, petites automatisations (tri de demandes, brouillons de réponse), ou fonctions intelligentes dans une application mobile.',
          'Chaque projet inclut des limites claires : ce que l’outil peut dire, quand une personne reprend la main, et un suivi du budget lié aux services d’IA.',
        ],
      },
      {
        heading: 'Sécurité & conformité',
        paragraphs: [
          'On classe ce qui est sensible, ce qu’on garde chez vous, et ce qui peut transiter vers un fournisseur externe. Les flux les plus délicats restent sous votre contrôle ou derrière vos propres accès.',
        ],
      },
    ],
    faq: [
      {
        question: 'Faut-il “entraîner” un modèle sur mes données ?',
        answer:
          'Rarement au début : on obtient déjà beaucoup en s’appuyant sur vos textes existants, en cadrant les réponses et en reliant vos outils. Un entraînement spécifique se discute seulement si le volume et la stabilité des données le justifient.',
      },
      {
        question: 'Combien coûte une intégration IA ?',
        answer:
          'Ça dépend du nombre de parcours, des contenus à brancher et du volume d’usage. Un petit pilote permet de mesurer coût et qualité avant d’élargir.',
      },
      {
        question: 'Quelle différence avec un simple chatbot ?',
        answer:
          'Un chatbot répond surtout dans une fenêtre de discussion. Une intégration plus poussée relie aussi vos règles et vos actions (ticket, CRM, brouillon validé par un humain).',
      },
    ],
  },
  seo: {
    metaDescription:
      'SEO pour PME et indépendants : audit, technique, local, e-commerce, contenu. Je conçois et j’implémente — devis gratuit — Clickdev.',
    lead:
      'Être visible sur Google, c’est surtout un site clair et crédible pour les gens qui cherchent déjà ce que vous faites. Je réalise des audits compréhensibles, des corrections techniques dans le code, et j’aide à rédiger des pages utiles — artisan, boutique en ligne ou association.',
    sections: [
      {
        heading: 'Ce que je fais concrètement',
        paragraphs: [
          'Audit des priorités, vitesse et indexation, pages locales ou fiches produit, migration quand vous changez d’adresse web, textes orientés questions réelles.',
          'Le GEO (visibilité quand on pose une question à une IA) s’appuie sur les mêmes bases : FAQ honnête, page “à propos” solide, faits vérifiables.',
        ],
      },
      {
        heading: 'Rythme & mesure',
        paragraphs: [
          'On fixe ce qui compte pour vous : appels, formulaires, prise de rendez-vous. Pas de promesse de “#1 Google garanti”.',
        ],
      },
    ],
    faq: [
      {
        question: 'Combien de temps pour voir des résultats ?',
        answer:
          'Souvent quelques semaines pour des correctifs techniques ; le contenu et les liens de qualité demandent plus de temps. Je vous indique un ordre d’actions réaliste.',
      },
      {
        question: 'Travaillez-vous avec des agences ?',
        answer:
          'Oui, en renfort technique ou rédactionnel quand votre agence gère déjà une partie du sujet.',
      },
      {
        question: 'C’est compréhensible si je ne suis pas du métier ?',
        answer:
          'Oui : chaque livrable est expliqué avec des exemples concrets et un vocabulaire simple.',
      },
    ],
  },
  'crm-outils-metiers': {
    metaDescription:
      'CRM sur mesure, intégrations et automatisations pour PME. Je développe des outils web qui réduisent la double saisie — Clickdev freelance.',
    lead:
      'Quand les devis, les relances et les factures vivent dans cinq fichiers, les oublis arrivent vite. Je conçois et développe des petits CRM web, des connexions entre votre site et vos outils (HubSpot, Pipedrive…), ou des automatisations avec alertes si quelque chose bloque.',
    sections: [
      {
        heading: 'Intégrations & quotidien',
        paragraphs: [
          'Formulaire du site → fiche CRM, statut “gagné” quand la facture est payée, e-mail de relance quand un dossier stagne : des flux que vous pouvez expliquer à table.',
          'Les accès et les données sensibles sont limités au nécessaire ; je documente pour que vous ne soyez pas prisonnier d’une boîte noire.',
        ],
      },
      {
        heading: 'Fiabilité',
        paragraphs: [
          'Tests sur les cas critiques, sauvegardes, possibilité de reprise par votre équipe après formation courte.',
        ],
      },
    ],
    faq: [
      {
        question: 'Remplacer un Excel « monstre » ?',
        answer:
          'On commence par lister ce que le fichier fait vraiment, puis un premier module utile pour un petit groupe avant d’élargir.',
      },
      {
        question: 'Intervenir sur un CRM déjà en place ?',
        answer:
          'Oui : connexions API, webhooks, champs personnalisés et formation des équipes.',
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

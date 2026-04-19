import type { ServiceSilo } from '@/lib/constants/sitemap';

import type { MarketingLongArticle } from './marketing-article-types';

const OVERRIDES: Partial<Record<string, MarketingLongArticle>> = {
  'sites-internet:site-vitrine': {
    metaDescription:
      'Site vitrine professionnel : design, contenus, performances et SEO local — développement freelance Clickdev.',
    lead:
      'Un site vitrine doit expliquer en quelques secondes ce que vous faites, pour qui, et inciter à l’action (prise de contact, demande de devis, prise de rendez-vous). Je conçois des pages rapides, lisibles sur mobile et prêtes pour le référencement local.',
    sections: [
      {
        heading: 'Contenu & structure',
        paragraphs: [
          'Nous définissons ensemble les pages piliers (offre, preuves, équipe, réalisations, FAQ), les appels à l’action et les formulaires. Les contenus peuvent être saisis dans un CMS headless ou WordPress selon votre équipe.',
          'Les données structurées (LocalBusiness, Organization, FAQPage le cas échéant) renforcent la compréhension par Google et les assistants.',
        ],
      },
      {
        heading: 'Performance',
        paragraphs: [
          'Images optimisées, polices et JS maîtrisés, mise en cache et hébergement adapté : le vitrine n’a pas besoin d’être « lourd » pour être crédible. Les Core Web Vitals sont suivis comme critère de livraison.',
        ],
      },
    ],
    faq: [
      {
        question: 'Combien de pages pour un vitrine sérieux ?',
        answer:
          'Souvent 5 à 15 pages selon vos services et zones géographiques. Mieux vaut peu de pages excellentes que une dizaine de pages creuses.',
      },
      {
        question: 'Puis-je mettre à jour moi-même les textes ?',
        answer:
          'Oui : formation courte à l’administration et gabarits qui limitent les risques de casser la mise en page.',
      },
    ],
  },
  'seo:audit-seo': {
    metaDescription:
      'Audit SEO technique et éditorial : crawl, indexation, performances, maillage — livrable actionnable par Clickdev.',
    lead:
      'Un audit SEO utile se lit comme un plan de bataille priorisé : ce qui bloque l’indexation, ce qui gaspille le budget de crawl, ce qui nuit aux conversions, et ce qui manque côté contenu ou autorité. Je livre des recommandations techniques implémentables et des exemples concrets sur vos templates.',
    sections: [
      {
        heading: 'Périmètre d’audit',
        paragraphs: [
          'Analyse crawl (robots, redirections, canonicals, pagination, hreflang), rendu mobile, données structurées, logs si disponibles, et échantillon de pages stratégiques pour le maillage interne.',
          'Côté contenu : intention de recherche par modèle de page, cannibalisation évidente, titres & métas, et alignement avec la stratégie business.',
        ],
      },
      {
        heading: 'Livrable',
        paragraphs: [
          'Tableau de priorités (impact × effort), tickets techniques prêts pour le backlog dev, et synthèse exécutive pour les parties prenantes non techniques.',
        ],
      },
    ],
    faq: [
      {
        question: 'Audit sans accès aux outils ?',
        answer:
          'Possible mais limité : Search Console et accès staging accélèrent la précision sur l’indexation et les erreurs réelles.',
      },
      {
        question: 'Délai moyen ?',
        answer:
          'De quelques jours à deux semaines selon la taille du site et la profondeur demandée.',
      },
    ],
  },
};

function templateArticle(
  childLabel: string,
  parentLabel: string,
  silo: ServiceSilo
): MarketingLongArticle {
  const siloHint =
    silo === 'sites-internet'
      ? 'votre présence web et vos parcours de conversion'
      : silo === 'applications-mobiles'
        ? 'vos applications et utilisateurs mobiles'
        : silo === 'ia'
          ? 'vos cas d’usage IA et l’industrialisation'
          : silo === 'seo'
            ? 'votre visibilité organique et la qualité technique du site'
            : silo === 'crm-outils-metiers'
              ? 'vos processus internes et la qualité des données'
              : 'la stabilité et la sécurité de vos plateformes';

  return {
    metaDescription: `${childLabel} — ${parentLabel}. Accompagnement freelance Clickdev : cadrage, mise en œuvre et suivi.`,
    lead: `Cette page détaille l’offre « ${childLabel} » au sein du pôle ${parentLabel}. L’objectif est d’aligner technique, produit et marketing sur ${siloHint}, avec des livrables mesurables et une roadmap claire.`,
    sections: [
      {
        heading: 'Approche',
        paragraphs: [
          `Après un cadrage court, je propose un plan par jalons : preuve de concept si nécessaire, développement itératif, puis durcissement (tests, performances, sécurité). Vous gardez la visibilité sur les priorités et les risques.`,
          'Les intégrations avec vos outils existants (CRM, analytics, paiement, auth) sont documentées pour faciliter la reprise par vos équipes ou un autre prestataire.',
        ],
      },
      {
        heading: 'Livrables types',
        paragraphs: [
          'Spécifications fonctionnelles légères, maquettes validées ou intégration à partir de votre design system, code versionné, déploiement automatisé quand c’est pertinent, et transfert de compétences en fin de mission.',
        ],
      },
      {
        heading: 'Pourquoi un freelance ?',
        paragraphs: [
          'Un interlocuteur unique réduit la latence entre besoin métier et implémentation. Je peux aussi renforcer une équipe interne sur une phase critique (lancement, migration, incident).',
        ],
      },
    ],
    faq: [
      {
        question: `Quels livrables pour « ${childLabel} » ?`,
        answer:
          'Ils dépendent du périmètre validé au devis : démo intermédiaire, documentation, formation et parfois runbook d’exploitation pour les équipes ops.',
      },
      {
        question: 'Intervention avec mon agence actuelle ?',
        answer:
          'Oui : rôles partagés (design / contenu / dev), revues de code communes et cérémonies adaptées à votre organisation.',
      },
      {
        question: 'Comment lancer un projet ?',
        answer:
          'Contact ou formulaire devis avec contexte et contraintes ; retour sous 1–2 jours ouvrés avec proposition de call ou devis.',
      },
    ],
  };
}

export function getSiloChildArticle(
  silo: ServiceSilo,
  slug: string,
  childLabel: string,
  parentLabel: string
): MarketingLongArticle {
  const key = `${silo}:${slug}`;
  const override = OVERRIDES[key];
  if (override) {
    return override;
  }
  return templateArticle(childLabel, parentLabel, silo);
}

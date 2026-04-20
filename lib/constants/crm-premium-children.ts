/**
 * Pages premium `/crm-outils-metiers/*` — ton accessible, exemples de situation.
 */

const SILO = '/crm-outils-metiers';

export const CRM_PREMIUM_SLUGS = ['crm-sur-mesure', 'integration-crm', 'automatisation'] as const;

export type CrmPremiumSlug = (typeof CRM_PREMIUM_SLUGS)[number];

export function isCrmPremiumSlug(s: string): s is CrmPremiumSlug {
  return (CRM_PREMIUM_SLUGS as readonly string[]).includes(s);
}

type Cta = { href: string; label: string };
type Hero = { chapter: string; subline: string; h1: string; lead: string; primaryCta: Cta; secondaryCta: Cta };
type Block4 = { kicker: string; title: string; subtitle: string; items: readonly { title: string; body: string }[] };
type Editorial = { kicker: string; title: string };
type Audience = { kicker: string; title: string; subtitle: string; cards: readonly { title: string; body: string }[] };
type Compare = {
  kicker: string;
  title: string;
  subtitle: string;
  columns: readonly [string, string, string];
  rows: readonly { label: string; c: readonly [boolean, boolean, boolean] }[];
};
type Process = { kicker: string; title: string; steps: readonly { n: string; title: string; body: string }[] };
type Stack = { kicker: string; title: string; body: string; labels: readonly string[] };
type Cases = { kicker: string; title: string; intro: string };
type FaqBlock = { kicker: string; title: string; subtitle: string };
type FaqItem = { question: string; answer: string };
type FinalCta = { title: string; primaryHref: string; primaryLabel: string; secondaryHref: string; secondaryLabel: string };
type JsonLd = { serviceName: string; serviceDescription: string; breadcrumbPageName: string };

export type CrmPremiumChildConfig = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: readonly string[];
  jsonLd: JsonLd;
  breadcrumbLabel: string;
  hero: Hero;
  benefits: Block4;
  editorial: Editorial;
  audience: Audience;
  compare: Compare;
  process: Process;
  stack: Stack;
  cases: Cases;
  faq: FaqBlock;
  faqItems: readonly FaqItem[];
  finalCta: FinalCta;
};

const CTA_DEVIS_OUTIL = { href: '/devis?projectType=outil', label: 'Demander un devis' } as const;
const PF = (p: string) => ({ href: `${p}#portfolio`, label: 'Voir le portfolio' } as const);

export const CRM_PREMIUM_CHILDREN: Record<CrmPremiumSlug, CrmPremiumChildConfig> = {
  'crm-sur-mesure': {
    path: `${SILO}/crm-sur-mesure`,
    metaTitle: 'CRM sur mesure — Outil adapté à votre process | Clickdev',
    metaDescription:
      'Je conçois et développe un CRM sur mesure : devis, suivi client, rôles. Ex. : agence immobilière, cabinet recrutement. Moins de tableurs — Clickdev.',
    keywords: ['CRM sur mesure freelance', 'outil commercial PME', 'développement CRM web', 'suivi devis', 'pipeline vente'],
    jsonLd: {
      serviceName: 'CRM sur mesure',
      serviceDescription: 'Conception et développement d’un outil de suivi commercial adapté à votre processus.',
      breadcrumbPageName: 'CRM sur mesure',
    },
    breadcrumbLabel: 'CRM sur mesure',
    hero: {
      chapter: 'Chapitre 05.1 · CRM',
      subline: 'Développeur freelance — Je développe votre outil',
      h1: 'CRM sur mesure : votre process, pas celui d’un logiciel générique',
      lead:
        'Quand Excel, le mail et trois logiciels se disputent la vérité sur un dossier client, les oublis et les versions “fichier_final_v2” coûtent cher — en temps et en image. Un petit CRM web peut rassembler contacts, devis, relances, pièces jointes et historique dans un seul fil que tout le monde consulte. Je conçois les écrans avec vous (vocabulaire métier, étapes, droits), puis je code une première version utilisable vite, avec la possibilité d’ajouter des modules quand l’outil est adopté. Exemple : société de nettoyage qui veut lier chantiers, photos avant/après, factures et enquête de satisfaction.',
      primaryCta: CTA_DEVIS_OUTIL,
      secondaryCta: PF(`${SILO}/crm-sur-mesure`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Un outil qui colle à votre équipe',
      subtitle:
        'Moins de champs inutiles copiés d’un logiciel américain, plus d’adoption parce que l’écran ressemble à votre journée réelle.',
      items: [
        {
          title: 'Pipeline clair',
          body:
            'Colonnes Kanban ou étapes nommées comme chez vous : “devis envoyé”, “acompte reçu”, “intervention planifiée” — pas une traduction approximative d’un workflow anglais.',
        },
        {
          title: 'Droits par rôle',
          body:
            'Commercial, admin, compta, terrain : chacun voit ce dont il a besoin sans tomber sur des boutons dangereux ou des données hors périmètre.',
        },
        {
          title: 'Historique central',
          body:
            'E-mails, notes internes, pièces : une trace lisible plutôt que des pièces disséminées sur cinq drives personnels.',
        },
        {
          title: 'Évolutif sans repartir de zéro',
          body:
            'On commence sur un périmètre utile ; on ajoute reporting, portail client ou intégrations quand le socle est stable — pas l’inverse.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Le sur-mesure vaut le coup quand le SaaS du marché vous force à mentir sur votre process' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Des contextes où un outil adapté change le quotidien plus qu’une nouvelle licence “fourre-tout”.',
      cards: [
        {
          title: 'Équipe de 5 à 30 personnes',
          body:
            'Trop cher et trop rigide pour imposer Salesforce ou équivalent ; trop risqué de rester sur des tableurs partagés quand les dossiers se multiplient.',
        },
        {
          title: 'Process métier vraiment spécifique',
          body:
            'Location saisonnière avec caution et états des lieux, BTP avec visites et avenants, formation avec sessions et suivi pédagogique : des étapes que les templates génériques ne comprennent pas.',
        },
        {
          title: 'Données sensibles ou contraintes fortes',
          body:
            'Hébergement en France ou en Europe, accès tracés, moins de copies éparpillées : un cadre que vous contrôlez mieux qu’avec dix outils gratuits empilés.',
        },
        {
          title: 'Remplacer un “monstre” sous-utilisé',
          body:
            'Vous payez une licence pour dix pour cent des menus : parfois un outil plus simple fait gagner de l’argent et du temps de formation.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'SaaS prêt à l’emploi, sur mesure, ou bricolage Excel ?',
      subtitle:
        'Le sur-mesure gagne quand le coût des contournements (double saisie, erreurs, temps perdu) dépasse nettement le coût d’un développement maîtrisé.',
      columns: ['SaaS connu', 'Sur mesure', 'Excel / mails'] as const,
      rows: [
        { label: 'Démarrage rapide', c: [true, false, true] as const },
        { label: 'Adaptation fine du métier', c: [false, true, false] as const },
        { label: 'Coût récurrent licence', c: [true, false, true] as const },
        { label: 'Propriété des données', c: [false, true, true] as const },
        { label: 'Zéro dette technique', c: [true, false, false] as const },
        { label: 'Évolutif sans plafond éditeur', c: [false, true, false] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        {
          n: '01',
          title: 'Atelier',
          body:
            'Parcours réels sur papier ou au tableau : où ça coince, ce qui est interdit légalement, ce qui est urgent business — pas de solution avant d’avoir listé les irritants.',
        },
        {
          n: '02',
          title: 'Maquettes',
          body:
            'Figma ou wireframes simples validés par deux ou trois futurs utilisateurs pilotes : mieux vaut un “moche mais clair” qu’un écran joli inutilisable.',
        },
        {
          n: '03',
          title: 'Développement',
          body:
            'Itérations courtes, environnement de test, démos régulières — vous voyez l’outil grandir au lieu de découvrir un bloc monolithique au dernier jour.',
        },
        {
          n: '04',
          title: 'Formation',
          body:
            'Vidéos courtes sur les gestes du quotidien + session live pour les questions “et si mon cas est bizarre ?”.',
        },
        {
          n: '05',
          title: 'Exploitation',
          body:
            'Correctifs, petites évolutions au fil de l’eau : un CRM vit avec l’entreprise, surtout la première année.',
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Technologies',
      body:
        'Souvent une application web Next.js ou Laravel avec PostgreSQL, authentification solide, sauvegardes automatiques et journaux d’audit quand c’est nécessaire.',
      labels: ['Next.js', 'Laravel', 'PostgreSQL', 'Auth', 'API'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Outils métiers livrés',
      intro:
        'Plateformes, CRM légers, portails clients : des projets où le code suivait un process métier qu’on avait pris le temps d’écouter.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — CRM sur mesure', subtitle: 'Délai, maintenance.' },
    faqItems: [
      {
        question: 'Combien de temps pour un premier périmètre utile ?',
        answer:
          'Souvent huit à seize semaines selon la complexité des rôles, des intégrations et du nombre d’écrans — le premier livrable doit être utilisable en interne, pas une coquille vide.',
      },
      {
        question: 'Où sera hébergé l’outil ?',
        answer:
          'Sur votre compte cloud ou sur une infrastructure que je gère pour vous : on tranche au devis selon contraintes DSI, budget et compétences internes.',
      },
      {
        question: 'Y aura-t-il une application mobile native ?',
        answer:
          'Dans la majorité des cas, une interface web responsive suffit. Une app iOS/Android native n’a de sens que si le terrain impose vraiment le mode hors-ligne ou des capteurs spécifiques.',
      },
      {
        question: 'Et si vous n’êtes plus disponible plus tard ?',
        answer:
          'Code sur dépôt Git, documentation minimale mais honnête, secrets documentés : pas de prison dorée. Les grosses évolutions restent plus sûres avec un regard technique.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'Souvent à partir de 12 000 € pour un premier module sérieux (authentification, contacts, pipeline, historique). Au-delà, le devis dépend du nombre de rôles, de règles métier et d’intégrations.',
      },
    ],
    finalCta: { title: 'Excel ne suffit plus pour suivre vos affaires ?', primaryHref: '/devis?projectType=outil', primaryLabel: 'Devis CRM', secondaryHref: '/contact', secondaryLabel: 'Appel découverte' },
  },

  'integration-crm': {
    path: `${SILO}/integration-crm`,
    metaTitle: 'Intégration CRM — Site, mails, facturation | Clickdev',
    metaDescription:
      'Je relie votre CRM (HubSpot, Pipedrive, etc.) au site, à la facturation ou au support. Moins de saisie double. PME & équipes commerciales — Clickdev.',
    keywords: ['intégration CRM freelance', 'HubSpot API', 'Pipedrive connecteur', 'saisie automatique leads', 'CRM site web'],
    jsonLd: {
      serviceName: 'Intégration CRM',
      serviceDescription: 'Connexion du CRM aux outils existants : site web, e-mail, facturation ou support.',
      breadcrumbPageName: 'Intégration CRM',
    },
    breadcrumbLabel: 'Intégration CRM',
    hero: {
      chapter: 'Chapitre 05.2 · Intégrations',
      subline: 'Développeur freelance — Je connecte vos outils',
      h1: 'Intégration CRM : un seul endroit pour la vérité',
      lead:
        'Le formulaire du site crée la fiche au bon format, le devis signé met à jour le pipeline, le paiement en ligne remonte la facture ou déclenche la compta. Je développe des passerelles côté serveur : secrets hors du navigateur, signatures de webhook, nouvelles tentatives si l’API du CRM dort, file d’attente si votre outil est en maintenance. Exemple : cabinet de formation où une inscription en ligne doit créer le dossier apprenant, alimenter le CRM et envoyer un e-mail de bienvenue personnalisé — sans qu’un stagiaire recopie les champs le lundi matin.',
      primaryCta: CTA_DEVIS_OUTIL,
      secondaryCta: PF(`${SILO}/integration-crm`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Moins de copier-coller, moins d’oublis',
      subtitle:
        'Les données vont où elles doivent, une fois — avec une trace pour expliquer les ratés.',
      items: [
        {
          title: 'Webhooks sécurisés',
          body:
            'Signature des payloads, retries raisonnables, file d’attente si l’outil en face est en panne — pas de perte silencieuse de leads.',
        },
        {
          title: 'Champs mappés proprement',
          body:
            'Ce qui part du site ou de la boutique arrive dans les bonnes propriétés du CRM, avec règles pour les champs obligatoires et les valeurs par défaut.',
        },
        {
          title: 'Journal simple',
          body:
            'Pour comprendre pourquoi un lead n’est pas passé : erreur API, validation refusée, doublon détecté — sans devoir relire les logs bruts du serveur.',
        },
        {
          title: 'Respect des quotas API',
          body:
            'Pas de boucles qui épuisent votre abonnement SaaS en une nuit ; on batch quand il le faut.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Une intégration sérieuse, ce n’est pas un “plugin magique” à cliquer une fois' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Des flux où la donnée doit circuler vite sans sacrifier la sécurité.',
      cards: [
        {
          title: 'E-commerce + équipe commerciale',
          body:
            'Panier abandonné ou panier élevé → tâche commerciale avec montant et produits — pour appeler avec le bon contexte.',
        },
        {
          title: 'Formulaire de devis complexe',
          body:
            'Pièces jointes stockées proprement sur un stockage objet, lien sécurisé dans le CRM, notification Slack ou Teams pour l’équipe.',
        },
        {
          title: 'Support client',
          body:
            'Ticket dans Zendesk ou équivalent enrichi avec l’historique CRM : fini de redemander l’identifiant client à chaque mail.',
        },
        {
          title: 'Facturation',
          body:
            'Facture marquée payée → étape “gagné” ou lancement d’une checklist interne — moins de décalage entre compta et terrain.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'Zapier, intégration sur mesure, ou saisie manuelle ?',
      subtitle:
        'Zapier ou Make va vite pour prototyper ; le code tient mieux la charge, la sécurité et les cas limites quand le flux devient critique.',
      columns: ['Zapier / Make', 'Sur mesure', 'Manuel'] as const,
      rows: [
        { label: 'Time-to-market très court', c: [true, false, true] as const },
        { label: 'Logique métier fine', c: [false, true, false] as const },
        { label: 'Volume élevé', c: [false, true, false] as const },
        { label: 'Coût mensuel maîtrisé', c: [true, false, true] as const },
        { label: 'Traçabilité / audit', c: [false, true, false] as const },
        { label: 'Zéro maintenance', c: [false, false, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        {
          n: '01',
          title: 'Cartographie',
          body:
            'Outils concernés, champs à synchroniser, événements déclencheurs (formulaire soumis, paiement réussi, statut changé).',
        },
        {
          n: '02',
          title: 'Spécification',
          body:
            'Cas nominal, erreurs attendues, doublons possibles, volumétrie approximative — pour coder des branches et pas seulement le chemin heureux.',
        },
        {
          n: '03',
          title: 'Développement',
          body:
            'Appels API depuis le serveur, secrets hors du front, gestion des timeouts — rien de critique exposé dans le navigateur.',
        },
        {
          n: '04',
          title: 'Tests',
          body:
            'Jeux de données réels anonymisés quand c’est possible ; scénarios d’échec (API 500, payload incomplet).',
        },
        {
          n: '05',
          title: 'Mise en production',
          body:
            'Monitoring léger, runbook d’une page pour votre équipe (“si ça clignote ici, appelez X ou regardez Y”).',
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Intégrations',
      body:
        'API REST des CRM courants (HubSpot, Pipedrive, etc.), files d’attente, Node.js ou Laravel selon ce qui s’intègre le mieux à votre infra existante.',
      labels: ['HubSpot', 'Pipedrive', 'Stripe', 'Webhooks', 'Node.js'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Intégrations & outils',
      intro:
        'Projets où plusieurs systèmes ont été reliés sans que l’équipe ait à devenir experte en format JSON.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — intégration CRM', subtitle: 'Sécurité, maintenance.' },
    faqItems: [
      {
        question: 'Pouvez-vous travailler sans accès administrateur ?',
        answer:
          'Non : il faut au minimum un compte technique dédié ou un binôme côté client avec les droits pour créer clés API et webhooks.',
      },
      {
        question: 'Comment gérez-vous le RGPD ?',
        answer:
          'On mappe les données personnelles transitant par le flux, leur durée de conservation et les accès ; vous validez le cadre légal avec votre conseil si besoin.',
      },
      {
        question: 'Que se passe-t-il en cas de panne API ?',
        answer:
          'Retries, file d’attente et alerte : on évite la perte silencieuse de leads quand un fournisseur SaaS a un incident.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'Souvent à partir de 2 500 € pour un flux simple type formulaire → CRM avec champs mappés et logs basiques.',
      },
      {
        question: 'Y a-t-il une maintenance prévue ?',
        answer:
          'Les APIs changent : forfait mensuel léger ou tickets à la demande pour surveiller et adapter le connecteur.',
      },
    ],
    finalCta: { title: 'Leads qui se perdent entre le site et le CRM ?', primaryHref: '/devis?projectType=outil', primaryLabel: 'Devis intégration', secondaryHref: '/contact', secondaryLabel: 'En parler' },
  },

  automatisation: {
    path: `${SILO}/automatisation`,
    metaTitle: 'Automatisation métier — Moins de tâches répétitives | Clickdev',
    metaDescription:
      'Je conçois des automatisations fiables : relances, synchronisations, notifications. Ex. devis signé → tâche équipe. PME — Clickdev freelance.',
    keywords: ['automatisation métier freelance', 'workflow PME', 'relance automatique', 'intégration outils', 'gain de temps bureau'],
    jsonLd: {
      serviceName: 'Automatisation métier',
      serviceDescription: 'Automatisation de tâches répétitives entre outils métiers : relances, synchronisations et notifications.',
      breadcrumbPageName: 'Automatisation',
    },
    breadcrumbLabel: 'Automatisation',
    hero: {
      chapter: 'Chapitre 05.3 · Automatisation',
      subline: 'Développeur freelance — Je rends les flux prévisibles',
      h1: 'Automatisation : enlever les clics qui ne servent à rien',
      lead:
        'Relancer automatiquement un client qui n’a pas envoyé son bon de commande, prévenir l’atelier quand un statut passe en “urgent”, archiver les pièces sur le drive avec le bon nom de dossier : ce sont des gestes répétitifs qui fatiguent et s’oublient. Je conçois des scénarios avec file d’erreurs, logs et alertes humaines quand un cas sort du cadre — pour ne pas “automatiser les bugs”. Exemple : loueur de matériel avec contrôle des dates de retour, e-mails de rappel et tâche interne si le matériel est en retard.',
      primaryCta: CTA_DEVIS_OUTIL,
      secondaryCta: PF(`${SILO}/automatisation`),
    },
    benefits: {
      kicker: 'Ce que vous obtenez',
      title: 'Des flux que vous pouvez expliquer autour d’une table',
      subtitle:
        'Pas de boîte noire : si ça casse, on sait où regarder et qui appeler — le script n’a pas le dernier mot sur tout.',
      items: [
        {
          title: 'Scénarios documentés',
          body:
            'Déclencheur, étapes, délais, personne prévenue en cas d’échec : une feuille de route lisible par quelqu’un qui n’a pas écrit le code.',
        },
        {
          title: 'Reprise sur erreur',
          body:
            'Nouvelles tentatives raisonnables, backoff, plafond — pas de boucle infinie quand une API change subitement de format.',
        },
        {
          title: 'Alertes humaines',
          body:
            'Quand un montant dépasse un seuil, qu’un client est “VIP”, ou qu’un champ obligatoire manque : un humain reprend la main.',
        },
        {
          title: 'Évolutif',
          body:
            'On ajoute une étape ou un nouveau déclencheur sans réécrire tout le workflow — la dette reste maîtrisable.',
        },
      ],
    },
    editorial: { kicker: 'Lecture', title: 'Automatiser trop vite, c’est souvent automatiser les oublis — en plus rapide' },
    audience: {
      kicker: 'Pour vous',
      title: 'Exemples',
      subtitle:
        'Des tâches répétitives où une machine fait bien le garde-fou, pas la décision fine.',
      cards: [
        {
          title: 'Devis puis commande',
          body:
            'Signature électronique → création du dossier client complet, facture brouillon, notification compta — sans ressaisir les lignes.',
        },
        {
          title: 'RH ou onboarding',
          body:
            'Nouvelle embauche → checklist matériel, création de comptes, rappels aux managers pour les accès manuels encore nécessaires.',
        },
        {
          title: 'SAV',
          body:
            'Ticket clos → enquête de satisfaction 48 h après, avec exemption si le client était en colère (détecté par étiquette ou score).',
        },
        {
          title: 'Stock ou réapprovisionnement',
          body:
            'Seuil bas atteint → e-mail fournisseur avec quantités et lien vers la dernière commande — le décideur valide en un clic si besoin.',
        },
      ],
    },
    compare: {
      kicker: 'Décision',
      title: 'No-code, script sur mesure, ou statu quo ?',
      subtitle:
        'Le no-code accélère le test ; le code tient mieux quand le flux devient critique, volumineux ou très sensible.',
      columns: ['Make / Zapier', 'Sur mesure', 'Manuel'] as const,
      rows: [
        { label: 'Prototype en jours', c: [true, false, true] as const },
        { label: 'Logique complexe', c: [false, true, false] as const },
        { label: 'Coût licence outil', c: [true, false, true] as const },
        { label: 'Fiabilité sous charge', c: [false, true, false] as const },
        { label: 'Auditabilité', c: [false, true, false] as const },
        { label: 'Zéro maintenance', c: [false, false, true] as const },
      ],
    },
    process: {
      kicker: 'Process',
      title: 'Cinq étapes',
      steps: [
        {
          n: '01',
          title: 'Observation',
          body:
            'Où part le temps aujourd’hui, quelles erreurs humaines reviennent en réunion, quels cas font peur à automatiser — on les note avant d’écrire du code.',
        },
        {
          n: '02',
          title: 'Mini pilote',
          body:
            'Un seul flux bien choisi, mesuré une ou deux semaines : volume, taux d’échec, réactions de l’équipe.',
        },
        {
          n: '03',
          title: 'Durcissement',
          body:
            'Gestion d’erreurs, alertes, droits d’accès, plafonds — ce qui transforme un script de démo en outil de production.',
        },
        {
          n: '04',
          title: 'Déploiement',
          body:
            'Formation courte sur les exceptions : que faire quand le scénario dit “je ne sais pas”.',
        },
        {
          n: '05',
          title: 'Amélioration continue',
          body:
            'Ajout de cas au fil de l’eau quand le terrain propose de meilleures règles que la théorie du jour J.',
        },
      ],
    },
    stack: {
      kicker: 'Stack',
      title: 'Technologies',
      body:
        'Workers, files d’attente, connecteurs e-mail, API REST ; parfois n8n ou équivalent pour valider rapidement un flux avant de le coder en dur.',
      labels: ['Node.js', 'n8n', 'PostgreSQL', 'E-mail', 'API'],
    },
    cases: {
      kicker: 'Portfolio',
      title: 'Automatisations & outils',
      intro:
        'Projets où des flux métiers ont été codés ou reliés avec de la visibilité — pas des jobs planqués que personne n’ose toucher.',
    },
    faq: { kicker: 'FAQ', title: 'Questions — automatisation', subtitle: 'Risques, coûts.' },
    faqItems: [
      {
        question: 'Peut-on tout automatiser ?',
        answer:
          'Rarement utile ou souhaitable : on commence par ce qui est répétitif, peu risqué et clairement défini ; le jugement sur les gros montants ou les cas litigieux reste humain.',
      },
      {
        question: 'Qui maintient le flux dans le temps ?',
        answer:
          'Forfait léger ou tickets à la demande ; je documente pour qu’une reprise interne soit possible si vous recrutez.',
      },
      {
        question: 'Comment gérez-vous les données personnelles ?',
        answer:
          'Minimisation des champs, durées de conservation alignées sur votre politique, logs sans stocker inutilement des données sensibles.',
      },
      {
        question: 'Budget indicatif ?',
        answer:
          'Souvent à partir de 1 800 € pour un flux simple mais bien cadré (un déclencheur, quelques branches, alertes).',
      },
      {
        question: 'Quel délai ?',
        answer:
          'De quelques jours pour un pilote très ciblé à quelques semaines dès qu’il y a plusieurs branches, outils et exceptions métier.',
      },
    ],
    finalCta: { title: 'Même tâche dix fois par semaine ?', primaryHref: '/devis?projectType=outil', primaryLabel: 'Devis automatisation', secondaryHref: '/contact', secondaryLabel: 'Décrire le flux' },
  },
};

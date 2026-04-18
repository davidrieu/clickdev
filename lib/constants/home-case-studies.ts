export type HomeCaseStudyMetric = { value: string; label: string };

export type HomeCaseStudy = {
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  metrics: [
    HomeCaseStudyMetric,
    HomeCaseStudyMetric,
    HomeCaseStudyMetric,
    HomeCaseStudyMetric,
  ];
};

/** 3 cas mis en avant sur la home — contenu éditorial ; pages détail sous /realisations/[slug]/ */
export const homeFeaturedCaseStudies: HomeCaseStudy[] = [
  {
    title: "Greenweez",
    eyebrow: "E-commerce · Bio",
    description:
      "Refonte du tunnel de conversion pour le leader e-commerce bio en Europe — performance, UX et industrialisation front.",
    href: "/realisations/greenweez/",
    metrics: [
      { value: "+34%", label: "conversion" },
      { value: "0.9s", label: "chargement" },
      { value: "100", label: "Lighthouse" },
      { value: "−52%", label: "rebond" },
    ],
  },
  {
    title: "Accor All",
    eyebrow: "Application mobile · Hôtellerie",
    description:
      "Évolution d’une app grand public : parcours de réservation, stabilité et expérience offline-first sur le terrain.",
    href: "/realisations/accor-all/",
    metrics: [
      { value: "50M+", label: "téléchargements" },
      { value: "4.7", label: "note store" },
      { value: "2.1s", label: "TTI médian" },
      { value: "−38%", label: "crashes" },
    ],
  },
  {
    title: "Spreadshirt",
    eyebrow: "Marketplace · Print on demand",
    description:
      "Marketplace et configurateur complexe : catalogue, règles métier et performance sur des volumes élevés.",
    href: "/realisations/spreadshirt/",
    metrics: [
      { value: "+28%", label: "configurateur" },
      { value: "1.1s", label: "LCP" },
      { value: "100", label: "CWV" },
      { value: "+19%", label: "panier moyen" },
    ],
  },
];

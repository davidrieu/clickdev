export type HomeTestimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const homeTestimonials: HomeTestimonial[] = [
  {
    quote:
      "David a livré une refonte e-commerce solide : perf, tunnel de conversion, et une vraie capacité à prioriser le ROI.",
    name: "Placeholder client",
    role: "Directrice e-commerce",
    company: "Marque retail",
  },
  {
    quote:
      "Intervention chirurgicale sur notre stack Next.js : dette technique réduite, CI clarifiée, et équipe autonome derrière.",
    name: "Placeholder CTO",
    role: "CTO",
    company: "Scale-up SaaS",
  },
  {
    quote:
      "Mission IA pragmatique : pas de slide deck, des use cases en prod et une architecture de coûts maîtrisée.",
    name: "Placeholder COO",
    role: "COO",
    company: "PME industrielle",
  },
  {
    quote:
      "SEO technique + refonte sans drama : migrations propres, suivi des positions, et communication limpide tout au long.",
    name: "Placeholder marketing",
    role: "Head of Growth",
    company: "Marque D2C",
  },
];

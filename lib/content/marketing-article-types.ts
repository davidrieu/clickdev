/** Visuel de section : `src` optionnel tant que les assets ne sont pas fournis. */
export type MarketingArticleSectionImage = {
  src?: string;
  alt: string;
  caption?: string;
};

export type MarketingArticleSection = {
  heading: string;
  paragraphs: string[];
  image?: MarketingArticleSectionImage;
};

export type MarketingLongArticle = {
  metaDescription: string;
  lead: string;
  sections: MarketingArticleSection[];
  faq: { question: string; answer: string }[];
};

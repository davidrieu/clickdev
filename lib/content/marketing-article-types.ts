export type MarketingArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type MarketingLongArticle = {
  metaDescription: string;
  lead: string;
  sections: MarketingArticleSection[];
  faq: { question: string; answer: string }[];
};

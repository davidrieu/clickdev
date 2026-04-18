/** Bloc éditorial H2 + paragraphes (+ H3 optionnels) — silos & pages longues. */
export type MarketingSubsection = { heading: string; paragraphs: string[] };

export type MarketingSectionBlock = {
  heading: string;
  paragraphs: string[];
  subsections?: MarketingSubsection[];
};

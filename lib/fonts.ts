import {
  Bricolage_Grotesque,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";

/** Titres & display — brief §6 (italique pour mots-clés) */
export const fontDisplay = Instrument_Serif({
  subsets: ["latin", "latin-ext"],
  variable: "--font-instrument-serif",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400"],
});

/** Corps — brief §6 (400 / emphasis 600) */
export const fontBody = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
  weight: ["400", "600"],
});

/** Eyebrows, tags, metadata — brief §6 */
export const fontMono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const fontVariablesClassName = [
  fontDisplay.variable,
  fontBody.variable,
  fontMono.variable,
].join(" ");

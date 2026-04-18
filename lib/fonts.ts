import { Bricolage_Grotesque, JetBrains_Mono, Outfit } from "next/font/google";

/** Titres & display — sans géométrique (lisible, actuelle) */
export const fontHeading = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
  fontHeading.variable,
  fontBody.variable,
  fontMono.variable,
].join(" ");

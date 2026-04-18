import type { Metadata } from "next";
import { fontVariablesClassName } from "@/lib/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Clickdev",
    template: "%s | Clickdev",
  },
  description: "Développeur freelance pour e-commerce, marketplaces et outils métiers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={fontVariablesClassName}>
      <body className="font-sans text-base leading-normal antialiased">{children}</body>
    </html>
  );
}

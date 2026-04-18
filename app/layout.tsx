import type { Metadata } from "next";
import { fontVariablesClassName } from "@/lib/fonts";
import { cn } from "@/lib/utils";
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
    <html lang="fr" className={cn("dark", fontVariablesClassName)}>
      <body>{children}</body>
    </html>
  );
}

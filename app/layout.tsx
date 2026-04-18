import type { Metadata } from "next";
import { fontVariablesClassName } from "@/lib/fonts";
import "../styles/globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="fr" className={cn(fontVariablesClassName, "font-sans", geist.variable)}>
      <body className="font-sans text-base leading-normal antialiased">{children}</body>
    </html>
  );
}

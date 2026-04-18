import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { LenisProvider } from "@/components/providers/lenis-provider";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <div className="flex min-h-dvh flex-col">
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
      </div>
    </LenisProvider>
  );
}

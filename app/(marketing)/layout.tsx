import type { ReactNode } from "react";
import { GenesisAmbientHalos } from "@/components/genesis/genesis-ambient-halos";
import { GenesisFooter } from "@/components/genesis/genesis-footer";
import { GenesisNavbar } from "@/components/genesis/genesis-navbar";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { fontGenesis } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <div className={cn("genesis-skin relative flex min-h-dvh flex-col", fontGenesis.className)}>
        <GenesisAmbientHalos />
        <GenesisNavbar />
        <main
          id="main-content"
          className="relative z-[1] flex flex-1 flex-col px-4 md:px-16 lg:px-24"
        >
          {children}
        </main>
        <div className="relative z-[1]">
          <GenesisFooter />
        </div>
      </div>
    </LenisProvider>
  );
}

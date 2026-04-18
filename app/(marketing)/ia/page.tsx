import type { Metadata } from "next";
import { SiloPillarBottom } from "@/components/templates/silo-pillar-bottom";
import { SiloPillarLayout } from "@/components/templates/silo-pillar-layout";
import { mainNavSilos } from "@/lib/constants/navigation";
import { iaPillar, siloLayoutBody } from "@/lib/constants/silo-pillars";

export const metadata: Metadata = {
  title: iaPillar.metaTitle,
  description: iaPillar.metaDescription,
};

export default function IaPage() {
  const silo = mainNavSilos.find((s) => s.href === "/ia/");
  return (
    <SiloPillarLayout
      {...siloLayoutBody(iaPillar)}
      childLinks={silo?.children}
      afterSections={<SiloPillarBottom siloHref="/ia/" />}
    />
  );
}

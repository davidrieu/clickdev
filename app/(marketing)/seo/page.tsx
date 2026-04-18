import type { Metadata } from "next";
import { SiloPillarBottom } from "@/components/templates/silo-pillar-bottom";
import { SiloPillarLayout } from "@/components/templates/silo-pillar-layout";
import { mainNavSilos } from "@/lib/constants/navigation";
import { seoPillar, siloLayoutBody } from "@/lib/constants/silo-pillars";

export const metadata: Metadata = {
  title: seoPillar.metaTitle,
  description: seoPillar.metaDescription,
};

export default function SeoPage() {
  const silo = mainNavSilos.find((s) => s.href === "/seo/");
  return (
    <SiloPillarLayout
      {...siloLayoutBody(seoPillar)}
      childLinks={silo?.children}
      afterSections={<SiloPillarBottom siloHref="/seo/" />}
    />
  );
}

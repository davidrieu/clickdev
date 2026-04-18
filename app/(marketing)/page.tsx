import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <p className="font-serif text-2xl italic text-ink">
        Clickdev <span className="text-terracotta">typo</span>
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Badge variant="secondary" className="font-mono uppercase tracking-widest">
          Phase 1.5
        </Badge>
        <Badge variant="outline">shadcn · Base UI</Badge>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button size="cta">Demander un devis</Button>
        <Button variant="ghost" size="lg">
          Voir les réalisations
        </Button>
      </div>

      <Card className="w-full max-w-md border-border">
        <CardHeader>
          <CardTitle>Composants de base</CardTitle>
          <CardDescription>
            Button (default + ghost, taille CTA pill), Badge, Card — thème aligné sur le
            brief.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-ink-dim">
          Les primitives suivantes arrivent en Phase 1.6 (Accordion, Dialog,
          formulaires, Toast).
        </CardContent>
        <CardFooter className="gap-2">
          <Link
            href="/devis"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            /devis
          </Link>
        </CardFooter>
      </Card>

      <p className="font-mono text-[11px] uppercase tracking-widest text-ink-muted">
        eyebrow · metadata
      </p>
    </main>
  );
}

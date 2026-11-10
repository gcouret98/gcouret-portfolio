import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Demo } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

/** En-tête commun aux pages de démo : titre, objectifs et stack technique. */
export function DemoLayout({ demo, children }: { demo: Demo; children: ReactNode }) {
  const Icon = demo.icon;

  return (
    <Container className="py-10">
      <Link
        href="/#demos"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Toutes les démos
      </Link>

      <header className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
            <Icon className="size-4" aria-hidden="true" /> {demo.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight">{demo.title}</h1>
          <p className="mt-3 text-muted-foreground">{demo.summary}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {demo.stack.map((tech) => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>

        <ul className="space-y-2 rounded-xl border border-border p-5 text-sm lg:max-w-sm">
          {demo.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </header>

      <section className="mt-10">{children}</section>
    </Container>
  );
}

/** Zone réservée en attendant l'implémentation de la mini-application. */
export function DemoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex min-h-[420px] items-center justify-center rounded-xl border border-dashed border-border bg-muted/50 p-8 text-center text-sm text-muted-foreground">
      {label} — en cours de développement
    </div>
  );
}

import { existsSync } from "node:fs";
import path from "node:path";
import { ArrowRight, Download, GraduationCap, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/ButtonLink";

// Composant serveur : la présence du CV est vérifiée au moment du build.
const hasCv = existsSync(path.join(process.cwd(), "public", siteConfig.links.cv));

export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
          Ouvert aux opportunités
        </p>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {siteConfig.name}
          <span className="block text-muted-foreground">{siteConfig.role}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
          {siteConfig.tagline}
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <li className="inline-flex items-center gap-2">
            <GraduationCap className="size-4" aria-hidden="true" />
            {siteConfig.certification}
          </li>
          <li className="inline-flex items-center gap-2">
            <MapPin className="size-4" aria-hidden="true" />
            {siteConfig.location}
          </li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="#demos">
            Voir les démos <ArrowRight className="size-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href={siteConfig.links.email} variant="secondary">
            Me contacter
          </ButtonLink>
          {hasCv && (
            <a
              href={siteConfig.links.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition hover:bg-muted"
            >
              <Download className="size-4" aria-hidden="true" /> Télécharger mon CV
            </a>
          )}
        </div>
      </Container>
    </section>
  );
}

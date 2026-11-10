import { Languages, Sparkles } from "lucide-react";
import { languages, siteConfig, softSkills } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function AboutSection() {
  return (
    <section id="a-propos" className="scroll-mt-20 py-16">
      <Container className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold tracking-tight">À propos</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <dl className="space-y-6 rounded-xl border border-border p-6 text-sm">
          <div>
            <dt className="flex items-center gap-2 font-semibold">
              <Sparkles className="size-4 text-primary" aria-hidden="true" /> Savoir-être
            </dt>
            <dd className="mt-2 text-muted-foreground">{softSkills.join(" · ")}</dd>
          </div>
          <div>
            <dt className="flex items-center gap-2 font-semibold">
              <Languages className="size-4 text-primary" aria-hidden="true" /> Langues
            </dt>
            <dd className="mt-2 text-muted-foreground">{languages.join(" · ")}</dd>
          </div>
        </dl>
      </Container>
    </section>
  );
}

import { demos } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { DemoCard } from "./DemoCard";

export function DemosSection() {
  return (
    <section id="demos" className="scroll-mt-20 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Démonstrations</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Trois mini-applications qui illustrent des problématiques concrètes : données
          spatiales, gestion d&apos;état côté client et logique métier.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {demos.map((demo, i) => (
            <DemoCard key={demo.slug} demo={demo} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

import { skillGroups } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function SkillsSection() {
  return (
    <section id="competences" className="scroll-mt-20 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Compétences</h2>
        <p className="mt-2 text-muted-foreground">
          Un socle full-stack orienté PHP et JavaScript, de la base de données à l&apos;interface.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-xl border border-border p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Badge>{skill}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import { education, experiences, type TimelineItem } from "@/config/site";
import { Container } from "@/components/ui/Container";

function Timeline({ title, Icon, items }: { title: string; Icon: LucideIcon; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        <Icon className="size-4" aria-hidden="true" /> {title}
      </h3>
      <ol className="mt-6 space-y-8 border-l border-border pl-6">
        {items.map((item) => (
          <li key={`${item.organization}-${item.period}`} className="relative">
            <span
              className="absolute top-1.5 -left-[29px] size-2.5 rounded-full border-2 border-background bg-primary"
              aria-hidden="true"
            />
            <p className="text-xs font-medium text-muted-foreground">{item.period}</p>
            <p className="mt-1 font-semibold">{item.title}</p>
            <p className="text-sm text-primary">{item.organization}</p>
            {item.description && (
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            )}
            {item.highlights.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {item.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function TimelineSection() {
  return (
    <section id="parcours" className="scroll-mt-20 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Parcours</h2>
        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <Timeline title="Expériences" Icon={Briefcase} items={experiences} />
          <Timeline title="Formation" Icon={GraduationCap} items={education} />
        </div>
      </Container>
    </section>
  );
}

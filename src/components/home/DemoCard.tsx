import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Demo } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export function DemoCard({ demo, index }: { demo: Demo; index: number }) {
  const Icon = demo.icon;

  return (
    <Link
      href={demo.href}
      className="group flex flex-col rounded-xl border border-border p-6 transition hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 focus-visible:outline-2 focus-visible:outline-primary"
    >
      <div className="flex items-start justify-between">
        <span className="inline-flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <ArrowUpRight
          className="size-5 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden="true"
        />
      </div>

      <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Démo {index + 1} · {demo.category}
      </p>
      <h3 className="mt-1 text-lg font-semibold">{demo.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{demo.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {demo.stack.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </Link>
  );
}

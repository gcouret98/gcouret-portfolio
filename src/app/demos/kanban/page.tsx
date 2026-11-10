import type { Metadata } from "next";
import { getDemo } from "@/config/site";
import { DemoLayout, DemoPlaceholder } from "@/components/demos/DemoLayout";

const demo = getDemo("kanban");

export const metadata: Metadata = { title: demo.title, description: demo.summary };

export default function KanbanPage() {
  return (
    <DemoLayout demo={demo}>
      {/* À venir : <KanbanBoard /> (dnd-kit + store Zustand persisté). */}
      <DemoPlaceholder label="Tableau Kanban" />
    </DemoLayout>
  );
}

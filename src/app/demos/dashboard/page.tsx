import type { Metadata } from "next";
import { getDemo } from "@/config/site";
import { DemoLayout, DemoPlaceholder } from "@/components/demos/DemoLayout";

const demo = getDemo("dashboard");

export const metadata: Metadata = { title: demo.title, description: demo.summary };

export default function DashboardPage() {
  return (
    <DemoLayout demo={demo}>
      {/* À venir : <MetricsDashboard /> (Recharts + export jsPDF). */}
      <DemoPlaceholder label="Tableau de bord" />
    </DemoLayout>
  );
}

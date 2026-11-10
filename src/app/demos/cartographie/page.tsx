import type { Metadata } from "next";
import { getDemo } from "@/config/site";
import { DemoLayout, DemoPlaceholder } from "@/components/demos/DemoLayout";

const demo = getDemo("cartographie");

export const metadata: Metadata = { title: demo.title, description: demo.summary };

export default function CartographiePage() {
  return (
    <DemoLayout demo={demo}>
      {/* À venir : <MapExplorer /> chargé côté client (Leaflet requiert window). */}
      <DemoPlaceholder label="Carte interactive" />
    </DemoLayout>
  );
}

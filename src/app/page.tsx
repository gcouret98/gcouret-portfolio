import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { DemosSection } from "@/components/home/DemosSection";
import { SkillsSection } from "@/components/home/SkillsSection";
import { TimelineSection } from "@/components/home/TimelineSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DemosSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
    </>
  );
}

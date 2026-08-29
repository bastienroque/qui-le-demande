import AboutSection from "@/components/about/AboutSection";
import { AboutHeroSection } from "@/components/about/AboutHeroSection";
import { MethodSection } from "@/components/about/MethodSection";
import ToolboxSection from "@/components/services/ToolboxSection";

export default function About() {
  return (
    <main className="w-full overflow-x-hidden">
      <AboutHeroSection />
      <MethodSection />
      <ToolboxSection />
      <AboutSection />
    </main>
  );
}

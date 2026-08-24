import { Hero } from "@/components/home/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import { SocialProofSection } from "@/components/home/SocialProofSection";
import { WeAreHere } from "@/components/home/WeAreHere";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProofSection />
      <WeAreHere />
      <ServicesSection />
    </>
  );
}

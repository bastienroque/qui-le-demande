import { SERVICES_POLES } from "@/lib/data/services-and-pricing";
import { ServicePoleCard } from "@/components/services/ServicePoleCard";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import StickyServiceNav from "@/components/services/StickyServiceNav";

export const metadata = {
  title: "Nos Services | Qui Le Demande ?",
  description:
    "Acquisition Google Ads, création web orientée conversion et tracking data conforme RGPD.",
};

export default function ServicesPage() {
  return (
    <main className="w-full bg-brand-white text-brand-black">
      <ServicesHeroSection />

      <div id="services-section-wrapper" className="relative">
        <StickyServiceNav />

        <section className="py-16 md:py-28 bg-brand-white">
          <div className="container mx-auto px-4 space-y-12 md:space-y-16">
            {SERVICES_POLES.map((pole) => (
              <ServicePoleCard key={pole.id} pole={pole} />
            ))}
          </div>
        </section>
      </div>

      <section className="bg-brand-red text-brand-white py-16 md:py-20">
        <div className="container mx-auto flex flex-col items-center px-4 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Vous ne savez pas par où commencer ?
          </h2>
          <p className="text-base md:text-lg font-medium max-w-xl mx-auto opacity-95">
            Demandez un diagnostic gratuit de 15 minutes. Nous analysons vos
            campagnes ou votre site et vous donnons 3 leviers prioritaires
            d'amélioration.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button
                variant="primary"
                tail="bottom-right"
                className="font-black uppercase py-4 px-8 border-2 border-brand-black"
              >
                Obtenir mon diagnostic gratuit &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

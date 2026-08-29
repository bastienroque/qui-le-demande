import Link from "next/link";
import Button from "@/components/ui/Button";
import { OneShotCard } from "@/components/pricing/OneShortCard";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { OffresHeroSection } from "@/components/pricing/OffresHeroSection";
import StickyPricingNav from "@/components/pricing/StickyPricingNav";
import { PricingSimulatorSection } from "@/components/pricing/PricingSimulatorSection";
import { PricingCard } from "@/components/pricing/PricingPlanCard";
import { MONTHLY_PLANS, ONE_SHOT_SERVICES } from "@/lib/data";

export const metadata = {
  title: "Offres & Tarifs | Qui Le Demande ?",
  description:
    "Découvrez nos abonnements mensuels d'accompagnement et nos Services ponctuelles sur-mesure.",
};

export default function PricingPage() {
  return (
    <main className="w-full bg-brand-white text-brand-black">
      <OffresHeroSection />

      <div id="pricing-section-wrapper" className="relative">
        <StickyPricingNav />
        <section
          id="abonnement"
          className="scroll-mt-8 py-24 md:py-32 bg-brand-white border-b-2 border-brand-black"
        >
          <div className="container mx-auto px-4 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-block bg-brand-red text-brand-white text-xs font-black uppercase px-3 py-1 border-2 border-brand-black">
                Partenariat Continu
              </span>
              <h2 className="text-3xl md:text-5xl font-black">
                Abonnements Mensuels
              </h2>
              <p className="text-sm md:text-base font-medium text-brand-black/80">
                Pour déléguer totalement la gestion et l'optimisation continue
                de vos performances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
              {MONTHLY_PLANS.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="scroll-mt-8 py-24 md:py-32 bg-brand-white border-b-2 border-brand-black"
        >
          <div className="container mx-auto px-4 space-y-12">
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="inline-block bg-brand-red text-brand-white text-xs font-black uppercase px-3 py-1 border-2 border-brand-black">
                Missions Ciblées
              </span>
              <h2 className="text-3xl md:text-5xl font-black">
                Services Ponctuels
              </h2>
              <p className="text-sm md:text-base font-medium text-brand-black/80">
                Besoin d'un coup de poing rapide ? Des projets au forfait sans
                engagement de durée.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ONE_SHOT_SERVICES.map((service) => (
                <OneShotCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <PricingSimulatorSection />

      <PricingFAQ />

      <section className="bg-brand-red text-brand-white py-16 md:py-24">
        <div className="container mx-auto flex flex-col items-center px-4 max-w-3xl text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            Un doute sur
            <br /> l'offre à choisir ?
          </h2>
          <p className="text-base md:text-lg font-medium opacity-90">
            Parlons directement de votre projet pour définir ensemble la formule
            la plus rentable pour vous.
          </p>
          <div className="pt-2">
            <Link href="/contact">
              <Button
                variant="primary"
                tail="bottom-left"
                className="font-black uppercase py-4 px-8 border-2 border-brand-black "
              >
                Discuter de mon projet avec un expert &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

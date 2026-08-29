"use client";

import { useRouter } from "next/navigation";
import { PricingPlan } from "@/types";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface PricingCardProps {
  plan: PricingPlan;
}

export const PricingCard = ({ plan }: PricingCardProps) => {
  const router = useRouter();
  const isCustom = plan.id === "custom";

  const handleSimulate = () => {
    router.push("/offres");
    setTimeout(() => {
      const element = document.getElementById("simulateur");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  return (
    <div className="border-2 border-brand-black p-4 bg-brand-white flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-black">{plan.name}</h3>
        <p className="font-bold text-brand-black/60">{plan.subtitle}</p>

        <div className="my-4">
          <span className="text-3xl font-black">
            {plan.basePrice ? `${plan.basePrice}` : plan.basePrice}
          </span>
          {plan.period && <span className="font-bold"> {plan.period}</span>}
        </div>

        <ul className="space-y-2 text-xs md:text-sm font-bold mb-6">
          {plan.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-brand-red font-black">&rarr;</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-2">
        {isCustom ? (
          <Link
            href="/contact?subject=devis-sur-mesure"
            className="block w-full"
          >
            <Button
              variant="secondary"
              tail="none"
              className="w-full py-2 font-black uppercase border-2 border-brand-black transition-transform duration-200 hover:-translate-y-1"
            >
              Demander un devis &rarr;
            </Button>
          </Link>
        ) : (
          <Button
            onClick={handleSimulate}
            variant={plan.isPopular ? "primary" : "secondary"}
            tail="none"
            className="w-full py-0.5! font-black uppercase border-2 border-brand-black transition-transform duration-200 hover:-translate-y-1"
          >
            Simuler &rarr;
          </Button>
        )}
      </div>
    </div>
  );
};

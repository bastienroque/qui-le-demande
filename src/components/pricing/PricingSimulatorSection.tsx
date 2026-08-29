"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { SIMULATOR_OFFERS } from "@/lib/data/pricing-simulator";
import Link from "next/link";

export const PricingSimulatorSection = () => {
  const [selectedOfferId, setSelectedOfferId] = useState<
    "essentiel" | "e-commerce"
  >("essentiel");
  const [stepIndex, setStepIndex] = useState<number>(0);

  const currentOffer = SIMULATOR_OFFERS[selectedOfferId];

  const safeIndex = Math.min(stepIndex, currentOffer.steps.length - 1);
  const currentStep = currentOffer.steps[safeIndex];

  const handleOfferChange = (id: "essentiel" | "e-commerce") => {
    setSelectedOfferId(id);
    setStepIndex(0);
  };

  const displayedPrice =
    typeof currentStep.price === "number"
      ? `${currentStep.price}€`
      : currentStep.price;

  const redirectParams = new URLSearchParams({
    offerType: "Abonnement Mensuel",
    serviceType: `${currentOffer.name} (${currentOffer.badge})`,
    budget: currentStep.label,
  }).toString();

  return (
    <section
      id="simulateur"
      className="scroll-mt-8 py-20 bg-brand-blue border-b-2 border-brand-black"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12">
          <span className="inline-block bg-brand-red text-brand-white text-xs font-black uppercase px-3 py-1 border-2 border-brand-black">
            Simulateur d'Abonnement
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-white">
            Calculez votre tarif
          </h2>
        </div>

        <div className="border-2 border-brand-black p-4 md:p-10 bg-brand-white grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-between">
            <div>
              <label className="block text-xs font-black uppercase mb-3">
                1. Choisissez la formule :
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(
                  Object.keys(SIMULATOR_OFFERS) as Array<
                    "essentiel" | "e-commerce"
                  >
                ).map((key) => {
                  const offer = SIMULATOR_OFFERS[key];
                  const isSelected = key === selectedOfferId;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleOfferChange(key)}
                      className={`p-4 text-left border-2 border-brand-black transition-all cursor-pointer ${
                        isSelected
                          ? "bg-brand-black text-brand-white"
                          : "bg-brand-white text-brand-black hover:bg-brand-red hover:text-brand-white"
                      }`}
                    >
                      <span className="block text-[10px] font-black uppercase opacity-80">
                        {offer.badge}
                      </span>
                      <span className="block text-sm md:text-base font-black">
                        {offer.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-brand-white border-2 border-brand-black p-4">
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-black uppercase">
                  2. Budget Ads mensuel :
                </label>
                <span className="text-sm font-black bg-brand-black text-brand-white px-2.5 py-1">
                  {currentStep.label}
                </span>
              </div>

              <input
                type="range"
                min={0}
                max={currentOffer.steps.length - 1}
                step={1}
                value={safeIndex}
                onChange={(e) => setStepIndex(Number(e.target.value))}
                className="w-full accent-brand-black cursor-pointer h-2 bg-brand-black/10 border border-brand-black"
              />

              <div className="flex justify-between items-center mt-3 text-xs font-black uppercase text-brand-black/70">
                {currentOffer.steps.map((step, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setStepIndex(idx)}
                    className={`hover:text-brand-black transition-colors ${
                      idx === safeIndex
                        ? "text-brand-black underline font-black"
                        : ""
                    }`}
                  >
                    {step.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 border-2 border-brand-black p-4 bg-brand-white flex flex-col justify-between">
            <div>
              <span className="inline-block bg-brand-black text-brand-white text-[10px] font-black uppercase px-2 py-0.5 mb-2">
                {currentOffer.badge}
              </span>
              <h3 className="text-xl font-black">{currentOffer.name}</h3>
              <p className="text-xs font-bold text-brand-red uppercase mb-4">
                Frais de setup : {currentOffer.setupFee}
              </p>

              <div className="mb-4 flex items-end gap-2 pb-4 border-b-2 border-brand-black">
                <span className="text-4xl md:text-5xl font-black">
                  {displayedPrice}
                </span>
                {!currentStep.isMax && (
                  <span className="text-xs font-bold text-brand-black/60 uppercase">
                    / mois
                  </span>
                )}
              </div>

              <p className="text-xs font-black uppercase tracking-wider mb-2">
                Services inclus :
              </p>
              <ul className="space-y-1.5 mb-6 text-xs md:text-sm font-bold">
                {currentOffer.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-black text-brand-red">&rarr;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/contact?${redirectParams}`}>
              <Button
                type="button"
                variant="primary"
                tail="bottom-right"
                className="w-full font-black uppercase py-3 mb-2 border-2 border-brand-black"
              >
                {currentStep.isMax
                  ? "Demander un devis →"
                  : "Souscrire à cette formule →"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import { useState } from "react";
import { PRICING_FAQ, FAQItem } from "@/lib/data/pricing-faq";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const PricingFAQ = () => {
  const [openId, setOpenId] = useState<string | null>("commitment");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-28 bg-brand-white text-brand-black">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        {/* En-tête de section */}
        <div className="text-center space-y-3">
          <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 border-2 border-brand-black">
            Réponses Rapides
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            Questions Fréquentes
          </h2>
          <p className="text-sm md:text-base font-medium text-brand-black/80 max-w-lg mx-auto">
            Tout ce que vous devez savoir avant de propulser votre acquisition
            avec nous.
          </p>
        </div>

        {/* Liste des accordéons */}
        <div className="space-y-4">
          {PRICING_FAQ.map((item: FAQItem) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="border-2 border-brand-black bg-brand-white  transition-all"
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-5 md:p-6 flex justify-between items-center gap-4 cursor-pointer focus:outline-none select-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base md:text-xl font-bold pr-2">
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center border-2 border-brand-black font-black text-lg transition-transform duration-200 ${
                      isOpen
                        ? "bg-brand-red text-brand-white rotate-45"
                        : "bg-brand-white text-brand-black"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 md:px-6 text-sm md:text-base font-medium text-brand-black/85 border-t-2 border-brand-black/10 leading-relaxed mt-2 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

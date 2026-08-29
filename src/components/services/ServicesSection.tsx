"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { ServicePole } from "@/types";
import { SERVICES_BY_CATEGORY } from "@/lib/data";

interface ServicesSectionProps {
  showButton?: boolean;
}
interface InteractivePole extends ServicePole {
  isRead?: boolean;
}

export const ServicesSection = ({
  showButton = true,
}: ServicesSectionProps) => {
  const [poles, setPoles] = useState<InteractivePole[]>(() =>
    SERVICES_BY_CATEGORY.flatMap((cat) => cat.poles).map((pole) => ({
      ...pole,
      isRead: false,
    })),
  );

  const [selectedId, setSelectedId] = useState<string | null>(null);

  const unreadCount = poles.filter((pole) => !pole.isRead).length;
  const activePole = poles.find((pole) => pole.id === selectedId) || null;

  const handleSelectPole = (id: string) => {
    setSelectedId(id);
    setPoles((prev) =>
      prev.map((pole) => (pole.id === id ? { ...pole, isRead: true } : pole)),
    );
  };

  return (
    <section className="w-full bg-brand-red text-brand-white py-24 md:py-36 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-brand-white text-brand-black border-2 border-brand-black">
          <div className="py-4 px-4 md:px-10 border-b-2 border-brand-black bg-brand-white flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black mb-3">
                {unreadCount > 0
                  ? `${unreadCount} message${unreadCount > 1 ? "s" : ""} non lu${unreadCount > 1 ? "s" : ""}`
                  : "Tous les messages ont été lus"}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight leading-none">
                Découvrez nos expertises :
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-4 md:p-10 bg-brand-white">
            <div className="md:col-span-5 flex flex-col gap-4">
              {poles.map((item) => {
                const isActive = item.id === selectedId;

                return (
                  <Button
                    key={item.id}
                    variant={!isActive ? "primary" : "secondary"}
                    tail={isActive ? "bottom-left" : "none"}
                    onClick={() => handleSelectPole(item.id)}
                    className="w-full flex-col items-start! text-left p-4 justify-between! border-2 border-brand-black transition-transform duration-200 hover:translate-x-1"
                  >
                    <span className="block text-xs font-black uppercase tracking-wider opacity-70 mb-1">
                      {!item.isRead ? "• Nouveau message" : "Message lu"}
                    </span>
                    <div className="flex items-center justify-between w-full">
                      <span className="text-lg md:text-xl font-black tracking-tight">
                        {item.title}
                      </span>
                      <span className="text-xl font-black">&rarr;</span>
                    </div>
                  </Button>
                );
              })}
            </div>

            <div
              id="content"
              className="md:col-span-7 bg-brand-white text-brand-black border-2 border-brand-black p-4 md:p-8 flex flex-col justify-between min-h-87.5"
            >
              {activePole ? (
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block bg-brand-red text-brand-white border-2 border-brand-black text-xs font-black px-3 py-1 uppercase mb-4">
                      {activePole.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black mb-2 leading-tight">
                      {activePole.title}
                    </h3>
                    <p className="text-xs md:text-sm font-bold text-brand-black/70 mb-4 italic">
                      {activePole.tagline}
                    </p>

                    <p className="text-sm font-bold text-brand-black mb-4">
                      {activePole.description}
                    </p>

                    <hr className="border-t-2 border-brand-black my-4" />

                    <ul className="space-y-2.5 my-4">
                      {activePole.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs md:text-sm font-bold text-brand-black"
                        >
                          <span className="font-black text-brand-red">
                            &rarr;
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4">
                    <Link href={`/offres#abonnement`} className="block">
                      <Button
                        variant="secondary"
                        tail="bottom-right"
                        className="w-full font-black uppercase border-2 border-brand-black transition-transform duration-200 hover:-translate-y-1"
                      >
                        {activePole.ctaText}
                      </Button>
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-4 space-y-3">
                  <span className="w-4 h-4 bg-brand-red border-2 border-brand-black rounded-full animate-bounce" />
                  <p className="text-base md:text-lg font-bold text-brand-black/80 max-w-xs">
                    Cliquez sur un message pour ouvrir le détail de nos
                    expertises.
                  </p>
                </div>
              )}
            </div>
          </div>

          {showButton && (
            <div className="p-4 md:px-10 border-t-2 border-brand-black bg-brand-white">
              <Link href="/services" className="block">
                <Button
                  variant="primary"
                  tail="bottom-left"
                  className="w-full font-black uppercase py-4 border-2 border-brand-black"
                >
                  Consulter tous nos services
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

"use client";

import { motion } from "framer-motion";
import { H1, P } from "@/components/ui/Typography";

export const OffresHeroSection = () => {
  return (
    <section className="w-full py-24 md:py-32 bg-brand-white text-brand-black border-b-2 border-brand-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-6"
          >
            <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black">
              TRANSPARENCE TOTALE
            </span>

            <H1 className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-none">
              Nos Offres
            </H1>

            <div className="p-4 md:p-6 bg-brand-red text-brand-white border-2 border-brand-black ">
              <P className="text-xl md:text-2xl font-black leading-snug">
                Des Formules Claires, Sans Surprises.
              </P>
            </div>

            <P className="text-base md:text-lg font-medium text-brand-black/90 leading-relaxed max-w-2xl">
              Abonnements d'accompagnement ou interventions ponctuelles :
              choisissez le format adapté à votre maturité et vos objectifs.
            </P>
          </motion.div>

          {/* Colonne Droite : Animation d'entrée avec mise à l'échelle (Scale) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="w-full max-w-sm p-6 bg-brand-white border-2 border-brand-black space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-brand-black">
                  ENGAGEMENT // TRANSPARENCE
                </span>
                <span className="relative flex h-3 w-3">
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-blue border border-brand-black" />
                </span>
              </div>

              <hr className="border-t-2 border-brand-black" />

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-black">
                  <span className="bg-brand-black text-brand-white px-2 py-0.5 text-xs">
                    100%
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm font-black">
                  <span>PROPRIÉTÉ ACTIFS</span>
                  <span className="bg-brand-black text-brand-white px-2 py-0.5 text-xs">
                    TOTAL
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OffresHeroSection;

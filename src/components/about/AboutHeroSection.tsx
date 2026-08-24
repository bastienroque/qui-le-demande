"use client";

import { motion } from "framer-motion";
import { H1, P } from "@/components/ui/Typography";

export function AboutHeroSection() {
  return (
    <section className="w-full py-24 md:py-36 bg-brand-white text-brand-black border-b-2 border-brand-black relative overflow-hidden">
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
              Notre Histoire
            </span>

            <H1 className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-none">
              Qui sommes-nous ?
            </H1>

            <div className="p-4 md:p-6 bg-brand-red text-brand-white border-2 border-brand-black ">
              <P className="text-xl md:text-2xl font-black leading-snug">
                Une agence qui écoute avant de créer.
              </P>
            </div>

            <P className="text-base md:text-lg font-medium text-brand-black/90 leading-relaxed max-w-2xl">
              Depuis notre création, nous accompagnons les marques qui osent se
              démarquer. Pas de recettes toutes faites, juste une approche
              sur-mesure pour des résultats qui comptent.
            </P>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="w-full max-w-sm p-6 bg-brand-white border-2 border-brand-black space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-brand-blue border-2 border-brand-black inline-block transition-transform hover:scale-110" />
                <span className="w-4 h-4 rounded-full bg-brand-white border-2 border-brand-black inline-block transition-transform hover:scale-110" />
                <span className="w-4 h-4 rounded-full bg-brand-red border-2 border-brand-black inline-block transition-transform hover:scale-110" />
              </div>

              <hr className="border-t-2 border-brand-black" />

              <p className="font-mono text-xs font-black uppercase tracking-wider text-brand-black">
                Manifeste
              </p>
              <p className="text-sm font-bold text-brand-black leading-tight">
                "Moins de blabla, plus d'impact. Des stratégies taillées pour le
                terrain."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

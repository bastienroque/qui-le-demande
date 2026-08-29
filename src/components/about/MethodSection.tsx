"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { METHOD_STEPS } from "@/lib/method-steps";
import { H1, H2 } from "../ui/Typography";

export function MethodSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="w-full py-24 md:py-32 bg-brand-blue text-brand-white relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col gap-8 relative z-10">
        <div className="text-center space-y-3">
          <span className="inline-block bg-brand-white text-brand-black text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black">
            Notre Processus
          </span>
          <H1>
            Voici Notre Méthode, <br />
            <span className="font-medium">en {METHOD_STEPS.length} étapes</span>
          </H1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full pt-4">
          {METHOD_STEPS.map((step, index) => {
            const cardContent = (
              <div className="h-full p-6 border-2 border-brand-black bg-brand-white text-brand-black flex flex-col justify-between">
                <div>
                  {/* Badge numéro d'étape */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-9 h-9 bg-brand-black text-brand-white border-2 border-brand-black flex items-center justify-center font-black text-sm shadow-[2px_2px_0px_#fff]">
                      0{index + 1}
                    </span>
                  </div>

                  <H2 className="text-lg md:text-xl font-black mb-2 text-brand-black leading-snug">
                    {step.title}
                  </H2>

                  <p className="text-xs md:text-sm font-bold text-brand-black/80 leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>
              </div>
            );

            return isMounted ? (
              <motion.div
                key={step.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                {cardContent}
              </motion.div>
            ) : (
              <div key={step.id || index} className="h-full">
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

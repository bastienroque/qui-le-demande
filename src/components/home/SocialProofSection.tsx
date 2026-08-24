"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { H1 } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";

const services = [
  {
    title: "Comptes Optimisés",
    highlight: "+1 000",
    description: "comptes Ads audités et maximisés",
    tail: "top-right" as const,
  },
  {
    title: "Experts Seniors",
    highlight: "100%",
    description: "de conseillers et techniciens dédiés",
    tail: "bottom-left" as const,
  },
  {
    title: "Pilotage par la Donnée",
    highlight: "Data-driven",
    description: "décisions stratégiques orientées ROI",
    tail: "bottom-right" as const,
  },
  {
    title: "Budget Sous Gestion",
    highlight: "+500 k€",
    description: "d'investissements Ads optimisés / an",
    tail: "bottom-left" as const,
  },
  {
    title: "100% Propriété",
    highlight: "Accès total",
    description: "et contrôle permanent sur vos actifs",
    tail: "top-right" as const,
  },
  {
    title: "Réactivité Maximale",
    highlight: "< 24h",
    description: "réponse garantie à toutes vos demandes",
    tail: "top-left" as const,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const SocialProofSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 md:py-36 bg-brand-red text-brand-white overflow-hidden">
      <div className="container mx-auto px-4">
        <H1 className="text-center mb-8 md:mb-20 font-extrabold tracking-tight">
          Pourquoi Nos Clients Nous Font Confiance
        </H1>

        {isMounted ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div key={service.title} variants={itemVariants}>
                <Button
                  variant={index % 2 === 0 ? "primary" : "secondary"}
                  tail={service.tail}
                  className="w-full h-full flex-col items-start justify-between text-left p-6 min-h-40 md:min-h-45 cursor-default! hover:opacity-100! hover:translate-0!"
                >
                  <span className="block text-2xl md:text-3xl font-extrabold mb-2">
                    {service.highlight}
                  </span>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold mb-1">
                      {service.title}
                    </h2>
                    <p className="text-xs md:text-sm opacity-90 font-normal">
                      {service.description}
                    </p>
                  </div>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Button
                key={service.title}
                variant={index % 2 === 0 ? "primary" : "secondary"}
                tail={service.tail}
                className="w-full h-full flex-col items-start justify-between text-left p-6 min-h-40 md:min-h-45 cursor-default!"
              >
                <span className="block text-2xl md:text-3xl font-extrabold mb-2">
                  {service.highlight}
                </span>
                <div>
                  <h2 className="text-lg md:text-xl font-bold mb-1">
                    {service.title}
                  </h2>
                  <p className="text-xs md:text-sm opacity-90 font-normal">
                    {service.description}
                  </p>
                </div>
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { H1, P } from "@/components/ui/Typography";
import ContactForm from "@/components/forms/ContactForm";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

export default function Contact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="bg-brand-red relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {isMounted ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="h-full flex flex-col justify-between"
            >
              <div>
                <motion.div variants={itemVariants}>
                  <H1 className="leading-tight mb-8">
                    N'hésitez Pas À Nous <br /> Poser Des Questions
                  </H1>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-12 space-y-2">
                  <P className="text-xl">quiledemande@agence.com</P>
                  <P className="text-xl">contact@quiledemande.com</P>
                  <P className="text-xl">
                    +33 3 33 33 33 33{" "}
                    <span className="text-sm">ps: c'est le num de Bambi</span>
                  </P>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <P className="mt-12 text-sm">
                  Nous vous répondrons. <br /> Wallah, je le jure.
                </P>
              </motion.div>
            </motion.div>
          ) : (
            <div className="h-full flex flex-col justify-between">
              <div>
                <H1 className="leading-tight mb-8">
                  N'hésitez Pas À Nous <br /> Poser Des Questions
                </H1>
                <div className="mt-12 space-y-2">
                  <P className="text-xl">quiledemande@agence.com</P>
                  <P className="text-xl">contact@quiledemande.com</P>
                  <P className="text-xl">
                    +33 3 33 33 33 33{" "}
                    <span className="text-sm">ps: c'est le num de Bambi</span>
                  </P>
                </div>
              </div>
              <P className="mt-12 text-sm">
                Nous vous répondrons. <br /> Wallah, je le jure.
              </P>
            </div>
          )}

          {isMounted ? (
            <motion.div
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              <ContactForm />
            </motion.div>
          ) : (
            <ContactForm />
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { H1 } from "@/components/ui/Typography";
import { TOOLBOX_DATA } from "@/lib/toolbox-data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const ToolboxSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative w-full bg-brand-white text-brand-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col gap-12 md:gap-16">
        <H1 className="text-left leading-tight font-black">
          Nos Outils À<br />
          Portée De Main
        </H1>

        {isMounted ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {TOOLBOX_DATA.map((column, colIndex) => (
              <motion.div
                key={colIndex}
                variants={itemVariants}
                className="bg-brand-white border-2 border-brand-black p-6 md:p-8  flex flex-col gap-4"
              >
                {column.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 border-b border-brand-black/10 pb-3 last:border-none last:pb-0"
                  >
                    <span className="w-2 h-2 bg-brand-black rounded-full shrink-0" />
                    <span className="font-bold text-lg md:text-xl text-brand-black">
                      {tool}
                    </span>
                  </div>
                ))}
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {TOOLBOX_DATA.map((column, colIndex) => (
              <div
                key={colIndex}
                className="bg-brand-white border-2 border-brand-black p-6 md:p-8  flex flex-col gap-4"
              >
                {column.map((tool) => (
                  <div
                    key={tool}
                    className="flex items-center gap-3 border-b border-brand-black/10 pb-3 last:border-none last:pb-0"
                  >
                    <span className="w-2 h-2 bg-brand-black rounded-full shrink-0" />
                    <span className="font-bold text-lg md:text-xl text-brand-black">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolboxSection;

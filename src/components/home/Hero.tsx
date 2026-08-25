"use client";

import Button from "@/components/ui/Button";
import { H1, P } from "@/components/ui/Typography";
import Link from "next/link";
import Typewriter from "../ui/Typewriter";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-20 relative w-full min-h-[80vh] py-16 sm:py-24 md:py-48 text-center bg-brand-white text-brand-black overflow-hidden"
    >
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#000_1px,transparent_1px)] bg-size-[20px_20px] pointer-events-none" />

      <div className="hidden lg:block absolute top-[12%] left-[5%] xl:left-[10%] z-10 animate-float-slow pointer-events-none">
        <div className="relative border-2 border-brand-black font-bold px-4 py-2 text-base xl:text-2xl bg-brand-white shadow-sm">
          Connaître vos clients ?
          <svg
            className="absolute -bottom-4 -right-0.5 w-4 h-4 text-brand-black fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M0 0 L16 0 L16 16 Z" />
          </svg>
        </div>
      </div>

      <div className="hidden lg:block absolute top-[16%] right-[5%] xl:right-[10%] z-10 animate-float-delayed pointer-events-none">
        <div className="relative border-2 border-brand-black font-bold px-4 py-2 text-base xl:text-2xl bg-brand-white shadow-sm">
          Gagner en visibilité ?
          <svg
            className="absolute -bottom-4 -left-0.5 w-4 h-4 text-brand-black fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M0 0 L16 0 L0 16 Z" />
          </svg>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-[18%] left-[4%] xl:left-[8%] z-10 animate-float-delayed pointer-events-none">
        <div className="relative border-2 border-brand-black font-bold px-4 py-2 text-base xl:text-2xl bg-brand-white shadow-sm">
          Faire plus de ventes ?
          <svg
            className="absolute -top-4 -right-0.5 w-4 h-4 text-brand-black fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M16 0 L16 16 L0 16 Z" />
          </svg>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-[14%] right-[6%] xl:right-[12%] z-10 animate-float-slow pointer-events-none">
        <div className="relative border-2 border-brand-black font-bold px-4 py-2 text-base xl:text-2xl bg-brand-white shadow-sm">
          Évoluer digitalement ?
          <svg
            className="absolute -top-4 -left-0.5 w-4 h-4 text-brand-black fill-current"
            viewBox="0 0 16 16"
          >
            <path d="M0 0 L16 16 L0 16 Z" />
          </svg>
        </div>
      </div>

      <div className="container relative z-20 mx-auto px-4">
        <div className="flex flex-col gap-2">
          <H1>
            <span className="font-light">L’agence</span> Qui <br />{" "}
            <span className="font-light">Vous </span>
            <Typewriter
              words={[
                "Écoute",
                "Propulse",
                "Répond",
                "Accompagne",
                "Simplifie",
                "Guide",
              ]}
              typingSpeed={70}
              deletingSpeed={35}
              pauseDuration={1800}
            />
          </H1>

          <P className="mt-4 max-w-2xl mx-auto">
            Vous posez la question, on y répond. <br />
            Une approche marketing directe, sans blabla.
          </P>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-8 md:gap-4 justify-center items-center">
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="primary"
              tail="bottom-left"
              className="w-full sm:w-auto transition-transform duration-200 hover:translate-x-1"
            >
              Nous Demander
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <Button
              variant="secondary"
              tail="bottom-right"
              className="w-full sm:w-auto transition-transform duration-200 hover:-translate-x-1"
            >
              Consulter nos services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

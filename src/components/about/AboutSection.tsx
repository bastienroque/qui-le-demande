"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

export const AboutSection = () => {
  return (
    <section id="a-propos" className="py-24 md:py-32 bg-brand-white">
      <div className="container mx-auto px-4 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 mb-4 border-2 border-brand-black">
            Qui Sommes-Nous ?
          </span>
          <h2 className="text-3xl md:text-5xl font-black">À Propos</h2>
        </div>

        <div className="space-y-6 md:space-y-12">
          <p className="text-lg md:text-2xl font-black leading-snug">
            <span className="bg-brand-red text-brand-white px-2 py-0.5 inline-block border-2 border-brand-black mr-2">
              Qui Le Demande
            </span>
            est avant tout un collectif de spécialistes en marketing digital :{" "}
            <br />
            de la création de site web à l’optimisation de vos campagnes, nous
            vous accompagnons et vous proposons offres et services adaptées à
            vos besoins.
          </p>

          <hr className="border-t-2 border-brand-black" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="border-2 border-brand-black p-5 bg-brand-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-brand-black/60 block mb-2">
                  01. Expertise
                </span>
                <h3 className="text-lg font-black mb-2">Séniorité Exigée</h3>
                <p className="text-xs md:text-sm font-bold text-brand-black/80 leading-relaxed">
                  Issus du milieu des agences et avec au minimum 4 à 5 années
                  d’expérience, tous vos interlocuteurs sont qualifiés pour
                  répondre à vos questions et faire passer un réel cap à votre
                  activité.
                </p>
              </div>
            </div>

            <div className="border-2 border-brand-black p-5 bg-brand-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-brand-black/60 block mb-2">
                  02. Accessibilité
                </span>
                <h3 className="text-lg font-black mb-2">Réponse &lt; 24h</h3>
                <p className="text-xs md:text-sm font-bold text-brand-black/80 leading-relaxed">
                  C’est parce que nous valorisons votre temps et parce que
                  l'accessibilité est une valeur importante pour nous, que notre
                  délai moyen de réponse est inférieur à 24h.
                </p>
              </div>
            </div>

            <div className="border-2 border-brand-black p-5 bg-brand-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-brand-black/60 block mb-2">
                  03. Transparence
                </span>
                <h3 className="text-lg font-black mb-2">Main-Mise Totale</h3>
                <p className="text-xs md:text-sm font-bold text-brand-black/80 leading-relaxed">
                  Vous ne perdrez jamais la main sur votre compte Google Ads.
                  Vous y accédez en continu pour voir concrètement nos actions,
                  en plus de nos rapports détaillés.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-black text-brand-white p-4 border-2 border-brand-black flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-sm md:text-base font-black uppercase tracking-wide text-center sm:text-left">
              Nous sommes déterminés à casser les codes des agences
              traditionnelles et vous faire participer au changement.
            </p>
            <Link href="/contact" className="shrink-0">
              <Button
                variant="primary"
                tail="bottom-right"
                className="font-black uppercase py-3 px-6 border-2 border-brand-black"
              >
                Nous Demander &rarr;
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

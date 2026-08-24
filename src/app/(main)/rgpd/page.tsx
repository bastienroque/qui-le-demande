import { H1 } from "@/components/ui/Typography";

export const metadata = {
  title: "Conformité RGPD | Qui Le Demande ?",
};

export default function GdprPage() {
  return (
    <main className="w-full bg-brand-white text-brand-black py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        <div className="space-y-4">
          <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black">
            Réglementation
          </span>
          <H1 className="text-4xl md:text-6xl font-black leading-none">
            Conformité RGPD
          </H1>
          <p className="text-sm font-mono text-brand-black/70">
            Protection des données personnelles
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-brand-white border-2 border-brand-black p-6 md:p-8  space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-blue border border-brand-black rounded-full" />
              <h2 className="text-xl md:text-2xl font-black">
                Transparence totale
              </h2>
            </div>
            <p className="text-brand-black/90 leading-relaxed font-medium">
              Chaque donnée collectée sur le site Qui Le Demande ? est
              explicite. Vous êtes systématiquement informé du motif de la
              collecte.
            </p>
          </div>

          <div className="bg-brand-white border-2 border-brand-black p-6 md:p-8  space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-white border border-brand-black rounded-full" />
              <h2 className="text-xl md:text-2xl font-black">
                Sécurité & Hébergement
              </h2>
            </div>
            <p className="text-brand-black/90 leading-relaxed font-medium">
              Nos bases de données et nos outils de suivi respectent
              scrupuleusement les exigences de sécurité européennes. Tout est
              hébergé sur des infrastructures sécurisées et chiffrées.
            </p>
          </div>

          <div className="bg-brand-white border-2 border-brand-black p-6 md:p-8  space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-red border border-brand-black rounded-full" />
              <h2 className="text-xl md:text-2xl font-black">
                Exercer vos droits
              </h2>
            </div>
            <p className="text-brand-black/90 leading-relaxed font-medium">
              Pour toute demande de consultation, de modification ou de
              suppression de vos données personnelles, écrivez-nous directement
              à :{" "}
              <a
                href="mailto:contact@quiledemande.com"
                className="font-bold underline hover:opacity-80"
              >
                contact@quiledemande.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

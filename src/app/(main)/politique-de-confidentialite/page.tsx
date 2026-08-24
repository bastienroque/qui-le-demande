import { H1 } from "@/components/ui/Typography";

export const metadata = {
  title: "Politique de Confidentialité | Qui Le Demande ?",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-brand-white text-brand-black py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        <div className="space-y-4">
          <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black">
            Mentions Légales
          </span>
          <H1 className="text-4xl md:text-6xl font-black leading-none">
            Politique de Confidentialité
          </H1>
          <p className="text-sm font-mono text-brand-black/70">
            Dernière mise à jour : 16 août 2026
          </p>
        </div>

        <div className="space-y-8 text-base md:text-lg font-medium leading-relaxed">
          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8  space-y-3">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
              1. Collecte des données
            </h2>
            <p className="text-brand-black/90">
              Nous collectons uniquement les informations personnelles
              strictement nécessaires au bon déroulement de nos prestations
              (nom, prénom, adresse e-mail, numéro de téléphone, données de
              formulaire de contact).
            </p>
          </section>

          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8  space-y-3">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
              2. Utilisation des données
            </h2>
            <p className="text-brand-black/90">
              Les données collectées nous permettent d'échanger directement avec
              vous concernant vos demandes d'audit, de devis ou de prise de
              rendez-vous. Vos données ne sont ni vendues, ni louées, ni
              transmises à des tiers sans votre accord.
            </p>
          </section>

          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8  space-y-3">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight">
              3. Vos Droits
            </h2>
            <p className="text-brand-black/90">
              Conformément à la réglementation européenne, vous bénéficiez d'un
              droit d'accès, de rectification, de suppression et d'opposition
              sur l'ensemble de vos données personnelles.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

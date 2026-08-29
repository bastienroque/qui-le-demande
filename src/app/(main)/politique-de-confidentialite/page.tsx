import { H1, H2 } from "@/components/ui/Typography";

export const metadata = {
  title: "Politique de Confidentialité | Qui Le Demande ?",
  description:
    "Engagement de confidentialité et politique de traitement des données personnelles (RGPD) du site Qui Le Demande ?.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-brand-white text-brand-black py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        <div className="space-y-4">
          <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black">
            Protection des Données
          </span>
          <H1 className="text-4xl md:text-6xl font-black leading-none">
            Politique de Confidentialité
          </H1>
          <p className="text-sm font-mono text-brand-black/70">
            Dernière mise à jour : 28 août 2026
          </p>
        </div>

        <div className="space-y-6 text-base md:text-lg font-medium leading-relaxed">
          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-black border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                1. Collecte & Responsable du traitement
              </H2>
            </div>
            <p className="text-brand-black/90 text-sm md:text-base">
              Les données personnelles collectées sur ce site sont traitées par
              l'éditeur du site <strong>Qui Le Demande ?</strong> (établi au
              Portugal). Nous collectons uniquement les informations nécessaires
              au traitement de vos demandes de devis, d'audit ou de prise de
              contact (prénom, nom, e-mail professionnel, téléphone, entreprise,
              URL du site et précisions sur votre projet).
            </p>
          </section>

          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-blue border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                2. Utilisation & Base légale
              </H2>
            </div>
            <p className="text-brand-black/90 text-sm md:text-base">
              La collecte de vos données repose sur votre consentement explicite
              lors de la soumission de nos formulaires ou sur l'exécution de
              mesures précontractuelles. Vos données sont exclusivement
              utilisées pour :
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-brand-black/90 font-normal">
              <li>
                Étudier vos besoins en acquisition payante (Google Ads) et
                webmarketing.
              </li>
              <li>
                Vous recontacter par email ou téléphone sur le créneau horaire
                souhaité (exprimé en <strong>heure française CET/CEST</strong>).
              </li>
              <li>
                Établir des propositions commerciales et devis personnalisés.
              </li>
            </ul>
            <p className="text-brand-black/90 text-sm md:text-base pt-2 font-bold">
              Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à
              des fins publicitaires.
            </p>
          </section>

          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-white border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                3. Durée de conservation
              </H2>
            </div>
            <p className="text-brand-black/90 text-sm md:text-base">
              Vos données à caractère personnel sont conservées pour une durée
              maximale de <strong>3 ans</strong> à compter de notre dernier
              contact actif. Si notre relation débouche sur un contrat de
              prestation, les données sont conservées pour la durée d'exécution
              du contrat augmentée des délais légaux d'archivage comptable.
            </p>
          </section>

          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-red border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                4. Cookies & Mesure d'audience
              </H2>
            </div>
            <p className="text-brand-black/90 text-sm md:text-base">
              Notre site utilise des cookies de mesure d'audience et de suivi de
              performance (Google Analytics, Google Tag Manager). Nous
              appliquons les standards{" "}
              <strong>Google Consent Mode v2 (CoMo)</strong> pour respecter
              scrupuleusement le choix de consentement déposé via notre bannière
              RGPD. Vous pouvez à tout moment modifier vos préférences de
              cookies via le gestionnaire de consentement disponible sur le
              site.
            </p>
          </section>

          <section className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-black border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                5. Vos Droits & Contact
              </H2>
            </div>
            <p className="text-brand-black/90 text-sm md:text-base">
              Conformément au Règlement Général sur la Protection des Données
              (UE 2016/679), vous bénéficiez d'un droit d'accès, de
              rectification, de portabilité, d'effacement de vos données ou de
              limitation du traitement.
            </p>
            <p className="text-brand-black/90 text-sm md:text-base">
              Pour exercer vos droits, écrivez-nous directement à :{" "}
              <a
                href="mailto:contact@quiledemande.fr"
                className="font-bold underline hover:opacity-80"
              >
                contact@quiledemande.fr
              </a>
            </p>
            <p className="text-xs text-brand-black/70 pt-2 font-mono">
              En cas de réclamation, vous conservez le droit d'introduire un
              recours auprès de la CNIL (cnil.fr - France) ou de la CNPD
              (cnpd.pt - Portugal).
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

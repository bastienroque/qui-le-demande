import { H1, H2 } from "@/components/ui/Typography";

export const metadata = {
  title: "Mentions Légales & Confidentialité | Qui Le Demande ?",
  description:
    "Mentions légales, hébergement et politique de protection des données (RGPD) du site Qui Le Demande ?.",
};

export default function LegalPage() {
  return (
    <main className="w-full bg-brand-white text-brand-black py-16 md:py-24 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        <div className="space-y-4">
          <span className="inline-block bg-brand-black text-brand-white text-xs font-black uppercase px-3 py-1 tracking-widest border-2 border-brand-black">
            Informations Légales & RGPD
          </span>
          <H1 className="text-4xl md:text-6xl font-black leading-none">
            Mentions Légales
          </H1>
          <p className="text-sm font-mono text-brand-black/70">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-black border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                1. Éditeur du site
              </H2>
            </div>
            <div className="text-brand-black/90 leading-relaxed font-medium space-y-2 text-sm sm:text-base">
              <p>
                Le site <strong>Qui Le Demande ?</strong> est édité dans le
                cadre de la présentation de services à venir :
              </p>
              <ul className="list-disc list-inside space-y-1 font-mono text-sm">
                <li>
                  <strong>Nom de la marque / Projet :</strong> Qui Le Demande ?
                </li>
                <li>
                  <strong>Statut :</strong> Site d'information et de prise de
                  contact préalable (Activité en cours de création /
                  immatriculation)
                </li>
                <li>
                  <strong>Responsable de publication :</strong> L'équipe Qui Le
                  Demande ?
                </li>
                <li>
                  <strong>Contact principal :</strong>{" "}
                  <a
                    href="mailto:contact@quiledemande.fr"
                    className="font-bold underline hover:opacity-80"
                  >
                    contact@quiledemande.fr
                  </a>
                </li>
              </ul>
              <p className="text-xs text-brand-black/70 italic pt-2">
                * Les informations juridiques complètes (Raison sociale,
                NIF/NIPC et siège social) seront mises à jour dès la
                finalisation des formalités d'immatriculation.
              </p>
            </div>
          </div>

          <div className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-blue border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                2. Hébergement du site
              </H2>
            </div>
            <div className="text-brand-black/90 leading-relaxed font-medium text-sm sm:text-base">
              <p>Le site est hébergé par :</p>
              <ul className="list-disc list-inside space-y-1 font-mono text-sm">
                <li>
                  <strong>Hébergeur :</strong> Dynadot
                </li>
                <li>
                  <strong>Site Web :</strong>{" "}
                  <a
                    href="https://dynadot.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold"
                  >
                    https://dynadot.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-white border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                3. Protection des données (RGPD)
              </H2>
            </div>
            <div className="text-brand-black/90 leading-relaxed font-medium space-y-3 text-sm sm:text-base">
              <p>
                Chaque donnée collectée sur le site{" "}
                <strong>Qui Le Demande ?</strong> est explicite. Le traitement
                de vos données s'effectue dans le strict respect du Règlement
                Général sur la Protection des Données (RGPD - UE 2016/679).
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Données collectées :</strong> Prénom, nom, email
                  professionnel, numéro de téléphone, entreprise, adresse de
                  site web et détails du projet lors de la soumission du
                  formulaire de contact.
                </li>
                <li>
                  <strong>Finalité du traitement :</strong> Répondre à vos
                  demandes de renseignements, étudier vos besoins web/Ads et
                  vous recontacter sur le créneau horaire sélectionné.
                </li>
                <li>
                  <strong>Précision sur les créneaux horaires :</strong> Les
                  créneaux de rappel proposés dans nos formulaires s'entendent
                  en <strong>heure française (CET/CEST)</strong> afin de
                  faciliter nos échanges.
                </li>
                <li>
                  <strong>Durée de conservation :</strong> Vos données sont
                  conservées pour une durée maximale de 3 ans à compter du
                  dernier contact commercial.
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-brand-white border-2 border-brand-black p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-brand-red border border-brand-black rounded-full" />
              <H2 className="text-xl md:text-2xl font-black">
                4. Exercer vos droits
              </H2>
            </div>
            <p className="text-brand-black/90 leading-relaxed font-medium text-sm sm:text-base">
              Conformément à la réglementation européenne, vous disposez d'un
              droit d'accès, de rectification, d'effacement et de portabilité de
              vos données personnelles. Pour exercer l'un de ces droits, envoyez
              simplement un email à :{" "}
              <a
                href="mailto:contact@quiledemande.fr"
                className="font-bold underline hover:opacity-80"
              >
                contact@quiledemande.fr
              </a>
              . En cas de litige, vous conservez le droit d'introduire une
              réclamation auprès de la CNIL (France) ou de la CNPD (Comissão
              Nacional de Proteção de Dados - Portugal).
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

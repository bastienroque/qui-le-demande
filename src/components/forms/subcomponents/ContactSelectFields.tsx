"use client";

import Input from "@/components/ui/Input";
import { ContactFormData } from "../schemas/contact-schema";

interface ContactSelectFieldsProps {
  formData: ContactFormData;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => void;
}

export function ContactSelectFields({
  formData,
  onChange,
}: ContactSelectFieldsProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="space-y-2">
        <label
          htmlFor="offerType"
          className="block text-xs font-black uppercase tracking-wider text-brand-black"
        >
          Format d'accompagnement
        </label>
        <select
          id="offerType"
          name="offerType"
          value={formData.offerType}
          onChange={onChange}
          className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-black cursor-pointer"
        >
          <option value="subscription">
            Abonnement Mensuel (Gestion continue Google Ads & Web)
          </option>
          <option value="one-shot">
            Service Ponctuelle (Audit, Formation, Landing Page, CoMo)
          </option>
          <option value="custom">Devis Sur-Mesure</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="serviceType"
          className="block text-xs font-black uppercase tracking-wider text-brand-black"
        >
          Service ou formule concernée
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={onChange}
          className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-black cursor-pointer"
        >
          <optgroup label="Abonnements Mensuels">
            <option value="essentiel">Abonnement Essentiel</option>
            <option value="e-commerce">Abonnement E-commerce</option>
          </optgroup>
          <optgroup label="Services Ads & Tracking">
            <option value="audit-ads">
              Audit Google Ads & Tracking Express
            </option>
            <option value="formation-express">Formation Express</option>
            <option value="conformite-tracking">
              Conformité Tracking & Consent Mode
            </option>
          </optgroup>
          <optgroup label="Projets & Web">
            <option value="landing-express">
              Création Landing Page Express
            </option>
            <option value="site-app-web">
              Création Site / Application Web
            </option>
            <option value="webmastering">
              Service Gestion Web & Maintenance
            </option>
          </optgroup>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <label
            htmlFor="budget"
            className="block text-xs font-black uppercase tracking-wider text-brand-black"
          >
            Budget
          </label>
          <Input
            label=""
            name="budget"
            value={formData.budget || ""}
            onChange={onChange}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="callSlot"
            className="block text-xs font-black uppercase tracking-wider text-brand-black"
          >
            Créneau de rappel souhaité
          </label>
          <select
            id="callSlot"
            name="callSlot"
            value={formData.callSlot}
            onChange={onChange}
            className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-black cursor-pointer"
          >
            <option value="matin">Matin (09h00 - 12h00)</option>
            <option value="midi">Pause Déjeuner (12h00 - 14h00)</option>
            <option value="apres-midi">Après-midi (14h00 - 18h00)</option>
            <option value="fin-journee">Fin de journée (18h00 - 19h30)</option>
            <option value="email-only">Échange par e-mail uniquement</option>
          </select>
        </div>
      </div>
    </div>
  );
}

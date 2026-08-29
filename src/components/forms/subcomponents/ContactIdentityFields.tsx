"use client";

import Input from "@/components/ui/Input";
import { ContactFormData, FormErrors } from "../schemas/contact-schema";

interface ContactIdentityFieldsProps {
  formData: ContactFormData;
  errors: FormErrors;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export function ContactIdentityFields({
  formData,
  errors,
  onChange,
}: ContactIdentityFieldsProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <Input
            label="Prénom"
            name="firstName"
            required
            value={formData.firstName}
            onChange={onChange}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs font-bold text-red-600">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <Input
            label="Nom"
            name="lastName"
            required
            value={formData.lastName}
            onChange={onChange}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs font-bold text-red-600">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <Input
            label="Email professionnel"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={onChange}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-bold text-red-600">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <Input
            label="Téléphone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={onChange}
          />
          {errors.phone && (
            <p className="mt-1 text-xs font-bold text-red-600">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <Input
            label="Nom de l'entreprise / Marque"
            name="company"
            value={formData.company || ""}
            onChange={onChange}
          />
          {errors.company && (
            <p className="mt-1 text-xs font-bold text-red-600">
              {errors.company}
            </p>
          )}
        </div>

        <div>
          <Input
            label="Site web ou URL de destination"
            name="website"
            required
            value={formData.website}
            onChange={onChange}
          />
          {errors.website && (
            <p className="mt-1 text-xs font-bold text-red-600">
              {errors.website}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="description"
          className="block text-xs font-black uppercase tracking-wider text-brand-black"
        >
          Précisez vos objectifs ou vos enjeux actuels
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          required
          placeholder="Ex: Nous souhaitons lancer des campagnes Google Ads, mettre en place le Consent Mode v2 et optimiser notre landing page..."
          value={formData.description}
          onChange={onChange}
          className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-black placeholder:text-brand-black/50 resize-y"
        />
        {errors.description && (
          <p className="mt-1 text-xs font-bold text-red-600">
            {errors.description}
          </p>
        )}
      </div>
    </div>
  );
}

"use client";

import { Suspense } from "react";
import Button from "@/components/ui/Button";
import { useContactForm } from "./hooks/useContactForm";
import { ContactSuccessState } from "./subcomponents/ContactSuccessState";
import { ContactIdentityFields } from "./subcomponents/ContactIdentityFields";
import { ContactSelectFields } from "./subcomponents/ContactSelectFields";

function ContactFormFields() {
  const {
    formData,
    errors,
    errorMessage,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  } = useContactForm();

  if (isSuccess) {
    return <ContactSuccessState />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="p-4 sm:p-6 space-y-6 text-brand-black bg-brand-white border-2 border-brand-black"
    >
      <div>
        <span className="inline-block bg-brand-black text-brand-white text-xs font-black px-3 py-1 uppercase tracking-widest border border-brand-black">
          PARLONS DE VOTRE PROJET
        </span>
      </div>

      {errorMessage && (
        <div className="p-4 text-sm font-bold bg-red-100 text-red-800 border-2 border-red-800">
          ⚠️ {errorMessage}
        </div>
      )}

      <ContactIdentityFields
        formData={formData}
        errors={errors}
        onChange={handleChange}
      />

      <ContactSelectFields formData={formData} onChange={handleChange} />

      <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
        <input
          type="text"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
          value={formData.hp_field}
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        variant="primary"
        tail="bottom-right"
        className="w-full font-black uppercase py-4 text-sm sm:text-base mb-2 disabled:opacity-60 transition-transform active:translate-x-0.5 active:translate-y-0.5"
      >
        {isSubmitting ? "Envoi en cours..." : "JE DEMANDE MON DEVIS ! →"}
      </Button>
    </form>
  );
}

export const ContactForm = () => (
  <Suspense
    fallback={
      <div className="p-10 text-center bg-brand-white border-2 border-brand-black font-black">
        Chargement du formulaire...
      </div>
    }
  >
    <ContactFormFields />
  </Suspense>
);

export default ContactForm;

"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    offerType: "subscription",
    serviceType: "essentiel",
    budget: "500-1000",
    callSlot: "matin",
    timeline: "asap",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          offerType: "subscription",
          serviceType: "essentiel",
          budget: "500-1000",
          callSlot: "matin",
          timeline: "asap",
          description: "",
        });
      }
    } catch {
      alert("Échec de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <div className="p-6 sm:p-10 text-center space-y-4 text-brand-black bg-brand-white border-2 border-brand-black">
        <span className="inline-block bg-brand-black text-brand-white text-xs font-black px-3 py-1 uppercase tracking-widest border border-brand-black">
          Demande Envoyée
        </span>
        <h3 className="text-2xl sm:text-3xl font-black">
          C'est bien reçu ! 🚀
        </h3>
        <p className="font-medium text-sm sm:text-base opacity-90 max-w-md mx-auto">
          Nous étudions vos besoins et revenons vers vous sur votre créneau
          préférentiel en moins de 24h.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 sm:p-6 space-y-6 text-brand-black bg-brand-white border-2 border-brand-black"
    >
      <div>
        <span className="inline-block bg-brand-black text-brand-white text-xs font-black px-3 py-1 uppercase tracking-widest border border-brand-black">
          PARLONS DE VOTRE PROJET
        </span>
      </div>

      {/* Format d'accompagnement */}
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
          onChange={handleChange}
          className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-black cursor-pointer"
        >
          <option value="subscription">
            Abonnement Mensuel (Gestion continue Google Ads & Web)
          </option>
          <option value="one-shot">
            Intervention Ponctuelle (Audit, Formation, Landing Page, CoMo)
          </option>
          <option value="custom">Devis Sur-Mesure</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Input
          label="Prénom"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          label="Nom"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Input
          label="Email professionnel"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Téléphone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <Input
          label="Nom de l'entreprise / Marque"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
        <Input
          label="Site web ou URL de destination"
          name="website"
          required
          value={formData.website}
          onChange={handleChange}
        />
      </div>

      {/* Sélection du Service/Formule alignée */}
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
          onChange={handleChange}
          className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-black cursor-pointer"
        >
          <optgroup label="Abonnements Mensuels">
            <option value="essentiel">Abonnement Essentiel</option>
            <option value="e-commerce">Abonnement E-commerce</option>
          </optgroup>
          <optgroup label="Interventions Ads & Tracking">
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
        {/* Budget Média / Projet */}
        <div className="space-y-2">
          <label
            htmlFor="budget"
            className="block text-xs font-black uppercase tracking-wider text-brand-black"
          >
            Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-bold text-sm focus:outline-none focus:ring-2 focus:ring-brand-black cursor-pointer"
          >
            <option value="under-500">Moins de 500 €</option>
            <option value="500-1000">500 € - 1 000 €</option>
            <option value="1000-2000">1 000 € - 2 000 €</option>
            <option value="2000-5000">2 000 € - 5 000 €</option>
            <option value="over-5000">Plus de 5 000 €</option>
            <option value="oneshot-budget">
              Prestation ponctuelle uniquement
            </option>
          </select>
        </div>

        {/* NOUVEAU CHAMP : Créneau de rappel préférentiel */}
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
            onChange={handleChange}
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
          rows={4}
          required
          placeholder="Ex: Nous souhaitons lancer des campagnes Google Ads, mettre en place le Consent Mode v2 et optimiser notre landing page..."
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-black placeholder:text-brand-black/50 resize-y"
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
};

export default ContactForm;

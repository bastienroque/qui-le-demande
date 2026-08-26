"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { z } from "zod";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Prénom requis").max(50),
  lastName: z.string().trim().min(2, "Nom requis").max(50),
  email: z.string().trim().email("Email invalide"),
  phone: z
    .string()
    .trim()
    .min(7, "Téléphone invalide (min 7 chiffres)")
    .max(20),
  company: z.string().trim().max(100).optional(),
  website: z.string().trim().min(5, "Site web requis"),
  offerType: z.string().optional(),
  serviceType: z.string().optional(),
  budget: z.string().optional(),
  callSlot: z.string().optional(),
  timeline: z.string().optional(),
  description: z
    .string()
    .trim()
    .min(10, "Description trop courte (min 10 caractères)")
    .max(3000),
  hp_field: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof ContactFormData, string>>;

function ContactFormFields() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    offerType: "subscription",
    serviceType: "essentiel",
    budget: "",
    callSlot: "matin",
    timeline: "asap",
    description: "",
    hp_field: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const offerTypeParam = searchParams.get("offerType");
    const serviceTypeParam = searchParams.get("serviceType");
    const budgetParam = searchParams.get("budget");

    if (offerTypeParam || serviceTypeParam || budgetParam) {
      let mappedOfferType = "subscription";
      if (offerTypeParam === "Abonnement Mensuel") {
        mappedOfferType = "subscription";
      }

      let mappedServiceType = "essentiel";
      if (serviceTypeParam?.toLowerCase().includes("e-commerce")) {
        mappedServiceType = "e-commerce";
      } else if (serviceTypeParam?.toLowerCase().includes("essentiel")) {
        mappedServiceType = "essentiel";
      }

      setFormData((prev) => ({
        ...prev,
        offerType: mappedOfferType,
        serviceType: mappedServiceType,
        description: serviceTypeParam
          ? `Bonjour, je souhaite en savoir plus sur : ${serviceTypeParam} (Budget : ${budgetParam || "non précisé"}).\n\nMes objectifs sont...`
          : prev.description,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setErrors({});

    const validation = contactSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors: FormErrors = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof typeof formData;
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = issue.message;
        }
      });

      setErrors(fieldErrors);
      setErrorMessage("Veuillez corriger les erreurs dans le formulaire.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

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
          budget: "",
          callSlot: "matin",
          timeline: "asap",
          description: "",
          hp_field: "",
        });
      } else {
        setErrorMessage(
          data?.error || "Échec de l'envoi du formulaire. Veuillez réessayer.",
        );
      }
    } catch {
      setErrorMessage(
        "Erreur de connexion avec le serveur. Veuillez réessayer.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof formData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="p-6 sm:p-10 text-center space-y-4 text-brand-black bg-brand-white border-2 border-brand-black">
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
      noValidate
      className="p-4 sm:p-6 space-y-6 text-brand-black bg-brand-white border-2 border-brand-black"
    >
      <div>
        <span className="inline-block bg-brand-black text-brand-white text-xs font-black px-3 py-1 uppercase tracking-widest border border-brand-black">
          PARLONS DE VOTRE PROJET
        </span>
      </div>

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
            Service Ponctuelle (Audit, Formation, Landing Page, CoMo)
          </option>
          <option value="custom">Devis Sur-Mesure</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <Input
            label="Prénom"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            value={formData.company}
            onChange={handleChange}
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
            onChange={handleChange}
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
            value={formData.budget}
            onChange={handleChange}
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
          rows={6}
          required
          placeholder="Ex: Nous souhaitons lancer des campagnes Google Ads, mettre en place le Consent Mode v2 et optimiser notre landing page..."
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 bg-brand-white text-brand-black border-2 border-brand-black font-medium text-sm focus:outline-none focus:ring-2 focus:ring-brand-black placeholder:text-brand-black/50 resize-y"
        />
        {errors.description && (
          <p className="mt-1 text-xs font-bold text-red-600">
            {errors.description}
          </p>
        )}
      </div>

      {/* Honeypot caché */}
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

export const ContactForm = () => {
  return (
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
};

export default ContactForm;

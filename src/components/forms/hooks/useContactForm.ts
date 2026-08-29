import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  contactSchema,
  ContactFormData,
  FormErrors,
  mapUrlParamsToForm,
} from "../schemas/contact-schema";

const INITIAL_DATA: ContactFormData = {
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
};

export function useContactForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const mapped = mapUrlParamsToForm(searchParams);
    if (mapped) {
      setFormData((prev) => ({
        ...prev,
        ...mapped,
        description: mapped.description || prev.description,
      }));
    }
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setErrors({});

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: FormErrors = {};
      validation.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof ContactFormData;
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
        setFormData(INITIAL_DATA);
      } else {
        setErrorMessage(data?.error || "Échec de l'envoi.");
      }
    } catch {
      setErrorMessage("Erreur de connexion serveur.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    errorMessage,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
  };
}

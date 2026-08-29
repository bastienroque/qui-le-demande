import { z } from "zod";

export const contactSchema = z.object({
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

export type ContactFormData = z.infer<typeof contactSchema>;
export type FormErrors = Partial<Record<keyof ContactFormData, string>>;

export function mapUrlParamsToForm(searchParams: URLSearchParams) {
  const offerTypeParam = searchParams.get("offerType");
  const serviceTypeParam = searchParams.get("serviceType");
  const budgetParam = searchParams.get("budget");

  if (!offerTypeParam && !serviceTypeParam && !budgetParam) return null;

  let mappedOfferType = "subscription";
  if (
    offerTypeParam === "one-shot" ||
    offerTypeParam === "Service Ponctuelle"
  ) {
    mappedOfferType = "one-shot";
  } else if (
    offerTypeParam === "custom" ||
    offerTypeParam === "Devis Sur-Mesure"
  ) {
    mappedOfferType = "custom";
  }

  let mappedServiceType = "essentiel";
  const serviceLower = serviceTypeParam?.toLowerCase() || "";

  if (serviceLower.includes("e-commerce")) mappedServiceType = "e-commerce";
  else if (serviceLower.includes("essentiel")) mappedServiceType = "essentiel";
  else if (serviceLower.includes("audit")) mappedServiceType = "audit-ads";
  else if (serviceLower.includes("formation"))
    mappedServiceType = "formation-express";
  else if (
    serviceLower.includes("conformit") ||
    serviceLower.includes("tracking") ||
    serviceLower.includes("como")
  )
    mappedServiceType = "conformite-tracking";
  else if (
    serviceLower.includes("landing") ||
    serviceLower.includes("lp express") ||
    serviceLower.includes("landing-express")
  )
    mappedServiceType = "landing-express";
  else if (
    serviceLower.includes("site") ||
    serviceLower.includes("application") ||
    serviceLower.includes("site-app-web")
  )
    mappedServiceType = "site-app-web";
  else if (
    serviceLower.includes("webmaster") ||
    serviceLower.includes("gestion-web") ||
    serviceLower.includes("webmastering")
  )
    mappedServiceType = "webmastering";

  return {
    offerType: mappedOfferType,
    serviceType: mappedServiceType,
    description: serviceTypeParam
      ? `Bonjour, je souhaite en savoir plus sur : ${serviceTypeParam}${budgetParam ? ` (Budget : ${budgetParam})` : ""}.\n\nMes objectifs sont...`
      : "",
  };
}

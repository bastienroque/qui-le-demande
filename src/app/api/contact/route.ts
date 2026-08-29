import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { z } from "zod";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const contactSchema = z.object({
  firstName: z.string().trim().min(2, "Prénom requis").max(50),
  lastName: z.string().trim().min(2, "Nom requis").max(50),
  email: z.string().trim().email("Email invalide"),
  phone: z.string().trim().min(6, "Téléphone invalide").max(20),
  company: z.string().trim().max(100).optional(),
  website: z.string().trim().min(5, "Site web requis"),
  offerType: z.string().optional(),
  serviceType: z.string().optional(),
  budget: z.string().optional(),
  callSlot: z.string().optional(),
  timeline: z.string().optional(),
  description: z.string().trim().min(10, "Description trop courte").max(3000),
  hp_field: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: validation.error.format() },
        { status: 400 },
      );
    }

    const data = validation.data;

    if (data.hp_field && data.hp_field.length > 0) {
      return NextResponse.json({ success: true });
    }

    const fullName = `${data.firstName} ${data.lastName}`;

    const callSlotLabels: Record<string, string> = {
      matin: "Matin (09h00 - 12h00)",
      midi: "Pause Déjeuner (12h00 - 14h00)",
      "apres-midi": "Après-midi (14h00 - 18h00)",
      "fin-journee": "Fin de journée (18h00 - 19h30)",
      "email-only": "Échange par e-mail uniquement",
    };

    const formattedCallSlot =
      callSlotLabels[data.callSlot || ""] || data.callSlot || "Non précisé";
    const emailSubject = `🚀 Nouveau Lead : ${fullName} (${data.company || "Indépendant / Particulier"})`;

    const textContent = `
NOUVEAU CONTACT - QUI LE DEMANDE

--- INFORMATIONS CLIENT ---
Nom complet : ${fullName}
Email : ${data.email}
Téléphone : ${data.phone}
Entreprise / Marque : ${data.company || "Non renseignée"}
Site web / URL : ${data.website}

--- CRÉNEAU DE RAPPEL PREFÉRÉ ---
Disponibilité : ${formattedCallSlot}

--- DÉTAILS DU PROJET ---
Format d'accompagnement : ${data.offerType || "Non précisé"}
Service / Formule : ${data.serviceType || "Non précisé"}
Budget mensuel / projet : ${data.budget || "Non précisé"}
Délai d'intervention : ${data.timeline || "Non précisé"}

--- MESSAGE / OBJECTIFS ---
${data.description}
    `.trim();

    await sgMail.send({
      to: "agence.quiledemande@gmail.com",
      from: "contact@quiledemande.fr",
      replyTo: data.email,
      subject: emailSubject,
      text: textContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}

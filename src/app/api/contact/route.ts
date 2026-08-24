import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      website,
      offerType,
      serviceType,
      budget,
      callSlot,
      timeline,
      description,
    } = body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !website ||
      !description
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    const fullName = `${firstName} ${lastName}`;

    const callSlotLabels: Record<string, string> = {
      matin: "Matin (09h00 - 12h00)",
      midi: "Pause Déjeuner (12h00 - 14h00)",
      "apres-midi": "Après-midi (14h00 - 18h00)",
      "fin-journee": "Fin de journée (18h00 - 19h30)",
      "email-only": "Échange par e-mail uniquement",
    };

    const formattedCallSlot =
      callSlotLabels[callSlot] || callSlot || "Non précisé";

    const emailSubject = `🚀 Nouveau Lead : ${fullName} (${company || "Indépendant / Particulier"})`;

    const textContent = `
NOUVEAU CONTACT - QUI LE DEMANDE

--- INFORMATIONS CLIENT ---
Nom complet : ${fullName}
Email : ${email}
Téléphone : ${phone}
Entreprise / Marque : ${company || "Non renseignée"}
Site web / URL : ${website}

--- CRÉNEAU DE RAPPEL PREFÉRÉ ---
Disponibilité : ${formattedCallSlot}

--- DÉTAILS DU PROJET ---
Format d'accompagnement : ${offerType || "Non précisé"}
Service / Formule : ${serviceType || "Non précisé"}
Budget mensuel / projet : ${budget || "Non précisé"}
Délai d'intervention : ${timeline || "Non précisé"}

--- MESSAGE / OBJECTIFS ---
${description}
    `.trim();

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #000; max-width: 600px; margin: 0 auto; border: 2px solid #000; padding: 24px;">
        <h2 style="background-color: #000; color: #fff; padding: 8px 12px; font-size: 16px; margin-top: 0; text-transform: uppercase;">
          🚀 Nouveau Lead reçu
        </h2>

        <h3 style="font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 4px;">
          1. Informations de contact
        </h3>
        <p style="font-size: 14px; line-height: 1.5;">
          <strong>Nom complet :</strong> ${fullName}<br/>
          <strong>Email :</strong> <a href="mailto:${email}">${email}</a><br/>
          <strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a><br/>
          <strong>Entreprise :</strong> ${company || "Non renseignée"}<br/>
          <strong>Site Web :</strong> <a href="${website}" target="_blank">${website}</a>
        </p>

        <h3 style="font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 4px; color: #E53E3E;">
          📞 Créneau de rappel préférentiel
        </h3>
        <p style="font-size: 14px; font-weight: bold; background-color: #F7FAFC; border: 1px solid #CBD5E0; padding: 8px 12px;">
          ${formattedCallSlot}
        </p>

        <h3 style="font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 4px;">
          2. Détails du besoin
        </h3>
        <p style="font-size: 14px; line-height: 1.5;">
          <strong>Format :</strong> ${offerType || "Non précisé"}<br/>
          <strong>Formule / Service :</strong> ${serviceType || "Non précisé"}<br/>
          <strong>Budget :</strong> ${budget || "Non précisé"}<br/>
          <strong>Délai d'intervention :</strong> ${timeline || "Non précisé"}
        </p>

        <h3 style="font-size: 14px; text-transform: uppercase; border-bottom: 2px solid #000; padding-bottom: 4px;">
          3. Description & Objectifs
        </h3>
        <p style="font-size: 14px; line-height: 1.6; white-space: pre-wrap; background-color: #F7FAFC; padding: 12px; border: 1px solid #E2E8F0;">
          ${description}
        </p>
      </div>
    `;

    await sgMail.send({
      to: "agence.quiledemande@gmail.com",
      from: "agence.quiledemande@gmail.com",
      replyTo: email,
      subject: emailSubject,
      text: textContent,
      html: htmlContent,
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

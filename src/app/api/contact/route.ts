import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, website, subject, description } =
      await request.json();

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

    await sgMail.send({
      to: "agence.quiledemande@gmail.com",
      from: "agence.quiledemande@gmail.com",
      replyTo: email,
      subject: subject
        ? `Nouveau lead: ${subject}`
        : `Nouveau lead de ${fullName}`,
      text: `Nom: ${fullName}\nEmail: ${email}\nTéléphone: ${phone}\nSite Web: ${website}\n\nMessage:\n${description}`,
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

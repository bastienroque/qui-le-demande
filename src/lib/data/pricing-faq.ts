export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const PRICING_FAQ: FAQItem[] = [
  {
    id: "commitment",
    question: "Y a-t-il un engagement de durée sur les abonnements ?",
    answer:
      "Non, nos abonnements mensuels sont sans engagement. Vous pouvez ajuster ou mettre en pause votre formule à tout moment avec un simple préavis de 15 jours avant la date de renouvellement.",
  },
  {
    id: "ad-budget",
    question:
      "Le budget publicitaire Google Ads est-il inclus dans les tarifs ?",
    answer:
      "Non, le budget publicitaire (payé directement à Google) est séparé. Nos tarifs couvrent nos frais de gestion, de stratégie, de création et d'optimisation continue de vos campagnes.",
  },
  {
    id: "ownership",
    question: "Suis-je propriétaire de mes comptes et de mon site ?",
    answer:
      "À 100%. Tous vos comptes Google Ads, GA4, GTM ainsi que le code de votre site ou landing page vous appartiennent entièrement dès le premier jour.",
  },
  {
    id: "results-delay",
    question: "Sous quel délai puis-je espérer voir les premiers résultats ?",
    answer:
      "Pour les campagnes Google Ads et les Landing Pages Express, les premiers leads ou ventes arrivent généralement dans les 48 à 72 heures suivant le lancement de la diffusion.",
  },
  {
    id: "custom-needs",
    question: "Que se passe-t-il si mon besoin ne rentre dans aucune case ?",
    answer:
      "Nous composons une formule sur-mesure ! Lors de notre premier échange, nous évaluons vos objectifs précis pour vous proposer un devis ajusté au centime près.",
  },
];

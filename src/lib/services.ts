import { ServiceBadge, ServiceCategory } from "@/types";

export const INITIAL_SERVICES: ServiceCategory[] = [
  {
    id: "ads-acquisition",
    shortName: "Acquisition Paid Ads",
    fullName: "Google Ads & Acquisition Payante",
    isRead: false,
    subServices: [
      "Campagnes Search, Performance Max & Shopping",
      "Display, YouTube & Remarketing ciblé",
      "Optimisation continue du ROAS et baisse du CPA",
      "A/B Testing des annonces et extensions de conversion",
    ],
  },
  {
    id: "web-landing",
    shortName: "Création Web & Landing",
    fullName: "Création Web & Landing Pages Ultra-Performantes",
    isRead: false,
    subServices: [
      "Landing pages dédiées aux campagnes Ads",
      "Sites vitrines et e-commerce sur-mesure",
      "Optimisation de la vitesse de chargement & mobile-first",
      "Parcours UX nettoyés de toute friction",
    ],
  },
  {
    id: "tracking-analytics",
    shortName: "Tracking & Analytics",
    fullName: "Tracking, GA4 & Consentement",
    isRead: false,
    subServices: [
      "Implémentation Google Tag Manager & GA4",
      "Tracking Server-Side pour contourner les bloqueurs",
      "Mise en conformité Google Consent Mode v2",
      "Dashboards de pilotage sur-mesure (Looker Studio)",
    ],
  },
];

export const SERVICES: ServiceBadge[] = [
  { id: "acquisition", badgeText: "Paid Ads & Lead Gen" },
  { id: "web-cro", badgeText: "Création Web & CRO" },
  { id: "tracking-data", badgeText: "Tracking & Data Analytics" },
];

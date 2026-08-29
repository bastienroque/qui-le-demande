import { PricingPlan, OneShotService, OneShotCategory } from "@/types";

export const MONTHLY_PLANS: PricingPlan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    subtitle: "Hors Merchant Center & Hotel Ads",
    basePrice: "180 €",
    setupFee: "79 €",
    commission: "n/a",
    period: "/ mois",
    tiers: [
      { budgetLabel: "< 500 €", price: "180 €" },
      { budgetLabel: "500 - 1000 €", price: "320 €" },
      { budgetLabel: "1000 - 1500 €", price: "440 €" },
      { budgetLabel: "1500 - 2000 €", price: "540 €" },
      { budgetLabel: "> 2000 €", price: "Sur devis" },
    ],
    features: [
      "Setup (Installation)",
      "Gestion Campagne",
      "Gestion Tracking",
      "Optimisation des LPs",
      "Création et Optimisation Ads",
      "A/B Testing",
      "Optimisation du Quality Score",
      "Ciblage de Mots-clés",
      "Rapport Mensuel",
    ],
  },
  {
    id: "e-commerce",
    name: "E-commerce",
    subtitle: "Gestion avancée & Shopping",
    basePrice: "300 €",
    setupFee: "119 €",
    commission: "Sur devis",
    period: "/ mois",
    badge: "Populaire",
    isPopular: true,
    tiers: [
      { budgetLabel: "< 1000 €", price: "300 €" },
      { budgetLabel: "1000 - 3000 €", price: "550 €" },
      { budgetLabel: "3000 - 5000 €", price: "750 €" },
      { budgetLabel: "> 5000 €", price: "Sur devis" },
    ],
    features: [
      "Setup E-commerce (Installation)",
      "Gestion Campagne Shopping",
      "Gestion Tracking",
      "Gestion Merchant Center",
      "Création et Optimisation Ads",
      "A/B Testing",
      "Optimisation du Quality Score",
      "Ciblage de Mots-clés",
      "Optimisation ROI",
      "Rapport Performance Catalogue",
    ],
  },
  {
    id: "custom",
    name: "Devis sur-mesure",
    subtitle: "Grands comptes & structures complexes",
    basePrice: "Sur devis",
    setupFee: "Sur devis",
    commission: "Sur devis",
    period: "",
    tiers: [],
    features: [
      "Gestion multi-canaux & gros budgets",
      "Accompagnement stratégique sur-mesure",
      "Développements & intégrations personnalisés",
      "Support & suivi dédié",
    ],
  },
];

export const ONE_SHOT_SERVICES_BY_CATEGORY: OneShotCategory[] = [
  {
    id: "ads",
    categoryLabel: "Services Ads & Tracking",
    services: [
      {
        id: "audit-ads",
        badge: "Audit Express",
        title: "Audit Google Ads & Tracking (1h)",
        delay: "Sur créneau",
        description:
          "Analyse ciblée de votre compte publicitaire et de votre tracking.",
        deliverables: [
          "Rapport Personnalisé",
          "Analyse des fuites de budget",
          "Recommandations d'optimisation",
        ],
      },
      {
        id: "formation-express",
        badge: "Formation",
        title: "Formation Express (2h)",
        delay: "Sur créneau",
        description:
          "Session de formation individuelle pour prendre en main vos leviers.",
        deliverables: [
          "Feuillet informatif & support de cours",
          "Passage en revue de vos campagnes",
          "Bonnes pratiques de gestion",
        ],
      },
      {
        id: "conformite-tracking",
        badge: "RGPD",
        title: "Conformité Tracking & CoMo",
        delay: "service rapide",
        description:
          "Mise aux normes de la collecte de données et du consentement.",
        deliverables: [
          "Implémentation Bannière de consentement",
          "Configuration Google Consent Mode (CoMo)",
          "Validation de la collecte légale",
        ],
      },
    ],
  },
  {
    id: "web",
    categoryLabel: "Projets & Services Web",
    services: [
      {
        id: "landing-express",
        badge: "Conversion Web",
        title: "Création LP Express",
        price: "Sur devis",
        delay: "Sur-mesure",
        description:
          "Conception d'une page de vente calibrée pour la conversion.",
        deliverables: [
          "Optimisation LP & Parcours UX",
          "A/B Testing pré-configuré",
          "SEO optimisé",
          "Développement Mobile-first",
        ],
      },
      {
        id: "site-app-web",
        badge: "Sur-Mesure",
        title: "Création Site / Application Web",
        price: "Sur devis",
        delay: "Sur-mesure",
        description: "Développement complet d'une plateforme web moderne.",
        deliverables: [
          "Design & Architecture sur-mesure",
          "Intégrations diverses (API, CMS, etc.)",
          "SEO optimisé",
          "Accompagnement personnalisé",
        ],
      },
      {
        id: "gestion-web",
        badge: "Gestion & Support",
        title: "Service Webmaster",
        price: "Sur devis",
        delay: "Continu / Ponctuel",
        description:
          "Prise en charge de la gestion technique et webmarketing au quotidien.",
        deliverables: [
          "Gestion Google MyBusiness",
          "Gestion Google Merchant Center",
          "Gestion Hébergement Web",
          "Maintenance Web continue",
        ],
      },
    ],
  },
];

export const ONE_SHOT_SERVICES: OneShotService[] =
  ONE_SHOT_SERVICES_BY_CATEGORY.flatMap((cat) => cat.services);

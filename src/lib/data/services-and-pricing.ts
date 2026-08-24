import { ServicePole, PricingPlan, OneShotService } from "@/types";

// services side

export interface ServiceCategory {
  id: "ads" | "web";
  categoryLabel: string;
  poles: ServicePole[];
}

export const SERVICES_BY_CATEGORY: ServiceCategory[] = [
  {
    id: "ads",
    categoryLabel: "Ads & Traffic",
    poles: [
      {
        id: "acquisition",
        badge: "Acquisition",
        title: "Google Ads & Acquisition Payante",
        tagline: "Captez l'intention d'achat immédiate au meilleur coût.",
        description:
          "Nous concevons et optimisons vos campagnes publicitaires pour aller chercher des prospects qualifiés prêts à passer à l'action.",
        features: [
          "Campagnes Search, Display & Remarketing ciblé",
          "Gestion des extensions & ciblage mots-clés",
          "Optimisation continue du Quality Score, du CPA et du ROI",
          "A/B Testing continu des annonces",
        ],
        ctaText: "Consulter l'offre →",
      },
      {
        id: "data-tracking",
        badge: "Tracking & Analytics",
        title: "Tracking, GA4 & Consentement",
        tagline: "Mesurez chaque euro investi avec une précision chirurgicale.",
        description:
          "Configuration d'une collecte de données fiable et 100% conforme aux réglementations européennes.",
        features: [
          "Implémentation Google Tag Manager & GA4",
          "Mise en conformité Google Consent Mode (CoMo v2)",
          "Bannière de consentement & gestion du RGPD",
          "Rapports de performance personnalisés",
        ],
        ctaText: "Consulter l'offre →",
      },
    ],
  },
  {
    id: "web",
    categoryLabel: "Web & Conversion",
    poles: [
      {
        id: "conversion-landing",
        badge: "Landing Pages",
        title: "Création Landing Pages Ultra-Performantes",
        tagline: "Transformez vos visiteurs en clients payants.",
        description:
          "Des pages de destination taillées sur-mesure pour maximiser le taux de conversion de vos campagnes Ads.",
        features: [
          "Design & UX orientés haute conversion",
          "Développement Mobile-First ultra-rapide",
          "Optimisation SEO & intégration de formulaires",
          "A/B Testing continu des éléments de vente",
        ],
        ctaText: "Consulter l'offre →",
      },
      {
        id: "sites-webapps",
        badge: "Développement Web",
        title: "Sites Vitrines, Applications & Gestion Web",
        tagline: "Une présence digitale solide, évolutive et maintenue.",
        description:
          "Création de sites complets, applications web et gestion technique continue de votre écosystème.",
        features: [
          "Design & architecture web sur-mesure",
          "Intégrations diverses & fonctionnalités personnalisées",
          "Maintenance web & gestion de l'hébergement",
          "Gestion Google MyBusiness & Google Merchant Center",
        ],
        ctaText: "Consulter l'offre →",
      },
    ],
  },
];

// Flat export si besoin de boucler sur tous les pôles de services sans distinction
export const SERVICES_POLES: ServicePole[] = SERVICES_BY_CATEGORY.flatMap(
  (cat) => cat.poles,
);

// offers side

export const MONTHLY_PLANS: PricingPlan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    subtitle: "Sans engagement • Hors Merchant Center & Hotel Ads",
    basePrice: "180 €",
    setupFee: "79 € (frais de setup)",
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
    subtitle: "Sans engagement • Gestion avancée & Shopping",
    basePrice: "300 €",
    setupFee: "119 € (frais de setup)",
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

export interface OneShotCategory {
  id: "ads" | "web";
  categoryLabel: string;
  services: OneShotService[];
}

export const ONE_SHOT_SERVICES_BY_CATEGORY: OneShotCategory[] = [
  {
    id: "ads",
    categoryLabel: "Interventions Ads & Tracking",
    services: [
      {
        id: "audit-ads",
        badge: "Audit Express",
        title: "Audit Google Ads & Tracking (1h)",
        price: "60 €",
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
        price: "150 € - 200 €",
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
        price: "80 € - 100 €",
        delay: "Intervention rapide",
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
    categoryLabel: "Projets & Interventions Web",
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

// Flat export si besoin de boucler sur tous les services ponctuels
export const ONE_SHOT_SERVICES: OneShotService[] =
  ONE_SHOT_SERVICES_BY_CATEGORY.flatMap((cat) => cat.services);

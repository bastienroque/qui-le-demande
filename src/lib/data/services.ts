import { ServicePole } from "@/types";

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

export const SERVICES_POLES: ServicePole[] = SERVICES_BY_CATEGORY.flatMap(
  (cat) => cat.poles,
);

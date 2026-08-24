export interface SimulatorBudgetStep {
  label: string;
  price: number | "Sur devis";
  isMax?: boolean;
}

export interface SimulatorOffer {
  id: "essentiel" | "e-commerce";
  name: string;
  badge: string;
  setupFee: string;
  note?: string;
  steps: SimulatorBudgetStep[];
  features: string[];
}

export const SIMULATOR_OFFERS: Record<
  "essentiel" | "e-commerce",
  SimulatorOffer
> = {
  essentiel: {
    id: "essentiel",
    name: "Abonnement Essentiel",
    badge: "Ads & Tracking",
    setupFee: "79 € (Frais de setup)",
    note: "Hors gestion Shopping via Merchant Center & Hotel Ads.",
    steps: [
      { label: "< 500 €", price: 180 },
      { label: "500 - 1000 €", price: 320 },
      { label: "1000 - 1500 €", price: 440 },
      { label: "1500 - 2000 €", price: 540 },
      { label: "> 2000 €", price: "Sur devis", isMax: true },
    ],
    features: [
      "Setup (Installation)",
      "Gestion Campagne & Tracking",
      "Optimisation des LPs",
      "Création & Optimisation Ads",
      "A/B Testing",
      "Optimisation du Quality Score",
      "Ciblage de Mots-clés",
      "Rapport Mensuel",
    ],
  },
  "e-commerce": {
    id: "e-commerce",
    name: "Abonnement E-commerce",
    badge: "Shopping & Merchant Center",
    setupFee: "119 € (Frais de setup)",
    steps: [
      { label: "< 1000 €", price: 300 },
      { label: "1000 - 3000 €", price: 550 },
      { label: "3000 - 5000 €", price: 750 },
      { label: "> 5000 €", price: "Sur devis", isMax: true },
    ],
    features: [
      "Setup E-commerce (Installation)",
      "Gestion Campagne Shopping & Merchant Center",
      "Gestion Tracking",
      "Création & Optimisation Ads",
      "A/B Testing",
      "Optimisation du Quality Score & Mots-clés",
      "Optimisation ROI",
      "Rapport Performance Catalogue",
    ],
  },
};

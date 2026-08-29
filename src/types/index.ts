import { ButtonHTMLAttributes } from "react";

type TailPosition =
  | "none"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  tail?: TailPosition;
}

export interface InputProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface H1Props {
  children: React.ReactNode;
  className?: string;
}

export interface H2Props {
  children: React.ReactNode;
  className?: string;
}

export interface PProps {
  children: React.ReactNode;
  className?: string;
}

export interface Step {
  id: number;
  title: string;
  subtitle: string;
  tail: "top-left" | "top-right";
  align: "left" | "right";
}

export interface ToolGroup {
  category: string;
  tools: string[];
}

export interface ServiceCategory {
  id: string;
  shortName: string;
  fullName: string;
  isRead: boolean;
  subServices: string[];
}

export interface TypewriterOptions {
  words?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  pauseOnEmptyDuration?: number;
  loop?: boolean;
}

export interface TypewriterProps extends TypewriterOptions {
  cursorSymbol?: string;
  className?: string;
}

export interface ServicesSectionProps {
  showButton?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  badge?: string;
  features: string[];
}

export interface ServicePricing {
  category: "marketing" | "web";
  label: string;
  packages: PricingPackage[];
}

export interface NavLink {
  href: string;
  label: string;
}

export interface ServiceBadge {
  id: string;
  badgeText: string;
}

export interface ServicePole {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface BudgetTier {
  budgetLabel: string;
  price: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  basePrice: string;
  setupFee?: string;
  commission?: string;
  period?: string;
  badge?: string;
  isPopular?: boolean;
  tiers?: BudgetTier[];
  features: string[];
}

export interface OneShotService {
  id: string;
  badge: string;
  title: string;
  price?: string;
  delay: string;
  description: string;
  deliverables: string[];
}

export interface OneShotCategory {
  id: "ads" | "web";
  categoryLabel: string;
  services: OneShotService[];
}

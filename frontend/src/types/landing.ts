// Feature Card
export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Architecture Step
export interface ArchitectureStep {
  id: string;
  name: string;
  description: string;
}

// How It Works Step
export interface HowItWorksStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

// Tech Stack Category
export interface TechStackCategory {
  id: string;
  name: string;
  technologies: Technology[];
}

export interface Technology {
  id: string;
  name: string;
  icon: string;
}

// Trusted Tech
export interface TrustedTech {
  id: string;
  name: string;
  icon: string;
}

// FAQ Item
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

// Navigation Link
export interface NavLink {
  id: string;
  label: string;
  href: string;
}
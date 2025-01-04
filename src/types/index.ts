// Common TypeScript interfaces and types
export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export interface MockupSlide {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Stat {
  number: string;
  label: string;
}
export interface ThemeConfig {
  id: string;
  name: string;
  location: string;
  mainHerb: string;
  storyTitle: string;
  description: string;
  color: string;
}

export interface ExperienceStep {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  path: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Ticket' | 'DIY' | 'Souvenir';
  imagePlaceholder: string;
  description: string;
}
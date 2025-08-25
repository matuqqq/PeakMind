export interface GameMechanic {
  id: string;
  name: string;
  description: string;
  pedagogicalSkill: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  institution: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'privacy' | 'technical' | 'pricing';
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description: string;
  source?: string;
}

export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  quarter: string;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface CMSContent {
  hero: {
    title: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    mascotImage: string;
  };
  statistics: Statistic[];
  gameMechanics: GameMechanic[];
  teacherFeatures: Feature[];
  studentFeatures: Feature[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  roadmap: RoadmapItem[];
}
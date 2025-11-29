export type NavSection = 'about' | 'experience' | 'portfolio' | 'skills' | 'contact';

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string; // Simplified for the card
  image: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface Certificate {
  name: string;
  duration: string;
  image: string;
}

export interface Step {
  id: number;
  x: number;
  y: number;
  rotation: number;
  isLeft: boolean;
}
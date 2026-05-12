export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  credentials: string;
  image?: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

export interface StatItem {
  id: number;
  value: string;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

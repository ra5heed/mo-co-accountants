import type { Service, TeamMember, Testimonial, StatItem, NavLink } from '../types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Team',     href: '#team'     },
  { label: 'Contact',  href: '#contact'  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Tax Advisory',
    description:
      'Strategic tax planning and compliance services to optimise your position and ensure full regulatory adherence with FIRS and state authorities.',
  },
  {
    id: 2,
    title: 'Financial Consulting',
    description:
      'Expert guidance on financial strategy, business restructuring, mergers, and investment analysis to drive sustainable growth.',
  },
  {
    id: 3,
    title: 'Audit & Assurance',
    description:
      'Independent, rigorous audits that provide stakeholders with confidence in your financial statements and internal controls.',
  },
];

export const STATS: StatItem[] = [
  { id: 1, value: '70', suffix: '+', label: 'Clients Served'       },
  { id: 2, value: '20',  suffix: '+', label: 'Years Experience'     },
  { id: 3, value: '12',  suffix: '',  label: 'Expert Professionals' },
  { id: 4, value: '98',  suffix: '%', label: 'Client Retention Rate'},
];

export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: 'Mikhail Olatunde', role: 'Managing Partner',     credentials: 'LLB(UK), FCA, MBA, ACTI',  image: '/image/Mikhol.jpg' },
  { id: 2, name: 'Abdul-lai Olatunde',     role: 'Senior Audit Manager', credentials: 'ACA',  image: '/image/Abdul-lai.jpg'},
  { id: 3, name: 'Abdulrasheed Olatunde',        role: 'Head of Tax Advisory', credentials: 'ACCA, GMNSE, COREN', image: '/image/rasheed.jpg'},
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      'Mikhail Olatunde & Co. transformed the way we handle our finances. Their attention to detail and proactive tax planning saved us significantly. Truly partners in growth.',
    author: 'Bola Adeyemi',
    company: 'CEO, Adeyemi Group',
  },
  {
    id: 2,
    quote:
      'Professional, precise, and always available. Their audit team gave our board complete confidence in our financial reporting. I cannot recommend them highly enough.',
    author: 'Fatima Suleiman',
    company: 'CFO, Meridian Properties Ltd',
  },
  {
    id: 3,
    quote:
      'From incorporation to our first tax filing, the team at Mikhail Olatunde held our hand through every step. Exceptional service for a growing startup.',
    author: 'Chukwuemeka Eze',
    company: 'Founder, TechBridge Nigeria',
  },
];

export const PILLARS = [
  { title: 'Integrity',   text: 'We uphold the highest ethical standards in every engagement.'    },
  { title: 'Excellence',  text: 'Delivering work that exceeds expectation, every single time.'    },
  { title: 'Precision',   text: 'Numbers matter. We ensure accuracy is never compromised.'        },
  { title: 'Partnership', text: 'Your success is our success — we grow together.'                },
];

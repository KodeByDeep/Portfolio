import type { LucideIcon } from 'lucide-react';
import { Code2, Server, Database, FileJson, Blocks, Paintbrush, Wind, Github, CheckCircle, Code, Zap, AppWindow, CodeXml, Laptop } from 'lucide-react';

// ── Social links ─────────────────────────────────────────────
export const SOCIAL = {
  github: 'https://github.com/KodeByDeep',
  linkedin: 'https://www.linkedin.com/in/sandeep-kaur-dev',
  email: 'sandeep8837505136@gmail.com',
} as const;

// ── Nav links ─────────────────────────────────────────────────
export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '#home',          label: 'Home' },
  { href: '#techstack',     label: 'Tech Stack' },
  { href: '#projects',      label: 'Projects' },
  { href: '#services',      label: 'Services' },
  { href: '#why-choose-me', label: 'Why Me' },
  { href: '#contact',       label: 'Contact' },
];

// ── About ─────────────────────────────────────────────────────
export const ABOUT = {
  name: 'Sandeep Kaur',
  tagline: 'Full-Stack MERN Developer',
  availability: 'Available for new opportunities',
  heroBody: 'I help businesses build high-performing websites and web applications that generate leads, improve user experience, and drive real growth.',
  education: {
    degree: 'BSc Computer Science',
    institution: 'University of East London',
    years: '2022–2026',
    grade: 'First Class Honours (88%)',
  },
  traineeship: 'IT Career Switch cyber security traineeship',
  languages: ['English', 'Punjabi', 'Hindi', 'Urdu'],
};

// ── Tech stack ────────────────────────────────────────────────
export interface Tech {
  icon: LucideIcon;
  label: string;
  color: string;
}
export const TECH_STACK: Tech[] = [
  { icon: Code2,      label: 'React',      color: 'text-cyan-400' },
  { icon: FileJson,   label: 'TypeScript', color: 'text-blue-400' },
  { icon: Server,     label: 'Node.js',    color: 'text-emerald-400' },
  { icon: FileJson,   label: 'Express',    color: 'text-yellow-400' },
  { icon: Database,   label: 'MongoDB',    color: 'text-green-400' },
  { icon: FileJson,   label: 'JavaScript', color: 'text-yellow-300' },
  { icon: Blocks,     label: 'HTML',       color: 'text-orange-400' },
  { icon: Paintbrush, label: 'CSS',        color: 'text-blue-300' },
  { icon: Wind,       label: 'Tailwind',   color: 'text-cyan-300' },
  { icon: Github,     label: 'GitHub',     color: 'text-white/80' },
];

// ── Projects ──────────────────────────────────────────────────
export type ProjectCategory = 'client' | 'practice';

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  badge: string;
  badgeColor: string;
  image: string;
  imageAlt: string;
}

export const PROJECTS: Project[] = [
  // ── Client work (shown first) ──────────────────────────
  {
    id: 'local-carpet-fitter',
    category: 'client',
    title: 'Local Carpet Fitter',
    description: 'A professional business website built for a local carpet fitting service to improve online presence and customer conversion. Designed to improve local SEO and increase customer enquiries.',
    tech: ['JavaScript', 'PHP'],
    liveUrl: 'https://localcarpetfitter.co.uk',
    badge: 'Client Work',
    badgeColor: 'bg-cyan-500',
    image: 'https://images.unsplash.com/photo-1591018799176-450ee29b5463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBmbG9vcmluZyUyMGluc3RhbGxhdGlvbiUyMHJvb218ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Local Carpet Fitter professional business website homepage',
  },
  {
    id: 'virk-carpet',
    category: 'client',
    title: 'Virk Carpet & Flooring',
    description: 'A modern business website for a carpet and flooring company, built with Next.js and TypeScript for blazing-fast performance, strong SEO, and a polished customer experience.',
    tech: ['Next.js', 'TypeScript'],
    liveUrl: 'https://virkcarpet.co.uk',
    badge: 'Client Work',
    badgeColor: 'bg-cyan-500',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Virk Carpet & Flooring business website',
  },
  // ── Practice / personal projects ──────────────────────
  {
    id: 'quickbreak',
    category: 'practice',
    title: 'QuickBreak',
    description: 'AI-powered motorway service finder designed to help drivers locate optimal rest stops based on real-time data and route preferences. MERN stack dissertation project.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI API', 'MapBox'],
    liveUrl: 'https://quick-break-backend.onrender.com',
    githubUrl: 'https://github.com/KodeByDeep/QuickBreak',
    badge: 'Dissertation',
    badgeColor: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMG1hcCUyMGFwcCUyMG5hdmlnYXRpb258ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'QuickBreak AI-powered motorway service finder application interface',
  },
  {
    id: 'shinestar',
    category: 'practice',
    title: 'ShineStar Store',
    description: 'A full-featured e-commerce store with product listings, shopping cart, user authentication, and order management. Built as a practice project to explore modern e-commerce patterns.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/KodeByDeep/ShineStar',
    badge: 'Practice',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'ShineStar e-commerce store',
  },
  {
    id: 'crowdfunding-dapp',
    category: 'practice',
    title: 'Crowdfunding dApp',
    description: 'A decentralised crowdfunding application built on the Ethereum blockchain. Users can create campaigns, contribute funds, and withdraw once targets are met — all governed by smart contracts.',
    tech: ['Solidity', 'React', 'Hardhat', 'Ethers.js'],
    githubUrl: 'https://github.com/KodeByDeep/Crowdfunding-dApp',
    badge: 'Practice',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Crowdfunding decentralised application on Ethereum',
  },
  {
    id: 'velora',
    category: 'practice',
    title: 'Velora Web Agency',
    description: 'A sleek agency landing page showcasing services, portfolio, team, and contact sections. Built to practise modern design systems and responsive layouts.',
    tech: ['React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/KodeByDeep/Velora',
    badge: 'Practice',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Velora Web Agency landing page',
  },
  {
    id: 'jade-restaurant',
    category: 'practice',
    title: 'Jade Restaurant',
    description: 'A restaurant website featuring an interactive menu, online reservation system, and location info. Focused on clean UI and accessibility.',
    tech: ['React', 'CSS'],
    githubUrl: 'https://github.com/KodeByDeep/Jade-Restaurant',
    badge: 'Practice',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Jade Restaurant website with menu and reservations',
  },
  {
    id: 'hair-salon',
    category: 'practice',
    title: 'Hair Salon',
    description: 'A stylish booking website for a hair salon with service listings, pricing, and an appointment booking flow.',
    tech: ['React', 'Tailwind CSS'],
    githubUrl: 'https://github.com/KodeByDeep/Hair-Salon',
    badge: 'Practice',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Hair salon booking website',
  },
  {
    id: 'cisco-topology',
    category: 'practice',
    title: 'Cisco Network Topology',
    description: 'A university network design and simulation project using Cisco Packet Tracer, covering subnetting, VLANs, routing protocols, and network security policies.',
    tech: ['Cisco Packet Tracer', 'Networking'],
    githubUrl: 'https://github.com/KodeByDeep/Cisco-Network-Topology',
    badge: 'Practice',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Cisco network topology diagram',
  },
];

// ── Services ──────────────────────────────────────────────────
export interface Service {
  icon: LucideIcon;
  color: string;
  title: string;
  desc: string;
}
export const SERVICES: Service[] = [
  {
    icon: Laptop,
    color: 'text-cyan-400',
    title: 'Business Websites',
    desc: 'High-performance, responsive websites tailored for local businesses to drive conversion and digital presence.',
  },
  {
    icon: AppWindow,
    color: 'text-emerald-400',
    title: 'Full-Stack Web Apps',
    desc: 'Complex, data-driven web applications built with scalable MERN stack architecture and intuitive UIs.',
  },
  {
    icon: CodeXml,
    color: 'text-yellow-400',
    title: 'API Development',
    desc: 'Secure, fast, and robust RESTful APIs built with Node.js and Express to power modern frontends.',
  },
];

// ── Why Choose Me ─────────────────────────────────────────────
export interface Reason {
  icon: LucideIcon;
  color: string;
  border: string;
  bg: string;
  title: string;
  desc: string;
}
export const REASONS: Reason[] = [
  {
    icon: CheckCircle,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    title: 'Real Projects',
    desc: 'Built and deployed real-world applications used by actual users and businesses, not just demo projects.',
  },
  {
    icon: Code,
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
    bg: 'bg-cyan-500/10',
    title: 'Clean Code',
    desc: 'Maintainable, scalable code following modern development best practices and industry standards.',
  },
  {
    icon: Zap,
    color: 'text-yellow-400',
    border: 'border-yellow-500/30',
    bg: 'bg-yellow-500/10',
    title: 'Fast Delivery',
    desc: 'Reliable delivery with clear communication and efficient workflow, without compromising quality.',
  },
];

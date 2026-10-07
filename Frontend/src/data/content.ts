import type { LucideIcon } from 'lucide-react';
import { Code2, Server, Database, FileJson, Blocks, Paintbrush, Wind, Github, CheckCircle, Code, Zap, AppWindow, CodeXml, Laptop } from 'lucide-react';

// ── Social links ─────────────────────────────────────────────
export const SOCIAL = {
  github: 'https://github.com/KodeByDeep',
  linkedin: 'https://www.linkedin.com/in/sandeep-kaur-dev',
  email: 'kaur.teck@gmail.com',
} as const;

// ── Nav links ─────────────────────────────────────────────────
export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/',          label: 'Home' },
  { href: '/projects',  label: 'Projects' },
  { href: '/about',     label: 'About' },
  { href: '/contact',   label: 'Contact' },
];

// ── Home page ─────────────────────────────────────────────────
export const HOME = {
  badge: 'Open to junior developer roles',
  heading: 'Sandeep Kaur',
  subheading: 'Junior Full Stack Developer',
  body: 'Computer Science graduate (First Class, 88%) building websites and web apps with React, Next.js, TypeScript and Node.js. I\'ve built and launched live websites for two local businesses.',
  proofPoints: [
    { stat: 'First Class', detail: 'BSc Computer Science (88%)' },
    { stat: '2 live', detail: 'client websites launched' },
    { stat: 'Full stack', detail: 'MERN dissertation project' },
  ],
  cta: {
    heading: 'Looking for a junior developer?',
    subheading: 'Let\'s talk.',
  },
} as const;

/** Project IDs shown in the Home "Selected work" section */
export const HOME_FEATURED_IDS = ['local-carpet-fitter', 'virk-carpet', 'quickbreak'] as const;

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
  bio: [
    'TODO: short intro paragraph about yourself (2–3 sentences).',
    'TODO: what drives you as a developer — what you enjoy, what kind of work you want to do.',
    'TODO: one sentence about where you are based and what you are looking for.',
  ],
};

// ── Tech stack ────────────────────────────────────────────────
export interface Tech {
  icon: LucideIcon;
  label: string;
  color: string;
}
export const TECH_STACK: Tech[] = [
  // Front end
  { icon: Code2,      label: 'React',             color: 'text-cyan-400' },
  { icon: Code2,      label: 'Next.js',            color: 'text-white/90' },
  { icon: FileJson,   label: 'TypeScript',         color: 'text-blue-400' },
  { icon: FileJson,   label: 'JavaScript',         color: 'text-yellow-300' },
  { icon: Blocks,     label: 'HTML',               color: 'text-orange-400' },
  { icon: Paintbrush, label: 'CSS',                color: 'text-blue-300' },
  { icon: Wind,       label: 'Tailwind CSS',       color: 'text-cyan-300' },
  // Back end
  { icon: Server,     label: 'Node.js',            color: 'text-emerald-400' },
  { icon: FileJson,   label: 'Express',            color: 'text-yellow-400' },
  { icon: Server,     label: 'PHP',                color: 'text-indigo-400' },
  // Databases
  { icon: Database,   label: 'MongoDB',            color: 'text-green-400' },
  { icon: Database,   label: 'Oracle SQL',         color: 'text-red-400' },
  // Other
  { icon: Code,       label: 'Solidity',           color: 'text-purple-400' },
  { icon: Code,       label: 'Java (basic)',        color: 'text-orange-300' },
  { icon: Code,       label: 'Python (basic)',      color: 'text-yellow-400' },
  { icon: Github,     label: 'Git / GitHub',       color: 'text-white/80' },
];

// ── Projects ──────────────────────────────────────────────────
export type ProjectCategory = 'client' | 'university' | 'concept';

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
  // ── Detail page fields ──────────────────────────
  overview: string;
  role: string;
  features: string[];
  challenges: string;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  // ── Client work (shown first) ──────────────────────────
  {
    id: 'local-carpet-fitter',
    category: 'client',
    title: 'Local Carpet Fitter',
    description: 'A professional business website built for a local carpet fitting service. Includes service and area pages, a gallery, and an online quote booking form. Designed to improve local SEO and drive customer enquiries.',
    tech: ['JavaScript', 'PHP'],
    liveUrl: 'https://localcarpetfitter.co.uk',
    badge: 'Client Work',
    badgeColor: 'bg-cyan-500',
    image: 'https://images.unsplash.com/photo-1591018799176-450ee29b5463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZXQlMjBmbG9vcmluZyUyMGluc3RhbGxhdGlvbiUyMHJvb218ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'Local Carpet Fitter professional business website homepage',
    overview: 'A business website for a local carpet fitting service based in West London. Built to improve their online presence, rank for local search terms, and convert visitors into quote requests.',
    role: 'Sole developer — designed and built the site end to end, from initial concept through to deployment on Hostinger. Also handled DNS, domain setup, and on-page SEO.',
    features: [
      'Service and area pages targeting local search terms',
      'Photo gallery of completed fitting work',
      'Online quote request form',
      'Mobile-first responsive design',
      'Fast load times with minimal dependencies',
    ],
    challenges: 'The main challenge was achieving good local SEO without a CMS or paid tools. I researched on-page SEO manually — structured headings, schema markup, and location-specific copy — and the site now ranks on the first page of Google for several target keywords.',
  },
  {
    id: 'virk-carpet',
    category: 'client',
    title: 'Virk Carpet & Flooring',
    description: 'A modern business website for a carpet and flooring company, built with Next.js and TypeScript. Features service pages, a quote form, WhatsApp chat, and local SEO for Hayes and the surrounding areas.',
    tech: ['Next.js', 'TypeScript'],
    liveUrl: 'https://virkcarpet.co.uk',
    badge: 'Client Work',
    badgeColor: 'bg-cyan-500',
    image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Virk Carpet & Flooring business website',
    overview: 'A business website for Virk Carpet & Flooring, a carpet and flooring supplier in Hayes, West London. Built with Next.js for performance and SEO, with a WhatsApp chat button and quote form to drive enquiries.',
    role: 'Sole developer — chose the tech stack, built the full site in Next.js and TypeScript, integrated WhatsApp Business chat, and deployed to Vercel. Ongoing maintenance and SEO updates.',
    features: [
      'Service and area pages with local SEO copy',
      'WhatsApp chat button for instant customer contact',
      'Quote request form',
      'Fast page loads via Next.js static generation',
      'Mobile-first responsive layout',
    ],
    challenges: 'Learning Next.js App Router while delivering a client project under a deadline meant I had to learn fast and be careful. I worked through the Next.js docs methodically and used TypeScript to catch errors early, which saved debugging time.',
  },
  // ── Practice / personal projects ──────────────────────
  {
    id: 'quickbreak',
    category: 'university',
    title: 'QuickBreak',
    description: 'Full-stack motorway service station finder for UK drivers — my dissertation project. Find stations, check facilities, read reviews, save favourites, and search hands-free with the Bexxa voice assistant. Uses TomTom Maps, Routing and Search APIs, JWT auth, and MongoDB Atlas.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'TomTom APIs'],
    liveUrl: 'https://quick-break-backend.onrender.com',
    githubUrl: 'https://github.com/KodeByDeep/QuickBreak',
    badge: 'Dissertation',
    badgeColor: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwcm9hZCUyMG1hcCUyMGFwcCUyMG5hdmlnYXRpb258ZW58MXx8fHwxNzcyODcwNjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    imageAlt: 'QuickBreak motorway service station finder application interface',
    overview: 'QuickBreak is a full-stack web app that helps UK motorway drivers find service stations along their route. Users can search by location, filter by facilities, read and write reviews, save favourites, and use a hands-free voice search assistant called Bexxa. Built as my Computer Science dissertation.',
    role: 'Solo developer for the full stack — React frontend, Node.js/Express REST API, MongoDB Atlas database, TomTom Maps/Routing/Search API integration, JWT authentication, and deployment on Render.',
    features: [
      'Interactive map powered by TomTom Maps API',
      'Route-based service station search using TomTom Routing API',
      'Facility filtering (fuel, food, toilets, EV charging)',
      'User reviews and ratings stored in MongoDB Atlas',
      'Save favourite stations to a personal list',
      'Bexxa — a voice search assistant using the Web Speech API',
      'JWT authentication for user accounts',
      'Deployed on Render',
    ],
    challenges: 'Integrating three separate TomTom APIs (Maps, Routing, Search) with consistent error handling was the most complex part. I also had to optimise API calls to avoid hitting rate limits during development. The voice assistant (Bexxa) was an unplanned addition — I prototyped it in an afternoon and it became one of the most memorable features of the project.',
  },
  {
    id: 'shinestar',
    category: 'concept',
    title: 'ShineStar Store',
    description: 'An online shop concept for a jewellery and accessories brand, featuring product listings, a shopping cart, and a clean checkout flow. A design and development exercise in modern e-commerce UI patterns.',
    tech: ['Next.js', 'TypeScript'],
    liveUrl: 'https://shinestar-e-commerce-store.vercel.app/',
    githubUrl: 'https://github.com/KodeByDeep/ShineStar',
    badge: 'Concept',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'ShineStar jewellery e-commerce store',
    overview: 'TODO: describe what this project is and who it is for.',
    role: 'TODO: describe your role and what you built.',
    features: ['TODO: list key features'],
    challenges: 'TODO: describe the main challenge and what you learned.',
  },
  {
    id: 'crowdfunding-dapp',
    category: 'university',
    title: 'Crowdfunding dApp',
    description: 'A decentralised crowdfunding app on Ethereum built for a university module (90%). Adds reward tiers, refunds, campaign cancellation, and a user dashboard on top of the base contract. Connected to MetaMask with real-time transaction feedback.',
    tech: ['Solidity', 'Hardhat', 'Next.js', 'TypeScript', 'Ethers.js'],
    githubUrl: 'https://github.com/KodeByDeep/Crowdfunding-dApp',
    badge: 'University (90%)',
    badgeColor: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Crowdfunding decentralised application on Ethereum',
    overview: 'A decentralised crowdfunding application built on the Ethereum blockchain for a university module. Campaign creators can set funding goals and reward tiers; backers contribute ETH and receive refunds automatically if the goal is not met.',
    role: 'Solo developer — wrote the Solidity smart contracts, tested them with Hardhat, and built the Next.js frontend connected to MetaMask via ethers.js. Started from an open-source base and extended it significantly.',
    features: [
      'Create campaigns with a funding goal, deadline and description',
      'Reward tiers — different perks for different contribution levels',
      'Automatic refunds if the campaign does not meet its goal',
      'Campaign cancellation by the creator',
      'User dashboard showing created and backed campaigns',
      'MetaMask wallet connection with transaction status messages',
      'Hardhat test suite for the smart contract',
    ],
    challenges: 'Smart contract development requires a different mindset to web development — bugs can be permanent and costly once deployed. Writing the refund and cancellation logic correctly took the most time; I had to read the Solidity docs carefully and write thorough Hardhat tests before I was confident deploying to a test network.',
  },
  {
    id: 'velora',
    category: 'concept',
    title: 'Velora Web Agency',
    description: 'A web agency concept site with a portfolio, services, team, and contact sections. Built to practise modern design systems, component architecture, and responsive layouts.',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://veloraweb.co.uk/portfolio/',
    githubUrl: 'https://github.com/KodeByDeep/Velora',
    badge: 'Concept',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Velora Web Agency landing page',
    overview: 'TODO: describe what this project is and who it is for.',
    role: 'TODO: describe your role and what you built.',
    features: ['TODO: list key features'],
    challenges: 'TODO: describe the main challenge and what you learned.',
  },
  {
    id: 'jade-restaurant',
    category: 'concept',
    title: 'Jade Restaurant',
    description: 'A restaurant concept site with a full menu, online reservation flow, and location info. Built to demonstrate clean UI design and accessibility for hospitality businesses.',
    tech: ['React', 'CSS'],
    liveUrl: 'https://jaderestaurant.veloraweb.co.uk/',
    githubUrl: 'https://github.com/KodeByDeep/Jade-Restaurant',
    badge: 'Concept',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Jade Restaurant website with menu and reservations',
    overview: 'TODO: describe what this project is and who it is for.',
    role: 'TODO: describe your role and what you built.',
    features: ['TODO: list key features'],
    challenges: 'TODO: describe the main challenge and what you learned.',
  },
  {
    id: 'hair-salon',
    category: 'concept',
    title: 'Hair Salon',
    description: 'A salon concept website with service listings, pricing, and an appointment booking flow. A design exercise focused on warm aesthetics and mobile-first layout.',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://salon.veloraweb.co.uk/',
    githubUrl: 'https://github.com/KodeByDeep/Hair-Salon',
    badge: 'Concept',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Hair salon booking website',
    overview: 'TODO: describe what this project is and who it is for.',
    role: 'TODO: describe your role and what you built.',
    features: ['TODO: list key features'],
    challenges: 'TODO: describe the main challenge and what you learned.',
  },
  {
    id: 'dental-clinic',
    category: 'concept',
    title: 'Dental Clinic',
    description: 'A dental practice concept site with service pages, a patient booking form, and a clean professional layout suited to healthcare businesses.',
    tech: ['React', 'Tailwind CSS'],
    liveUrl: 'https://dental.veloraweb.co.uk/',
    badge: 'Concept',
    badgeColor: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Dental clinic concept website',
    overview: 'TODO: describe what this project is and who it is for.',
    role: 'TODO: describe your role and what you built.',
    features: ['TODO: list key features'],
    challenges: 'TODO: describe the main challenge and what you learned.',
  },
  {
    id: 'cisco-topology',
    category: 'university',
    title: 'Cisco Network Topology',
    description: 'A university network design and simulation project using Cisco Packet Tracer, covering subnetting, VLANs, routing protocols, and network security policies.',
    tech: ['Cisco Packet Tracer', 'Networking'],
    githubUrl: 'https://github.com/KodeByDeep/Cisco-Network-Topology',
    badge: 'University',
    badgeColor: 'bg-emerald-500',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    imageAlt: 'Cisco network topology diagram',
    overview: 'TODO: describe what this project is and who it is for.',
    role: 'TODO: describe your role and what you built.',
    features: ['TODO: list key features'],
    challenges: 'TODO: describe the main challenge and what you learned.',
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

// ── Contact ───────────────────────────────────────────────────
export const CONTACT = {
  heading: 'Get in touch',
  subtext: 'Open to junior developer roles in London or remote, and freelance website work.',
  location: 'West London',
  successMessage: "Message sent. I'll reply within 1–2 days.",
  errorMessage: 'Something went wrong. You can also email me directly at ',
} as const;

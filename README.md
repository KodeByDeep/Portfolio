# Sandeep Kaur — Junior Full Stack Developer Portfolio

Personal portfolio website built with React, TypeScript and Tailwind CSS. Shows my projects, skills, experience and background, and has a working contact form via EmailJS.

**[View Live Portfolio →](https://codebydeep-co-uk-913554.hostingersite.com/)**

---

## About

I'm a junior full stack developer based in West London. I graduated from the University of East London in 2026 with a First Class degree in Computer Science (88%). This portfolio covers my client work, university projects and practice builds.

---

## Tech Stack

**Frontend:**
- React 19 + TypeScript
- Tailwind CSS 4
- React Router DOM
- React Icons (`react-icons/si` for brand icons)
- Lucide React

**Build tools:**
- Vite 7
- ESLint

**Contact form:**
- EmailJS (`@emailjs/browser`)

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, proof points, selected work, CTA |
| `/projects` | All projects with All / Client / University / Concept filter |
| `/projects/:slug` | Project detail — overview, role, features, challenges, tech |
| `/about` | Bio, experience timeline, education, training, skills, languages |
| `/contact` | EmailJS contact form with validation |

---

## Featured Projects

### Local Carpet Fitter — Client Work
- **Live:** [localcarpetfitter.co.uk](https://localcarpetfitter.co.uk)
- **Tech:** JavaScript, PHP
- Service and area pages, gallery, quote form, local SEO

### Virk Carpet & Flooring — Client Work
- **Live:** [virkcarpet.co.uk](https://virkcarpet.co.uk)
- **Tech:** Next.js, TypeScript
- WhatsApp chat, quote form, local SEO for Hayes

### QuickBreak — Dissertation
- **Live:** [quick-break-backend.onrender.com](https://quick-break-backend.onrender.com)
- **GitHub:** [github.com/KodeByDeep/QuickBreak](https://github.com/KodeByDeep/QuickBreak)
- **Tech:** React, Node.js, Express, MongoDB, Tailwind CSS, TomTom APIs
- Motorway service station finder for UK drivers. Map search, facility filters, reviews, favourites, JWT auth, Bexxa voice assistant. Deployed on Render.

> First load may take 30–60 seconds (free Render tier spins down when idle).

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Install and run

```bash
git clone https://github.com/KodeByDeep/Portfolio
cd Portfolio/Frontend
npm install
npm run dev
```

### Build for production

```bash
npm run build
```

### Environment variables

Create `Frontend/.env` (copy from `.env.example`):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get these from [emailjs.com](https://www.emailjs.com) — free account, 200 emails/month.

---

## Project Structure

```
Frontend/
├── public/
│   ├── images/
│   │   └── sandeep.jpg          # Profile photo
│   ├── Sandeep-Kaur-CV-Developer.pdf
│   ├── .htaccess                # Apache SPA redirect (Hostinger)
│   └── _redirects               # Netlify-style redirect fallback
├── src/
│   ├── components/              # Navbar, Footer, Layout, Hero, CodeCard, FloatingIcons …
│   ├── pages/                   # HomePage, ProjectsPage, ProjectDetailPage, AboutPage, ContactPage
│   └── data/
│       └── content.ts           # All site text — projects, skills, bio, links
└── .env.example
```

---

## Deployment

Hosted on Hostinger. The `public/.htaccess` file handles SPA routing so direct URLs and page refreshes work correctly.

---

## Contact

**Sandeep Kaur — Junior Full Stack Developer**

- **Email:** [kaur.teck@gmail.com](mailto:kaur.teck@gmail.com)
- **LinkedIn:** [linkedin.com/in/sandeep-kaur-dev](https://www.linkedin.com/in/sandeep-kaur-dev)
- **GitHub:** [github.com/KodeByDeep](https://github.com/KodeByDeep)
- **Location:** West London

Open to junior developer roles in London or remote, and freelance website work.

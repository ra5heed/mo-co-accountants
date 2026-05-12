# Mikhail Olatunde & Co. — Landing Page

A production-grade landing page for a Nigerian chartered accountancy firm, built with **React 18**, **TypeScript**, and **Tailwind CSS**, bundled with **Vite**.

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | React 18 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 3 |
| Icons | Lucide React |
| Bundler | Vite 5 |
| Fonts | Cormorant Garamond, DM Sans (Google Fonts) |

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## Project Structure

```
mo-accountants/
├── public/
│   └── images/               # Static images served at root URL
│       ├── office.jpg        # About section photo
│       ├── mikhail-olatunde.jpg
│       ├── adaeze-nwosu.jpg
│       └── emeka-obi.jpg
│
├── src/
│   ├── assets/
│   │   └── data.ts           # Single source of truth for all site content
│   │
│   ├── components/           # Shared, reusable UI components
│   │   ├── Button.tsx        # Rounded-pill button (primary / ghost / dark variants)
│   │   ├── IntroOverlay.tsx  # Full-screen animated intro (gold line + logo + progress bar)
│   │   ├── Navbar.tsx        # Transparent-over-hero → solid-on-scroll navigation
│   │   ├── PhotoPlaceholder.tsx  # Fallback for missing team/office images
│   │   └── SectionLabel.tsx  # Gold eyebrow label with decorative line
│   │
│   ├── hooks/
│   │   └── useScrollReveal.ts  # IntersectionObserver scroll-reveal with stagger
│   │
│   ├── sections/             # Full-width page sections, composed in App.tsx
│   │   ├── HeroSection.tsx       # Full-viewport dark hero with SVG cityscape + parallax
│   │   ├── AboutSection.tsx      # 50/50 office photo + firm story + value pillars
│   │   ├── ServicesSection.tsx   # 3-column service cards (Tax, Consulting, Audit)
│   │   ├── StatsSection.tsx      # 4-column statistics bar
│   │   ├── TeamSection.tsx       # Team member portrait cards
│   │   ├── TestimonialsSection.tsx  # Auto-rotating client quotes
│   │   ├── ContactSection.tsx    # Contact form + address/phone/email
│   │   └── FooterSection.tsx     # 4-column footer with links + affiliations
│   │
│   ├── types/
│   │   └── index.ts          # Shared TypeScript interfaces
│   │
│   ├── App.tsx               # Root component — manages intro state, composes sections
│   ├── main.tsx              # React entry point
│   └── index.css             # Tailwind directives + custom CSS utilities + keyframes
│
├── index.html
├── tailwind.config.js        # Design tokens (colours, fonts, durations)
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## Services

There are exactly **three services**, defined in `src/assets/data.ts` and used consistently across `ServicesSection`, the contact form dropdown, and the footer:

1. Tax Advisory
2. Financial Consulting
3. Audit & Assurance

To add, remove, or rename a service, edit only `SERVICES` in `data.ts` — all sections update automatically.

---

## Design Tokens

All tokens are defined in `tailwind.config.js` and available as Tailwind utility classes.

### Colours

| Token | Utility class | Hex |
|---|---|---|
| Gold | `text-gold` / `bg-gold` | `#B8945A` |
| Gold Light | `text-gold-light` | `#D4B483` |
| Gold Pale | `bg-gold-pale` | `#F5EDD8` |
| Navy | `bg-navy` | `#0D1B2A` |
| Navy Mid | `bg-navy-mid` | `#1A2E42` |
| Navy Light | `bg-navy-light` | `#243B55` |
| Cream | `bg-cream` | `#FAF7F2` |
| Cream Dark | `bg-cream-dark` | `#F0EAE0` |
| Body text | `text-body` | `#3A3028` |
| Muted text | `text-muted` | `#7A6E62` |

### Typography

| Role | Font | Class |
|---|---|---|
| Serif headings | Cormorant Garamond | `font-serif` |
| UI / body | DM Sans | `font-sans` |

### Transition Duration

`duration-400` (`400ms`) is available as a custom Tailwind token alongside the defaults.

---

## Button Component

`src/components/Button.tsx` provides three variants, all using the same rounded-pill shape, font, and gold-glow hover animation:

```tsx
// White fill → gold gradient on hover (use on dark backgrounds)
<Button variant="primary" darkBg>Explore Services</Button>

// Glass border → gold tint on hover (use on dark backgrounds)
<Button variant="ghost" darkBg>Enquire</Button>

// Navy fill → gold gradient on hover (use on light backgrounds)
<Button variant="dark">Join Our Team</Button>
```

---

## Animations

All animations are defined as CSS utilities and keyframes in `src/index.css`.

| Animation | Class / Keyframe | Used in |
|---|---|---|
| Intro gold line | `.intro-line` → `lineGrow` | `IntroOverlay` |
| Intro logo fade | `.intro-logo` → `fadeUp` | `IntroOverlay` |
| Intro progress bar | `.intro-bar` → `barGrow` | `IntroOverlay` |
| Hero badge drop | `.hero-badge` → `fadeSlideDown` | `HeroSection` |
| Hero headline lines | `.hero-h1-line1/2/3` → `fadeSlideUp` | `HeroSection` |
| Hero sub + CTA | `.hero-sub`, `.hero-ctas` → `fadeUp` | `HeroSection` |
| Gold shimmer text | `.hero-gradient-text` → `shimmer` | `HeroSection` |
| Breathing orbs | `.orb-pulse/2/3` → `orbPulse` | `HeroSection` |
| Ping dot | `.ping-dot` → `pingDot` | `HeroSection` |
| Scroll reveal | `.reveal` + `.visible` (JS-driven) | All sections |
| Testimonial fade | Inline `opacity` (JS-driven) | `TestimonialsSection` |

---

## Adding Images

Images are served from `public/images/` and referenced as root-relative paths.

**Step 1** — drop your files into `public/images/`:

```
public/images/
├── office.jpg              # About section (any landscape photo)
├── mikhail-olatunde.jpg    # Team card — portrait crop recommended
├── adaeze-nwosu.jpg
└── emeka-obi.jpg
```

**Step 2** — no code changes needed. Image paths are already wired in `src/assets/data.ts` (`TEAM_MEMBERS[*].image`) and `AboutSection.tsx`.

If a team member's image file is missing, `TeamCard` falls back to `<PhotoPlaceholder />` automatically.

To update the About section image, edit the `src` attribute directly in `src/sections/AboutSection.tsx`:

```tsx
<img
  src="/images/office.jpg"          // ← change this path
  alt="Mikhail Olatunde & Co. office"
  className="absolute inset-0 w-full h-full object-cover"
/>
```

---

## Content Updates

All site copy and data lives in one file: **`src/assets/data.ts`**.

| Export | Controls |
|---|---|
| `NAV_LINKS` | Navbar menu items and their anchor targets |
| `SERVICES` | Service cards, footer links, contact form dropdown |
| `STATS` | Numbers in the statistics bar |
| `TEAM_MEMBERS` | Team section — name, role, credentials, image path |
| `TESTIMONIALS` | Auto-rotating client quotes |
| `PILLARS` | Four value pillars in the About section |

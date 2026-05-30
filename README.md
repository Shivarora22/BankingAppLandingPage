# N7 Banking — Frontend

A responsive marketing/landing page for **N7 Banking**, a fintech platform offering core banking, digital banking, open banking, and loan management solutions. Built with React 19 and Vite.

## Pages / Sections

The app is a single-page layout composed of the following sections in order:

| Section | Description |
|---|---|
| **Navbar** | Sticky nav with links and a Request Demo CTA, collapses to a hamburger on mobile |
| **Hero** | Headline, subtitle, CTA buttons, and a dashboard preview image |
| **Trusted By** | Row of partner/brand logos |
| **Solutions Grid** | Five product cards (Core Banking CB7, Digital Banking N7, Open Banking, Loan Origination, Loan Management) |
| **Digital Banking** | Two-panel section showcasing the CB7 core banking platform with feature list |
| **Mobile Banking** | Animated marquee header, three phone mockup rows with feature callouts |
| **Get Connected** | Fintech insights/articles section |
| **Case Studies** | Carousel of customer case studies |
| **CTA Banner** | Full-width call-to-action strip |
| **Footer** | Office locations, navigation columns, and copyright |

## Tech Stack

- **React 19** — UI library
- **Vite 8** — dev server and build tool
- **Plain CSS** — per-component stylesheets, no CSS framework

## Project Structure

```
src/
├── assets/
│   ├── icons/        # All shared SVG icon components (ArrowIcon, CheckIcon, BrandMark, etc.)
│   ├── logos/        # Brand logo SVG components (SHELLS, Zoomerr, SmartFinder, etc.)
│   └── images/       # Image assets (hero, iPhone mockups, laptop dashboards)
├── components/
│   ├── Navbar/
│   ├── HeroSection/
│   ├── TrustedBy/
│   ├── SolutionsGrid/
│   ├── DigitalBanking/
│   ├── MobileBanking/
│   ├── GetConnected/
│   ├── CaseStudies/
│   ├── CTABanner/
│   └── Footer/
├── App.jsx
└── main.jsx
```

Each component folder contains a `.jsx` file and a co-located `.css` file.  
All SVGs have been extracted out of components and live in `src/assets/icons/` or `src/assets/logos/` — components import from there.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

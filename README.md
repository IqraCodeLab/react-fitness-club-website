# 🏋️ IronForge Fitness — Forge Your Strongest Self

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat&logo=reactrouter&logoColor=white)](https://reactrouter.com)

A premium, fully responsive fitness website for **IronForge Fitness** — engineered with a bold dark aesthetic, high-contrast red accents, buttery-smooth micro-interactions, and a fully data-driven architecture. Every page is crafted to feel like stepping inside the gym: powerful, focused, and built to push limits.

---

## ✨ Features & Highlights

### 🌐 Multi-Page Experience

Powered by **React Router v7** with automatic scroll-to-top on navigation and **12 hand-built pages**:

- 🏠 Home — hero, counters, programs preview, testimonials & more
- 👤 About Us — story, values & stats
- 💪 Programs — 11+ training programs
- 🏅 Trainers — certified coaching team
- 💳 Membership Tiers — plan comparison with pricing
- 📅 Workout Schedule — full weekly class timetable
- 📝 Blog — articles & insights
- 📖 Blog Post Details — rich article view
- 📸 Photo Gallery — filterable image showcase
- ✉️ Contact Us — form + location info
- 🚫 Custom 404 Page — on-brand error handling

### ⚡ Interactive & Dynamic UI

| Component | What it does |
| --------- | ------------ |
| 🧮 **BMI Calculator** | Real-time Body Mass Index calculation with instant visual feedback |
| 📊 **CounterSection** | Animated number count-ups, triggered on scroll into view |
| 🎬 **Reveal** | Intersection-observer based scroll animations for smooth section entrances |
| 📦 **PlanModal** | Popup modal with detailed membership specs & registration prompts |
| 🖼️ **Gallery filtering** | Category-based dynamic image filtering (Training, Equipment, Events, Members…) |
| 🎯 **Back-to-top** | Floating button for one-click scroll return |
| 🔄 **Scroll-to-top** | Automatic reset on every route change |

### 🛠️ Architecture Highlights

- **Centralized data model** — every piece of content (trainers, schedules, pricing, blog posts, gallery) lives in `src/data/data.js`. Update the site without touching the UI.
- **Custom React hooks** — `useInView` (Intersection Observer) and `useCountUp` (smooth number animation).
- **Modular by design** — **36 reusable, single-responsibility components** in `src/component/`.
- **Responsive everywhere** — fluid layouts tuned for mobile, tablet, and desktop.
- **Consistent design system** — high-contrast red accents over a dark, modern canvas with fluid typography.

---

## 🛠️ Tech Stack

| Domain      | Technology                          | Purpose                                        |
| ----------- | ----------------------------------- | ---------------------------------------------- |
| Framework   | **React 19**                        | Modern component-based architecture            |
| Build Tool  | **Vite 8**                          | Ultra-fast HMR & optimized production bundling  |
| Styling     | **Tailwind CSS v4**                 | Utility-first styling with a custom dark theme  |
| Routing     | **React Router v7**                 | Seamless client-side navigation                |
| Code Quality| **ESLint**                          | Error scanning & React hooks rule enforcement  |

---

## 📁 Project Structure

```
IronForge-Fitness/
├── index.html                  # Main entry document
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # Linting standards
├── public/                     # Static resources & favicon
└── src/
    ├── main.jsx                # Application root entry point
    ├── App.jsx                 # Route definitions & global layout
    ├── index.css               # Tailwind directives & global overrides
    ├── App.css                 # Custom scoped styling
    ├── assets/                 # Optimized images & graphics
    ├── component/              # 36 reusable UI components
    │   ├── BMISection.jsx      # BMI calculator
    │   ├── CounterSection.jsx  # Animated counters
    │   ├── PlanModal.jsx       # Membership plan modal
    │   ├── Reveal.jsx          # Scroll-reveal animation wrapper
    │   └── ScrollToTop.jsx     # Route-change scroll resets
    ├── pages/                  # 12 top-level page views
    ├── data/
    │   └── data.js             # Centralized content store
    └── hooks/                  # Custom hooks
        ├── useInView.js        # Intersection Observer hook
        └── useCountUp.js       # Animated stat-counter hook
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18.0.0 or higher**
- npm (bundled with Node.js)

### Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open **http://localhost:5173** in your browser to view the app live.

---

## ⚡ Available Scripts

| Command            | Description                                              |
| ------------------ | -------------------------------------------------------- |
| `npm run dev`      | Start the Vite dev server with Hot Module Replacement    |
| `npm run build`    | Compile & optimize production bundle into `dist/`        |
| `npm run preview`  | Preview the production build locally                     |
| `npm run lint`     | Scan codebase for errors & code-style violations (ESLint)|

---

## ⚠️ Development Notes

This project adheres to **UNIX-style case sensitivity**. The component directory is `src/component/` (**singular**) — keep all module imports case-accurate (e.g. `./component/ScrollToTop`) to avoid cross-platform build failures.

Linting, `dist/`, and `node_modules/` are correctly ignored via the included `.gitignore`.

---

## 📦 Production Build

Run `npm run build` to generate an optimized bundle:

```
dist/
├── index.html
└── assets/
    ├── index-*.js
    └── index-*.css
```

---

Made with ❤️ and plenty of **reps** for IronForge Fitness. 💪

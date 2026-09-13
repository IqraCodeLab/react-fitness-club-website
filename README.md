# IronForge Fitness 🏋️

Premium gym & fitness website — **IronForge Fitness | Forge Your Strongest Self**. A fully responsive React + Vite web app featuring strength training, CrossFit, HIIT, personal training programs, member testimonials, gallery, membership plans, BMI calculator, blog and more.

---

## ✨ Features

- **Modern UI** — dark, bold fitness theme built with Tailwind CSS v4
- **Routing** — multi-page app with `react-router-dom` (Home, About, Programs, Trainers, Membership, Schedule, Blog + Blog Details, Gallery, Contact, 404)
- **Interactive components**
  - Animated reveal on scroll (`Reveal`, `useInView` hook)
  - Count-up statistics (`CounterSection`, `useCountUp` hook)
  - BMI calculator (`BMISection`)
  - Membership plan modal (`PlanModal`)
  - Gallery with category filtering
  - Back-to-top button, scroll-to-top on route change
- **Data-driven** — all content handled via central data file (`src/data/data.js`)
- **Fully responsive** — mobile + desktop layouts
- **Reusable components** — 30+ modular components in `src/component/`

---

## 🛠 Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | React 19 (Vite 8)                        |
| Language  | JavaScript (JSX)                         |
| Styling   | Tailwind CSS v4 + custom CSS             |
| Routing   | React Router v7                          |
| Linting   | ESLint (+ react-hooks, react-refresh)    |

---

## 📁 Project Structure

```
├── index.html                 # Entry HTML (loads /src/main.jsx)
├── package.json
├── vite.config.js
├── eslint.config.js
├── public/                    # Static assets (favicon)
└── src/
    ├── main.jsx               # React entry point
    ├── App.jsx                # Routes & layout
    ├── index.css              # Global styles / Tailwind
    ├── App.css
    ├── assets/                # Images (hero, etc.)
    ├── component/             # Reusable UI components (36 files)
    ├── pages/                 # Page components (12 pages)
    ├── data/
    │   └── data.js            # Central content/data file
    └── hooks/
        ├── useInView.js       # Scroll-reveal hook
        └── useCountUp.js      # Count-up animation hook
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) **18+** (LTS recommended)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build locally
npm run preview
```

Your dev server runs at `http://localhost:5173` by default.

---

## ✅ Scripts

| Command          | Description                         |
| ---------------- | ----------------------------------- |
| `npm run dev`    | Start Vite dev server               |
| `npm run build`  | Build production bundle to `dist/`  |
| `npm run preview`| Serve the production build          |
| `npm run lint`   | Run ESLint                          |

---

## 🌍 Deploy to Vercel

### Option A — Vercel Dashboard (recommended)

1. Push the project to **GitHub** first (steps below).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your GitHub repo.
3. Vercel auto-detects **Vite** — framework preset will be `Vite`.
4. Keep default settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**. Your site goes live immediately and auto-rebuilds on every push.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel           # deploy to preview
vercel --prod    # deploy to production
```

---

## 🐙 Push to GitHub

```bash
# 1. Create a repo on github.com (do NOT add a README there)

# 2. In this project folder:
git init
git add .
git commit -m "Initial commit - IronForge Fitness"

# 3. Link & push
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

> 💡 Tip: `dist/` and `node_modules/` are already ignored — a `.gitignore` is included.

---

## ⚠️ Important: Case-Sensitive Paths (Linux / Vercel)

Vercel builds run on **Linux**, where file paths are **case-sensitive** (unlike Windows).

- The components folder is **`src/component/`** (singular) — all imports must use `component`, **never** `components`.
- All file names in imports must match exact casing (e.g. `./component/ScrollToTop`, `../pages/Home`).
- This project already follows the correct casing, so it builds cleanly.

---

## 📦 Production Build Output

Run `npm run build` — an optimized bundle is generated in:

```
dist/
├── index.html
└── assets/
    ├── index-*.js
    └── index-*.css
```

---

## 📄 License

This is a private demo project. No license is specified — reuse at your own discretion.

---

Made with ❤️ for forge-worthy athletes. 💪
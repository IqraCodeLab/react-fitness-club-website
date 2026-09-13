# 🏋️‍♂️ IronForge Fitness — Forge Your Strongest Self

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)

A high-performance, fully responsive, and feature-packed web application built for **IronForge Fitness**. Designed with a bold dark fitness aesthetic, smooth micro-interactions, custom hooks, and dynamic route rendering to deliver a seamless user experience across all devices.

---

## 🔥 Key Highlights & Features

### 🌐 Multi-Page Experience & Routing
- Powered by `react-router-dom` (v7) with automatic scroll-to-top on route changes.
- **12+ Specialized Pages:** Home, About Us, Programs, Trainers, Membership Tiers, Workout Schedule, Blog, Blog Post Details, Photo Gallery, Contact Us, and Custom 404 Error handling.

### ⚡ Interactive & Dynamic UI Components
- **BMI Calculator (`BMISection`):** Real-time interactive Body Mass Index calculation tool with instant feedback.
- **Animated Counter Statistics (`CounterSection`):** Custom numbers count-up triggered when scrolled into view.
- **Scroll Reveal Animations (`Reveal`):** Custom observer-based animation wrapper for smooth section entry.
- **Membership Plan Modal (`PlanModal`):** Interactive popup modal for detailed plan specifications and registration prompts.
- **Filterable Media Gallery:** Dynamic category-based image filtering (e.g., Strength, Cardio, Facilities).

### 🛠️ Architecture & Technical Highlights
- **Centralized Data Model (`src/data/data.js`):** Fully data-driven design allowing easy updates to site content, trainer details, schedules, and pricing without touching UI logic.
- **Custom React Hooks:** 
  - `useInView`: Lightweight Intersection Observer hook for scroll animations.
  - `useCountUp`: Smooth numerical increments for statistical callouts.
- **Modular Component Design:** 30+ reusable, single-responsibility components in `src/component/`.
- **Responsive & Modern Styling:** Engineered with Tailwind CSS v4 featuring high-contrast red accents, dark modern aesthetic, and fluid typography.

---

## 🛠️ Tech Stack

| Domain | Technology / Library | Description |
| :--- | :--- | :--- |
| **Framework** | React 19 | Modern component-based architecture |
| **Build Tool** | Vite 8 | Ultra-fast HMR and optimized production bundling |
| **Styling** | Tailwind CSS v4 | Utility-first styling with custom dark theme design |
| **Routing** | React Router v7 | Seamless client-side navigation |
| **Code Quality** | ESLint | Code formatting and React hooks rules enforcement |

---

## 📁 Project Architecture

```text
IronForge-Fitness/
├── index.html                  # Main entry document
├── package.json                # Project dependencies & scripts
├── vite.config.js              # Vite configuration
├── eslint.config.js            # Linting standards setup
├── public/                     # Static resources & favicon
└── src/
    ├── main.jsx                # Application root entry point
    ├── App.jsx                 # Route definitions & global layout wrappers
    ├── index.css               # Tailwind directives & global utility overrides
    ├── App.css                 # Custom scoped styling
    ├── assets/                 # Optimized images & graphics
    ├── component/              # 30+ Reusable UI components
    │   ├── BMISection.jsx
    │   ├── CounterSection.jsx
    │   ├── PlanModal.jsx
    │   ├── Reveal.jsx
    │   └── ScrollToTop.jsx
    ├── pages/                  # Top-level page views (12 distinct pages)
    ├── data/
    │   └── data.js             # Centralized project data store
    └── hooks/                  # Custom React hooks
        ├── useInView.js        # Viewport intersection observer
        └── useCountUp.js       # Animated stat counter logic
🚀 Getting StartedFollow these steps to set up and run the project locally on your machine:PrerequisitesNode.js 18.0.0 or highernpm (Package Manager)Local Setup InstructionsNavigate to the project root:Bashcd "Gym website"
Install project dependencies:Bashnpm install
Start the development server:Bashnpm run dev
Open in browser:Navigate to http://localhost:5173 to view the application live.⚡ Available NPM ScriptsCommandActionnpm run devStarts the Vite local development server with HMRnpm run buildCompiles and optimizes assets into the dist/ directory for productionnpm run previewRuns a local web server to preview the production buildnpm run lintScans codebase for errors and code-style compliance using ESLint📌 Development Notes💡 Case-Sensitivity Warning:This project adheres strictly to UNIX-compliant case sensitivity. The component directory is structured as src/component/ (singular). Ensure all module imports retain accurate file name casing to prevent build failures across cross-platform environment builds.Made with 💪 for IronForge Fitness. Designed & Developed for peak performance.

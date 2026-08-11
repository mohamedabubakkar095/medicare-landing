Medicare — Healthcare Landing Page

A pixel-focused, fully responsive healthcare landing page built with React, CSS Modules, and Framer Motion — developed as a frontend assessment task.

🔗 Live Demo: https://medicare-landing-seven.vercel.app/

Show Image Show Image Show Image Show Image

📸 Preview
<!-- Add a screenshot of your deployed site here, e.g.: --> <!-- ![Medicare landing page preview](./preview.png) -->
✨ Features
Fully responsive — mobile, tablet, and desktop breakpoints
Dark / light mode toggle — persisted to localStorage, respects OS preference on first visit
Smooth scrolling and scroll-triggered section animations (Framer Motion)
Hover micro-interactions on buttons and cards
Accessible — semantic HTML, labeled inputs, visible keyboard focus states
prefers-reduced-motion respected — animations disable automatically for users who request it
Componentized architecture — one folder per section, each with its own scoped CSS module
🛠 Tech Stack
Category	Choice
Framework	React 18 (functional components + hooks)
Build tool	Vite
Styling	CSS Modules
Animation	Framer Motion
Icons	react-icons
Deployment	Vercel
📁 Folder Structure
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── Features/
│   ├── Dashboard/
│   ├── TrustedBy/
│   ├── Consultants/
│   ├── ConsultMap/
│   ├── CTABanner/
│   └── Footer/
├── context/
│   └── ThemeContext.jsx      # dark/light theme provider
├── styles/
│   └── global.css            # design tokens (CSS variables) + resets
├── App.jsx
└── main.jsx

Each component folder contains a .jsx file and a co-located .module.css file, so styles never leak across sections.

🚀 Getting Started
bash
# clone the repo
git clone https://github.com/mohamedabubakkar095/medicare-landing.git
cd medicare-landing

# install dependencies
npm install

# start local dev server
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview

The dev server runs at http://localhost:5173 by default.

☁️ Deployment

This project is deployed on Vercel.

To deploy your own copy:

Push the repo to GitHub.
Import it at vercel.com/new.
Framework preset: Vite · Build command: npm run build · Output directory: dist.
Deploy — Vercel auto-redeploys on every push to main.
🧩 Implementation Notes
Theming — CSS custom properties (--color-*, --font-*, --radius-*) are defined in styles/global.css under :root and overridden under [data-theme='dark']. ThemeContext toggles a data-theme attribute on <html>, so components stay theme-agnostic — all switching happens at the CSS variable level.
Animation — Framer Motion's whileInView drives scroll reveals, with viewport={{ once: true }} so each section animates in once rather than replaying on every scroll pass.
Minimal dependencies — only framer-motion and react-icons were added beyond React itself.
👤 Author

Mohamed Abubakkar

GitHub: https://github.com/mohamedabubakkar095
LinkedIn: https://www.linkedin.com/in/mohamed-abubakkar

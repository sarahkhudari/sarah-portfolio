# Sara — Bilingual Portfolio (React + Tailwind)

A premium, fully responsive, feminine-elegant portfolio for **Sara** — Flutter & React developer. Bilingual **Arabic (RTL) / English (LTR)** with a clean language switcher, soft pink palette, smooth Motion animations, and shadcn-styled components.

## Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS** (custom blush / rose / lavender palette)
- **Motion for React** (`framer-motion`) for animations
- **Lucide React** icons
- shadcn-style UI primitives (`Button`, `Card`, `Input`, `Badge`)

## Folder Structure

```
protofillo/
├─ index.html
├─ package.json
├─ vite.config.js
├─ tailwind.config.js
├─ postcss.config.js
├─ public/
│  ├─ favicon.svg
│  └─ images/                ← drop your project screenshots here
│     └─ README.txt
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   ├─ index.css
   ├─ i18n.js                ← ALL text + contact info (edit here)
   ├─ lib/utils.js
   ├─ context/
   │  └─ LanguageContext.jsx
   └─ components/
      ├─ Navbar.jsx
      ├─ Hero.jsx
      ├─ About.jsx
      ├─ Skills.jsx
      ├─ Projects.jsx
      ├─ Contact.jsx
      ├─ Footer.jsx
      ├─ LanguageSwitcher.jsx
      └─ ui/
         ├─ Button.jsx
         ├─ Card.jsx
         ├─ Input.jsx
         └─ Badge.jsx
```

## Setup

Requires **Node.js 18+**.

```bash
npm install
```

## Run

```bash
# start the dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview
```

## Where to Edit

All personal content lives in **one place**: [`src/i18n.js`](./src/i18n.js).

| What to change | Where |
|---|---|
| **Email / phone / location / LinkedIn / GitHub** | `contactInfo` object at the bottom of `src/i18n.js` |
| **Hero tagline, name, role** | `translations.en.hero` and `translations.ar.hero` |
| **About me paragraphs** | `translations.*.about.body` |
| **Skills list** | `translations.*.skills.items` |
| **Projects (title, description, role, tech, links)** | `translations.*.projects.items` |
| **Project screenshots** | Drop PNGs in `public/images/` (names: `project-1.png` … `project-4.png`) |
| **Demo / GitHub links per project** | `demo` & `github` fields in `projects.items` |
| **Resume PDF** | Drop `resume.pdf` in `public/` — already referenced by `contactInfo.resume` |
| **Color palette** | `tailwind.config.js` → `theme.extend.colors` |
| **Fonts** | `index.html` (Google Fonts link) + `tailwind.config.js` → `fontFamily` |

## Features

- **Hero** — name, role, professional tagline, dual CTAs, floating chips, stats.
- **About** — bilingual summary, highlight cards with icons.
- **Skills** — 7 skills (Flutter, Dart, React, JavaScript, Responsive Design, API Integration, Git/GitHub) in modern cards with Lucide icons and hover motion.
- **Projects** — 4 project cards (Dental, Pregnancy, Furniture Dashboard, Mother Dashboard) with image, description, role, tech stack, Demo + GitHub buttons, soft pink hover overlay, rounded corners, shadow.
- **Contact** — email, phone, location, LinkedIn, GitHub info cards + fully working form (name / email / message) with success state. Hook it up to Formspree / EmailJS / your API in `Contact.jsx` → `onSubmit`.
- **Footer** — name, role, social icons, copyright.
- **Language switcher** — toggles `en ⇄ ar`, flips `dir` to `rtl`, swaps font to Tajawal, persists in `localStorage`.
- **Fully responsive**, accessible focus styles, smooth scroll navigation.

## Going live

1. `npm run build`
2. Deploy the `dist/` folder to **Vercel**, **Netlify**, **GitHub Pages**, or any static host.

Good luck with the job search 💕

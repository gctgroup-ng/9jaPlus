# 9jaPlus by IntarvAS

> **Always connected to home** — Airtime, data, eSIMs, and international calling unified for Nigerians everywhere.

---

## 📖 Overview

**9jaPlus** is a modern web application designed for the Nigerian diaspora and global travelers. It simplifies connectivity to Nigeria by providing:

- ⚡ **Instant Top-ups:** Direct airtime and data recharging for all major Nigerian telecom networks in seconds.
- 🌐 **Global eSIMs:** Digital travel roaming profiles ready to install before arriving in Lagos, Abuja, or anywhere across the globe.
- 📞 **International Voice Channels:** Reliable, high-definition voice routing connecting families, businesses, and loved ones without exorbitant roaming fees.
- 🛡️ **Privacy & Transparency:** Dedicated privacy policies and user data protections.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Primitives & Helpers:** [Base UI](https://base-ui.com/), `clsx`, `tailwind-merge`, `class-variance-authority`
- **Analytics:** [Vercel Analytics](https://vercel.com/analytics)
- **Package Manager:** `pnpm` (default) / `npm`

---

## 📁 Project Structure

```text
9jaPlus/
├── app/
│   ├── layout.tsx            # Root layout with metadata, theme, and analytics
│   ├── page.tsx              # Landing page (Hero, Services, Why 9jaPlus, Footer)
│   ├── globals.css           # Global Tailwind CSS and design tokens
│   └── privacy/
│       └── page.tsx          # Privacy Policy page
├── components/
│   ├── navbar.tsx            # Navigation header with light/dark theme switch
│   ├── hero-section.tsx      # Hero section showcasing brand mark and CTA
│   ├── services-section.tsx  # Service offerings cards (Airtime, eSIM, Calling)
│   ├── why-section.tsx       # Key metrics and diaspora statistics
│   ├── privacy-header.tsx    # Privacy policy header banner
│   ├── privacy-content.tsx   # Structured privacy policy clauses and cards
│   ├── footer.tsx            # Footer navigation and copyright
│   ├── theme-provider.tsx    # Theme context provider
│   └── ui/                   # Reusable UI primitives (Button, etc.)
├── lib/
│   └── utils.ts              # Class name merging and common utility helpers
├── public/
│   ├── logos/                # 9jaPlus brand logos (light & dark SVG/PNG)
│   └── ...                   # Favicons and web app icons
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.18+ or 20+) installed on your machine. We recommend using [pnpm](https://pnpm.io/) to match the repository lockfile.

### 1. Clone the repository

```bash
git clone <repository-url>
cd 9jaPlus
```

### 2. Install dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the Next.js development server with Hot Module Replacement. |
| `pnpm build` | Compiles and builds the production-ready bundle. |
| `pnpm start` | Starts the Next.js production server. |

---

## 🎨 Theme & Customization

The project includes built-in support for light and dark modes:
- Managed via `ThemeProvider` (`components/theme-provider.tsx`).
- Styled using Tailwind CSS v4 variables and custom color palettes reflecting the 9jaPlus brand identity (`#005A36` deep green, `#008751` emerald, `#6BE4A4` mint, `#E6F4EC` light green, `#1016A8` blue accents).

---

## 📄 License

This project is proprietary and developed by **IntarvAS**. All rights reserved.

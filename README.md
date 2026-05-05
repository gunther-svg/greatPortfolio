# greatPortfolio 🚀

*They called me mad but they just might be right though.*

**greatPortfolio** is a modern, high-performance personal portfolio and developer platform built to showcase projects, offer professional commissions, and provide an engaging user experience. 

## ✨ Features

- **Dynamic Project Gallery**: Automatically fetches and displays my latest original GitHub repositories using the GitHub API, keeping the portfolio completely up-to-date without manual edits.
- **Progressive Web App (PWA)**: Fully installable as a standalone app on both desktop and mobile devices. Look for the "Install App" button in the navigation menu!
- **Offline Mode & Mini-Game**: Lose your internet connection? No problem! The app features a custom Canvas-based endless runner game to keep you entertained until you're back online (complete with local highscore storage).
- **Commissions & Services**: A beautifully designed, responsive pricing tier page built with interactive cards to outline service models.
- **Interactive FAQ**: A clean, collapsible accordion-based FAQ section for potential clients and employers.
- **Modern UI/UX**: Built with a sleek dark aesthetic, responsive grids, and subtle micro-animations.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [Material-UI (MUI)](https://mui.com/)
- **Language**: TypeScript
- **PWA Features**: Custom Service Workers & Web Manifests
- **Data Fetching**: GitHub REST API

## 🚀 Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

*Tip: To test the PWA installation prompt and the offline dinosaur game, build the application for production (`npm run build && npm run start`) or simulate offline mode via the Network tab in your browser's Developer Tools!*

## 📁 Project Structure highlights

- `app/page.tsx`: The main landing page featuring the dynamic GitHub project gallery.
- `app/commissions/`: The pricing and service model breakdown.
- `app/faq/`: Frequently asked questions for clients and employers.
- `app/components/Navbar.tsx`: The main navigation bar, handling responsive drawers, print triggers, and PWA installation prompts.
- `public/offline.html`: The standalone HTML canvas game served by the Service Worker when offline.

## 📄 License

This project is open-source and available under the MIT License.

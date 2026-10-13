<div align="center">

# Apsara Agentic Web

**The public website and install guide for Apsara Agentic, a local-first coding-agent CLI.**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)

</div>

---

## Overview

Apsara Agentic Web is the bilingual (English and Khmer) marketing and documentation site for [Apsara Agentic](https://github.com/RithyBondeth/Apsara-Agentic-Cli). It helps developers understand the product, install the CLI, connect their own model provider, and start working in a local repository.

The site is documentation and distribution only. There is no Apsara sign-up, no user database, and no cloud sync, and the website never sits between the CLI and the user's model provider.

## Features

- **Landing pages:** product, capabilities, workflow, install, and private-alpha routes.
- **English and Khmer localization**, with the language preference kept in a cookie and Khmer typography tuned for Noto Sans Khmer.
- **Light and dark themes** through `next-themes`, controlled by a shared circular icon toggle.
- **Makor brand identity:** the pixel Makara mascot, a gold, blue, charcoal and ivory palette, and Khmer-inspired lotus and carved-frame ornaments.
- **GSAP choreography:** ornament line drawing, staggered reveals, a pinned workflow section, and pointer-reactive lighting. Animations respect `prefers-reduced-motion`.
- **Illustrative terminal showcase** that previews a CLI session without running any commands.
- **Generated Open Graph image** and a custom 404 page.

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4, tw-animate-css, class-variance-authority |
| UI primitives | Radix UI, Lucide icons |
| Animation | GSAP |
| Theming | next-themes |
| Tooling | ESLint, GitHub Actions CI |

## Getting Started

### Prerequisites

- Node.js 22.13 or newer
- npm

### Installation

```bash
git clone https://github.com/RithyBondeth/Apsara-Agentic-Web.git
cd Apsara-Agentic-Web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

Run `npm run lint` and `npm run build` before shipping changes.

## Project Structure

```text
Apsara-Agentic-Web/
├── app/
│   ├── (landing)/        # capabilities, install, private-alpha, product, workflow
│   ├── (product)/chat/   # Chat route
│   ├── fonts/            # Self-hosted Noto Sans Khmer and Press Start 2P
│   ├── globals.css       # Shared Makor brand tokens
│   └── landing.css       # Landing-page refinements
├── components/
│   ├── landing/          # Hero, features, showcase, install, footer, ornaments
│   └── ui/               # Shared UI primitives
├── language/             # English and Khmer landing copy
├── public/assets/makor/  # Makor mascot sprite data
└── utils/                # Routes and locale helpers
```

## Related Repositories

- [Apsara-Agentic-Cli](https://github.com/RithyBondeth/Apsara-Agentic-Cli): the Apsara Agentic coding-agent CLI

## Author

**Rithy Bondeth** — Full Stack Developer & AI Engineer

[![Portfolio](https://img.shields.io/badge/Portfolio-0A0A0A?style=for-the-badge&logo=vercel&logoColor=white)](https://bondeth.dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/RithyBondeth)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rithy-bondeth-484073282/)

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for details.

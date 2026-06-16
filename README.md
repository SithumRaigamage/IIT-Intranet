<h1 align="center">🎓 IIT Intranet Portal</h1>

<p align="center">
  A modern, full-featured intranet portal for the Informatics Institute of Technology (IIT), built with Next.js 15 and a sleek glassmorphic UI.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn%2Fui-latest-black?style=for-the-badge" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

---

## ✨ Features

- 📋 **Program Browser** — View UG/PG degree programs with full details
- 🧭 **Sidebar Navigation** — Collapsible, mobile-responsive navigation
- 🌙 **Dark / Light Mode** — System-aware theme switching via `next-themes`
- 📊 **Data Tables** — Sortable, filterable tables with shadcn/ui
- 🔐 **MongoDB Integration** — Server-side data fetching with Mongoose
- ⚡ **App Router** — Uses Next.js 15 App Router with React Server Components
- 🎨 **Glassmorphism UI** — Premium frosted-glass aesthetic with custom components

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 + shadcn/ui |
| Database | MongoDB (via Mongoose) |
| Icons | Lucide React |
| Theme | next-themes |

---

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Dashboard home
│   └── programs/
│       └── ug/page.tsx    # UG programs listing
├── components/
│   ├── layout/
│   │   └── AppSidebar.tsx # Sidebar navigation
│   ├── ui/                # shadcn/ui components
│   └── theme-provider.tsx
├── hooks/
│   └── use-mobile.ts
└── lib/
    ├── mongodb.ts          # DB connection
    └── utils.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB connection string (MongoDB Atlas recommended)

### Setup

```bash
# Clone the repo
git clone https://github.com/SithumRaigamage/IIT-Intranet.git
cd IIT-Intranet

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with your values

# Run the dev server
npm run dev
```

App runs at **http://localhost:3000**

---

## 🔐 Environment Variables

Create a `.env.local` file in the root:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>
```

---

## 🧞 Commands

| Command | Action |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📜 License

MIT © [Sithum Raigamage](https://github.com/SithumRaigamage)

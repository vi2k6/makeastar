# Make a Star 🌟

A beautiful, interactive celestial application where users can submit their wishes and see them transformed into stars in a magical night sky.

![Application Screenshot](https://raw.githubusercontent.com/username/repo/main/screenshot.png) <!-- Replace with your actual screenshot path after uploading to GitHub -->

## ✨ Features

- **Celestial Wish-Making**: Submit your heart's desires and watch them join a constellation of dreams.
- **Interactive Night Sky**: A dynamic StarField that responds to your wishes with twinkling animations.
- **Santa's Sleigh Animation**: A festive touch with a flying Santa sleigh crossing the horizon.
- **Real-time Updates**: Instant visual feedback as new wishes are added to the cosmic tapestry.
- **Modern Responsive Design**: Fully optimized for both desktop and mobile viewing.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Routing**: [Wouter](https://github.com/molefrog/wouter)

### Backend
- **Server**: [Express.js](https://expressjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team/)
- **Validation**: [Zod](https://zod.dev/)

### Tooling & Hosting
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Deployment**: [Replit](https://replit.com/) (Autoscale Deployment)
- **Language**: TypeScript throughout the entire stack

## 🚀 Getting Started

### Prerequisites
- Node.js (v20 or higher)
- PostgreSQL database

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vi2k6/makeastar.git
   cd makeastar
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env` file (or set them in your environment):
   ```env
   DATABASE_URL=YCKchjcKGCTUkccGUVCTYUFtTYHUVUVhYvhYyVHvGCtfuvYTFc
   ```

4. **Push the Database Schema**:
   ```bash
   npm run db:push
   ```

5. **Start the Development Server**:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```text
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # Reusable UI and layout components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utility functions and API clients
│   │   └── pages/       # Page-level components
├── server/              # Express backend
│   ├── routes.ts        # API endpoint definitions
│   └── storage.ts       # Database abstraction layer
├── shared/              # Shared types and Zod schemas
│   └── schema.ts        # Database schema and Zod validation
└── script/              # Build and deployment scripts
```
## ❤️ Made By Team COSMIC

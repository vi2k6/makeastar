# Make a Star 🌟

## Overview

Make a Star is an interactive celestial wish-making application where users submit wishes that transform into stars in a magical night sky. The app features a beautiful animated star field, a central glowing main star, periodic Santa sleigh animations, and a wish submission form that provides visual feedback when wishes are submitted.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query v5 for server state and data fetching
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn UI (built on Radix UI primitives) with New York style variant
- **Animations**: Framer Motion for complex star, sleigh, and form animations
- **Form Handling**: React Hook Form with Zod resolver for validation

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Feature-specific components in `client/src/components/`
- Custom hooks in `client/src/hooks/`
- Shared utilities in `client/src/lib/`

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript (ES modules)
- **API Pattern**: RESTful endpoints defined in `shared/routes.ts`
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod schemas shared between frontend and backend via `shared/schema.ts`

The server structure:
- `server/index.ts` - Express app setup and middleware
- `server/routes.ts` - API route handlers
- `server/storage.ts` - Database abstraction layer
- `server/db.ts` - Database connection pool
- `server/vite.ts` - Vite dev server integration
- `server/static.ts` - Production static file serving

### Shared Code
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts` - Drizzle table definitions and Zod validation schemas
- `routes.ts` - API route definitions with input/output types

### Build System
- **Dev**: Vite dev server with HMR proxied through Express
- **Production**: Vite builds frontend to `dist/public/`, esbuild bundles server to `dist/index.cjs`
- **Build Script**: Custom `script/build.ts` handles both frontend and backend builds

### Database Schema
Single table design:
- `wishes` table: `id` (serial), `content` (text), `createdAt` (timestamp)

### API Structure
- `POST /api/wishes` - Create a new wish
  - Input: `{ content: string }`
  - Response: Created wish object

## External Dependencies

### Database
- **PostgreSQL**: Primary database, connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema management with `drizzle-kit push` for migrations

### Frontend Libraries
- **Radix UI**: Accessible component primitives (dialog, toast, tooltip, etc.)
- **Framer Motion**: Animation library for star and sleigh effects
- **TanStack Query**: Async state management and data fetching
- **Embla Carousel**: Carousel component support
- **Recharts**: Chart components (available but not currently used)

### Fonts
- Google Fonts: Cinzel (display), Great Vibes (script), Quicksand (body)

### Development Tools
- **Vite**: Frontend bundler with React plugin
- **esbuild**: Server bundler for production
- **Replit Plugins**: Dev banner, cartographer, and runtime error overlay for Replit environment

### Deployment
- Configured for Replit Autoscale Deployment
- Production server serves static files from `dist/public/`
- Falls back to `index.html` for client-side routing
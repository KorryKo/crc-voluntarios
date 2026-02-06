# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Dog shelter volunteer organization website (CRC Voluntarios) for Santiago, Chile. All UI text is in Spanish (es-CL locale). Built to facilitate dog adoptions and recruit volunteers.

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript** (strict mode)
- **Tailwind CSS 4** via PostCSS plugin
- **Supabase** for PostgreSQL database and file storage
- **lucide-react** for icons
- Custom local font: Nunito Sans (variable)

## Commands

```bash
npm run dev      # Development server (localhost:3000)
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## Environment Variables

Required in `.env.local`:
```
SUPABASE_URL=<supabase-project-url>
SUPABASE_ANON_KEY=<supabase-anon-key>
```

## Architecture

### Routing (App Router)

- `/` — Home page with dog listings and adoption rules
- `/voluntariado` — Volunteer recruitment page
- `/sobre-nosotros` — About us with history and photo gallery

### Data Flow

- **Server-first**: Pages fetch data server-side via `lib/dogs.ts` and `lib/volunteers.ts` using the Supabase client (`lib/supabase.ts`)
- **No API routes**: All data access goes directly through Supabase client
- **No client-side fetching**: Data is passed from Server Components to Client Components as props
- All pages use `export const revalidate = 0` (no caching, always fresh data)

### Client Components

Only these components use `"use client"` (for interactivity):
- `DogsSection` — Filter state (disponible/adoptado)
- `Header` — Scroll detection, mobile menu toggle
- `GalleryCarousel` — Carousel autoplay, fullscreen lightbox
- `WhatsAppButton` — Scroll-based visibility

### Database Schema

**`dogs` table** with fields: `id`, `nombre`, `fecha_nacimiento` (date), `sexo` (macho/hembra), `tamano` (pequeño/mediano/grande), `foto`, `descripcion`, `estado` (disponible/adoptado), `created_at`, `updated_at`

**Storage buckets**: `dog-photos`, `volunteer-photos`

Migrations live in `supabase/migrations/`.

### Types

Domain types are defined in `types/index.ts`: `Dog`, `EstadoPerro`, `Sexo`, `Tamaño`.

### Styling

- Tailwind CSS 4 with custom CSS variables in `globals.css`
- Brand color: orange (#F97316 as `--color-secondary-500`)
- Accent: sky blue (#0EA5E9)
- Background: warm white (#FFFBF7)
- Custom `blob` and `float` keyframe animations for hero sections

### SEO

Every page includes comprehensive metadata, Open Graph tags, canonical URLs, and JSON-LD structured data. Dynamic `sitemap.ts` and `robots.ts` are in the app root.

### Image Handling

Remote images served from Supabase storage. `next.config.ts` has the Supabase hostname configured for `next/image` optimization. Path alias `@/*` maps to the project root.

## Planned Work

- Admin panel with Google OAuth and email-whitelist-based roles (see `ROADMAP-ADMIN.md`)
- Dog CRUD operations via Server Actions

# hono-vercel-server

A production-ready **Hono + TypeScript** backend deployed on Vercel with zero-configuration.

## Stack

| Layer         | Choice                        |
|---------------|-------------------------------|
| Framework     | Hono v4                       |
| Language      | TypeScript 5.8 (strict)       |
| Runtime       | Bun (dev) / Node.js 20 (prod) |
| Deploy        | Vercel (zero-config)          |
| Validation    | Zod                           |
| Path aliases  | tsc-alias (post-compile)      |

## Quick start

```bash
# Install
bun install

# Dev (requires Vercel CLI)
bun run dev

# Type check
bun run type-check

# Build
bun run build
```

## Deploy

```bash
# Install Vercel CLI once
bun add -g vercel

# First deploy
vercel

# Subsequent deploys
vercel --prod
```

## Project structure

```
src/
├── app/
│   └── api/
│       ├── health.route.ts      # GET /health
│       └── health.service.ts    # Business logic
├── packages/
│   ├── env/
│   │   └── app.env.ts           # Zod-validated env
│   ├── schemas/
│   │   └── health.schema.ts     # Zod response types
│   └── utils/
│       └── response.ts          # ok() / err() helpers
├── types/
│   └── global.d.ts              # Hono context variable types
└── index.ts                     # App entry — default export for Vercel
```

## Path aliases

All aliases resolve at compile time via **tsc-alias** (zero runtime cost):

| Alias          | Resolves to   |
|----------------|---------------|
| `@/*`          | `src/*`       |
| `@app/*`       | `src/app/*`   |
| `@packages/*`  | `src/packages/*` |
| `@types/*`     | `src/types/*` |

## Adding a new route

1. Create `src/packages/schemas/[resource].schema.ts` — Zod schema
2. Create `src/app/api/[resource].service.ts` — business logic
3. Create `src/app/api/[resource].route.ts` — Hono router
4. Register in `src/index.ts`: `app.route('/resource', resourceRoute)`

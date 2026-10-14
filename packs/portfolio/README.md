# Portfolio pack

A static personal site: Next.js, TypeScript, CSS modules. No database in v1.

## Before you edit code

1. Finish shared intake if you have not already (`../../INTAKE.md`).
2. Work through **`docs/01-content.md`** (your name, work, projects).
3. Pick a theme in **`docs/02-theme.md`**.

## Local setup

```cmd
npm install
npm run dev
```

Open http://localhost:3000

Build gate:

```cmd
npm run build
```

## Project layout

| Path | Purpose |
|------|---------|
| `content/site.ts` | All copy (edit here first) |
| `app/` | Pages and routes |
| `app/globals.css` | Theme tokens (colors, fonts) |
| `styles/shared.module.css` | Layout patterns |

## AI assistants

When helping the user, read **`../../AI-INSTRUCTIONS.md`**. Do not invent employers or dates. Copy from `content/site.example.ts` to `content/site.ts` if starting fresh.

## Docs in this pack

1. `docs/01-content.md`
2. `docs/02-theme.md`
3. `docs/03-build-and-run.md`
4. `docs/04-deploy.md`

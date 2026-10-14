# Stack in plain English

The starter packs use a common modern web stack. None of these require you to become a full-time programmer. You need a **mental map** so logs and file names make sense.

Your AI should explain terms like these **when they first appear**, using this doc as reference.

## The whole picture

```text
Browser (visitor)
    ↓
Pages built with React (inside Next.js)
    ↓
Optional: server routes / server logic (Next.js)
    ↓
Optional: Supabase (login + Postgres database + realtime)
    ↓
Hosted on Vercel (serves the built site)
```

Portfolio pack v1 stops before Supabase. Supabase pack adds the database layer.

## TypeScript

**What it is:** JavaScript with types (labels for what shape data should have).

**Why people use it:** Catches mistakes before deploy (wrong field names, missing props).

**What you do:** Edit `.ts` and `.tsx` files. When build fails, the error often names a type problem.

**Analogy:** Spell-check and form validation for code.

## JavaScript

**What it is:** The language browsers and Node understand.

**Relationship:** TypeScript compiles down to JavaScript for running.

## React

**What it is:** A library for building user interfaces from **components** (reusable pieces of UI).

**What you see:** Buttons, pages, forms built as components in `.tsx` files.

**Analogy:** LEGO blocks for the screen. Each block can have props (inputs).

## Next.js

**What it is:** A framework on top of React for **websites and web apps**.

**What it adds:** File-based routes (`app/about/page.tsx` → `/about`), server rendering options, build pipeline.

**Portfolio pack:** Next.js 16 App Router, TypeScript, static content in `content/site.ts`.

**Analogy:** React + house blueprint (routing, production build).

## Node.js

**What it is:** JavaScript runtime on your **computer** (not in the visitor's browser).

**Why you need it:** Runs `npm install`, `npm run dev`, and `npm run build`.

**Analogy:** The engine that powers the toolbox on your laptop.

## npm

**What it is:** Package manager for Node. Reads `package.json` and installs dependencies into `node_modules/`.

**You touch:** `package.json` rarely; your AI edits it when adding libraries.

## HTML and CSS

| Piece | Role |
|-------|------|
| **HTML** | Structure (headings, links, landmarks) |
| **CSS** | Look (colors, spacing, fonts) |

Next.js/React generate HTML. Portfolio pack uses **CSS modules** and **`globals.css`** variables for themes.

## SQL

**What it is:** Language for talking to relational databases (tables, rows, columns).

**Where you see it:** Supabase SQL Editor, migration files, RLS policies.

**Core ideas:**

- **Table** = spreadsheet name
- **Row** = one record
- **Column** = field (email, title, user_id)
- **SELECT** = read
- **INSERT** = add row

**Analogy:** SQL is how you ask the database questions and give it instructions.

## PostgreSQL (Postgres)

**What it is:** A serious open-source database. Supabase uses Postgres under the hood.

**You rarely install Postgres yourself** when using Supabase cloud.

## Supabase

**What it is:** Hosted backend service: Postgres database, authentication, file storage, realtime, dashboard.

**Pieces beginners use first:**

| Supabase feature | Plain English |
|------------------|---------------|
| **Auth** | Sign up, sign in, sessions |
| **Database** | Tables for your app data |
| **RLS** | Rules: "this user can only see their rows" |
| **Dashboard** | Web UI to manage project |
| **Anon key** | Public-ish key for browser (safe only with RLS) |
| **Service role key** | Admin key. Server only. Never in frontend or git |

## REST / HTTP / API

**HTTP:** How browsers and servers send requests (GET page, POST form).

**API:** Endpoints that return data (often JSON). Next.js can define route handlers; Supabase client talks to Supabase's API.

**JSON:** Text format for structured data `{ "title": "Hello" }`.

## Environment variables

Config values outside source code, often secrets.

Examples:

- `NEXT_PUBLIC_SUPABASE_URL` (OK in browser)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (OK in browser with RLS)
- Service role keys (never expose)

Vercel has a UI to set the same vars for production.

## Git vs GitHub (short)

See **`docs/07-git-local-github-vercel.md`**. Git tracks changes locally; GitHub stores copies; Vercel builds from GitHub.

## How your AI should teach

When introducing a term:

1. One sentence definition
2. Where you will see it in **this** project (file or dashboard)
3. What goes wrong if it is misconfigured (one example)

Avoid jargon chains ("hydrate the SSR boundary") unless the user asks for depth.

## Next

- **`docs/glossary.md`** quick lookup
- Portfolio: **`packs/portfolio/README.md`**
- Supabase: **`packs/supabase-intro/README.md`**

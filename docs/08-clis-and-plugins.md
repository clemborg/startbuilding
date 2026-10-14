# CLIs and editor plugins

**CLI** means "command line interface": a program you run in Terminal or PowerShell by typing its name.

You do not need every tool below. Your AI should recommend **one path at a time** and explain what problem it solves.

## npm and npx (Node)

| Tool | What it does for you |
|------|----------------------|
| **npm** | Installs JavaScript libraries and runs scripts like `dev` and `build` |
| **npx** | Runs a package once without installing it globally (example: trying a scaffolding tool) |

Portfolio pack scripts:

```cmd
npm install
npm run dev
npm run build
```

On Windows PowerShell, if `npm` fails, try **`npm.cmd`**.

**When your AI mentions npm:** it is managing dependencies and running the Next.js toolchain, not "the app itself."

## Git (CLI)

Git ships as a command: `git clone`, `git commit`, `git push`.

Alternative for beginners: **GitHub Desktop** (buttons instead of commands). Same concepts: commit = snapshot, push = upload to GitHub.

Your AI can use either; ask for Desktop if terminal feels hostile.

## GitHub CLI (`gh`)

**What it is:** Official GitHub tool in the terminal.

**What it does for you:**

- Log in to GitHub from the command line
- Create repositories (`gh repo create`)
- Open pull requests, view issues (later)

**When it helps:** You prefer terminal over clicking GitHub.com for repo setup and auth.

**Install:** https://cli.github.com/

**Typical first steps:**

```cmd
gh auth login
gh repo create my-portfolio --public --source=. --remote=origin --push
```

Your AI should explain each flag if it suggests this. It is optional; browser + `git remote add` works fine (see `docs/02-github-first-repo.md`).

## Supabase CLI

**What it is:** Command-line tool for Supabase projects.

**What it does for you:**

- Link a local folder to a Supabase project
- Apply **migrations** (SQL changes) from files in your repo instead of copy-pasting into the SQL Editor
- Run Supabase locally in advanced setups (optional later)

**Why it matters:** Without CLI, you often repeat manual steps in the Supabase Dashboard SQL Editor. With migrations in git, changes are **reviewable**, **repeatable**, and your AI can edit SQL files safely.

**Install:** https://supabase.com/docs/guides/cli

**Typical flow (intro level):**

```cmd
supabase login
supabase link --project-ref YOUR_PROJECT_REF
supabase db push
```

Exact commands change with Supabase versions. Your AI should use current docs.

## Supabase in your editor (plugins / extensions)

These are **not** the same as the CLI. They live inside VS Code, Cursor, or similar.

| Extension (common name) | What it does for you |
|-------------------------|----------------------|
| **Supabase** (official) | Browse tables, run queries, sometimes manage project from the sidebar |
| **PostgreSQL** tools | Connect to the database for inspection (advanced) |

**What the Supabase extension helps with:**

- See tables and columns without opening the browser dashboard for every check
- Run SQL against your project (still respect RLS when using user-scoped keys)
- Reduce "open dashboard → SQL Editor → paste → run" loops

**What it does not replace:**

- You still need a Supabase project in the cloud (or local stack for advanced dev)
- You still need **RLS policies** for production safety
- It does not remove the need to understand auth and env vars

Your AI should say **why** it suggests an extension: usually **visibility and fewer manual dashboard steps**, not magic.

## Vercel CLI (optional)

**What it is:** Deploy or manage Vercel from the terminal.

**When beginners need it:** Often **never**. Importing the GitHub repo on vercel.com is enough.

**When it helps:** Preview deploys from CI, teams, or scripting.

```cmd
npx vercel
```

## AI coding tools (Cursor, Copilot, etc.)

These are **editors or plugins** that talk to models. They are not part of your deployed site.

| Piece | Role |
|-------|------|
| Your repo | Source of truth |
| AI tool | Helps edit and explain |
| GitHub | Backup and deploy trigger |
| Vercel | Hosting |

## How your AI should introduce tools

For each suggestion, cover:

1. **Name** of the tool
2. **Problem** it removes (example: "manual SQL paste in dashboard")
3. **What you still do yourself** (confirm migrations, never commit secrets)
4. **Optional or required** for your path

## Next

- **`docs/09-stack-plain-english.md`** for React, TypeScript, Supabase, SQL
- Supabase pack: **`packs/supabase-intro/docs/01-supabase-project.md`**

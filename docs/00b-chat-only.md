# Chat-only mode

Use this when you do not have a project folder on disk yet.

## Easiest start

Paste **https://github.com/clemborg/startbuilding** into your AI and ask: *"Help me get started with this starter pack."*

Or upload the **Download ZIP** from GitHub.

## What to upload if the AI needs files

The whole repo folder, or at minimum README plus the pack you care about (`packs/portfolio/` or `packs/supabase-intro/`).

For portfolio content work, also upload:

- `packs/portfolio/content/site.example.ts`

## How it works

1. The AI runs intake and picks a path.
2. You paste generated files back into a folder on your computer when you create one.
3. For deploy and GitHub, you will almost always need local mode eventually.

## Limitation

You cannot run `npm run build` inside a chat. When you are ready, install Node, copy your files into `packs/portfolio`, and continue with **`packs/portfolio/docs/03-build-and-run.md`**.

## Next

Re-run intake if needed, then continue the path from **`PATHS.md`**.

# Chat-only mode

Use this when you do not have a project folder on disk yet.

## What to upload to your AI

Minimum:

- `AI-INSTRUCTIONS.md`
- `INTAKE.md`
- `PATHS.md`
- `PROMPT.txt` (optional if you paste its text instead)
- The README for your chosen pack (`packs/portfolio/README.md` or `packs/supabase-intro/README.md`)

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

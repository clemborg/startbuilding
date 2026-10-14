# When something breaks

## Build failed locally

1. Read the **last 20 lines** of the error
2. Common fixes: run `npm install` again, delete `.next` folder, fix TypeScript error in the file named
3. On Windows use `npm.cmd run build`

## Vercel build failed

1. Open the failed deployment log on Vercel
2. Compare to local: does `npm run build` pass on your machine?
3. Check Node version on Vercel (Settings) vs local LTS

## Git push rejected

- Authentication: use GitHub Desktop or `gh auth login`
- Unrelated histories: usually means GitHub created a README; merge or recreate repo empty

## Supabase: data visible to wrong users

Stop. Review RLS policies in **`packs/supabase-intro/docs/02-auth-and-rls.md`**. Do not ship without RLS on user tables.

## AI invented résumé facts

Revert content changes. Only use employers and dates the user confirmed.

## Still stuck

Open an issue on https://github.com/clemborg/startbuilding or ask your AI with the exact error text.

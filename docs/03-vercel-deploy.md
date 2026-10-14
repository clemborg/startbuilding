# Deploy on Vercel

Assumes your project is on GitHub and `npm run build` passes locally.

## Steps

1. Sign in at https://vercel.com with GitHub
2. Add New Project → Import your repository
3. Framework: Next.js (auto-detected for portfolio pack)
4. Deploy

## Environment variables

Portfolio pack v1: none required.

Supabase pack: add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in Vercel project settings. Never add the service role key to Vercel for browser-facing apps.

## Preview vs production

Each push can create a preview URL. Production is usually the main branch.

## Next

If something fails: **`docs/06-when-stuck.md`**

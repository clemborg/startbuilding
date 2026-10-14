# Paths after intake

**For AI assistants:** Match the user's answers to one row below. Announce the pack folder and the ordered doc list. Do not skip docs unless the user explicitly opts out of a step (e.g. defers Vercel).

Legend for doc IDs:

- **SB-00** = `docs/00-prerequisites.md`
- **SB-01** = `docs/01-clone-or-download.md`
- **SB-01b** = `docs/00b-chat-only.md`
- **SB-02** = `docs/02-github-first-repo.md`
- **SB-03** = `docs/03-vercel-deploy.md`
- **SB-06** = `docs/06-when-stuck.md`
- **SB-07** = `docs/07-git-local-github-vercel.md`
- **SB-08** = `docs/08-clis-and-plugins.md`
- **SB-09** = `docs/09-stack-plain-english.md`
- **PF-00** = `packs/portfolio/README.md`
- **PF-01** = `packs/portfolio/docs/01-content.md`
- **PF-02** = `packs/portfolio/docs/02-theme.md`
- **PF-03** = `packs/portfolio/docs/03-build-and-run.md`
- **PF-04** = `packs/portfolio/docs/04-deploy.md`
- **SU-00** = `packs/supabase-intro/README.md`
- **SU-01** = `packs/supabase-intro/docs/01-supabase-project.md`
- **SU-02** = `packs/supabase-intro/docs/02-auth-and-rls.md`
- **SU-03** = `packs/supabase-intro/docs/03-wire-up-nextjs.md`

---

## Personal website (goal A)

| Work mode | GitHub | Public URL | Doc order |
|-----------|--------|------------|-----------|
| Local | Yes | Yes | SB-00 → SB-07 → SB-09 → SB-01 → SB-08 (skim) → PF-00 → PF-01 → PF-02 → PF-03 → SB-02 → PF-04 → SB-03 → SB-06 |
| Local | Yes | No | SB-00 → SB-07 → SB-09 → SB-01 → PF-00 → PF-01 → PF-02 → PF-03 → SB-02 → SB-06 |
| Local | Need account | Yes | SB-00 → SB-07 → SB-09 → SB-01 → SB-08 (skim) → PF-00 → PF-01 → PF-02 → PF-03 → SB-02 → PF-04 → SB-03 → SB-06 |
| Chat only | Any | Any | SB-01b → PF-00 → PF-01 (paste workflow) → SB-06 when blocked |
| Not sure (C) | Any | Any | SB-00 → SB-07 → SB-09 → `docs/glossary.md` → redo intake with goal A or B |

---

## App with accounts (goal B)

Prerequisite: user should understand a static site OR accept a steeper learning curve.

| Work mode | GitHub | Public URL | Doc order |
|-----------|--------|------------|-----------|
| Local | Yes | Yes | SB-00 → SB-07 → SB-09 → SB-01 → SB-08 → SU-00 → SU-01 → SU-02 → SU-03 → SB-02 → SB-03 → SB-06 |
| Local | Yes | No | SB-00 → SB-07 → SB-09 → SB-01 → SB-08 → SU-00 → SU-01 → SU-02 → SU-03 → SB-02 → SB-06 |
| Chat only | Any | Any | SB-01b → SU-00 → SU-01 (conceptual) → SB-06; recommend switching to local for SU-02 onward |

---

## Not sure (goal C)

1. `docs/glossary.md`
2. Re-run **`INTAKE.md`** question 1 only, then apply a path above.

---

## Pack folders

| Pack | Folder |
|------|--------|
| Personal site | `packs/portfolio/` |
| Accounts + database intro | `packs/supabase-intro/` |

# Git, local files, GitHub, and Vercel

This doc explains how the pieces fit together. Your AI assistant should walk through it in plain language and pause for questions.

## Three different things people confuse

| Thing | What it is | Where it lives |
|-------|------------|----------------|
| **Files on your computer** | The folder you edit (pages, content, config) | Your laptop |
| **Git** | A tool that tracks changes to that folder over time | On your computer (and in the cloud copy) |
| **GitHub** | A website that stores a copy of your Git history online | github.com |

Git is not GitHub. Git is the notebook. GitHub is the shared filing cabinet in the cloud.

## Typical flow (portfolio or app)

```text
1. Clone or copy a starter  →  folder on your computer
2. Edit files locally         →  you + AI change content and code
3. git commit                 →  save a snapshot on your machine
4. git push                   →  upload snapshots to GitHub
5. Vercel watches GitHub      →  builds and hosts a public URL
```

You edit **locally**. GitHub holds the **source**. Vercel serves the **built site** to visitors.

## Clone

**Clone** means: download a full copy of a repository from GitHub (or similar) into a folder on your disk, including Git history.

```cmd
git clone https://github.com/clemborg/startbuilding.git
```

After clone, you have a real folder. Open it in an editor or point your AI at it.

## Your own project repo

The **startbuilding** repo is the guide. **Your site** should usually live in a **separate** GitHub repository you create (see `docs/02-github-first-repo.md`).

Reason: your personal changes should not mix with the shared starter guide unless you are contributing improvements back to startbuilding.

## Commit and push (plain language)

| Command idea | Plain English |
|--------------|----------------|
| `git add` | Mark which file changes belong in the next snapshot |
| `git commit` | Save that snapshot with a short message |
| `git push` | Send new snapshots to GitHub |

If you never push, GitHub (and Vercel) never see your updates.

## Branches (minimal)

**main** is usually the primary line of work. Vercel often deploys **main** to your production URL. Preview deploys can use other branches. For beginners, stay on **main** until you understand previews.

## Vercel's role

Vercel does **not** store your source of truth. It:

1. Connects to your GitHub repo
2. Runs `npm install` and `npm run build` on its servers
3. Hosts the output at a URL like `your-project.vercel.app`

When you push to GitHub, Vercel can rebuild automatically.

## Local preview vs public site

| | Local (`npm run dev`) | Public (Vercel) |
|--|------------------------|-----------------|
| Who sees it | You (localhost) | Anyone with the link |
| Needs internet to view | No (after install) | Yes |
| Needs GitHub | No | Yes (typical setup) |
| Good for | Editing and testing | Sharing on a résumé or with friends |

Always run **`npm run build`** locally before you rely on Vercel. If build fails on your machine, deploy will usually fail too.

## Chat-only mode (no folder yet)

You can draft content in chat, but **clone + local edit** is how you run builds and connect Vercel reliably. See `docs/00b-chat-only.md`.

## Next

- Tools that help: **`docs/08-clis-and-plugins.md`**
- Stack vocabulary: **`docs/09-stack-plain-english.md`**
- Create your repo: **`docs/02-github-first-repo.md`**

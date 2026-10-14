# Your first GitHub repository (project code)

Create a **new** repository for **your** site or app, not for the startbuilding guide repo.

## Steps

1. GitHub → New repository
2. Name example: `my-site` or `my-portfolio`
3. Public or private (public is fine for a portfolio)
4. Do **not** add README if you already have local files (avoids merge conflicts)

## Connect local folder

From your project root (e.g. `packs/portfolio` copied to `my-portfolio`):

```cmd
git init -b main
git add -A
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO`.

## If push asks for login

Use GitHub CLI, GitHub Desktop, or a personal access token. Your AI can help with your chosen method.

## Next

Portfolio deploy: **`packs/portfolio/docs/04-deploy.md`** or shared **`docs/03-vercel-deploy.md`**

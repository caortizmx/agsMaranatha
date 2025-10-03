# agsMaranatha

Nuevo dominio del colegio Maranatha Aguascalientes.

## Development setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

> [!NOTE]
> The project targets the Vite 5 toolchain so it can run on the Node 18 runtime that powers the Codex environment. If you are using a newer global Vite installation, rely on the local `npm` scripts to avoid version mismatches.

## GitHub Pages deployment

This repository ships with a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds the Vite project and publishes the generated `dist/` folder to GitHub Pages.

1. **Configure the base path**
   * If the site will live at `https://<user>.github.io/<repo>/`, add a repository variable named `VITE_PUBLIC_BASE_PATH` with the value `/<repo>/` (including leading and trailing slashes).
   * For custom domains (or user/organization Pages sites served from the root), the default `/` base works and no variable is required.
2. **Enable GitHub Pages** by visiting *Settings → Pages* and selecting “GitHub Actions” as the deployment source.
3. **Deploy** by pushing to `main` (or running the workflow manually). The `deploy-pages` action will publish the latest build to the `github-pages` environment.

> [!TIP]
> When the base path changes (e.g., moving from a project page to a custom domain), update the `VITE_PUBLIC_BASE_PATH` variable and redeploy so the router and asset URLs resolve correctly.

## Search indexing and SEO setup

* Update `public/robots.txt` and `public/sitemap.xml` with the final production domain before deploying. The placeholders currently use `https://<your-domain-or-username>.github.io/<your-repo>/`.
* After the first deployment, add the site to [Google Search Console](https://search.google.com/search-console/about). Verification can be completed via DNS (preferred) or by placing the provided HTML verification file in the `public/` directory so it is served at the domain root.
* Submit the sitemap (`https://<domain>/sitemap.xml`) in Search Console once verification succeeds. Google will then crawl the listed routes (`/`, `/nosotros`, `/contacto`, `/oferta-educativa`, `/eventos-especiales`).

## Development setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

> [!NOTE]
> The project targets the Vite 5 toolchain so it can run on the Node 18 runtime that powers the Codex environment. If you are
> using a newer global Vite installation, rely on the local `npm` scripts to avoid version mismatches.
> This repository includes an `.npmrc` file that enables `legacy-peer-deps`. The setting suppresses peer dependency resolution
> conflicts between Vite 7 and `@vitejs/plugin-vue` so the install step can complete without manual flags.

## Public Font Library Recommendation

To complement the refreshed header design, consider using **Google Fonts**, a free and widely trusted font library. It offers an extensive catalog of open-licensed typefaces, easy CDN integration, and performance-focused loading options (such as `display=swap`). Visit [fonts.google.com](https://fonts.google.com) to browse families, generate `<link>` tags, or download font files for self-hosting.

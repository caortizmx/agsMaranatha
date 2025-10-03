# agsMaranatha
Nuevo dominio del colegio Maranatha Aguascalientes

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

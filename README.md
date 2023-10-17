# the website at jesperdalgaard.com 

- https://jesperdalgaard.com

## How does it work?

It's using astro to build a few static pages. Cloudflare is configured to deploy it via this git repository's `main` branch.

- `src/layouts/Layout.astro` is the main HTML on most (all?) pages
- `src/pages` contains either `.astro` or `.md` files. each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## Dev Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

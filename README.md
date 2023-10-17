# the website at jesperdalgaard.com 

- https://jesperdalgaard.com

## How does it work?

It's using astro to build a few static pages.

- The menu is [`src/components/Menu.astro`](https://github.com/oskarrough/jesperdalgaard/blob/main/src/components/Menu.astro)
- The main layout is [`src/layouts/Layout.astro`](https://github.com/oskarrough/jesperdalgaard/blob/main/src/layouts/Layout.astro)
- The pages are inside [`src/pages`](https://github.com/oskarrough/jesperdalgaard/blob/main/src/pages)

Eeach `.astro` or `.md` page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Every time a change is made (git commit), Oskar's Cloudflare account will deploy the website. It takes a little minute.

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

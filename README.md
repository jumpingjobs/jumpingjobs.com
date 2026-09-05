# jumpingjobs.com

Install landing page for [Jumping Jobs](https://github.com/jumpingjobs/jumpingjobs) — a
job-search and resume toolkit for AI coding agents.

Next.js static export, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script              | Does                                          |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Dev server with fast refresh                  |
| `npm run build`     | Static export into `out/`                     |
| `npm run lint`      | ESLint (Next core-web-vitals + TypeScript)    |
| `npm run typecheck` | `tsc --noEmit`                                |

## Design system

The page is a build of the `Install Page.dc.html` artboard from the
[Jumping Jobs design system](https://claude.ai/design/p/5853f345-1256-40f2-889c-1d844aba977a)
in Claude Design.

Tokens live in [`styles/tokens/`](styles/tokens/) and are copied verbatim from the design
system. They are the source of truth: [`app/globals.css`](app/globals.css) only bridges them
into the Tailwind theme, so **edit tokens, never the bridge**. Composite `--type-*` roles are
exposed as `type-h2`-style utilities because CSS's `font` shorthand has no Tailwind
equivalent.

`components/ds/` ports the design system's components; `components/site/` composes the page
from them. `design/` holds the read-only bundle pulled from Claude Design for reference.

Fonts ship with the build via Fontsource (`@fontsource-variable/figtree`,
`@fontsource-variable/jetbrains-mono`) rather than a Google Fonts CDN link. The rabbit mark
is `PiRabbit` from `react-icons/pi`; all other glyphs are Lucide, registered statically in
[`components/ds/Icon.tsx`](components/ds/Icon.tsx).

Dark mode is driven by `data-theme` on `<html>`, set before first paint by an inline script
so a returning dark-theme visitor never sees a flash of the paper theme.

## Deploy

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which
lints, typechecks, builds and publishes `out/` to GitHub Pages.

One-time setup: **Settings → Pages → Source → GitHub Actions**.

The site is served from the apex domain, so [`public/CNAME`](public/CNAME) holds
`jumpingjobs.com` and `basePath` is empty. To serve from
`https://jumpingjobs.github.io/jumpingjobs.com/` instead, delete `public/CNAME` and build
with `NEXT_PUBLIC_BASE_PATH=/jumpingjobs.com`.

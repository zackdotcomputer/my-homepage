# Zack's Homepage

This repo holds the code that runs [my homepage](https://zack.computer).

This is the fourth generation of my homepage. It started as a lightweight Node server serving raw
HTML on Heroku, then became a [React](https://react.dev/) + Bootstrap site on Firebase, then a
[Next.js](https://nextjs.org/) app with an original design on Netlify. This version keeps that
design (with a light polish) and rebuilds the app on [React Router](https://reactrouter.com/)
framework mode, [Vite](https://vite.dev/) and [Tailwind CSS](https://tailwindcss.com/), deployed as
a [Cloudflare Worker](https://developers.cloudflare.com/workers/) with static assets.

This is mostly here so you can see my code, not so you can clone it. It is open source, though, so
feel free to take it and use it as reference or inspiration. Just, like, if you are going to clone
it, change it so you're not me anymore.

## How it's put together

- `app/routes.ts` declares the routes. The conversational site lives under the `conversation`
  layout; the "normcore" plain-HTML version lives under `/normcore`.
- `app/conversation/` is the chat-style homepage. Route modules there are deliberately thin (they
  provide `<head>` metadata and status codes); the layout renders page contents from the registry
  in `pages.tsx` so that every page you've visited stays on screen as the conversation grows.
- `app/contents/` holds the actual copy and resume sections, shared by both versions of the site.
- `workers/app.ts` is the Cloudflare Worker entry. Every static route is prerendered at build time
  and served straight from Cloudflare's asset storage; the Worker only runs for anything else
  (like 404s).

## Working on it

Requires Node 22.22+ and [pnpm](https://pnpm.io/) (the version is pinned in `package.json`, so
`corepack enable` is enough).

```sh
pnpm install
pnpm dev          # local dev server with HMR
pnpm check        # typecheck + lint + format check
pnpm preview      # production build, served locally in the Workers runtime
pnpm deploy       # build and deploy with Wrangler
```

`pnpm cf-typegen` regenerates `worker-configuration.d.ts` after changing `wrangler.jsonc`.

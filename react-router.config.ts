import type { Config } from "@react-router/dev/config";

export default {
  // Server-render on the Worker for anything that isn't prerendered (e.g. 404s)...
  ssr: true,
  // ...but prerender every static route at build time so the real pages are
  // served straight from Cloudflare's static asset storage without invoking
  // the Worker at all.
  prerender: true
} satisfies Config;

import { canonicalUrl, SITEMAP_PATHS } from "~/lib/site";

// Resource route: prerendered to /sitemap.xml at build time.
export function loader() {
  const urls = SITEMAP_PATHS.map((path) => `  <url><loc>${canonicalUrl(path)}</loc></url>`);
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    ""
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" }
  });
}

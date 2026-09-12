import type { MetaDescriptor } from "react-router";
import {
  canonicalUrl,
  SITE_DESCRIPTION,
  SITE_ORIGIN,
  SITE_TITLE,
  SOCIAL,
  TWITTER_HANDLE
} from "./site";

interface PageMetaOptions {
  pageTitle?: string;
  /**
   * Path or URL for the canonical link. Defaults to `pathname`, so pages
   * served from any host resolve to the same URL on the canonical origin.
   */
  canonical?: string;
  /** The current request path, from the route's meta args. */
  pathname?: string;
  /** OpenGraph object type. Defaults to "website". */
  ogType?: "website" | "profile" | "article";
  disallowRobots?: boolean;
}

/**
 * Builds the full set of <head> descriptors for a page: title, description,
 * canonical link, OpenGraph and Twitter card tags.
 */
export function pageMeta({
  pageTitle,
  canonical,
  pathname,
  ogType = "website",
  disallowRobots
}: PageMetaOptions = {}) {
  const title = pageTitle ? `${SITE_TITLE} - ${pageTitle}` : SITE_TITLE;
  const url = canonicalUrl(canonical ?? pathname ?? "/");

  const descriptors: MetaDescriptor[] = [
    { title },
    { name: "description", content: SITE_DESCRIPTION },
    { name: "author", content: SITE_TITLE },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: ogType },
    { property: "og:title", content: pageTitle ?? SITE_TITLE },
    { property: "og:site_name", content: SITE_TITLE },
    { property: "og:url", content: url },
    { property: "og:description", content: SITE_DESCRIPTION },
    { property: "og:locale", content: "en_GB" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: SITE_DESCRIPTION },
    { name: "twitter:site", content: `@${TWITTER_HANDLE}` },
    { name: "twitter:creator", content: `@${TWITTER_HANDLE}` }
  ];

  if (disallowRobots) {
    descriptors.push({ name: "robots", content: "noindex" });
  }

  return descriptors;
}

/** schema.org Person structured data for the homepage. */
export function personJsonLd(): MetaDescriptor {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "Person",
      name: SITE_TITLE,
      url: SITE_ORIGIN,
      jobTitle: "Product Engineer",
      worksFor: { "@type": "Organization", name: "Marker", url: "https://marker.page" },
      description: SITE_DESCRIPTION,
      sameAs: [SOCIAL.github, SOCIAL.bluesky, SOCIAL.twitter, SOCIAL.linkedin]
    }
  };
}

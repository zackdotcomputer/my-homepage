import type { MetaDescriptor } from "react-router";

export const SITE_TITLE = "Zack Sheppard";
export const SITE_DESCRIPTION =
  "Freelance iOS and Web full-stack developer. Come have a chat maybe we can work together.";
export const SITE_ORIGIN = "https://zack.computer";
export const TWITTER_HANDLE = "zackdotcomputer";

interface PageMetaOptions {
  pageTitle?: string;
  /** Path (e.g. "/contact") or full URL for the canonical link. */
  canonical?: string;
  disallowRobots?: boolean;
}

/**
 * Builds the full set of <head> descriptors for a page: title, description,
 * canonical link, OpenGraph and Twitter card tags.
 */
export function pageMeta({ pageTitle, canonical, disallowRobots }: PageMetaOptions = {}) {
  const title = pageTitle ? `${SITE_TITLE} - ${pageTitle}` : SITE_TITLE;
  const canonicalUrl = canonical ? new URL(canonical, SITE_ORIGIN).toString() : undefined;

  const descriptors: MetaDescriptor[] = [
    { title },
    { name: "description", content: SITE_DESCRIPTION },
    { property: "og:type", content: "article" },
    { property: "og:title", content: pageTitle ?? SITE_TITLE },
    { property: "og:site_name", content: SITE_TITLE },
    { property: "og:description", content: SITE_DESCRIPTION },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: SITE_DESCRIPTION },
    { name: "twitter:site", content: TWITTER_HANDLE },
    { name: "twitter:creator", content: TWITTER_HANDLE }
  ];

  if (canonicalUrl) {
    descriptors.push(
      { tagName: "link", rel: "canonical", href: canonicalUrl },
      { property: "og:url", content: canonicalUrl }
    );
  }

  if (disallowRobots) {
    descriptors.push({ name: "robots", content: "noindex" });
  }

  return descriptors;
}

/** Site-wide constants shared by metadata, structured data and the contact page. */

export const SITE_TITLE = "Zack Sheppard";
export const SITE_DESCRIPTION =
  "Freelance iOS and Web full-stack developer. Come have a chat maybe we can work together.";
/** The canonical origin; every page on any other host points back here. */
export const SITE_ORIGIN = "https://zack.computer";

export const SOCIAL = {
  email: "mailto:webcontact@zacksheppard.com",
  github: "https://www.github.com/zackdotcomputer",
  bluesky: "https://bsky.app/profile/zack.computer",
  twitter: "https://www.twitter.com/zackdotcomputer",
  linkedin: "https://www.linkedin.com/in/zacksheppard/"
} as const;

export const TWITTER_HANDLE = "zackdotcomputer";

/** Absolute URL on the canonical origin for a path (or an already-absolute URL). */
export function canonicalUrl(pathOrUrl: string): string {
  const url = new URL(pathOrUrl, SITE_ORIGIN);
  // Normalise trailing slashes so /normcore and /normcore/ share one canonical.
  if (url.pathname.length > 1) {
    url.pathname = url.pathname.replace(/\/+$/, "");
  }
  return url.toString();
}

/** Pages listed in the sitemap: one entry per canonical page. */
export const SITEMAP_PATHS = [
  "/",
  "/contact",
  "/resume/skills",
  "/resume/recent",
  "/resume/freelance",
  "/resume/past",
  "/normcore",
  "/normcore/resume"
] as const;

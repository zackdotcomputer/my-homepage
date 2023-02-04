// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import Head from "next/head";
import { useMemo } from "react";

export enum HeadTagsTitleConcatMode {
  // If there's a page title, use only it. Otherwise, use site title if defined.
  noConcatenation = 0,
  // If both are defined, use page title then site title.
  pageFirst,
  // If both are defined, use site title then page title.
  siteFirst
}

export interface Props {
  // Title and description for this page
  pageTitle?: string;
  siteTitle?: string;
  description?: string;
  titleConcatenationMode?: HeadTagsTitleConcatMode;

  // Icon & image URLs
  faviconUrl?: string;
  imageUrlForTwitter?: string;
  imageUrlForFacebook?: string;
  manifestUrl?: string;

  // A rel-canonical URL to link back to
  canonicalUrl?: string;

  // A twitter handle to link to if shared on Twitter
  twitterHandle?: string;

  // Whether to include a robots disallow tag
  disallowRobots?: boolean;
}

export default function HeadTags({
  pageTitle,
  siteTitle,
  description,
  titleConcatenationMode,
  faviconUrl,
  imageUrlForFacebook,
  imageUrlForTwitter,
  manifestUrl,
  canonicalUrl,
  twitterHandle,
  disallowRobots
}: Props) {
  const computedPageTitle: string = useMemo(() => {
    if (pageTitle && siteTitle) {
      switch (titleConcatenationMode) {
        case HeadTagsTitleConcatMode.pageFirst:
          return `${pageTitle} - ${siteTitle}`;
        case HeadTagsTitleConcatMode.siteFirst:
          return `${siteTitle} - ${pageTitle}`;
        // case HeadTagsTitleConcatMode.noConcatenation:
        default:
          return pageTitle;
      }
    } else if (pageTitle) {
      return pageTitle;
    } else if (siteTitle) {
      return siteTitle;
    }

    return "";
  }, [pageTitle, siteTitle, titleConcatenationMode]);

  return (
    <Head>
      {/* HTML meta Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <title>{computedPageTitle}</title>
      {disallowRobots && <meta name="robots" content="noindex" />}
      {faviconUrl && <link rel="icon" type="image/png" href={faviconUrl} />}
      {manifestUrl && <link rel="manifest" href={manifestUrl} />}
      {description && <meta name="description" content={description} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Facebook OpenGraph Tags */}
      <meta property="og:type" content="article" />
      {pageTitle && <meta property="og:title" content={pageTitle} />}
      {siteTitle && <meta property="og:site_name" content={siteTitle} />}
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
      {description && <meta property="og:description" content={description} />}
      {imageUrlForFacebook && <meta property="og:image" content={imageUrlForFacebook} />}
      {/* Twitter Card Tags */}
      <meta name="twitter:title" content={computedPageTitle} />
      {imageUrlForTwitter && <meta name="twitter:card" content="summary_large_image" />}
      {imageUrlForTwitter && <meta name="twitter:image:src" content={imageUrlForTwitter} />}
      {!imageUrlForTwitter && <meta name="twitter:card" content="summary" />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
      {description && <meta name="twitter:description" content={description} />}
    </Head>
  );
}

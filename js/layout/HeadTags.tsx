// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
import Head from "next/head";

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

export default class HeadTags extends React.PureComponent<Props> {
  _getPageTitle(): string {
    if (this.props.pageTitle && this.props.siteTitle) {
      switch (this.props.titleConcatenationMode) {
        case HeadTagsTitleConcatMode.pageFirst:
          return `${this.props.pageTitle} - ${this.props.siteTitle}`;
        case HeadTagsTitleConcatMode.siteFirst:
          return `${this.props.siteTitle} - ${this.props.pageTitle}`;
        // case HeadTagsTitleConcatMode.noConcatenation:
        default:
          return this.props.pageTitle;
      }
    } else if (this.props.pageTitle) {
      return this.props.pageTitle;
    } else if (this.props.siteTitle) {
      return this.props.siteTitle;
    }

    return "";
  }

  render() {
    return (
      <Head>
        {/* HTML meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>{this._getPageTitle()}</title>
        {this.props.disallowRobots && <meta name="robots" content="noindex" />}
        {this.props.faviconUrl && (
          <link rel="icon" type="image/png" href={this.props.faviconUrl} />
        )}
        {this.props.manifestUrl && (
          <link rel="manifest" href={this.props.manifestUrl} />
        )}
        {this.props.description && (
          <meta name="description" content={this.props.description} />
        )}
        {this.props.canonicalUrl && (
          <link rel="canonical" href={this.props.canonicalUrl} />
        )}
        {/* Facebook OpenGraph Tags */}
        <meta property="og:type" content="article" />
        {this.props.pageTitle && (
          <meta property="og:title" content={this.props.pageTitle} />
        )}
        {this.props.siteTitle && (
          <meta property="og:site_name" content={this.props.siteTitle} />
        )}
        {this.props.canonicalUrl && (
          <meta property="og:url" content={this.props.canonicalUrl} />
        )}
        {this.props.description && (
          <meta property="og:description" content={this.props.description} />
        )}
        {this.props.imageUrlForFacebook && (
          <meta property="og:image" content={this.props.imageUrlForFacebook} />
        )}
        {/* Twitter Card Tags */}
        <meta name="twitter:title" content={this._getPageTitle()} />
        {this.props.imageUrlForTwitter && (
          <meta name="twitter:card" content="summary_large_image" />
        )}
        {this.props.imageUrlForTwitter && (
          <meta
            name="twitter:image:src"
            content={this.props.imageUrlForTwitter}
          />
        )}
        {!this.props.imageUrlForTwitter && (
          <meta name="twitter:card" content="summary" />
        )}
        {this.props.twitterHandle && (
          <meta name="twitter:site" content={this.props.twitterHandle} />
        )}
        {this.props.twitterHandle && (
          <meta name="twitter:creator" content={this.props.twitterHandle} />
        )}
        {this.props.description && (
          <meta name="twitter:description" content={this.props.description} />
        )}
      </Head>
    );
  }
}

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

  _twitterTags(): JSX.Element[] {
    let results = [
      <meta name="twitter:title" content={this._getPageTitle()} />
    ];

    if (this.props.imageUrlForTwitter) {
      results.push(<meta name="twitter:card" content="summary_large_image" />);
      results.push(
        <meta
          name="twitter:image:src"
          content={this.props.imageUrlForTwitter}
        />
      );
    } else {
      results.push(<meta name="twitter:card" content="summary" />);
    }

    if (this.props.twitterHandle) {
      results.push(
        <meta name="twitter:site" content={this.props.twitterHandle} />
      );
      results.push(
        <meta name="twitter:creator" content={this.props.twitterHandle} />
      );
    }

    if (this.props.description) {
      results.push(
        <meta name="twitter:description" content={this.props.description} />
      );
    }

    return results;
  }

  _fbTags(): JSX.Element[] {
    let results = [<meta property="og:type" content="article" />];

    if (this.props.pageTitle) {
      results.push(<meta property="og:title" content={this.props.pageTitle} />);
    }

    if (this.props.siteTitle) {
      results.push(
        <meta property="og:site_name" content={this.props.siteTitle} />
      );
    }

    if (this.props.canonicalUrl) {
      results.push(
        <meta property="og:url" content={this.props.canonicalUrl} />
      );
    }

    if (this.props.description) {
      results.push(
        <meta property="og:description" content={this.props.description} />
      );
    }

    if (this.props.imageUrlForFacebook) {
      results.push(
        <meta property="og:image" content={this.props.imageUrlForFacebook} />
      );
    }

    return results;
  }

  _htmlTags(): JSX.Element[] {
    let results = [
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />,
      <title>{this._getPageTitle()}</title>
    ];

    if (this.props.disallowRobots === true) {
      results.push(<meta name="robots" content="noindex" />);
    }

    if (this.props.faviconUrl) {
      results.push(
        <link rel="icon" type="image/png" href={this.props.faviconUrl} />
      );
    }

    if (this.props.manifestUrl) {
      results.push(<link rel="manifest" href={this.props.manifestUrl} />);
    }

    if (this.props.description) {
      results.push(
        <meta name="description" content={this.props.description} />
      );
    }

    if (this.props.canonicalUrl) {
      results.push(<link rel="canonical" href={this.props.canonicalUrl} />);
    }

    return results;
  }

  render() {
    return (
      <Head>
        {this._htmlTags()}
        {this._fbTags()}
        {this._twitterTags()}
      </Head>
    );
  }
}

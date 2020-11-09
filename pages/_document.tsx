// Created 3/2019 by Zack Sheppard (zacksheppard.com)

import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
import { GA_TRACKING_ID } from "../src/util/gtag";

/**
 * Override the base Document class so that we can insert the Google Analytics
 * tag onto all the pages this server renders.
 */

export default class extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  headTag(): JSX.Element {
    if (GA_TRACKING_ID === undefined) {
      return <Head />;
    } else {
      return (
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics - snippet from Next's example */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '${GA_TRACKING_ID}');
      `
            }}
          />
        </Head>
      );
    }
  }

  render() {
    return (
      <Html lang="en">
        {this.headTag()}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

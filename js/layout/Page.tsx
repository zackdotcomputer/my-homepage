// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
import HeadTags from "./HeadTags";
import smoothscroll from "smoothscroll-polyfill";

export class Page extends React.PureComponent {
  componentDidMount() {
    // kick off the polyfill!
    smoothscroll.polyfill();
  }

  render() {
    const title = "Zack Sheppard - New York iOS and Web Programmer";
    const description =
      "I’m an engineer with over 10 years experience making server, web, " +
      "and iOS products at both startups and big companies. I'm available " +
      "now as a freelancer or consultant.";

    return (
      <div>
        <HeadTags
          siteTitle={title}
          description={description}
          // TODO: More meta tags
        />

        <div className="page-wrapper">{this.props.children}</div>
      </div>
    );
  }
}

export default Page;

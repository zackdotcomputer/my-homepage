// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
import Router from "next/router";
import HeadTags from "./HeadTags";
import smoothscroll from "smoothscroll-polyfill";
import jQuery from "jquery";

import * as gtag from "../util/gtag";

Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));

export class Page extends React.PureComponent {
  componentDidMount() {
    // kick off the polyfill!
    smoothscroll.polyfill();

    // Smooth scrolling targets using jQuery
    // Inspired by https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/js/resume.js
    jQuery('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      const link: HTMLAnchorElement = this as HTMLAnchorElement;
      if (
        location.pathname.replace(/^\//, "") ==
          link.pathname.replace(/^\//, "") &&
        location.hostname == link.hostname
      ) {
        let target = jQuery(link.hash);
        target = target.length
          ? target
          : jQuery("[name=" + link.hash.slice(1) + "]");

        if (target) {
          const offset = target.offset();
          if (offset) {
            window.scrollTo({
              top: offset.top,
              behavior: "smooth"
            });
            return false;
          }
        }
      }
    });
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
          faviconUrl="/static/icons/favicon-32x32.png"
          manifestUrl="/static/icons/manifest.json"
        />

        <div className="page-wrapper">{this.props.children}</div>
      </div>
    );
  }
}

export default Page;

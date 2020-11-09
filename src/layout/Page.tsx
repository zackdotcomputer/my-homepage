// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import jQuery from "jquery";
import Router from "next/router";
import React, { PropsWithChildren, useEffect } from "react";
import smoothscroll from "smoothscroll-polyfill";
import * as gtag from "../util/gtag";
import HeadTags from "./HeadTags";

Router.events.on("routeChangeComplete", (url: string) => gtag.pageview(url));

const Page = ({ children }: PropsWithChildren<{}>) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // kick off the polyfill!
      smoothscroll.polyfill();

      // Smooth scrolling targets using jQuery
      // Inspired by https://github.com/BlackrockDigital/startbootstrap-resume/blob/master/js/resume.js
      jQuery('a.js-scroll-trigger[href*="#"]:not([href="#"])').on(
        "click",
        function handleScrollClick() {
          const link: HTMLAnchorElement = this as HTMLAnchorElement;
          if (
            window.location.pathname.replace(/^\//, "") ===
              link.pathname.replace(/^\//, "") &&
            window.location.hostname === link.hostname
          ) {
            let target = jQuery(link.hash);
            target = target.length
              ? target
              : jQuery(`[name=${link.hash.slice(1)}]`);

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

          return true;
        }
      );
    }
  }, []);

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

      <div className="page-wrapper">{children}</div>
    </div>
  );
};

export default Page;

// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

const BackToTop = () => (
  <div className="back-to-top">
    <a className="js-scroll-trigger" href="#welcome">
      <img
        className="cta-arrow"
        src="/static/img/arrow-up.png"
        alt="arrow pointing up"
      />
      (Back to top)
    </a>
  </div>
);

export default BackToTop;

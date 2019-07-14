// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return (
    <div className="back-to-top">
      <a onClick={backToTop}>
        <img
          className="cta-arrow"
          src="/static/img/arrow-up.png"
          alt="arrow pointing up"
        />
        (Back to top)
      </a>
    </div>
  );
};

export default BackToTop;

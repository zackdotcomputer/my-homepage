// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
import Image from "next/image";

const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <div className="back-to-top">
      <a onClick={backToTop}>
        <Image
          className="cta-arrow"
          width="34"
          height="12"
          src="/static/img/arrow-up.png"
          alt="arrow pointing up"
        />
        (Back to top)
      </a>
    </div>
  );
};

export default BackToTop;

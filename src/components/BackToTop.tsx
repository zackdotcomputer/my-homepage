// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import Image from "next/image";
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
      <button className="btn btn-link" onClick={backToTop} type="button">
        <Image
          className="cta-arrow"
          width="34"
          height="12"
          src="/static/img/arrow-up.png"
          alt="arrow pointing up"
        />
        <br />
        (Back to top)
      </button>
    </div>
  );
};

export default BackToTop;

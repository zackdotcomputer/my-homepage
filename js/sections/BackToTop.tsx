// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

export default class BackToTop extends React.PureComponent {
  _handleClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div className="back-to-top">
        <a onClick={this._handleClick}>
          <img
            className="cta-arrow"
            src="/static/img/arrow-up.png"
            alt="arrow pointing up"
          />
          (Back to top)
        </a>
      </div>
    );
  }
}

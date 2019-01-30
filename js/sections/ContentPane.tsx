// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
import BackToTop from "./BackToTop";

interface State {
  significantlyScrolled: boolean;
}

export default class ContentPane extends React.PureComponent<
  {
    children: React.ReactChild;
  },
  State
> {
  constructor(props: any) {
    super(props);

    this.state = {
      significantlyScrolled: false
    };
  }

  componentDidMount() {
    this._handleScroll();
    window.addEventListener("scroll", this._handleScroll, {
      passive: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll);
  }

  _handleScroll = () => {
    const scrollTop = window.scrollY || 0;
    const significance = 200;

    const significantlyScrolled = scrollTop >= significance;

    this.setState({
      significantlyScrolled
    });
  };

  render() {
    return (
      <div
        id="content"
        className={this.state.significantlyScrolled ? "scrolled" : ""}
      >
        <BackToTop />
        <div className="content-pane">{this.props.children}</div>
      </div>
    );
  }
}

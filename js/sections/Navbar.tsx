// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

interface State {
  navbarIsScrolled: boolean;
}

export default class Navbar extends React.PureComponent<{}, State> {
  navRef: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.navRef = React.createRef();
    this.state = {
      navbarIsScrolled: false
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
    const windowHeight = window.innerHeight || 0;
    const scrollTop = window.scrollY || 0;
    const navbarHeight = 220;

    const navbarIsScrolled = scrollTop >= windowHeight - navbarHeight;

    this.setState({
      navbarIsScrolled
    });
  };

  render() {
    return (
      <nav
        id="main-nav"
        className={this.state.navbarIsScrolled ? "scrolled" : "hero-mode"}
      >
        <div className="nav-left">
          <h4>Hi! I'm&nbsp;</h4>
          <h1>
            Zack&nbsp;
            <br />
            Sheppard<span>.</span>
          </h1>
        </div>

        <div className="nav-right">
          <h4 className="fixed-only">Who's Zack?</h4>
          <h4>
            Reach out
            <span className="hero-only small">&nbsp;(or scroll for more)</span>
          </h4>
        </div>
      </nav>
    );
  }
}

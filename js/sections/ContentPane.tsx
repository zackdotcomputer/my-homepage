// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

export default class ContentPane extends React.PureComponent<{
  children: React.ReactChild;
}> {
  render() {
    return (
      <div id="content">
        <div className="content-pane">{this.props.children}</div>
      </div>
    );
  }
}

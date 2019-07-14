// Created 7/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

interface Props {
  title: String;
  dates?: String;
}

const ResumeItem: React.FunctionComponent<
  React.PropsWithChildren<Props>
> = props => {
  return (
    <div className="resume-item">
      <div className="resume-content">
        <div className="resume-meta">
          <h2>{props.title}</h2>
          {props.dates && (
            <div className="resume-date">
              <span className="text-secondary">{props.dates}</span>
            </div>
          )}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default ResumeItem;

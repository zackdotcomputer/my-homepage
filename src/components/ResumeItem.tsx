// Created 7/2019 by Zack Sheppard (zacksheppard.com)

import React, { PropsWithChildren } from "react";

interface Props {
  title: String;
  dates?: String;
}

const ResumeItem = ({ title, dates, children }: PropsWithChildren<Props>) => {
  return (
    <div className="resume-item">
      <div className="resume-content">
        <div className="resume-meta">
          <h2>{title}</h2>
          {dates && (
            <div className="resume-date">
              <span className="text-secondary">{dates}</span>
            </div>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default ResumeItem;

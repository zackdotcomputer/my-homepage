import React, { PropsWithChildren } from "react";

interface Props {
  title: string;
  timerange?: string;
}

const ResumeSection = ({
  title,
  timerange,
  children
}: PropsWithChildren<Props>) => {
  return (
    <div>
      <div className="title-row flex flex-row justify-between">
        <h2>{title}</h2>
        {timerange && <h4>{timerange}</h4>}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ResumeSection;

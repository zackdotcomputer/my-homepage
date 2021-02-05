import React, { PropsWithChildren } from "react";

const ResumeEntry = ({ title, children }: PropsWithChildren<{ title: string }>) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default ResumeEntry;

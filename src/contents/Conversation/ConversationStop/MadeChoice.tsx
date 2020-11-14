import React, { PropsWithChildren } from "react";

const MadeChoice = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ul className="choose-your-own">
      <li>{children}</li>
    </ul>
  );
};

export default MadeChoice;

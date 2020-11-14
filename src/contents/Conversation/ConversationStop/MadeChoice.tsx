import React, { PropsWithChildren } from "react";
import RenderedChoice from "../RenderedChoice";

const MadeChoice = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ul>
      <RenderedChoice>{children}</RenderedChoice>
    </ul>
  );
};

export default MadeChoice;

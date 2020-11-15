import React, { PropsWithChildren } from "react";

const ExternalLink = ({
  href,
  children
}: PropsWithChildren<{ href: string }>) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;

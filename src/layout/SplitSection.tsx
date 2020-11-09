// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

const SplitSection = ({
  id,
  className,
  image,
  children
}: {
  id?: string;
  className?: string;
  image: React.ReactElement;
  children: React.ReactChild | React.ReactChild[];
}) => {
  const childrenArray = children instanceof Array ? children : [children];

  return (
    <section id={id} className={className}>
      <div className="associated-image">{image}</div>
      <div className="content-pane">
        {childrenArray.map((child, ind) => (
          // eslint-disable-next-line react/no-array-index-key
          <article key={ind}>{child}</article>
        ))}
      </div>
    </section>
  );
};

export default SplitSection;

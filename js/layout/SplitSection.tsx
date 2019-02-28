// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

const SplitSection = (props: {
  id?: string;
  className?: string;
  image: React.ReactElement;
  children: React.ReactChild | React.ReactChild[];
}) => {
  const childrenArray =
    props.children instanceof Array ? props.children : [props.children];

  return (
    <section id={props.id} className={props.className}>
      <div className="associated-image">{props.image}</div>
      <div className="content-pane">
        {childrenArray.map((child, ind) => (
          <article key={ind}>{child}</article>
        ))}
      </div>
    </section>
  );
};

export default SplitSection;

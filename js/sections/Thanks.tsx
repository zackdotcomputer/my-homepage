// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";

const Thanks = () => (
  <section id="present">
    <section className="associated-image">
      <img src="/static/img/zack-forest.jpg" alt="Zack, in the forest" />
    </section>
    <div className="content-pane">
      <h2>
        <strong>Thanks</strong>!
      </h2>
      <p>Thanks for stopping by!</p>
      <p>
        By the way, if you're curious about how I made this site, you can{" "}
        <a href="https://www.github.com/zackzachariah/my-homepage">
          view the source on Github
        </a>
        . If all you're after is what stack I used, I built it in{" "}
        <a href="https://reactjs.org/">React</a> on{" "}
        <a href="http://nextjs.org/">Next.js</a>. It's styled using a subset of{" "}
        <a href="https://getbootstrap.com/">Bootstrap</a>. I'm hosting it on{" "}
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
    </div>
  </section>
);

export default Thanks;

// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const HomeWelcome = () => (
  <>
    <h3>Hi! I&rsquo;m</h3>
    <h1 className="big">
      <strong>Zack Sheppard</strong>
    </h1>
    <div className="big bio">
      <p>
        I&rsquo;m a{" "}
        <Link href="/work">
          <a>freelance engineer</a>
        </Link>{" "}
        with over{" "}
        <Link href="/work#resume">
          <a>10 years experience</a>
        </Link>{" "}
        making server, web, and iOS products.
      </p>

      <p>
        (I&rsquo;ve also bartended, managed teams, and traveled around the
        world.)
      </p>

      <p>
        I&rsquo;m currently based in New York City. If you&rsquo;d like to work
        with me or just grab coffee and chat, say hi:
      </p>
    </div>
    <div id="social">
      <div>
        <a
          className="fa-link"
          rel="noopener noreferrer"
          href="mailto:contact@zacksheppard.com"
        >
          <span className="sr-only">Email Zack</span>
          <FontAwesomeIcon icon={faEnvelopeOpenText} />
        </a>
        <a
          className="fa-link"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/zacksheppard/"
        >
          <span className="sr-only">Zack&rsquo;s LinkedIn</span>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          className="fa-link"
          rel="noopener noreferrer"
          href="https://www.github.com/genuinezack"
        >
          <span className="sr-only">Zack&rsquo;s Github</span>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div>
        <a
          className="fa-link"
          rel="noopener noreferrer"
          href="https://www.twitter.com/genuinezack"
        >
          <span className="sr-only">Zack&rsquo;s Twitter</span>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          className="fa-link"
          rel="noopener noreferrer"
          href="https://www.instagram.com/genuinezack"
        >
          <span className="sr-only">Zack&rsquo;s Instagram</span>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
    <div className="postscript">
      P.S. You can view{" "}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.github.com/genuinezack/my-homepage"
      >
        the code that powers this site on Github
      </a>
    </div>
  </>
);

export default HomeWelcome;
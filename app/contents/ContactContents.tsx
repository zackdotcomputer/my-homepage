import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { PropsWithChildren } from "react";

function ContactOption({
  icon,
  href,
  children
}: PropsWithChildren<{ icon: IconDefinition; href: string }>) {
  return (
    <li className="my-6 flex flex-row items-center">
      <div className="mr-3 size-8 shrink-0">
        <FontAwesomeIcon icon={icon} className="size-full" />
      </div>
      <a href={href} className="dashlink">
        {children}
      </a>
    </li>
  );
}

export default function ContactContents() {
  return (
    <div>
      <h2>Go ahead, send a message</h2>
      <ul className="pb-4">
        <ContactOption href="mailto:webcontact@zacksheppard.com" icon={faEnvelope}>
          Contact via email
        </ContactOption>
        <ContactOption href="https://www.github.com/zackdotcomputer" icon={faGithub}>
          @zackdotcomputer on Github
        </ContactOption>
        <ContactOption href="https://www.twitter.com/zackdotcomputer" icon={faTwitter}>
          @zackdotcomputer on Twitter
        </ContactOption>
        <ContactOption href="https://www.linkedin.com/in/zacksheppard/" icon={faLinkedin}>
          @zacksheppard on LinkedIn
        </ContactOption>
      </ul>
    </div>
  );
}

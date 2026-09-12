import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBluesky, faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { PropsWithChildren } from "react";
import { SOCIAL } from "~/lib/site";

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
        <ContactOption href={SOCIAL.email} icon={faEnvelope}>
          Contact via email
        </ContactOption>
        <ContactOption href={SOCIAL.github} icon={faGithub}>
          @zackdotcomputer on Github
        </ContactOption>
        <ContactOption href={SOCIAL.bluesky} icon={faBluesky}>
          @zack.computer on Bluesky
        </ContactOption>
        <ContactOption href={SOCIAL.twitter} icon={faTwitter}>
          @zackdotcomputer on Twitter
        </ContactOption>
        <ContactOption href={SOCIAL.linkedin} icon={faLinkedin}>
          @zacksheppard on LinkedIn
        </ContactOption>
      </ul>
    </div>
  );
}

// Created 11/2020 by Zack Sheppard (zacksheppard.com)

import Response from "../layout/Conversation/Response";
import ZackHeadTags from "../layout/ZackHeadTags";

const NotFound = () => (
  <>
    <ZackHeadTags pageTitle="Page not found" disallowRobots />
    <Response>
      Hmmm - I didn&rsquo;t find content to match the URL you went to. Try something else?
    </Response>
  </>
);

export default NotFound;

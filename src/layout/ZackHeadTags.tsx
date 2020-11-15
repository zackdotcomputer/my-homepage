import React from "react";
import HeadTags, { HeadTagsTitleConcatMode } from "./HeadTags";

interface Props {
  pageTitle?: string;
  canonicalURL?: string;
  disallowRobots?: boolean;
}

const ZackHeadTags = (props: Props) => {
  return (
    <HeadTags
      siteTitle="Zack Sheppard"
      description="Freelance iOS and Web full-stack developer. Come have a chat maybe we can work together."
      titleConcatenationMode={HeadTagsTitleConcatMode.siteFirst}
      faviconUrl="/favicon.ico"
      manifestUrl="/icons/manifest.json"
      twitterHandle="zackdotcomputer"
      {...props}
    />
  );
};

export default ZackHeadTags;

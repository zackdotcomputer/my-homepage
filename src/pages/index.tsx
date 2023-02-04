// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import { useEffect, useState } from "react";
import ZackHeadTags from "../layout/ZackHeadTags";

const copy = [
  "I'm a freelance full-stack software developer. I make iOS and web apps. How can I help?",
  "I'm a freelance senior software developer. I make iOS and web apps. What's up?",
  "I'm making iOS and web apps in London. How are things?"
];

const Index = () => {
  const [copyToUse, setCopyToUse] = useState<string>(copy[0]);

  useEffect(() => {
    setCopyToUse(copy[Math.floor(Math.random() * 25) % copy.length]);
  }, []);

  return (
    <>
      <ZackHeadTags pageTitle="Conversational Homepage" canonicalURL="https://zack.computer" />
      <h3>{copyToUse}</h3>
    </>
  );
};

export default Index;

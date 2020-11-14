// Created 1/2019 by Zack Sheppard (zacksheppard.com)

import React from "react";
import ZackHeadTags from "../src/layout/ZackHeadTags";

const Index = () => {
  const copy = [
    "I'm a freelance full-stack software developer. I make iOS and web apps. How can I help?",
    "I'm a freelance senior software developer. I make iOS and web apps. What's up?",
    "I'm making iOS and web apps in London. How are things?"
  ];

  return (
    <>
      <ZackHeadTags
        pageTitle="Conversational Homepage"
        canonicalURL="https://zack.computer"
      />
      <h3>{copy[Math.floor(Math.random() * 25) % copy.length]}</h3>
    </>
  );
};

export default Index;

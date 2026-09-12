import { useState } from "react";
import { useHydrated } from "~/lib/useHydrated";

const copy = [
  "I'm a freelance full-stack software developer. I make iOS and web apps. How can I help?",
  "I'm a freelance senior software developer. I make iOS and web apps. What's up?",
  "I'm making iOS and web apps in London. How are things?"
];

/** The opening line of the conversation, picked at random on each visit. */
export default function HomeGreeting() {
  const hydrated = useHydrated();
  const [randomCopy] = useState(() => copy[Math.floor(Math.random() * copy.length)]);

  // Always render the first line on the server so hydration matches.
  return <h3>{hydrated ? randomCopy : copy[0]}</h3>;
}

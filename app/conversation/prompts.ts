import type { ConversationDestination, ConversationStop } from "./types";

const resumePrompts: ConversationDestination[] = [
  { id: "resume-0", prompt: "Show me your credentials.", response: "Coming right up!" },
  {
    id: "resume-1",
    prompt: "Are you legit?",
    response: "Too legit to quit! What do you want to know more about?"
  },
  {
    id: "resume-2",
    prompt: "What have you done?",
    response: "A few things. What do you want to know more about?"
  },
  {
    id: "resume-3",
    prompt: "Lemme see your resume.",
    response: "Sure thing. What do you want to know about?"
  },
  { id: "resume-4", prompt: "What's on your CV?", response: "What can I tell you more about?" }
];

const workCTA: ConversationDestination = {
  id: "work-cta",
  prompt: "I want to work with you.",
  response: "Ok - drop me a line!"
};

const aiQuestion: ConversationDestination = {
  id: "ai-question",
  prompt: "Is this an LLM or AI or something?",
  response:
    "Nope - this site was designed back in 2020 before chatbots were really a thing. These are all hand-coded options."
};

const cancelPrompts: ConversationDestination[] = [
  { id: "cancel-0", prompt: "Ok. Take me back to the start.", href: "/" },
  { id: "cancel-1", prompt: "Done here - take me back home.", href: "/" },
  { id: "cancel-2", prompt: "Alright, enough of this, let me restart.", href: "/" },
  { id: "cancel-3", prompt: "Cool, thanks. Take me back to the start.", href: "/" }
];

const contactPrompts: ConversationDestination[] = [
  {
    id: "contact-1",
    prompt: "Can I drop you a question?",
    response: "I love questions! Just pick a channel:"
  },
  { id: "contact-2", prompt: "Can we get in touch?", response: "Sure thing - just pick where:" },
  { id: "contact-3", prompt: "How do I reach you?", response: "You have so many options!" },
  { id: "contact-4", prompt: "Want to grab a coffee?", response: "Ok - send me a message!" }
];

const contactOptions: ConversationDestination[] = [
  { id: "chat-mediums-0", prompt: "I'll email you", href: "mailto:contact@zacksheppard.com" },
  {
    id: "chat-mediums-1",
    prompt: "Take me to your Github",
    href: "https://www.github.com/zackdotcomputer"
  },
  {
    id: "chat-mediums-2",
    prompt: "Let's connect on LinkedIn",
    href: "https://www.linkedin.com/in/zacksheppard/"
  },
  {
    id: "chat-mediums-3",
    prompt: "I'll slide into your Twitter DMs",
    href: "https://www.twitter.com/zackdotcomputer"
  }
];

const resumeSections: ConversationDestination[] = [
  { id: "experience-0", prompt: "Tell me more about your skills.", href: "/resume/skills" },
  {
    id: "experience-1",
    prompt: "Tell me more about your freelance work.",
    href: "/resume/freelance"
  },
  {
    id: "experience-2",
    prompt: "Tell me more about your experience before that.",
    href: "/resume/past"
  }
];

const normcorePrompts: ConversationDestination[] = [
  { id: "normcore-0", prompt: "This is weird. Show me a normal homepage.", href: "/normcore" },
  { id: "normcore-1", prompt: "I don't get this. Show me a normal homepage.", href: "/normcore" },
  { id: "normcore-2", prompt: "Less conversation. More static html.", href: "/normcore" },
  { id: "normcore-3", prompt: "Give me the normcore site instead.", href: "/normcore" }
];

/** Picks a random option, preferring ones the visitor hasn't chosen before. */
function pickOneFrom(
  options: ConversationDestination[],
  pastChoices: Record<string, boolean>
): ConversationDestination {
  const fresh = options.filter((option) => !pastChoices[option.id]);
  const pool = fresh.length > 0 ? fresh : options;
  return pool[Math.floor(Math.random() * pool.length)];
}

/**
 * Works out which choices to offer next, based on where the visitor is and
 * what they last picked.
 */
export function computePrompts(
  pathname: string,
  pastChoices: Record<string, boolean>,
  stack: ConversationStop[]
): ConversationDestination[] {
  const lastChoice = stack.findLast((stop) => stop.choice)?.choice;

  const lastChoiceWasContact =
    lastChoice?.id === "work-cta" ||
    lastChoice?.id.startsWith("contact-") === true ||
    pathname.endsWith("contact");

  const lastChoiceWasResume =
    lastChoice?.id.startsWith("resume-") === true ||
    lastChoice?.id.startsWith("experience-") === true ||
    pathname.startsWith("/resume");

  const lastChoiceWasHomepage =
    (lastChoice === undefined || lastChoice.href === "/" || lastChoice.id === aiQuestion.id) &&
    !lastChoiceWasContact &&
    !lastChoiceWasResume;

  let centerPrompts: ConversationDestination[];

  if (lastChoiceWasContact) {
    centerPrompts = contactOptions;
  } else if (lastChoiceWasResume) {
    centerPrompts = [...resumeSections, workCTA];
  } else {
    const resumePrompt = lastChoice?.id.startsWith("resume-")
      ? []
      : [pickOneFrom(resumePrompts, pastChoices)];

    // Offer the "is this AI?" aside once per visit, until it's been asked.
    const aiPrompt = pastChoices[aiQuestion.id] ? [] : [aiQuestion];

    centerPrompts = [
      workCTA,
      ...resumePrompt,
      pickOneFrom(contactPrompts, pastChoices),
      ...aiPrompt
    ];
  }

  const exitPrompt = lastChoiceWasHomepage
    ? pickOneFrom(normcorePrompts, pastChoices)
    : pickOneFrom(cancelPrompts, pastChoices);

  return [...centerPrompts, exitPrompt];
}

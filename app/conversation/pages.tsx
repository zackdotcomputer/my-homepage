import type { ReactNode } from "react";
import ContactContents from "~/contents/ContactContents";
import HomeGreeting from "~/contents/HomeGreeting";
import ExperienceSection from "~/contents/resume/Experience";
import FreelanceSection from "~/contents/resume/Freelance";
import PastSection from "~/contents/resume/Past";
import Response from "./Response";

/**
 * Registry of what each conversational page shows. The conversation layout
 * keeps every page the visitor has been to on screen, so contents are looked
 * up by pathname here rather than rendered by the route modules.
 */
const conversationPages: Record<string, ReactNode> = {
  "/": <HomeGreeting />,
  "/contact": <ContactContents />,
  "/resume/skills": <ExperienceSection />,
  "/resume/freelance": <FreelanceSection />,
  "/resume/past": <PastSection />
};

const notFound = (
  <Response>
    Hmmm - I didn&rsquo;t find content to match the URL you went to. Try something else?
  </Response>
);

export function normalizePathname(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function pageContents(pathname: string): ReactNode {
  return conversationPages[normalizePathname(pathname)] ?? notFound;
}

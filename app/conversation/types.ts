/** A choice the visitor can pick from the prompt card. */
export interface ConversationDestination {
  id: string;
  prompt: string;
  /** Internal path or external URL to navigate to when picked. */
  href?: string;
  /** Zack's reply, shown as its own block after the prompt. */
  response?: string;
}

/** One block in the conversation history. Exactly one of the fields is set. */
export interface ConversationStop {
  choice?: ConversationDestination;
  prompt?: string;
  response?: string;
  /** Pathname of a page that was visited (rendered via the page registry). */
  page?: string;
}

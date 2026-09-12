import { computePrompts } from "./prompts";
import type { ConversationDestination, ConversationStop } from "./types";

export interface ConversationState {
  /** The pathname of the most recently visited page. */
  pathname: string;
  stack: ConversationStop[];
  madeChoiceIds: Record<string, boolean>;
  /** The choices to offer next. */
  prompts: ConversationDestination[];
}

export type ConversationAction =
  { type: "visit"; pathname: string } | { type: "choose"; choice: ConversationDestination };

export function initConversation(pathname: string): ConversationState {
  const stack: ConversationStop[] = [{ page: pathname }];
  return {
    pathname,
    stack,
    madeChoiceIds: {},
    prompts: computePrompts(pathname, {}, stack)
  };
}

export function conversationReducer(
  state: ConversationState,
  action: ConversationAction
): ConversationState {
  switch (action.type) {
    case "visit": {
      if (action.pathname === state.pathname) {
        return state;
      }
      const stack = [...state.stack, { page: action.pathname }];
      return {
        ...state,
        pathname: action.pathname,
        stack,
        prompts: computePrompts(action.pathname, state.madeChoiceIds, stack)
      };
    }

    case "choose": {
      const { choice } = action;
      const stack = [...state.stack, { choice, prompt: choice.prompt }];
      if (choice.response) {
        stack.push({ choice, response: choice.response });
      }
      const madeChoiceIds = { ...state.madeChoiceIds, [choice.id]: true };

      // If the choice navigates somewhere, the "visit" action will follow and
      // recompute the prompts for the new page; otherwise compute them now.
      const nextPathname = choice.href?.startsWith("/") ? choice.href : state.pathname;

      return {
        ...state,
        stack,
        madeChoiceIds,
        prompts: computePrompts(nextPathname, madeChoiceIds, stack)
      };
    }
  }
}

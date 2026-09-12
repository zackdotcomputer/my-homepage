import { useCallback, useReducer, type ReactNode } from "react";
import { useLocation } from "react-router";
import ResponsiveLogo from "~/contents/ResponsiveLogo";
import WelcomeIntro from "~/contents/WelcomeIntro";
import MadeChoice from "./MadeChoice";
import { conversationReducer, initConversation } from "./memory";
import { pageContents } from "./pages";
import RenderedConversation from "./RenderedConversation";
import Response from "./Response";
import type { ConversationDestination } from "./types";

/** Blocks shown before the conversation history: the logo and the welcome. */
const INTRO_BLOCKS = 2;

/**
 * The conversational homepage: every page the visitor has been to, and every
 * choice they've made, stays on screen as the conversation grows.
 */
export default function Conversation() {
  const { pathname } = useLocation();
  const [state, dispatch] = useReducer(conversationReducer, pathname, initConversation);

  // Record navigations (including back/forward) as new stops in the conversation.
  if (state.pathname !== pathname) {
    dispatch({ type: "visit", pathname });
  }

  const handleChoice = useCallback((choice: ConversationDestination) => {
    dispatch({ type: "choose", choice });
  }, []);

  const getBlock = useCallback(
    (index: number): ReactNode => {
      if (index === 0) {
        return <ResponsiveLogo />;
      }
      if (index === 1) {
        return <WelcomeIntro />;
      }

      const stop = state.stack[index - INTRO_BLOCKS];
      if (!stop) {
        return null;
      }

      return (
        <>
          {stop.prompt && <MadeChoice>{stop.prompt}</MadeChoice>}
          {stop.response && <Response>{stop.response}</Response>}
          {stop.page !== undefined && pageContents(stop.page)}
        </>
      );
    },
    [state.stack]
  );

  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col justify-end px-4 sm:px-6">
      <noscript>
        <style>{`.convo-block[data-revealed="false"]{grid-template-rows:1fr;opacity:1;translate:none}`}</style>
      </noscript>
      <RenderedConversation
        className="conversation-flow relative flex flex-col justify-end"
        blockCount={state.stack.length + INTRO_BLOCKS}
        getBlock={getBlock}
        choices={state.prompts}
        onChoice={handleChoice}
      />
    </main>
  );
}

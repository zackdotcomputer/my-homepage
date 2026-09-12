import { useCallback, useEffect, useState, type ReactNode } from "react";
import { useHydrated } from "~/lib/useHydrated";
import ConversationBlock from "./ConversationBlock";
import ConversationPrompt from "./ConversationPrompt";
import type { ConversationDestination } from "./types";

interface Props {
  blockCount: number;
  getBlock: (index: number) => ReactNode;
  choices: ConversationDestination[];
  onChoice: (picked: ConversationDestination) => void;
  className?: string;
}

/** Delay between each block of the conversation appearing. */
const REVEAL_DELAY_MS = 500;
/** How long the "thinking" spinner shows before the next choices appear. */
const PROMPT_DELAY_MS = 500;

/**
 * Reveals the conversation one block at a time, then offers the next choices.
 */
export default function RenderedConversation({
  blockCount,
  getBlock,
  choices,
  onChoice,
  className
}: Props) {
  const hydrated = useHydrated();

  // The first block (the logo) is always visible; everything else is revealed
  // in sequence once we're running in the browser.
  const [revealedCount, setRevealedCount] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (revealedCount < blockCount) {
      // Don't make the visitor wait for the very first reveal.
      const delay = revealedCount === 1 ? 0 : REVEAL_DELAY_MS;
      const timer = setTimeout(() => setRevealedCount((count) => count + 1), delay);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => setLoading(false), PROMPT_DELAY_MS);
    return () => clearTimeout(timer);
  }, [blockCount, revealedCount]);

  // Follow the conversation down the page as it grows. The second scroll
  // catches up with the block's grow-in transition.
  useEffect(() => {
    const scrollToBottom = () =>
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });

    scrollToBottom();
    const timer = setTimeout(scrollToBottom, REVEAL_DELAY_MS);
    return () => clearTimeout(timer);
  }, [revealedCount, loading]);

  const handleSelection = useCallback(
    (picked: ConversationDestination) => {
      setLoading(true);
      onChoice(picked);
    },
    [onChoice]
  );

  const blocks: ReactNode[] = [];
  for (let i = 0; i < blockCount; i += 1) {
    blocks.push(
      <ConversationBlock key={`block-${i}`} revealed={i < revealedCount}>
        {getBlock(i)}
      </ConversationBlock>
    );
  }

  return (
    <div className={className}>
      {blocks}
      <ConversationPrompt
        className="mt-3"
        options={choices}
        onSelection={handleSelection}
        loading={loading}
        showOptions={hydrated}
      />
    </div>
  );
}

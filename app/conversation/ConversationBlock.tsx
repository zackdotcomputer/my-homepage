import type { PropsWithChildren } from "react";

interface Props {
  revealed: boolean;
}

/** A single block of the conversation that grows and fades in when revealed. */
export default function ConversationBlock({ revealed, children }: PropsWithChildren<Props>) {
  return (
    <div className="convo-block my-3" data-revealed={revealed} aria-hidden={!revealed}>
      <div>{children}</div>
    </div>
  );
}

import React from "react";
import Response from "../../Response";
import ConversationStop from "./ConversationStop";
import MadeChoice from "./MadeChoice";

interface Props {
  stop: ConversationStop;
}

const ConversationStopContents = ({ stop }: Props) => {
  return (
    <>
      {stop.prompt && <MadeChoice>{stop.prompt}</MadeChoice>}
      {stop.response && <Response>{stop.response}</Response>}
      {stop.page}
    </>
  );
};

export default ConversationStopContents;

import React from "react";
import ConversationStop from "./ConversationStop";
import DidChoseYourOwn from "./DidChoseYourOwn";

interface Props {
  stop: ConversationStop;
}

const ConversationStopContents = ({ stop }: Props) => {
  return (
    <>
      {stop.prompt && <DidChoseYourOwn chose={stop.prompt} />}
      {stop.response && <p>{stop.response}</p>}
      {stop.page}
    </>
  );
};

export default ConversationStopContents;

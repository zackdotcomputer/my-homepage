import React from "react";

export interface ConversationDestination {
  prompt: string;
  href?: string;
  response?: string;
}

export default interface ConversationStop {
  prompt?: string;
  response?: string;
  page?: React.ReactChild;
}

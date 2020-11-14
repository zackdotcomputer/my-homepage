import { ReactChild } from "react";

export default interface ConversationStop {
  prompt?: string;
  response?: string;
  page?: ReactChild;
}

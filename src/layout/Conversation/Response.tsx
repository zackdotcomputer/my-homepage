import { PropsWithChildren } from "react";

const Response = ({ children }: PropsWithChildren<{}>) => {
  return <p>{children}</p>;
};

export default Response;

import type { PropsWithChildren } from "react";
import RenderedChoice from "./RenderedChoice";

export default function MadeChoice({ children }: PropsWithChildren) {
  return (
    <ul>
      <RenderedChoice>{children}</RenderedChoice>
    </ul>
  );
}

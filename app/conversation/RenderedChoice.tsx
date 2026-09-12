import type { PropsWithChildren } from "react";

interface Props {
  className?: string;
  id?: string;
}

export default function RenderedChoice({ children, className, id }: PropsWithChildren<Props>) {
  return (
    <li
      className={["my-1 font-mono opacity-75 choice", className].filter(Boolean).join(" ")}
      id={id}
    >
      {children}
    </li>
  );
}

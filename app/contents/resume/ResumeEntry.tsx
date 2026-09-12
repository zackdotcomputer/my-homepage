import type { PropsWithChildren } from "react";

export default function ResumeEntry({ title, children }: PropsWithChildren<{ title: string }>) {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

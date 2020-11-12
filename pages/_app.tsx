import { AppProps } from "next/app";
import React from "react";
import Conversation from "../src/contents/Conversation";
import "../styles/index.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Conversation
      path={router.pathname}
      contents={<Component {...pageProps} />}
    />
  );
}

export default MyApp;

import { AppProps } from "next/app";
import React from "react";
import Conversation from "../src/layout/Conversation";
import NormcoreLayout from "../src/layout/Normcore/NormcoreLayout";
import "../styles/index.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  console.log(router.pathname);
  const isNormcore = router.pathname.startsWith("/normcore");

  if (isNormcore) {
    return (
      <NormcoreLayout>
        <Component {...pageProps} />
      </NormcoreLayout>
    );
  } else {
    return (
      <Conversation
        path={router.pathname}
        contents={<Component {...pageProps} />}
      />
    );
  }
}

export default MyApp;

import { AppProps } from "next/app";
import Script from "next/script";
import "../../styles/index.css";
import Conversation from "../layout/Conversation";
import NormcoreLayout from "../layout/Normcore/NormcoreLayout";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isNormcore = router.pathname.startsWith("/normcore");

  return (
    <>
      {isNormcore ? (
        <NormcoreLayout>
          <Component {...pageProps} />
        </NormcoreLayout>
      ) : (
        <Conversation path={router.pathname} contents={<Component {...pageProps} />} />
      )}
      <Script
        async
        defer
        data-website-id="7673694d-cf72-4c29-bea7-fcbbf9dd4e4a"
        src="https://analytics.zack.computer/umami.js"
      />
    </>
  );
}

export default MyApp;

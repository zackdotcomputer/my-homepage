import { AppProps } from "next/app";
import Head from "next/head";
import "../../styles/index.css";
import Conversation from "../layout/Conversation";
import NormcoreLayout from "../layout/Normcore/NormcoreLayout";

function MyApp({ Component, pageProps, router }: AppProps) {
  const isNormcore = router.pathname.startsWith("/normcore");

  if (isNormcore) {
    return (
      <>
        <Head>
          {process.env.NODE_ENV !== "development" && (
            <script
              async
              defer
              data-domain="zack.computer"
              src="https://plausible.io/js/plausible.js"
            />
          )}
        </Head>
        <NormcoreLayout>
          <Component {...pageProps} />
        </NormcoreLayout>
      </>
    );
  } else {
    return (
      <>
        <Head>
          {process.env.NODE_ENV !== "development" && (
            <script
              async
              defer
              data-domain="zack.computer"
              src="https://plausible.io/js/plausible.js"
            />
          )}
        </Head>
        <Conversation path={router.pathname} contents={<Component {...pageProps} />} />
      </>
    );
  }
}

export default MyApp;

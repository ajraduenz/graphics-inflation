import "../styles/globals.scss";

import type { AppProps } from "next/app";
import HtmlHeaders from "../src/components/HtmlHeaders";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <HtmlHeaders />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

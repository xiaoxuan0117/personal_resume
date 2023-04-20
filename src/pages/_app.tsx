import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import nextI18nConfig from "../../next-i18next.config";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, nextI18nConfig);

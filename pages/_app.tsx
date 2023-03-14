import "@/styles/globals.css";
import { NextComponentType } from "next";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page: JSX.Element) => page);

  return getLayout(<Component {...pageProps} />);
}

import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import themes from "../../styles/themes";
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Header />
        <Nav />
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
}

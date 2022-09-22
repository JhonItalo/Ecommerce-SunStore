import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "../../styles/global";
import themes from "../../styles/themes";
import Footer from "../components/layout/footer";
import Header from "../components/layout/header";
import Nav from "../components/layout/nav";
import CarrinhoContext from "../context/CarrinhoContext";
import FavContext from "../context/FavContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={themes}>
        <FavContext>
          <CarrinhoContext>
            <Header />
            <Nav />
            <Component {...pageProps} />
          </CarrinhoContext>
        </FavContext>
        <Footer />
      </ThemeProvider>
      <GlobalStyles />
    </>
  );
}

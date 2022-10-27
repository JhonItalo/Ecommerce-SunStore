import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/global";
import themes from "../../styles/themes";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import Nav from "../Layout/nav";
import CarrinhoContext from "../context/CartContext";
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

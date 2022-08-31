import Head from "next/head";
import Banner from "../components/banner/Banner";
import BannerSecond from "../components/bannerSecond/BannerSecond";

import Sections from "../components/sections/Sections";
import TopCategory from "../components/topcategory/TopCategory";

export default function Home() {
  return (
    <>
      <Head>
        <title>SunStore - Home</title>
      </Head>
      <main>
        <Banner />
        <Sections>
          <BannerSecond />
          <TopCategory />
        </Sections>
      </main>
    </>
  );
}

/*export const getStaticProps: GetStaticProps = async () => {
  const key = "api_key=617375c16cb7cbacc59f9c2b6102e4e4";
  const tmdb = "https://api.themoviedb.org/3/";
  const opcao = "movie/popular?";

  const req = await fetch(`${tmdb}${opcao}${key}&language=pt-BR&page=1`);

  const response = await req.json();
  const { results } = response;

  return {
    props: {
      teste: results,
    },
  };
};
*/

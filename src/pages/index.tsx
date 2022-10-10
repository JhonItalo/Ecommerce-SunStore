import Head from "next/head";
import Banner from "../components/banner";
import BannerSecond from "../components/bannerSecond/indes";
import { GetStaticProps } from "next";
import Sections from "../components/sections";
import TopCategory from "../components/topCategory";
import TreandyProducts from "../components/treandyProducts";
import { filmes } from "../request/HomeFetch";

interface FilmesShort {
  title: string;
  id: number;
  poster_path: string;
}
interface props {
  newP: FilmesShort[];
  feature: FilmesShort[];
  best: FilmesShort[];
}

export default function Home({ newP, feature, best }: props) {
  console.log("index render");
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
          <TreandyProducts newP={newP} feature={feature} best={best} />
        </Sections>
      </main>
    </>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const data: props = await filmes();
  return {
    props: {
      newP: data.newP,
      feature: data.feature,
      best: data.best,
    },
  };
};

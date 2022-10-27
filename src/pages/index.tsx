import Head from "next/head";
import { GetStaticProps } from "next";
import Banner from "../components/banner";
import BannerSecond from "../components/bannerSecond/indes";
import Sections from "../components/sections";
import TopCategory from "../components/topCategory";
import TreandyProducts from "../components/treandyProducts";
import { filmes } from "../request/HomeFetch";
import { FilmesShort } from "../types";

interface props {
  newP: FilmesShort[];
  feature: FilmesShort[];
  best: FilmesShort[];
}

export default function Home({ newP, feature, best }: props) {
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
  const { newP, feature, best } = await filmes();
  return {
    props: {
      newP: newP,
      feature: feature,
      best: best,
    },
  };
};

import Head from "next/head";
import Banner from "../components/banner/Banner";
import BannerSecond from "../components/bannerSecond/BannerSecond";
import { GetStaticProps } from "next";
import Sections from "../components/sections/Sections";
import TopCategory from "../components/topCategory/TopCategory";
import TreandyProducts from "../components/treandyProducts/TreandyProducts";

interface objectmodel {
  title: string;
  id: number;
  poster_path: string;
}
interface props {
  newP: objectmodel[];
  feature: objectmodel[];
  best: objectmodel[];
}

export default function Home({ newP, feature, best }: props) {
  console.log("renderizou index");
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

export const requisicao = async (api: string, array: objectmodel[]) => {
  let object: objectmodel;
  const req = await fetch(api);
  const response = await req.json();
  response.results.slice(0, 8).map((items: any) => {
    object = {
      title: items.title,
      id: items.id,
      poster_path: items.poster_path,
    };
    array.push(object);
  });
};
export const getStaticProps: GetStaticProps = async () => {
  const newP: objectmodel[] = [];
  const feature: objectmodel[] = [];
  const best: objectmodel[] = [];

  await requisicao(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1",
    newP
  );
  await requisicao(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1",
    feature
  );
  await requisicao(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1",
    best
  );

  return {
    props: {
      newP: newP,
      feature: feature,
      best: best,
    },
  };
};

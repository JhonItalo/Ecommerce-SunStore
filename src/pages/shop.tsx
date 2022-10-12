import ShopNow from "../components/shopNow";
import { GetServerSideProps } from "next";
import { FetchFilmesCategory } from "../request/ShopFetch";
import ProdutosFilterContext from "../context/ProdutosFilterContext";
import { FilmesMedian } from "../types/";
import Head from "next/head";

interface props {
  chair: FilmesMedian[];
  bed: FilmesMedian[];
  workDesk: FilmesMedian[];
  table: FilmesMedian[];
  sofaSet: FilmesMedian[];
}

export default function shop({ chair, bed, workDesk, table, sofaSet }: props) {
  console.log(chair);
  return (
    <>
      <Head>
        <title>SunStore - Home</title>
        <meta
          name="keywords"
          content="ecommerce, Sunstore, Chair, Bed, Table, Work Desk, Sofa-set"
        />
      </Head>
      <main>
        <ProdutosFilterContext categorys={{ chair, bed, workDesk, table, sofaSet }}>
          <ShopNow />
        </ProdutosFilterContext>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { chair, bed, workDesk, table, sofaSet } = await FetchFilmesCategory();

  return {
    props: {
      chair: chair,
      bed: bed,
      workDesk: workDesk,
      table: table,
      sofaSet: sofaSet,
    },
  };
};

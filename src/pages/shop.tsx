import ShopNow from "../components/shopNow";
import { GetServerSideProps } from "next";
import { FetchFilmesCategory } from "../request/ShopFetch";
import { FilmesMedian } from "../types/";
import Head from "next/head";
import FilmesContext from "../context/ProdutosFilterContext";

interface props {
  chair: FilmesMedian[];
  bed: FilmesMedian[];
  workDesk: FilmesMedian[];
  table: FilmesMedian[];
  sofaSet: FilmesMedian[];
}

export default function shop({ chair, bed, workDesk, table, sofaSet }: props) {
  return (
    <>
      <Head>
        <title>SunStore - Shop</title>
        <meta name="keywords" content="ecommerce, Sunstore, Chair, Bed, Table, Work Desk, Sofa-set" />
      </Head>
      <main>
        <FilmesContext categorys={{ chair, bed, workDesk, table, sofaSet }}>
          <ShopNow />
        </FilmesContext>
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

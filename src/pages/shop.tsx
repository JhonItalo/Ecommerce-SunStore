import ShopNow from "../components/shopNow";
import { GetServerSideProps } from "next";
import { FetchFilmesCategory } from "../request/ShopFetch";
import ProdutosFilterContext from "../context/ProdutosFilterContext";

interface FilmesMedian {
  title: string[];
  id: number[];
  poster_path: string[];
  vote_average: number[];
}

interface props {
  chair: FilmesMedian[];
  bed: FilmesMedian[];
  workDesk: FilmesMedian[];
  table: FilmesMedian[];
  sofaSet: FilmesMedian[];
}

const shop = ({ chair, bed, workDesk, table, sofaSet }: props) => {
  console.log(chair);
  return (
    <main>
      <ProdutosFilterContext categorys={{ chair, bed, workDesk, table, sofaSet }}>
        <ShopNow />
      </ProdutosFilterContext>
    </main>
  );
};
export default shop;

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

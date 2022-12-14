import { GetStaticProps, GetStaticPaths } from "next";
import ErrorISR from "../../components/errorISR";
import ProdutoISR from "../../components/produtoISR";
import { ParsedUrlQuery } from "querystring";

interface IParams extends ParsedUrlQuery {
  produtos: string;
}
interface props {
  produto: any;
  error: boolean;
}
const produtos = ({ produto, error }: props) => {
  return (
    <main>
      {error && <ErrorISR />}
      {error === false && <ProdutoISR produto={produto} />};
    </main>
  );
};

export default produtos;

export const buscaId = async (id: string) => {
  const req = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR`);
  const response = await req.json();
  return response;
};

export const getStaticProps: GetStaticProps = async (context) => {
  let error = false;
  const { produtos } = context.params as IParams;
  const infos: any = await buscaId(produtos);

  if (infos.success === false) {
    error = true;
  }
  return {
    props: { produto: infos, error: error },
    revalidate: 15000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { produtos: "610150" } }],
    fallback: true,
  };
};

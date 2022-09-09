import { GetStaticProps, GetStaticPaths } from "next";
interface props {
  produto: any;
  error: boolean;
}
const produtos = ({ produto, error }: props) => {
  console.log(produto, error);

  return (
    <>
      {error && <p>No Results Found</p>}
      {error === false && <div>{"teste"}</div>};
    </>
  );
};

export default produtos;

export const buscaId = async (id: string) => {
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=617375c16cb7cbacc59f9c2b6102e4e4`
  );
  const response = await req.json();
  return response;
};

export const getStaticProps: GetStaticProps = async (context) => {
  let error = false;
  const infos: any = await buscaId(context.params.produtos);

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
/*610150*/

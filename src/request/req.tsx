const key = "api_key=617375c16cb7cbacc59f9c2b6102e4e4";
const tmdb = "https://api.themoviedb.org/3/";

const buscaApi = async (opcao: string) => {
  const req = await fetch(`${tmdb}${opcao}${key}&language=pt-BR&page=1`);

  const response = await req.json();

  return response;
};

const listafilmes = async () => {
  return [
    {
      titulo: "Originais Netflix",
      lista: await buscaApi("discover/tv?with_network=213&"),
    },
    {
      titulo: "Bem avaliados",
      lista: await buscaApi("movie/top_rated?"),
    },
    {
      titulo: "Horror",
      lista: await buscaApi(
        "discover/movie?sort_by=popularity.desc&page=1&with_genres=27&"
      ),
    },
    {
      titulo: "Em Alta",
      lista: await buscaApi("movie/popular?"),
    },
    {
      titulo: "Musical",
      lista: await buscaApi(
        "discover/movie?sort_by=popularity.desc&page=1&with_genres=10402&"
      ),
    },
    {
      titulo: "FicÃ§Ã£o CientÃ­fica",
      lista: await buscaApi(
        "discover/movie?sort_by=release_date.descc&page=1&with_genres=878&"
      ),
    },
    {
      titulo: "AÃ§Ã£o",
      lista: await buscaApi(
        "discover/movie?sort_by=release_date.descc&page=1&with_genres=28&"
      ),
    },
    {
      titulo: "DocumentÃ¡rios",
      lista: await buscaApi(
        "discover/movie?sort_by=popularity.desc&page=1&with_genres=99&"
      ),
    },
    {
      titulo: "Drama",
      lista: await buscaApi(
        "discover/movie?sort_by=popularity.desc&page=1&with_genres=18&"
      ),
    },

    {
      titulo: "Romance",
      lista: await buscaApi(
        "discover/movie?sort_by=popularity.desc&page=1&with_genres=10749&"
      ),
    },
  ];
};
export { buscaApi, listafilmes };

import { FilmesShort } from "../types/index";

export const requestFilmes = async (api: string) => {
  const filmes: FilmesShort[] = [];
  let object: FilmesShort;
  const req = await fetch(api);
  const response = await req.json();
  response.results.slice(0, 8).map((items: any) => {
    object = {
      title: items.title,
      id: items.id,
      poster_path: items.poster_path,
    };
    filmes.push(object);
  });
  return filmes;
};

export const filmes = async () => {
  const newP: FilmesShort[] = await requestFilmes(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );
  const feature: FilmesShort[] = await requestFilmes(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );
  const best: FilmesShort[] = await requestFilmes(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );

  return {
    newP: newP,
    feature: feature,
    best: best,
  };
};

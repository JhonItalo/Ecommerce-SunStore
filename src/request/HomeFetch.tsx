import { FilmesShort } from "../types/index";
import { URL, QUERYS } from "../utils/Constants";

export const requestFilmes = async (api: string) => {
  const filmes: FilmesShort[] = [];
  let itemFilme: FilmesShort;
  const req = await fetch(api);
  const response = await req.json();
  response.results.slice(0, 8).map((items: any) => {
    itemFilme = {
      title: items.title,
      id: items.id,
      poster_path: items.poster_path,
    };
    filmes.push(itemFilme);
  });
  return filmes;
};

export const filmes = async () => {
  const newP: FilmesShort[] = await requestFilmes(`${URL}movie/popular${QUERYS}`);
  const feature: FilmesShort[] = await requestFilmes(`${URL}movie/top_rated${QUERYS}`);
  const best: FilmesShort[] = await requestFilmes(`${URL}movie/upcoming${QUERYS}`);

  return {
    newP: newP,
    feature: feature,
    best: best,
  };
};

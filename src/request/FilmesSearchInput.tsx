import { FilmesSmall } from "../types/";
import { removeDuplicateFilmesSmall } from "../utils/Fuctions";

const request = async (url: string) => {
  let item: FilmesSmall;
  const itemRequestFilmes: FilmesSmall[] = [];
  const req = await fetch(url);
  const response = await req.json();
  for (let i = 0; i < response.results.length; i++) {
    item = { title: response.results[i].title, id: response.results[i].id };
    itemRequestFilmes.push(item);
  }
  return itemRequestFilmes;
};

export const concatAllItensFilmes = async () => {
  const popularPage1 = await request(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );
  const popularPage2 = await request(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=2"
  );
  const popularPage3 = await request(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=3"
  );
  const bestPage1 = await request(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );

  const bestPage2 = await request(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=2"
  );
  const bestPage3 = await request(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=3"
  );
  const newPage = await request(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );
  const small: FilmesSmall[] = popularPage1.concat(popularPage2, popularPage3, bestPage1, bestPage2, bestPage3, newPage);
  const allFilmes = removeDuplicateFilmesSmall({ small });
  return allFilmes;
};

export const RequestFilmesSearch = async (filmes: FilmesSmall[], setfilmes: (filmes: FilmesSmall[]) => void) => {
  if (filmes.length > 0) {
    return;
  }
  const result = await concatAllItensFilmes();
  setfilmes(result);
  return;
};

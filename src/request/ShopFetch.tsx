interface FilmesMedian {
  title: string[];
  id: number[];
  poster_path: string[];
  vote_average: number[];
}
const request = async (url: string) => {
  let item: FilmesMedian;
  const itemRequestFilmes: FilmesMedian[] = [];
  const req = await fetch(url);
  const response = await req.json();
  for (let i = 0; i < response.results.length; i++) {
    item = {
      title: response.results[i].title,
      id: response.results[i].id,
      poster_path: response.results[i].poster_path,
      vote_average: response.results[i].vote_average,
    };
    itemRequestFilmes.push(item);
  }
  return itemRequestFilmes;
};
export const FetchFilmesCategory = async () => {
  const chair = await request(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );
  const bed = await request(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=2"
  );
  const workDesk = await request(
    "https://api.themoviedb.org/3/movie/popular?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=3"
  );
  const table = await request(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );
  const sofaSet = await request(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=617375c16cb7cbacc59f9c2b6102e4e4&language=pt-BR&page=1"
  );
  return {
    chair: chair,
    bed: bed,
    workDesk: workDesk,
    table: table,
    sofaSet: sofaSet,
  };
};

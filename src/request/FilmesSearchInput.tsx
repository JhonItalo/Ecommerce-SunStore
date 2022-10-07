interface response {
  title: string[];
  id: number[];
}
const request = async (url: string) => {
  let item: response;
  const itemRequestFilmes: response[] = [];
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
  const allFilmes: response[] = popularPage1.concat(
    popularPage2,
    popularPage3,
    bestPage1,
    bestPage2,
    bestPage3,
    newPage
  );
  for (let h = 0; h < allFilmes.length; h++) {
    for (let l = h + 1; l < allFilmes.length; l++) {
      if (allFilmes[h].title === allFilmes[l].title) {
        allFilmes.splice(l, 1);
        l = l - 1;
      }
    }
  }
  return allFilmes;
};

export const RequestFilmesSearch = async (
  filmes: any,
  setfilmes: (filmes: any) => void
) => {
  if (filmes != null) {
    return;
  }
  const result = await concatAllItensFilmes();

  setfilmes(result);
  return;
};


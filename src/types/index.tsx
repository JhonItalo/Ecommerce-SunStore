export interface FilmesSmall {
  title: string;
  id: number;
}

export interface FilmesShort {
  title: string;
  id: number;
  poster_path: string;
}
export interface FilmesMedian {
  title: string[];
  id: number[];
  poster_path: string[];
  vote_average: number[];
}

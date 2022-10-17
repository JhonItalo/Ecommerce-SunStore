import { FilmesMedian, FilmesSmall } from "../types";

export const removeDuplicateFilmesSmall = (small: FilmesSmall[]) => {
  if (small.length > 0) {
    for (let h = 0; h < small.length; h++) {
      for (let l = h + 1; l < small.length; l++) {
        if (small[h].title === small[l].title) {
          small.splice(l, 1);
          l = l - 1;
        }
      }
    }
  }
  return small;
};
export const removeDuplicateFilmesMedian = (median: FilmesMedian[]) => {
  if (median.length > 0) {
    for (let h = 0; h < median.length; h++) {
      for (let l = h + 1; l < median.length; l++) {
        if (median[h].title === median[l].title) {
          median.splice(l, 1);
          l = l - 1;
        }
      }
    }
  }
  return median;
};

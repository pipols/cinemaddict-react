import { getCardsByFilter } from "./utils/filter";
import { getCardsBySortType } from "./utils/sort";
import { createSelector } from "reselect";

export const getFilms = (state) => state.films;
export const getOpenedFilm = (state) => state.openedFilm;
export const getActiveSort = (state) => state.activeSortType;
export const getActiveFilter = (state) => state.activeFilterType;

export const getFilteredFilmsSelector = createSelector(
  getFilms,
  getActiveSort,
  getActiveFilter,
  (films, activeSort, activeFilter) => films
);

// const filteredFilms = getCardsByFilter(films, activeFilter);
//     console.log(getFilms, `getFilms`);
//     console.log(films, `films`);
//     console.log(activeSort, `activeSort`);
//     return getCardsBySortType(filteredFilms, activeSort);

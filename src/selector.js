import { getCardsByFilter } from "./utils/filter";
import { getCardsBySortType } from "./utils/sort";
import { createSelector } from "reselect";

export const getFilms = (state) => state.films;
export const getOpenedFilm = (state) => state.openedFilm;
export const getActiveSort = (state) => state.activeSortType;
export const getActiveFilter = (state) => state.activeFilterType;
export const getFilmStack = (state) => state.filmStack;

export const getFilteredFilmsSelector = createSelector(
  getFilms,
  getActiveSort,
  getActiveFilter,
  getFilmStack,
  (films, activeSort, activeFilter, filmStack) => {
    const filteredFilms = getCardsByFilter(films, activeFilter);
    const sortedFilms = getCardsBySortType(filteredFilms, activeSort);
    return sortedFilms.slice(0, filmStack);
  }
);

export const isShowMoreSelector = createSelector(
  getFilms,
  getFilmStack,
  (films, filmsStack) => films.length > filmsStack
);

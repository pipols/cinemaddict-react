import { getCardsByFilter } from "./utils/filter";
import { getCardsBySortType } from "./utils/sort";
import { getProfileRating } from "./utils/common";
import { createSelector } from "reselect";
import { FilmsListTitle, SortType, CardCount, FilterType } from "./const";

export const getFilms = (state) => state.films;
export const getOpenedFilmId = (state) => state.openedFilmId;
export const getActiveSort = (state) => state.activeSortType;
export const getActiveFilter = (state) => state.activeFilterType;
export const getFilmStack = (state) => state.filmStack;
export const getComments = (state) => state.comments;

export const getOpenedFilm = createSelector(
  getFilms,
  getOpenedFilmId,
  (films, openedFilmId) => films.find((film) => film.id === openedFilmId)
);

export const getExtraFilms = (state, props) => {
  switch (props.title) {
    case FilmsListTitle.TOP_RATED: {
      const films = getCardsBySortType(state.films, SortType.RATING);
      return films.slice(0, CardCount.RATED_FILM);
    }
    case FilmsListTitle.MOST_COMMENTED: {
      const films = getCardsBySortType(state.films, SortType.COMMENT);
      return films.slice(0, CardCount.MOST_COMMENTED_FILM);
    }
  }

  return state.films;
};

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

export const getRatingSelector = createSelector(getFilms, (films) => {
  const filteredFilms = getCardsByFilter(films, FilterType.HISTORY);
  const countFilms = filteredFilms.length;
  return getProfileRating(countFilms);
});

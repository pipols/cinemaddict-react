import { extend } from "./utils/common";
import { filmsAdapter, filmAdapter, filmToRaw } from "./utils/adapter";
import { SortType, FilterType, CardCount } from "./const";

const initialState = {
  films: [],
  openedFilmId: null,
  activeSortType: SortType.DEFAULT,
  activeFilterType: FilterType.ALL,
  filmStack: CardCount.MAIN_FILM,
  comments: [],
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  SET_OPENED_FILM: `SET_OPENED_FILM`,
  REMOVE_OPENED_FILM: `REMOVE_OPENED_FILM`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_FILTER_TYPE: `SET_FILTER_TYPE`,
  ADD_FILM_STACK: `ADD_FILM_STACK`,
  RESET_FILM_STACK: `RESET_FILM_STACK`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  setOpenedFilm: (film) => ({
    type: ActionType.SET_OPENED_FILM,
    payload: film.id,
  }),
  removeOpenedFilm: () => ({
    type: ActionType.REMOVE_OPENED_FILM,
    payload: null,
  }),
  setSortType: (sortType) => ({
    type: ActionType.SET_SORT_TYPE,
    payload: sortType,
  }),
  setFilterType: (filterType) => ({
    type: ActionType.SET_FILTER_TYPE,
    payload: filterType,
  }),
  addFilmStack: () => ({
    type: ActionType.ADD_FILM_STACK,
    payload: CardCount.BY_BUTTON,
  }),
  resetFilmStack: () => ({
    type: ActionType.RESET_FILM_STACK,
    payload: CardCount.MAIN_FILM,
  }),
  loadComment: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.SET_OPENED_FILM:
      return extend(state, {
        openedFilmId: action.payload,
      });
    case ActionType.REMOVE_OPENED_FILM:
      return extend(state, {
        openedFilmId: action.payload,
      });
    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        activeSortType: action.payload,
      });
    case ActionType.SET_FILTER_TYPE:
      return extend(state, {
        activeFilterType: action.payload,
      });
    case ActionType.ADD_FILM_STACK:
      return extend(state, {
        filmStack: state.filmStack + action.payload,
      });
    case ActionType.RESET_FILM_STACK:
      return extend(state, {
        filmStack: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
  }

  return state;
};

export const operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/movies`).then(({ data }) => {
      const films = filmsAdapter(data);
      dispatch(ActionCreator.loadFilms(films));
    });
  },
  updateFilm: (film) => (dispatch, getState, api) => {
    const rawFilm = filmToRaw(film);
    const films = getState().films;
    const index = films.findIndex((it) => it.id === rawFilm.id);
    if (index === -1) {
      return false;
    }

    return api.put(`/movies/${film.id}`, rawFilm).then(({ data }) => {
      const film = filmAdapter(data);
      const newFilms = [].concat(
        films.slice(0, index),
        film,
        films.slice(index + 1)
      );
      dispatch(ActionCreator.loadFilms(newFilms));
    });
  },
  loadComment: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`).then(({ data }) => {
      dispatch(ActionCreator.loadComment(data));
    });
  },
};

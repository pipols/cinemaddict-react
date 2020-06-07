import { extend } from "./utils/common";
import { filmsAdapter } from "./utils/adapter";
import { SortType, FilterType } from "./const";

const initialState = {
  films: [],
  openedFilm: null,
  activeSortType: SortType.DEFAULT,
  activeFilterType: FilterType.ALL,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  SET_OPENED_FILM: `SET_OPENED_FILM`,
  REMOVE_OPENED_FILM: `REMOVE_OPENED_FILM`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_FILTER_TYPE: `SET_FILTER_TYPE`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  setOpenedFilm: (film) => ({
    type: ActionType.SET_OPENED_FILM,
    payload: film,
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
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.SET_OPENED_FILM:
      return extend(state, {
        openedFilm: action.payload,
      });
    case ActionType.REMOVE_OPENED_FILM:
      return extend(state, {
        openedFilm: action.payload,
      });
    case ActionType.SET_SORT_TYPE:
      return extend(state, {
        activeSortType: action.payload,
      });
    case ActionType.SET_FILTER_TYPE:
      return extend(state, {
        activeFilterType: action.payload,
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
};

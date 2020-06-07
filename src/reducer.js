import { extend } from "./utils/common";
import { filmsAdapter } from "./utils/adapter";

const initialState = {
  films: [],
  openedFilm: null,
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  SET_OPENED_FILM: `SET_OPENED_FILM`,
  REMOVE_OPENED_FILM: `REMOVE_OPENED_FILM`,
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

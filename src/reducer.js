import { extend, replaceFilmToFilmsList } from "./utils/common";
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
  SET_OPENED_FILM_ID: `SET_OPENED_FILM_ID`,
  REMOVE_OPENED_FILM_ID: `REMOVE_OPENED_FILM_ID`,
  SET_SORT_TYPE: `SET_SORT_TYPE`,
  SET_FILTER_TYPE: `SET_FILTER_TYPE`,
  ADD_FILM_STACK: `ADD_FILM_STACK`,
  RESET_FILM_STACK: `RESET_FILM_STACK`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  DELETE_COMMENT: `DELETE_COMMENT`,
  UPDATE_FILMS: `UPDATE_FILMS`,
};

export const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  updateFilms: (films) => ({
    type: ActionType.UPDATE_FILMS,
    payload: films,
  }),
  setOpenedFilmId: (id) => ({
    type: ActionType.SET_OPENED_FILM_ID,
    payload: id,
  }),
  removeOpenedFilmId: () => ({
    type: ActionType.REMOVE_OPENED_FILM_ID,
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
  deleteComment: (comment, filmId) => ({
    type: ActionType.DELETE_COMMENT,
    payload: { comment, filmId },
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.UPDATE_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.SET_OPENED_FILM_ID:
      return extend(state, {
        openedFilmId: action.payload,
      });
    case ActionType.REMOVE_OPENED_FILM_ID:
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
    case ActionType.LOAD_COMMENTS: {
      return extend(state, {
        comments: action.payload,
      });
    }
    case ActionType.DELETE_COMMENT: {
      return extend(state, {
        comments: state.comments.filter(
          (comment) => comment !== action.payload
        ),
      });
    }
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
      const updatedFilm = filmAdapter(data); // extend comments
      updatedFilm.comments = film.comments;
      const updatedFilms = replaceFilmToFilmsList(films, updatedFilm);

      // dispatch(ActionCreator.updateFilms(updatedFilms));
      dispatch(ActionCreator.loadFilms(updatedFilms));
    });
  },
  loadComment: (filmId) => (dispatch, getState, api) => {
    const films = getState().films;
    const index = films.findIndex((it) => it.id === filmId);

    if (index === -1) {
      return false;
    }

    return api.get(`/comments/${filmId}`).then(({ data }) => {
      films[index].comments = data;
      dispatch(ActionCreator.updateFilms(films));
    });
  },
  postComment: (comment) => (dispatch, getState, api) => {
    const filmId = getState().openedFilmId;
    return api.post(`/comments/${filmId}`, comment).then(({ data }) => {
      const { comments, movie } = data;
      const film = filmAdapter(movie);
      const films = getState().films;
      film.comments = comments;

      const updatedFilms = replaceFilmToFilmsList(films, film);
      dispatch(ActionCreator.updateFilms(updatedFilms));
    });
  },
  deleteComment: (comment) => (dispatch, getState, api) => {
    // merge delete comment

    return api.delete(`comments/${comment.id}`).then(() => {
      const films = getState().films;
      const film = films.find((film) => film.id === getState().openedFilmId);
      const newComments = film.comments.filter(
        (itComment) => itComment.id !== comment.id
      );
      film.comments = newComments;
      const newCommentsId = film.commentsId.filter((id) => id !== comment.id);
      film.commentsId = newCommentsId;
      const updatedFilms = replaceFilmToFilmsList(films, film);
      dispatch(ActionCreator.updateFilms(updatedFilms));
    });
  },
};

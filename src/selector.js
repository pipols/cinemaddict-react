import { getCardsByFilter } from "./utils/filter";
import { getCardsBySortType } from "./utils/sort";

export const getFilms = (state) => state.films;
export const getOpenedFilm = (state) => state.openedFilm;

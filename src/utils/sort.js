import { SortType } from "../const";

export const getCardsBySortType = (cards, sortType) => {
  switch (sortType) {
    case SortType.DEFAULT:
      return cards;
    case SortType.DATE:
      return [...cards].sort((a, b) => b.releaseDate - a.releaseDate);
    case SortType.RATING:
      return [...cards].sort((a, b) => b.rating - a.rating);
    case SortType.COMMENT:
      return [...cards].sort(
        (a, b) => b.commentsId.length - a.commentsId.length
      );
  }
  return cards;
};

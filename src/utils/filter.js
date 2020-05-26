import {FilterType} from "../const";

export const getCardsByFilter = (cards, filter) => {
  switch (filter) {
    case FilterType.ALL:
      return cards;
    case FilterType.WATCHLIST:
      return cards.filter((card) => card.watchlist);
    case FilterType.HISTORY:
      return cards.filter((card) => card.watched);
    case FilterType.FAVORITES:
      return cards.filter((card) => card.favorite);
  }

  return cards;
};

import {FilterType} from "../const";

export const getCardsByFilter = (cards, filter) => {
  switch (filter) {
    case FilterType.ALL:
      return cards;
    case FilterType.WATCHLIST:
      return cards.filter((card) => card.user_details.watchlist);
    case FilterType.HISTORY:
      return cards.filter((card) => card.user_details.already_watched);
    case FilterType.FAVORITES:
      return cards.filter((card) => card.user_details.favorite);
  }

  return cards;
};

import React from "react";
import {getCardsByFilter} from "../../utils/filter";
import {FilterType} from "../../const";

// eslint-disable-next-line react/prop-types
const MainNavigation = ({cards}) => {
  return (
    <nav className="main-navigation">
      <div className="main-navigation__items">
        <a href="#all" className="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" className="main-navigation__item">Watchlist <span
          className="main-navigation__item-count">{getCardsByFilter(cards, FilterType.WATCHLIST).length}</span></a>
        <a href="#history" className="main-navigation__item">History <span
          className="main-navigation__item-count">{getCardsByFilter(cards, FilterType.HISTORY).length}</span></a>
        <a href="#favorites" className="main-navigation__item">Favorites <span
          className="main-navigation__item-count">{getCardsByFilter(cards, FilterType.FAVORITES).length}</span></a>
      </div>
      <a href="#stats" className="main-navigation__additional">Stats</a>
    </nav>
  );
};

export default MainNavigation;
